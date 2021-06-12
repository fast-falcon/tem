# -*- coding: utf-8 -*-
import warnings
from .backends import backend
from ecaptcha.conf import settings
# from ecaptcha.models import ECaptchaStore
import django
from django.core.exceptions import ImproperlyConfigured
from django.urls import reverse, NoReverseMatch
from django.forms import ValidationError
from django.forms.fields import CharField, MultiValueField
from django.forms.widgets import TextInput, MultiWidget, HiddenInput
from django.utils.translation import ugettext_lazy
from django.utils import timezone
from django.template.loader import render_to_string
from django.utils.safestring import mark_safe
from six import u


class ECaptchaAnswerInput(TextInput):
    """Text input for ecaptcha answer."""

    # Use *args and **kwargs because signature changed in Django 1.11
    def build_attrs(self, *args, **kwargs):
        """Disable automatic corrections and completions."""
        attrs = super(ECaptchaAnswerInput, self).build_attrs(*args, **kwargs)
        attrs['autocapitalize'] = 'off'
        attrs['autocomplete'] = 'off'
        attrs['autocorrect'] = 'off'
        attrs['spellcheck'] = 'false'
        return attrs


class BaseECaptchaTextInput(MultiWidget):
    """
    Base class for ECaptcha widgets
    """
    def __init__(self, attrs=None):
        widgets = (
            HiddenInput(attrs),
            ECaptchaAnswerInput(attrs),
        )
        super(BaseECaptchaTextInput, self).__init__(widgets, attrs)

    def decompress(self, value):
        if value:
            return value.split(',')
        return [None, None]

    def fetch_ecaptcha_store(self, name, value, attrs=None, generator=None):
        """
        Fetches a new ECaptchaStore
        This has to be called inside render
        """
        try:
            reverse('ecaptcha-image', args=('dummy',))
        except NoReverseMatch:
            raise ImproperlyConfigured('Make sure you\'ve included ecaptcha.urls as explained in the INSTALLATION section on http://readthedocs.org/docs/django-simple-ecaptcha/en/latest/usage.html#installation')

        # if settings.CAPTCHA_GET_FROM_POOL:
        #     key = ECaptchaStore.pick()
        # else:
        #     key = ECaptchaStore.generate_key(generator)
        challenge, response = settings.get_challenge(generator)()
        store = backend.create(challenge=challenge, response=response)
        key = store.hashkey
        # these can be used by format_output and render
        self._value = [key, u('')]
        self._key = key
        self.key = key
        self.id_ = self.build_attrs(attrs).get('id', None)

    def id_for_label(self, id_):
        if id_:
            return id_ + '_1'
        return id_

    def image_url(self):
        return reverse('ecaptcha-image', kwargs={'key': self._key})

    def audio_url(self):
        return reverse('ecaptcha-audio', kwargs={'key': self._key}) if settings.CAPTCHA_FLITE_PATH else None

    def refresh_url(self):
        return reverse('ecaptcha-refresh')


