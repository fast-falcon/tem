from django.contrib import admin

from . import models


class Quick_list_itemInline(admin.TabularInline):
    model = models.QuickListItems
    extra = 0


@admin.register(models.QuickList)
class Quick_list(admin.ModelAdmin):
    inlines = [Quick_list_itemInline]


@admin.register(models.Items)
class ItemsAdmin(admin.ModelAdmin):
    pass
