# -*- coding:utf-8 -*-
import datetime

from django import template

register = template.Library()


# general template tags are in this file


@register.filter
def get_full_name(user):
    """
    This template tag just is used for agent users in core system
    """
    if user.first_name or user.last_name:
        return "%s %s" % (user.first_name, user.last_name)
    else:
        return "%s" % user.username


# @register.simple_tag
# def get_profile_picture(user):
#     """
#     This template tag just is used for agent users in core system
#     """
#     if user:
#         try:
#             profile = user.profile
#             if profile.picture:
#                 return profile.picture.url
#             return '/static/images/base/default-user.png'
#         except Exception:
#             return '/static/images/base/default-user.png'
#     return '/static/images/base/default-user.png'


@register.filter
def get_state_for_vaja(request):
    """
    This template tag is used for Vaja user to see request state
    """
    if request:
        if request.sent_for_vaja == 1:
            return "در دست بررسی"
        elif request.sent_for_vaja == 2:
            return "تایید شده"
        elif request.sent_for_vaja == 3:
            return "رد شده"
    return "---"


@register.filter
def get_state_color_for_vaja(request):
    """
    This template tag is used for Vaja user to see request state
    """
    if request:
        if request.sent_for_vaja == 1:
            return "orange"
        elif request.sent_for_vaja == 2:
            return "green"
        elif request.sent_for_vaja == 3:
            return "red"
    return "black"


@register.filter
def get_role(user):
    if user.is_superuser:
        return "ادمین کل سیستم"
    try:
        profile = user.profile
        return "%s - %s" % (profile.get_role_name(), profile.agent)
    except Exception:
        return ""


@register.filter
def get_agent_name(user):
    """
    Returns agent name for input user, (if exist)
    """
    try:
        profile = user.profile
        return "%s" % profile.agent
    except Exception:
        return ""


@register.filter
def is_false(value):
    """
    This template tag is used for convert and check booleans
    boolean type or string type
    """
    return value is False or value == 'False'


@register.filter
def is_true(value):
    """
    This template tag is used for convert and check booleans
    boolean type or string type
    """
    return value is True


@register.filter
def is_string_true(value):
    """
    This template tag is used for check string
    """
    if value:
        return True
    return False


@register.filter
def get_field(instance, name):
    return getattr(instance, name).all()


@register.simple_tag
def get_request_picture(request):
    if request:
        if request.picture:
            return request.picture.url
    return '/static/images/base/default-user.png'


@register.simple_tag
def get_request_passport_image(request):
    if request:
        if request.passport_image:
            return request.passport_image.url
    return '/static/images/base/default-user.png'


@register.simple_tag
def get_true_base64():
    return 'data:image/ok;base64,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'


@register.simple_tag
def get_documents_url(company):
    if company:
        if company.document:
            return company.document.url
    return '/static/images/base/default-doc.png'


@register.simple_tag
def get_documents2_url(company):
    if company:
        if company.document2:
            return company.document2.url
    return '/static/images/base/default-doc.png'


@register.filter
def request_get_price(request, user):
    return request.get_price(user)


@register.filter
def get_value(instance, key):
    if hasattr(instance, key):
        data = getattr(instance, key)
        if data:
            return data
        else:
            return ""
    return ""


@register.filter
def is_data(instance, key):
    if hasattr(instance, key):
        data = getattr(instance, key)
        if 'expire_date' in key and data:
            if data.year < datetime.date.today().year:
                return False
        if data:
            return True
        else:
            return False
    return False


@register.filter
def is_dashboard_menu(name):
    if name in ['new_file', 'submit_file', 'check_edit_file', 'edit_file', 'qa_file', 'named_file',
                'extracted_file']:
        return True
    return False


@register.filter
def is_view_dashboard_menu(name):
    if name in ['dashboard', 'internet_dashboard', 'agent_dashboard', 'corp_dashboard', 'org_dashboard',
                'agency_dashboard', 'head_dashboard', 'urgent_dashboard', ]:
        return True
    return False


@register.filter
def is_vaja_dashboard_menu(name):
    if name in ['nahad-answered-internet', 'nahad-answered-agent', 'nahad-answered-company', 'nahad-answered-org',
                'nahad_answered_agency']:
        return True
    return False


@register.filter
def is_vaja_panding_dashboard_menu(name):
    if name == 'nahad_pending':
        return True
    return False


@register.filter
def err_messages(dict, key):
    try:
        return dict[key]
    except:
        return ''