class ECaptchaTextInput(BaseECaptchaTextInput):

    template_name = 'ecaptcha/widgets/ecaptcha.html'

    def __init__(self, attrs=None, field_template=None, id_prefix=None, generator=None, output_format=None):
        self.id_prefix = id_prefix
        self.generator = generator
        if field_template is not None:
            msg = ("ECaptchaTextInput's field_template argument is deprecated in favor of widget's template_name.")
            warnings.warn(msg, DeprecationWarning)
        self.field_template = field_template or settings.CAPTCHA_FIELD_TEMPLATE
        if output_format is not None:
            msg = ("ECaptchaTextInput's output_format argument is deprecated in favor of widget's template_name.")
            warnings.warn(msg, DeprecationWarning)
        self.output_format = output_format or settings.CAPTCHA_OUTPUT_FORMAT
        # Fallback to custom rendering in Django < 1.11
        if not hasattr(self, '_render') and self.field_template is None and self.output_format is None:
            self.field_template = 'ecaptcha/field.html'

        if self.output_format:
            for key in ('image', 'hidden_field', 'text_field'):
                if '%%(%s)s' % key not in self.output_format:
                    raise ImproperlyConfigured('All of %s must be present in your CAPTCHA_OUTPUT_FORMAT setting. Could not find %s' % (
                        ', '.join(['%%(%s)s' % k for k in ('image', 'hidden_field', 'text_field')]),
                        '%%(%s)s' % key
                    ))

        super(ECaptchaTextInput, self).__init__(attrs)

    def build_attrs(self, *args, **kwargs):
        ret = super(ECaptchaTextInput, self).build_attrs(*args, **kwargs)
        if self.id_prefix and 'id' in ret:
            ret['id'] = '%s_%s' % (self.id_prefix, ret['id'])
        return ret

    def id_for_label(self, id_):
        ret = super(ECaptchaTextInput, self).id_for_label(id_)
        if self.id_prefix and 'id' in ret:
            ret = '%s_%s' % (self.id_prefix, ret)
        return ret

    def get_context(self, name, value, attrs):
        """Add ecaptcha specific variables to context."""
        context = super(ECaptchaTextInput, self).get_context(name, value, attrs)
        context['image'] = self.image_url()
        context['audio'] = self.audio_url()
        return context

    def format_output(self, rendered_widgets):
        # hidden_field, text_field = rendered_widgets
        if self.output_format:
            ret = self.output_format % {
                'image': self.image_and_audio,
                'hidden_field': self.hidden_field,
                'text_field': self.text_field
            }
            return ret

        elif self.field_template:
            context = {
                'image': mark_safe(self.image_and_audio),
                'hidden_field': mark_safe(self.hidden_field),
                'text_field': mark_safe(self.text_field)
            }
            return render_to_string(self.field_template, context)

    def _direct_render(self, name, attrs):
        """Render the widget the old way - using field_template or output_format."""
        context = {
            'image': self.image_url(),
            'name': name,
            'key': self._key,
            'id': '%s_%s' % (self.id_prefix, attrs.get('id')) if self.id_prefix else attrs.get('id'),
            'audio': self.audio_url(),
        }
        self.image_and_audio = render_to_string(settings.CAPTCHA_IMAGE_TEMPLATE, context)
        self.hidden_field = render_to_string(settings.CAPTCHA_HIDDEN_FIELD_TEMPLATE, context)
        self.text_field = render_to_string(settings.CAPTCHA_TEXT_FIELD_TEMPLATE, context)
        return self.format_output(None)

    def render(self, name, value, attrs=None, renderer=None):
        self.fetch_ecaptcha_store(name, value, attrs, self.generator)

        if self.field_template or self.output_format:
            return self._direct_render(name, attrs)

        extra_kwargs = {}
        if django.VERSION >= (1, 11):
            # https://docs.djangoproject.com/en/1.11/ref/forms/widgets/#django.forms.Widget.render
            extra_kwargs['renderer'] = renderer

        return super(ECaptchaTextInput, self).render(name, self._value, attrs=attrs, **extra_kwargs)


class ECaptchaField(MultiValueField):
    def __init__(self, *args, **kwargs):
        fields = (
            CharField(show_hidden_initial=True),
            CharField(),
        )
        if 'error_messages' not in kwargs or 'invalid' not in kwargs.get('error_messages'):
            if 'error_messages' not in kwargs:
                kwargs['error_messages'] = {}
            kwargs['error_messages'].update({'invalid': ugettext_lazy('Invalid CAPTCHA')})

        kwargs['widget'] = kwargs.pop('widget', ECaptchaTextInput(
            output_format=kwargs.pop('output_format', None),
            id_prefix=kwargs.pop('id_prefix', None),
            generator=kwargs.pop('generator', None)
        ))

        super(ECaptchaField, self).__init__(fields, *args, **kwargs)

    def compress(self, data_list):
        if data_list:
            return ','.join(data_list)
        return None

    def clean(self, value):
        super(ECaptchaField, self).clean(value)
        response, value[1] = (value[1] or '').strip().lower(), ''
        if not settings.CAPTCHA_GET_FROM_POOL:
            # ECaptchaStore.remove_expired()
            backend.remove_expired()
        if settings.CAPTCHA_TEST_MODE and response.lower() == 'passed':
            # automatically pass the test
            try:
                # try to delete the ecaptcha based on its hash
                # ECaptchaStore.objects.get(hashkey=value[0]).delete()
                backend.check(response=response, hashkey=value[0])
            # except ECaptchaStore.DoesNotExist:
            except Exception:
                # ignore errors
                pass
        elif not self.required and not response:
            pass
        else:
            try:
                # ECaptchaStore.objects.get(response=response, hashkey=value[0], expiration__gt=timezone.now()).delete()
                backend.check(response=response, hashkey=value[0])
            # except ECaptchaStore.DoesNotExist:
            except Exception:
                raise ValidationError(getattr(self, 'error_messages', {}).get('invalid', ugettext_lazy('Invalid CAPTCHA')))
        return value
