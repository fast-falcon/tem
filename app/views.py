from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.urls import reverse

from . import models
from .forms import LoginForm, QuickListForm
from .models import Items


def test(request):
    items = {"items": {}}
    parents = Items.objects.all().values("parent_id", "parent__name").distinct()
    main_parents = Items.objects.filter(parent__isnull=True).only("id").values_list("id", flat=True)
    for parent in parents:
        parent_items = create_key_value(Items.objects.filter(parent__id=parent['parent_id']).values("id", "name"),
                                        "id", "name")
        values = list(parent_items.values())
        if parent["parent_id"] is None:
            items["items"]["main"] = values
        else:
            if parent["parent_id"] in main_parents:
                items["items"][str(parent["parent_id"]) + "<id>" + parent["parent__name"]] = values
            else:
                parent_list = find_main_parent_item(main_parents, parent["parent_id"])
                items["items"] = list_replace(items["items"],
                                              str(parent_list[0].id) + "<id>" + parent_list[0].name,
                                              convert_parent_list_to_dict(items["items"],
                                                                          parent_list,
                                                                          values)[
                                                  str(parent_list[0].id) + "<id>" + parent_list[0].name])
    last_menu = {}
    for i, item in enumerate(items["items"]["main"]):
        if item in items["items"].keys():
            last_menu[item] = items["items"][item]
        else:
            last_menu[item] = item
    form = QuickListForm()
    if request.method == "GET":
        return render(request, 'app/quick_list_new.html', {'items':last_menu, "form":form})
    else:
        form = QuickListForm(request.POST)
        if form.is_valid():
            instance = form.save()
            return HttpResponseRedirect(reverse("app:kala_quick_list", kwargs={"track_code": instance.track_code}))
    return render(request, 'app/quick_list_new.html', {'items': last_menu, "form": form})

def home(request):
    return render(request, 'app/home.html')


def reports(request):
    return render(request, 'app/reports.html')


def send_report(request):
    title = request.POST['report_title']
    text = request.POST['report_text']
    title_error = ''
    text_error = ''
    message = ''
    report_title = ''
    report_text = ''
    flag = True

    if not title.strip():
        title_error = 'لطفا بخش موضوع را خالی نگذارید.'
        flag = False
    else:
        report_title = title

    if not text.strip():
        text_error = 'لطفا بخش متن گزارش را خالی نگذارید.'
        flag = False
    else:
        report_text = text

    if flag:
        new_report = models.Report(report_title=title, report_txt=text)
        new_report.save()
        message = 'گزارش شما ثبت شد.'

    context = {'title_error': title_error, 'text_error': text_error, 'message': message,
               'report_title': report_title, 'report_text': report_text}

    return render(request, 'app/reports.html', context)


def quick_list(request):
    items = {"items": {}}
    parents = Items.objects.all().values("parent_id", "parent__name").distinct()
    main_parents = Items.objects.filter(parent__isnull=True).only("id").values_list("id", flat=True)
    for parent in parents:
        parent_items = create_key_value(Items.objects.filter(parent__id=parent['parent_id']).values("id", "name"),
                                        "id", "name")
        values = list(parent_items.values())
        if parent["parent_id"] is None:
            items["items"]["main"] = values
        else:
            if parent["parent_id"] in main_parents:
                items["items"][str(parent["parent_id"]) + "<id>" + parent["parent__name"]] = values
            else:
                parent_list = find_main_parent_item(main_parents, parent["parent_id"])
                items["items"] = list_replace(items["items"],
                                              str(parent_list[0].id) + "<id>" + parent_list[0].name,
                                              convert_parent_list_to_dict(items["items"],
                                                                          parent_list,
                                                                          values)[
                                                  str(parent_list[0].id) + "<id>" + parent_list[0].name])
    last_menu = {}
    for i, item in enumerate(items["items"]["main"]):
        if item in items["items"].keys():
            last_menu[item] = items["items"][item]
        else:
            last_menu[item]= item
    return render(request, 'app/quick_list.html', {'items':last_menu})


