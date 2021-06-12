# -*- coding:utf-8 -*-
from django import template
from django.forms import RadioSelect
from django.forms.models import ModelMultipleChoiceField

register = template.Library()


@register.filter
def add_css(field, css):
    if field:
        if isinstance(field.field, (ModelMultipleChoiceField)):
            return field
        try:
            prev_attr = field.field.widget.attrs
            if "class" in prev_attr:
                css = "%s %s" % (prev_attr["class"], css)
        except Exception as e:
            pass
        return field.as_widget(attrs={"class": css})
    return field


@register.filter
def add_css_placeholder(field, all_attr):
    if field:
        if isinstance(field.field, ModelMultipleChoiceField):
            return field
        attrs = all_attr.split(',')
        css = attrs[0]
        text = attrs[1]
        try:
            prev_attr = field.field.widget.attrs
            if "class" in prev_attr:
                css = "%s %s" % (prev_attr["class"], css)

            if "placeholder" in prev_attr:
                text = "%s %s" % (prev_attr["placeholder"], text)
        except Exception:
            pass
        return field.as_widget(attrs={"placeholder": text, "class": css})
    return field


@register.filter
def is_radio_select(field):
    if isinstance(field.field.widget, RadioSelect):
        return True
    return False
