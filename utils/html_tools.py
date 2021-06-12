from django.template.loader import render_to_string


def get_formset_html_content(formset, title='', skip_label=False, td_numbers=1, template=None, float_right=True):
    if not template:
        template = 'base/form/formset.html'
    if skip_label:
        return render_to_string(template,

                                    {
                                        'formset': formset,
                                        'skip_label': True,
                                        'title': title,
                                        'float_right': float_right,
                                        'td_width': 90/td_numbers
                                    }
                                )
    else:
        return render_to_string(template,
                                {
                                    'formset': formset,
                                    'title': title,
                                    'float_right': float_right,
                                    'td_width': 90/td_numbers
                                })
