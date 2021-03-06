from django import forms
from ecaptcha.fields import ECaptchaField
from django.http import HttpResponse
from django.contrib.auth.models import User
from six import u

try:
    from django.template import engines
    __is_18 = True
except ImportError:
    from django.template import loader
    __is_18 = False


TEST_TEMPLATE = r'''
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
    <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8">
        <title>ecaptcha test</title>
    </head>
    <body>
        {% if passed %}
        <p style="color:green">Form validated</p>
        {% endif %}
        {% if form.errors %}
        {{form.errors}}
        {% endif %}

        <form action="{% url 'ecaptcha-test' %}" method="post">
            {{form.as_p}}
            <p><input type="submit" value="Continue &rarr;"></p>
        </form>
    </body>
</html>
'''


def _get_template(template_string):
    if __is_18:
        return engines['django'].from_string(template_string)
    else:
        return loader.get_template_from_string(template_string)


def _test(request, form_class):
    passed = False
    if request.POST:
        form = form_class(request.POST)
        if form.is_valid():
            passed = True
    else:
        form = form_class()

    t = _get_template(TEST_TEMPLATE)

    return HttpResponse(t.render(context=dict(passed=passed, form=form), request=request))


def test(request):
    class ECaptchaTestForm(forms.Form):
        subject = forms.CharField(max_length=100)
        sender = forms.EmailField()
        ecaptcha = ECaptchaField(help_text='asdasd')
    return _test(request, ECaptchaTestForm)


def test_model_form(request):
    class ECaptchaTestModelForm(forms.ModelForm):
        subject = forms.CharField(max_length=100)
        sender = forms.EmailField()
        ecaptcha = ECaptchaField(help_text='asdasd')

        class Meta:
            model = User
            fields = ('subject', 'sender', 'ecaptcha', )

    return _test(request, ECaptchaTestModelForm)


def test_custom_generator(request):
    class ECaptchaTestModelForm(forms.ModelForm):
        subject = forms.CharField(max_length=100)
        sender = forms.EmailField()
        ecaptcha = ECaptchaField(generator=lambda: ('111111', '111111'))

        class Meta:
            model = User
            fields = ('subject', 'sender', 'ecaptcha', )

    return _test(request, ECaptchaTestModelForm)


def test_custom_error_message(request):
    class ECaptchaTestErrorMessageForm(forms.Form):
        ecaptcha = ECaptchaField(
            help_text='asdasd',
            error_messages=dict(invalid='TEST CUSTOM ERROR MESSAGE')
        )
    return _test(request, ECaptchaTestErrorMessageForm)


def test_per_form_format(request):
    class ECaptchaTestFormatForm(forms.Form):
        ecaptcha = ECaptchaField(
            help_text='asdasd',
            error_messages=dict(invalid='TEST CUSTOM ERROR MESSAGE'),
            output_format=(
                u(
                    '%(image)s testPerFieldCustomFormatString '
                    '%(hidden_field)s %(text_field)s'
                )
            )
        )
    return _test(request, ECaptchaTestFormatForm)


def test_non_required(request):
    class ECaptchaTestForm(forms.Form):
        sender = forms.EmailField()
        subject = forms.CharField(max_length=100)
        ecaptcha = ECaptchaField(help_text='asdasd', required=False)
    return _test(request, ECaptchaTestForm)


def test_id_prefix(request):
    class ECaptchaTestForm(forms.Form):
        sender = forms.EmailField()
        subject = forms.CharField(max_length=100)
        ecaptcha1 = ECaptchaField(id_prefix="form1")
        ecaptcha2 = ECaptchaField(id_prefix="form2")
    return _test(request, ECaptchaTestForm)