def list_replace(my_list, value, new_value):
    new_list = my_list.copy()
    for n, i in enumerate(my_list):
        if i == value:
            new_list[i] = new_value
    return new_list


def convert_parent_list_to_dict(items, parent_list, values):
    if parent_list:
        try:
            next_step_item = items[str(parent_list[0].id) + "<id>" + parent_list[0].name]
        except:
            next_step_item = values
        next_item = convert_parent_list_to_dict(next_step_item, parent_list[1:], values)
        items = {str(parent_list[0].id) + "<id>" + parent_list[0].name: next_item}
    return items


def find_main_parent_item(main_items, parent_id):
    result_list = []
    while parent_id not in main_items:
        parent = Items.objects.get(id=parent_id)
        result_list.append(parent)
        parent_id = parent.parent.id
    main = Items.objects.get(id=parent_id)
    result_list.append(main)
    return result_list[-1::-1]


def create_key_value(dictionary_list, key_name, value_name):
    result = {}
    for dic in dictionary_list:
        result[dic[key_name]] = str(dic[key_name]) + "<id>" + dic[value_name]
    return result


def quick_list_save(request):
    form = QuickListForm(request.POST)
    if form.is_valid():
        instance = form.save()
    # form = LoginForm(request.POST)
    # title = request.POST['list_name']
    # explain = request.POST['list_explain']
    #
    # inputs = request.POST.getlist('input[]')
    #
    # quick_list = models.QuickList()
    # quick_list.title = title
    # quick_list.explain = explain
    # quick_list.date = inputs[0]
    # quick_list.save()
    #
    # s = ''
    # x = 0
    #
    # for i in range(1, len(inputs)):
    #     if i % 4 == 1:
    #         item = models.QuickListItems(quick_list=quick_list, name=inputs[i])
    #     elif i % 4 == 2:
    #         item.explain = inputs[i]
    #     elif i % 4 == 3:
    #         item.num = en_to_ar_numb(str(inputs[i]))
    #     elif i % 4 == 0:
    #         item.measurement = inputs[i]
    #         item.save()

    # s = 'http://127.0.0.1:8000/kala_quick_list/'
    # list_id = quick_list.id
    # s = s + str(list_id)



def kala_quick_list(request, track_code):
    list = models.QuickList.objects.filter(track_code=track_code).last().items.all()
    return render(request, 'app/kala_quick_list.html', context={'list': list})


def en_to_ar_numb(number):
    dic = {'0': '۰', '1': '١', '2': '٢', '3': '۳', '4': '۴', '5': '۵', '6': '۶', '7': '۷', '8': '۸', '9': '۹', '.': '/'}

    num = ''
    for i in number:
        num = num + dic.get(i)
    return num


def login_tem(request):
    next_url = request.GET.get("next", None)
    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            phone_number = form.cleaned_data.get("phone_number")
            password = form.cleaned_data.get("password")

            user = User.objects.filter(username=phone_number).first()
            if user:
                check_pass = user.check_password(password)
                if check_pass:
                    login(request, user)
                    if next_url:
                        return HttpResponseRedirect(next_url)
                    return HttpResponseRedirect(reverse("app:dashboard"))
                else:
                    return render(request, 'app/login/login.html', {
                        "message": "user not found or incorrect password"})
            else:
                return render(request, 'app/login/login.html', {
                    "message": "user not found or incorrect password"})
        else:
            return render(request, 'app/login/login.html', {"form": form})
    else:
        form = LoginForm()
        return render(request, 'app/login/login.html', {"form": form})


@login_required(login_url="app:login")
def dashboard(request):
    return HttpResponse("welcome " + request.user.username)


def logout_tem(request):
    logout(request)
    return HttpResponseRedirect(reverse("app:login"))
