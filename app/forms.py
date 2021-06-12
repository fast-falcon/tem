from django import forms
from django.forms.models import inlineformset_factory, BaseInlineFormSet

from app.models import QuickList, QuickListItems, Items
from ecaptcha.fields import ECaptchaField
from utils.html_tools import get_formset_html_content


class LoginForm(forms.Form):
    phone_number = forms.CharField(label="phone_number", max_length=11)
    password = forms.CharField(label="password", widget=forms.PasswordInput)


class QuickListForm(forms.ModelForm):
    captcha = ECaptchaField(label="کد امنیتی")
    # extra_id = forms.ModelMultipleChoiceField(queryset=Items.objects.all())
    class Meta:

        model = QuickList
        exclude = ("date","track_code")

    def __init__(self, *args, **kwargs):
        super(QuickListForm, self).__init__(*args, **kwargs)
        print(self)
        self.extra_field_formset = ExtraFieldFormset(*args,prefix='unit_formset', instance=self.instance)
        self.extra_formset_html = get_formset_html_content(self.extra_field_formset, "فیلدهای اضافه")

    def save(self, commit=True):
        instance = super(QuickListForm, self).save()
        for extra in self.extra_field_formset:
            if extra.is_valid():
                if extra.instance.name:
                    extra.instance.quick_list = instance
                    extra.save()
        return instance

class ExtraFieldBaseFormset(BaseInlineFormSet):

    def get_queryset(self):
        self._queryset = super(ExtraFieldBaseFormset, self).get_queryset()
        self._queryset = self.queryset.order_by('name')
        return self._queryset


class ExtraFieldForm(forms.ModelForm):
    class Meta:
        model = QuickListItems
        exclude = ('quick_list',)


ExtraFieldFormset = inlineformset_factory(QuickList, QuickListItems, form=ExtraFieldForm, formset=ExtraFieldBaseFormset,
                                          can_delete=True, extra=1)
