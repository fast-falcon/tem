from django import template
from django.utils.safestring import mark_safe

register = template.Library()


@register.filter
def filter_item(items, key):
    try:
        return items[key]
    except:
        return []


@register.filter
def has_sub_menu(items):
    if isinstance(items, dict):
        return True
    return False


@register.filter
def get_item_id(item):
    return item.split("<id>")[0]


@register.filter
def get_item_name(item):
    return item.split("<id>")[-1]


@register.simple_tag
def create_menu(items):
    parent_template = '<div style="width:75px"><span id="%s">%s&nbsp</span>' + \
                      '<i class="down_sign fas fa-sort-down"></i>' + \
                      '<i class="up_sign fas fa-sort-up"></i><div class="list_items row" style="margin=%spx">'
    close_parent_template = "</div></div>"

    mid_template = '<div class="rounded-pill" id="%s">%s'
    close_mid_template = "</div>"

    child_template = '<div class="items shadow row ">'

    child_start = """<div class="col-2 ">"""
    child_content = """<div id="%s"><span>%s</span></div>"""
    child_end = "</div>"

    close_child_template = "</div>"

    def is_mid(value, local_items):
        if isinstance(local_items[value], dict):
            return True
        return False

    def is_exist(value, local_items):
        value = local_items.get(value, None)
        if value:
            return True
        return False

    def create_child(values):
        base_template = ""
        base_template += child_template
        base_template += child_start
        for i, value in enumerate(values, start=1):
            if i % 10 == 0:
                base_template += child_end
                base_template += child_start
            base_template += child_content % tuple(value.split("<id>"))
        if len(values) % 10 != 0:
            base_template += child_end
        base_template += close_child_template
        return base_template

    def create_mid(values, local_items):
        base_template = ""
        for value in values:
            base_template += mid_template % tuple(value.split("<id>"))
            if is_exist(value, local_items):
                if is_mid(value, local_items):
                    base_template += create_mid(items[value], local_items[value])
                else:
                    base_template += create_child(local_items[value])
            base_template += close_mid_template
        return base_template

    def create_parent(values):
        base_template = ""
        for i, value in enumerate(values):
            id, text = value.split("<id>")
            base_template += parent_template % (id, text, "-" + str(i * 75 + 10))
            if is_exist(value, items):
                if is_mid(value, items):
                    base_template += create_mid(items[value], items[value])
                else:
                    base_template += create_child(items[value])
            base_template += close_parent_template
        return base_template

    return mark_safe(create_parent(items["main"]).strip())
