$(document).ready(function () {
    if ($(document).scrollTop()>51 && $('#header').hasClass('shadow') === false) {
        $('#header').addClass('shadow')
    }

    $(document).on("mousewheel", function() {
        if ($(document).scrollTop()>51 && $('#header').hasClass('shadow') === false) {
            $('#header').addClass('shadow')
        }
        else if ($(document).scrollTop()<51 && $('#header').hasClass('shadow') === true) {
            $('#header').removeClass('shadow')
        }
    });

    if ($(document).width() < 1200) {
        $('#home_page').removeClass('container');
        $('#home_page').addClass('container-fluid')
    }
    else {
        $('#home_page').removeClass('container-fluid');
        $('#home_page').addClass('container')
    }

    if ($('#header').width() < 1093) {
        $('#logo_box').removeClass('col-3').addClass('col-2');
        $('#title_box').removeClass('col-6').addClass('col-7');
        $('#btns').removeClass('col-2').addClass('col-3')
    }

    if ($('#header').width() < 936) {
        $('#quick_btn').hide();
            $('#menu_box').attr('style', 'display: none !important;');
            $('#home_page').css('marginTop', '150px');
            $('#menu_btn').show();
            $('#title_box').attr('style', 'width: 73% !important;').removeClass('col-7').addClass('col-8');
            $('#btns').attr('style', 'width: 15% !important;').removeClass('col-3').addClass('col-2');
            $('#logo_box').removeClass('col-3').addClass('col-2')
    }

    var w = $(document).width();
    var h = $(document).height();
    $('#mask').css({'width': w,'height': h});
    $('#mask_share').css({'width': w,'height': h});

    if ($(window).width() < 1100) {
        $('#code_img_txt').animate({'backgroundColor': 'rgba(0,0,0,0.7)'}, 500)
    }

    if ($('#menu_box').css('display') === 'none') {
        $('#quick_list').css('marginTop', '140px')
    }

    $(window).resize(function () {
        var w = $(document).width();
        var h = $(document).height();
        $('#mask').css({'width': w,'height': h});
        $('#mask_share').css({'width': w,'height': h});

        if ($(document).width() < 1200) {
            $('#home_page').removeClass('container');
            $('#home_page').addClass('container-fluid')
        }
        else {
            $('#home_page').removeClass('container-fluid');
            $('#home_page').addClass('container')
        }

        if ($('#header').width() < 936) {
            $('#quick_btn').hide();
            $('#menu_box').attr('style', 'display: none !important;');
            $('#home_page').css('marginTop', '150px');
            $('#menu_btn').show();
            $('#title_box').attr('style', 'width: 73% !important;').removeClass('col-7').addClass('col-8');
            $('#btns').attr('style', 'width: 15% !important;').removeClass('col-3').addClass('col-2');
            $('#logo_box').removeClass('col-3').addClass('col-2')
        }

        else if ($('#header').width() < 1093) {
            $('#quick_btn').show();
            $('#menu_box').attr('style', 'display: block !important;');
            $('#home_page').css('marginTop', '0px');
            $('#menu_btn').hide();
            $('#title_box').attr('style', 'width: 66% !important;').removeClass('col-6 col-8').addClass('col-7');
            $('#btns').attr('style', 'width: 22% !important;').removeClass('col-2').addClass('col-3');
            $('#mask').delay(200).fadeOut();
            $('#menu_btn_box').delay(200).fadeOut();
            $('#logo_box').removeClass('col-3').addClass('col-2')
        }

        else {
            $('#quick_btn').show();
            $('#menu_box').attr('style', 'display: block !important;');
            $('#home_page').css('marginTop', '0px');
            $('#menu_btn').hide();
            $('#title_box').attr('style', 'width: 66% !important;').removeClass('col-7 col-8').addClass('col-6');
            $('#btns').attr('style', 'width: 22% !important;').removeClass('col-2').addClass('col-3');
            $('#mask').delay(200).fadeOut();
            $('#menu_btn_box').delay(200).fadeOut();
            $('#logo_box').removeClass('col-2').addClass('col-3')
        }

        if ($(window).width() < 1100) {
            $('#code_img_txt').animate({'backgroundColor': 'rgba(0,0,0,0.7)'}, 500)
        }

        if ($('#menu_box').css('display') === 'none') {
            $('#quick_list').css('marginTop', '140px')
        }
        else {
            $('#quick_list').css('marginTop', '50px')
        }
    });

    var w = $(document).width();
    var h = $(document).height() + $('#footer').height();
    $('#mask').css({'width': w,'height': h});

    $('#menu_btn_icon').click(function () {
        if ($('#mask').css('display') === 'none') {
            $('#mask').delay(200).fadeIn();
            $('#menu_btn_box').slideDown()
        }
        else {
            $('#mask').delay(200).fadeOut();
            $('#menu_btn_box').slideUp()
        }
    });

    $('#mask').click(function () {
        $('#mask').delay(200).fadeOut();
        $('#menu_btn_box').slideUp();
    });

    if ($('#title_box').css('fontSize') > '20px') {
        if ($(window).width() < 415) {
            $('#logo_box').removeClass('col-3 col-2').addClass('col-1');
            $('#title_box').removeClass('col-6 col-7 col-8 col-10').addClass('col-9');
            $('#btns').removeClass('col-3 col-1').addClass('col-2')
        }
        else if ($(window).width() < 485) {
            $('#logo_box').removeClass('col-3 col-2').addClass('col-1');
            $('#title_box').removeClass('col-6 col-7 col-8 col-9').addClass('col-10');
            $('#btns').removeClass('col-3 col-2').addClass('col-1')
        }
        else if ($(window).width() < 605) {
            $('#logo_box').removeClass('col-3 col-1').addClass('col-2');
            $('#title_box').removeClass('col-6 col-7 col-8 col-10').addClass('col-9');
            $('#btns').removeClass('col-3 col-2').addClass('col-1')
        }
        else if ($(window).width() < 645) {
            $('#logo_box').removeClass('col-3 col-2').addClass('col-1');
            $('#title_box').removeClass('col-6 col-7 col-8 col-10').addClass('col-9');
            $('#btns').removeClass('col-3').addClass('col-2')
        }
        else {
            $('#logo_box').removeClass('col-3').addClass('col-2');
            $('#title_box').removeClass('col-6 col-7 col-9 col-10').addClass('col-8');
            $('#btns').removeClass('col-3').addClass('col-2')
        }
    }

    $('#report_title').keydown(function (e) {
        if ($(this).val().length === 60 && e.keyCode !== 8) {
            e.preventDefault()
        }
    });

    $('#report_txt').keydown(function (e) {
        if ($(this).val().length === 512 && e.keyCode !== 8) {
            e.preventDefault()
        }
    });

    // $('.list_items').css('width',$('#quick_list').width()+30);

    var timer;
    var this_item;
    $('#quick_list_bar>div').on('mouseenter', function () {
        this_item = $(this);
        timer = setTimeout(function () {
            this_item.css({'backgroundColor': '#40c4ff','color': 'black','borderTop': '4px solid #0097a7','paddingTop': '12px'});
            this_item.find('.list_items').delay(200).fadeIn();
            this_item.find('.down_sign').hide();
            this_item.find('.up_sign').show()
        }, 800);
    }).on('mouseleave', function () {
        if (!(this_item.hasClass('has_autoComplete') && $('#search_voice').is(':focus'))) {
            clearTimeout(timer);
            this_item.find('.list_items').delay(200).fadeOut();
            this_item.css({'backgroundColor': '#006064','color': '#e0f7fa','borderTop': 'none','paddingTop': '16px'});
            this_item.find('.down_sign').show();
            this_item.find('.up_sign').hide();
        }
    });

    $('.list_items>div').hover(function () {
        if (!$(this).hasClass('items_active')) {
            for (var i=0;i<$('.list_items>div').length;i++) {
                if ($('.list_items>div').eq(i).hasClass('items_active'))
                    $('.list_items>div').eq(i).removeClass('items_active')
            }
            $(this).addClass('items_active')
        }
    }, function () {
        for (var i=0;i<$('.items_plus_parts').length;i++) {
            $('.items_plus_parts').eq(i).slideUp();
            $('.minus').fadeOut();
            $('.plus').fadeIn()
        }
        if ($('#quick_list_form .form-group').length === 0) {
            $('#list_box').animate({'min-height': '455px'},600);
        }
        else {
            $('#list_box').animate({'min-height': '630px'},600);
        }
    });

    $('.items_plus>div>div>i').click(function () {
        if ($(this).parent().nextAll('div').first().css('display') === 'none') {
            for (var i=0;i<$('.items_plus_parts').length;i++) {
                $('.items_plus_parts').eq(i).slideUp("slow");
                $('.minus').fadeOut();
                $('.plus').fadeIn()
            }
            $(this).hide();
            $(this).nextAll('i').first().show();
            $(this).parent().nextAll('div').first().slideDown("slow");
            if ($(this).parent().hasClass('overflow_height_maximum')) {
                if ($('#quick_list_form .form-group').length === 0) {
                    $('#list_box').animate({'min-height': '1625px'},600);
                }
                else {
                    $('#list_box').animate({'min-height': '1800px'},600);
                }
            }
            else if ($(this).parent().hasClass('overflow_height_max')) {
                if ($('#quick_list_form .form-group').length === 0) {
                    $('#list_box').animate({'min-height': '1065px'},600);
                }
                else {
                    $('#list_box').animate({'min-height': '1240px'},600);
                }
            }
            else if ($(this).parent().hasClass('overflow_height_medium')) {
                if ($('#quick_list_form .form-group').length === 0) {
                    $('#list_box').animate({'min-height': '855px'},600);
                }
                else {
                    $('#list_box').animate({'min-height': '1030px'},600);
                }
            }
            else if ($(this).parent().hasClass('overflow_height_med')) {
                if ($('#quick_list_form .form-group').length === 0) {
                    $('#list_box').animate({'min-height': '695px'},600);
                }
                else {
                    $('#list_box').animate({'min-height': '870px'},600);
                }
            }
            else if ($(this).parent().hasClass('overflow_height_min')) {
                if ($('#quick_list_form .form-group').length === 0) {
                    $('#list_box').animate({'min-height': '575px'},600);
                }
                else {
                    $('#list_box').animate({'min-height': '850px'},600);
                }
            }
            else {
                if ($('#quick_list_form .form-group').length === 0) {
                    $('#list_box').animate({'min-height': '455px'},600);
                }
                else {
                    $('#list_box').animate({'min-height': '630px'},600);
                }
            }
        }
        else {
            $(this).hide();
            $(this).prev().show();
            $(this).parent().nextAll('div').first().slideUp("slow");
            if ($(this).parent().hasClass('overflow_height_maximum') || $(this).parent().hasClass('overflow_height_max') || $(this).parent().hasClass('overflow_height_medium') || $(this).parent().hasClass('overflow_height_med') || $(this).parent().hasClass('overflow_height_min')) {
                if ($('#quick_list_form .form-group').length === 0) {
                    $('#list_box').animate({'min-height': '455px'},600);
                }
                else {
                    $('#list_box').animate({'min-height': '630px'},600);
                }
            }
        }
    });

    $('#basket_items_num').text($('#quick_list_form .form-group').length);

    var val,item0,item1,item2,item3,item4,flag,s,x,c,txt_len,flag_error = false,flag_error_name = false;
    $('.items span').click(function () {
        $(this).css('cursor', 'default').addClass('text-success');
        val = $(this).parent().attr('class');
        flag = false;

        if (val.indexOf(' ') < val.length) {
            val = val.slice(val.indexOf(' ')+1, val.length);
        }

        if ($('#empty_list').css('display') !== 'none') {
            $('#empty_list').hide();
            $('#quick_list_title').show();
            $('#list_info').show();
            $('#security_box').show();
            $('#quick_list_form_btn').show();
            $('#list_box').css('min-height', '630px');
        }

        for (var i=0;i<$('#quick_list_form .form-group').length;i++) {
            if ($('#quick_list_form .form-group').eq(i).children('input').eq(0).val() === val) {
                flag = true;
            }
        }

        if (!flag && $('#quick_list_form .form-group').length < 30) {
            const sound = new Audio('static/app/sound/sound.mp3');
            sound.play();

            item3 = $('<div class="form-group rounded-pill"></div>');
            item0 = $('<input type="text" class="item_code" name="input[]" style="display: none">');
            item1 = $('<div class="item_name"></div>');
            item2 = $('<button type="button" class="rounded voice_btn voice_item_btn"><i class="fas fa-microphone-alt"></i></button>' + '<textarea name="input[]" class="item_explain form-control" placeholder="توضیحات ..."></textarea>' +
                '<i class="question_sign fas fa-question-circle" title="توضیحات" data-toggle="tooltip" data-placement="right"></i>' +
                '<input type="number" step="any" name="input[]" class="item_num form-control" min="0" max="999999" autocomplete="off">' +
                '<select name="input[]" class="item_measurement form-control">\n' +
                '  <option value="0">عدد</option>\n' +
                '  <option value="1">بسته</option>\n' +
                '  <option value="2">کیلوگرم</option>\n' +
                '  <option value="3">گرم</option>\n' +
                '</select>' +
                '<i class="close_item fas fa-times-circle" title="حذف" data-toggle="tooltip" data-placement="top"></i>');
            item0.val(val);
            s = topersianNumber(($('#quick_list_form .form-group').length + 1).toString());
            s = s + '. ' + $(this).text();
            item1.text(s);
            item3.append(item0,item1,item2);
            $(item3).insertBefore($('#security_box'));

            $('.question_sign').eq($('.question_sign').length - 1).click(function () {
                if ($(this).parent().find('.item_explain').css('display') === 'none') {
                    $(this).parent().find('.item_name').animate({'margin-top': '18px'},500);
                    $(this).parent().find('.question_sign').animate({'margin-top': '18px'},500);
                    $(this).parent().find('.item_num').animate({'margin-top': '10px'},500);
                    $(this).parent().find('.item_measurement').animate({'margin-top': '10px'},500);
                    $(this).parent().find('.close_item').animate({'margin-top': '18px'},500);
                }
                else {
                    $(this).parent().find('.item_name').animate({'margin-top': '5px'},500);
                    $(this).parent().find('.question_sign').animate({'margin-top': '9px'},500);
                    $(this).parent().find('.item_num').animate({'margin-top': '0px'},500);
                    $(this).parent().find('.item_measurement').animate({'margin-top': '0px'},500);
                    $(this).parent().find('.close_item').animate({'margin-top': '9px'},500);
                }
                $(this).parent().find('.voice_item_btn').fadeToggle();
                $(this).parent().find('.item_explain').slideToggle();
            });

            // $('.voice_item_btn').eq($('.voice_item_btn').length-1).mousedown(function () {
            //     $(this).css({'background-color': '#212121', 'color': '#d50000'});

            //     window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

            //     let container = document.parentElement.children.getElementsByClassName('item_explain');
            //     alert(container);
            //     const recognition = new SpeechRecognition();
            //     recognition.lang = "fa-IR";
            //     recognition.interimResults = true;

            //     recognition.start();
            //     recognition.addEventListener("end", recognition.start);
                
            //     recognition.addEventListener("result", e => {
            //     let transcript = Array.from(e.results)
            //         .map(result => {
            //         return result[0];
            //         })
            //         .map(result => {
            //         return result.transcript;
            //         })
            //         .join(" ");

            //     if (transcript.includes("علامت سوال")) {
            //         transcript = transcript.replace("علامت سوال", "؟");
            //     }

            //     else if (transcript.includes("ویرگول")) {
            //         transcript = transcript.replace("ویرگول", "،");
            //     }

            //     else if (transcript.includes("نقطه")) {
            //         transcript = transcript.replace("نقطه", ".");
            //     }

            //     else if (transcript.includes("متن پاک شود") && e.results[0].isFinal) {
            //         container.value = "";
            //     }

            //     else if (transcript.includes("کلمه پاک شود") && e.results[0].isFinal) {
            //         var last_word = container.value.slice(0,container.value.length - 1);
            //         last_word = last_word.slice(0,last_word.lastIndexOf(' '));
            //         container.value = last_word;
            //     }

            //     else if (transcript.includes("برو خط بعدی") && e.results[0].isFinal) {
            //         container.value = container.value + '\r\n';
            //     }

            //     else if (e.results[0].isFinal) {
            //         var talk = transcript + " ";
            //         if (container.value.length + talk.length < 150) {
            //             container.value = container.value + talk;
            //         }
            //     }

            //     console.log(transcript);
            //     });

            //     $(this).mouseup(function () {
            //         recognition.removeEventListener("end", recognition.start)
            //         recognition.stop();
            //         $(this).css({'background-color': '#FFFFFF', 'color': '#424242', 'outline': 'none'});
            //     })
            // });

            $('.item_explain').eq($('.item_explain').length - 1).keydown(function (e) {
                txt_len = $(this).val().length;
                if (txt_len > 499 && e.keyCode !== 8) {
                    e.preventDefault();
                }
            });

            $('.item_num').eq($('.item_num').length - 1).keydown(function (e) {
                if (e.keyCode === 109 || e.keyCode === 107) {
                    e.preventDefault()
                }

                var len = ($(this).val()).toString().length;
                if (len>5) {
                    e.preventDefault()
                }
            });

            $('.close_item').eq($('.close_item').length -1).click(function (attributeName) {
                var class_name = ($(this).parent().find('.item_code').val()).toString();
                var name_slice = class_name;
                var num_sign = 0;
                for (var j=0;j<class_name.length;j++) {
                    if (class_name[j] === '$') {
                        num_sign = num_sign + 1;
                    }
                }

                if (num_sign === 2) {
                    var first_floor = 0,second_floor = 0,third_floor = 0,fourth_floor = 0,box_address = 0,box_mod = 0,counter = 0,mod = 0;

                    first_floor = parseInt(name_slice.slice(0,1));
                    name_slice = class_name.slice(2,class_name.length);

                    second_floor = parseInt(name_slice.slice(0,name_slice.indexOf('$')));
                    name_slice = name_slice.slice(name_slice.indexOf('$')+1,name_slice.length);

                    third_floor = parseInt(name_slice);
                    
                    if (!$('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('div').eq(1).hasClass('items_plus_parts')) {
                        counter = parseInt(third_floor / $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('div').length);

                        mod = third_floor % $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('div').length;
                    }

                    else {
                        counter = parseInt(third_floor / ($('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('div').length / 2));

                        mod = (third_floor % ($('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('div').length / 2)) * 2;
                    }
                    
                    $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(counter).children('div').eq(mod).children('span').eq(0).removeClass('text-success');

                    $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(counter).children('div').eq(mod).children('span').eq(0).hover(function () {
                        $(this).css({'color': '#616161','cursor': 'pointer'});
                    }, function () {
                        $(this).css({'color': '#212121'});
                    });
                }
                else if (num_sign === 3) {
                    first_floor = parseInt(name_slice.slice(0,1));
                    name_slice = class_name.slice(2,class_name.length);

                    second_floor = parseInt(name_slice.slice(0,name_slice.indexOf('$')));
                    name_slice = name_slice.slice(name_slice.indexOf('$')+1,name_slice.length);

                    third_floor = parseInt(name_slice.slice(0,name_slice.indexOf('$')));
                    name_slice = name_slice.slice(name_slice.indexOf('$')+1,name_slice.length);

                    fourth_floor = parseInt(name_slice);

                    box_address = parseInt(third_floor / $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('.items_plus_parts').length);

                    box_mod = parseInt(third_floor % $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('.items_plus_parts').length);


                    counter = parseInt(fourth_floor / $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(box_address).children('.items_plus_parts').eq(box_mod).children('div').eq(0).children('div').eq(0).children('div').length);

                    mod = parseInt(fourth_floor % $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(box_address).children('.items_plus_parts').eq(box_mod).children('div').eq(0).children('div').eq(0).children('div').length);

                    $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(box_address).children('.items_plus_parts').eq(box_mod).children('div').eq(0).children('div').eq(counter).children('div').eq(mod).children('span').eq(0).removeClass('text-success');

                    $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(box_address).children('.items_plus_parts').eq(box_mod).children('div').eq(0).children('div').eq(counter).children('div').eq(mod).children('span').eq(0).hover(function () {
                        $(this).css({'color': '#616161','cursor': 'pointer'});
                    }, function () {
                        $(this).css({'color': '#212121'});
                    });
                }

                $('.tooltip').hide();
                x = $(this).parent().index();
                $(this).parent().remove();
                var dot_index;

                for (var i = x-1;i<$('#quick_list_form .form-group').length;i++) {
                    c = $('#quick_list_form .form-group').eq(i).find('.item_name').text();
                    dot_index = c.search(' ');
                    c = c.slice(dot_index,);
                    c = topersianNumber((i + 1).toString()) + '.' + c;
                    $('#quick_list_form .form-group').eq(i).find('.item_name').text(c);
                }

                if ($('#quick_list_form .form-group').length === 0) {
                    $('#list_box').css('min-height', '455px');
                    $('#quick_list_title').hide();
                    $('#list_info').hide();
                    $('#security_box').hide();
                    $('#quick_list_form_btn').hide();
                    $('#empty_list').show();
                }

                $('#basket_items_num').text($('#quick_list_form .form-group').length);
            })
        }

        $('[data-toggle = "tooltip"]').tooltip();

        $('#basket_items_num').text($('#quick_list_form .form-group').length);
    });

    $('#other_item_btn').click(function () {

        $('#list_box').css('min-height', '630px');

        if ($('#empty_list').css('display') !== 'none') {
            $('#empty_list').hide();
            $('#quick_list_title').show();
            $('#list_info').show();
            $('#security_box').show();
            $('#quick_list_form_btn').show();
            $('#list_box').css('min-height', '630px');
        }

        if ($('#quick_list_form .form-group').length < 30) {
            const sound = new Audio('static/app/sound/sound.mp3');
            sound.play();
            item3 = $('<div class="form-group rounded-pill"></div>');
            item0 = $('<input type="text" name="input[]" class="form-control other_input_name" placeholder="نام کالا ..." autocomplete="off">');
            item1 = $('<div class="item_name other_item_name"></div>');
            item2 = $('<textarea name="input[]" class="item_explain form-control" placeholder="توضیحات ..."></textarea>' +
                '<i class="question_sign fas fa-question-circle" title="توضیحات" data-toggle="tooltip" data-placement="right"></i>' +
                '<input type="number" step="any" name="input[]" class="item_num form-control" min="0" max="999999" autocomplete="off">' +
                '<select name="input[]" class="item_measurement form-control">\n' +
                '  <option value="0">عدد</option>\n' +
                '  <option value="1">بسته</option>\n' +
                '  <option value="2">کیلوگرم</option>\n' +
                '  <option value="3">گرم</option>\n' +
                '</select>' +
                '<i class="close_item fas fa-times-circle" title="حذف" data-toggle="tooltip" data-placement="top"></i>');
            s = topersianNumber(($('#quick_list_form .form-group').length + 1).toString())+ '. ';
            item1.text(s);
            item3.append(item1,item0,item2);
            $(item3).insertBefore($('#security_box'));

            $('.question_sign').eq($('.question_sign').length - 1).click(function () {
                if ($(this).parent().find('.item_explain').css('display') === 'none') {
                    $(this).parent().find('.item_name').animate({'margin-top': '18px'},500);
                    $(this).parent().find('.question_sign').animate({'margin-top': '18px'},500);
                    $(this).parent().find('.item_num').animate({'margin-top': '10px'},500);
                    $(this).parent().find('.item_measurement').animate({'margin-top': '10px'},500);
                    $(this).parent().find('.close_item').animate({'margin-top': '18px'},500);
                }
                else {
                    $(this).parent().find('.item_name').animate({'margin-top': '5px'},500);
                    $(this).parent().find('.question_sign').animate({'margin-top': '9px'},500);
                    $(this).parent().find('.item_num').animate({'margin-top': '0px'},500);
                    $(this).parent().find('.item_measurement').animate({'margin-top': '0px'},500);
                    $(this).parent().find('.close_item').animate({'margin-top': '9px'},500);
                }
                $(this).parent().find('.item_explain').slideToggle();
            });

            $('.other_input_name').eq($('.other_input_name').length - 1).keydown(function (e) {
                txt_len = $(this).val().length;
                if (txt_len > 39 && e.keyCode !== 8) {
                    e.preventDefault();
                }
            });

            $('.item_explain').eq($('.item_explain').length - 1).keydown(function (e) {
                txt_len = $(this).val().length;
                if (txt_len > 499 && e.keyCode !== 8) {
                    e.preventDefault();
                }
            });

            $('.item_num').eq($('.item_num').length - 1).keydown(function (e) {
                if (e.keyCode === 109 || e.keyCode === 107) {
                    e.preventDefault()
                }

                var len = ($(this).val()).toString().length;
                if (len>5) {
                    e.preventDefault()
                }
            });

            $('.close_item').eq($('.close_item').length -1).click(function (attributeName) {
                $('.tooltip').hide();
                x = $(this).parent().index();
                $(this).parent().remove();
                var dot_index;

                for (var i = x-1;i<$('#quick_list_form .form-group').length;i++) {
                    c = $('#quick_list_form .form-group').eq(i).find('.item_name').text();
                    dot_index = c.search(' ');
                    c = c.slice(dot_index,);
                    c = topersianNumber((i + 1).toString()) + '.' + c;
                    $('#quick_list_form .form-group').eq(i).find('.item_name').text(c);
                }

                if ($('#quick_list_form .form-group').length === 0) {
                    $('#list_box').css('min-height', '455px');
                    $('#quick_list_title').hide();
                    $('#list_info').hide();
                    $('#security_box').hide();
                    $('#quick_list_form_btn').hide();
                    $('#empty_list').show();
                }

                $('#basket_items_num').text($('#quick_list_form .form-group').length);
            });
        }

        $('[data-toggle = "tooltip"]').tooltip();

        $('#basket_items_num').text($('#quick_list_form .form-group').length);
    });

    $('#quick_list_form_btn').hover(function () {
        $(this).addClass('shadow');
    }, function () {
        $(this).removeClass('shadow');
    });

    $('#quick_list_form_btn').mousedown(function () {
        for (var i=0;i<$('.item_explain').length;i++) {
            if ($('.item_explain').eq(i).text() === '') {
                $('.item_explain').eq(i).text(' ');
            }
            if ($('.item_num').eq(i).val() === '') {
                $('.item_num').eq(i).val('0');
            }
        }

        for (var i=0;i<$('.other_input_name').length;i++) {
            if ($('.other_input_name').eq(i).val() === '') {
                $('.other_input_name').eq(i).val(' ');
            }
        }
    });

    $('#quick_list_form_btn').click(function (e) {
        if (!flag_error) {
            for (var i=0;i<$('.item_num').length;i++) {
                if ($('.item_num').eq(i).val() === '0' && !flag_error) {
                    item0 = $('<div class="alert alert-warning fade show alert_num">' +
                        '   <button type="button" class="close float-left" data-dismiss="alert">&times;</button>' +
                        '   مقدار تعدادی از کالا ها را وارد نکرده‌اید، برای ادامه به این صورت دوباره بر روی "ذخیره لیست" کلیک کنید.' +
                        '</div>');
                    (item0).insertBefore($('#quick_list_form .form-group').eq(0));
                    e.preventDefault();
                    flag_error = true;
                }
            }
        }

        if (!flag_error_name) {
            for (var i=0;i<$('.other_input_name').length;i++) {
                if ($('.other_input_name').eq(i).val() === ' ' && !flag_error_name) {
                    item0 = $('<div class="alert alert-warning fade show alert_num">' +
                        '   <button type="button" class="close float-left" data-dismiss="alert">&times;</button>' +
                        '   نام تعدادی از کالا ها را وارد نکرده‌اید، برای ادامه به این صورت دوباره بر روی "ذخیره لیست" کلیک کنید.' +
                        '</div>');
                    (item0).insertBefore($('#quick_list_form .form-group').eq(0));
                    e.preventDefault();
                    flag_error_name = true;
                }
            }
        }

        if ($('.userInput>input').val().toLowerCase() !== s_code.toLowerCase()) {
            e.preventDefault();
            $('.userInput>input').css('border', '2px solid #b71c1c').val('');
            createCaptcha();
        }
    });

    $('.userInput>input').focusin(function () {
        $('.userInput>input').css('border', '2px solid #e0e0e0');
    })

    $('[data-toggle = "tooltip"]').tooltip();

    var item,item_txt,kala_name = '';
    var datas = {
        '0$0$0':'نخود سفید', '0$0$1':'نخود سیاه', '0$0$2':'نخود فرنگی سبز', '0$0$3':'لوبیا چیتی', '0$0$4':'لوبیا قرمز', '0$0$5':'لوبیا سفید', '0$0$6':'لوبیا چشم بلبلی', '0$0$7':'لوبیا سیاه', '0$0$8':'لوبیا عروس', '0$0$9':'لپه', '0$0$10':'عدس سیز', '0$0$11':'عدس قرمز', '0$0$12':'عدس قهوه ای', '0$0$13':'عدس نارنجی', '0$0$14':'ماش', '0$0$15':'باقلا', '0$0$16':'سویای بافتدار', '0$0$17':'سویای دانه ای', '0$1$0':'جو', '0$1$1':'جو پرک', '0$1$2':'جو دو سرپرک', '0$1$3':'ذرت', '0$1$4':'بلغور جو', '0$1$5':'جو پوست کنده', '0$1$6':'سبوس جو دوسر', '0$1$7':'سبوس جو', '0$1$8':'گندم', '0$1$9':'بلغور گندم', '0$1$10':'گندم پرک', '0$1$11':'جوانه گندم', '0$1$12':'سبوس گندم', '0$1$13':'گندم پوست کنده', '0$1$14':'سبوس برنج', '0$1$15':'برنج ایرانی', '0$1$16':'برنج خارجی', '0$1$17':'برنج ریز آش', '0$1$18':'آرد گندم نول(سفید قنادی)', '0$1$19':'آرد گندم(سبوس دار)', '0$1$20':'آرد فانتزی گندم', '0$1$21':'آرد جوانه گندم', '0$1$22':'آرد گندم نان معمولی', '0$1$23':'آرد همه منظوره', '0$1$24':'آرد برنج', '0$1$25':'آرد سمولینا', '0$1$26':'آرد ایرمیک', '0$1$27':'آرد ذرت', '0$1$28':'آرد نخودچی', '0$1$29':'آرد سوخاری', '0$2$0':'نان لواش', '0$2$1':'نان تست', '0$2$2':'باگت', '0$2$3':'نان سنتی', '0$2$4':'نان سوخاری', '0$2$5':'سنگک', '0$2$6':'بربری', '0$2$7':'نان روغنی', '0$2$8':'تافتون', '0$2$9':'نان سبوسدار', '0$2$10':'نان تقویت شده', '0$3$0$0':'کره پاستوریزه', '0$3$0$1':'کره بانمک ', '0$3$0$2':'کره باسیر و نمک', '0$3$0$3':'کره حیوانی گاوی ', '0$3$0$4':'کره حیوانی گاومیش', '0$3$0$5':'کره گیاهی مارگارین', '0$3$0$6':'کره پسته', '0$3$0$7':'کره بادام زمینی', '0$3$1$0':'پنیر تبریز', '0$3$1$1':'پنیر خامه ای', '0$3$1$2':'پنیر پاستوریزه ', '0$3$1$3':'پنیر پیتزا', '0$3$2$0':'ماست پاستوریزه کم‌چرب', '0$3$2$1':'ماست پاستوریزه پرچرب', '0$3$2$2':'ماست سنتی گاوی', '0$3$2$3':'ماست سنتی گوسفندی', '0$3$2$4':'ماست سنتی گاومیش', '0$3$2$5':'ماست چکیده', '0$3$2$6':'ماست طعم دار میوه‌ای', '0$3$2$7':'ماست کفیر', '0$3$2$8':'ماست یونانی', '0$3$2$9':'ماست همزده', '0$3$2$10':'ماست ایسلندی', '0$3$2$11':'ماست موسیر', '0$3$2$12':'ماست کفیر پربیوتیک', '0$3$2$13':'ماست پربیوتیک', '0$3$3$0':'شیر نایلونی کم چرب ', '0$3$3$1':'شیر نایلونی پر چرب ', '0$3$3$2':'شیر پاکتی کم چرب', '0$3$3$3':'شیر پاکتی کم چرب', '0$3$3$4':'شیر خرما', '0$3$3$5':'شیر موز', '0$3$3$6':'شیر کاکائو', '0$3$3$7':'شیر سویا', '0$3$3$8':'شیر شتر', '0$3$3$9':'شیر نارگیل', '0$3$3$10':'شیر غنی شده', '0$3$3$11':'شیر بدون لاکتوز', '0$3$3$12':'شیر نیم چرب', '0$3$3$13':'شیر قهوه', '0$3$4$0':'سرشیر سنتی', '0$3$4$1':'خامه پاستوریزه', '0$3$4$2':'خامه شکلاتی', '0$3$4$3':'خامه کاکوئی', '0$3$4$4':'خامه عسل', '0$3$5$0':'کشک پاستوریزه ', '0$3$5$1':'کشک خشک سنتی', '0$3$6$0':'عسل شهد طبیعی', '0$3$6$1':'عسل شهد بسته بندی کارخانه ای', '0$3$6$2':'عسل مومدار', '0$3$6$3':'عسل بسته بندی انفرادی', '0$3$7$0':'دوغ گازدار ', '0$3$7$1':'دوغ بدون گاز', '0$3$7$2':'دوغ طعم دار با سیر', '0$3$7$3':'دوغ گازدار تخمیری', '0$3$7$4':'دوغ با طعم نعناع', '0$3$7$5':'دوغ محلی', '0$3$7$6':'دوغ با گلپر', '0$3$7$7':'دوغ کفیر', '0$3$7$8':'دوغ آبعلی', '0$3$7$9':'دوغ گرمادیده', '0$4$0$0':'خانواده 1.5 لیتری ', '0$4$0$1':'خانواده 2 لیتری ', '0$4$0$2':'معمولی شیشه ای', '0$4$0$3':'معمولی بطری ', '0$4$0$4':'قوطی فلزی', '0$4$0$5':'نوشابه انرژی زا', '0$4$1$0':'خانواده', '0$4$1$1':'معمولی شیشه ای', '0$4$1$2':'قوطی فلزی', '0$4$2$0':'آب معدنی بزرگ', '0$4$2$1':'آب معدنی کوچک', '0$4$3$0':'کوچک نی دار', '0$4$3$1':'قوطی بزرگ', '0$4$3$2':'بطری یک و نیم لیتری ', '0$4$3$3':'آب میوه گازدار', '0$4$4$0':'چای فله ای', '0$4$4$1':'چای قوطی فلزی', '0$4$4$2':'چای بسته کاغذی', '0$4$4$3':'چای کیسه ای', '0$4$4$4':'دمنوش', '0$4$5$0':'پودر قهوه', '0$4$5$1':'پودر کاکائو', '0$4$5$2':'نسکافه', '0$4$5$3':'کافی میلک', '0$4$6$0':'عرق نعناع', '0$4$6$1':'گلاب', '0$4$6$2':'عرق پونه', '0$4$6$3':'عرق گل گاوزبان', '0$4$6$4':'عرق شاهسپران', '0$4$6$5':'عرق بادرنجبو', '0$4$6$6':'عرق یونجه', '0$5$0$0':'کنسرو لوبیا', '0$5$0$1':'کنسرو لوبیا و قارچ', '0$5$0$2':'کنسرو ذرت ', '0$5$0$3':'تن ماهی ', '0$5$0$4':'خورشت قیمه ', '0$5$0$5':'خورشت قرمه سبزی', '0$5$0$6':'کشک بادمجان', '0$5$0$7':'نخود فرنگی', '0$5$0$8':'گوجه فرنگی', '0$5$0$9':'ناگت مرغ', '0$5$0$10':'ناگت میگو ', '0$5$0$11':'خاویار', '0$5$0$12':'جوجه ', '0$5$0$13':'پیتزا', '0$5$0$14':'شنسل مرغ ', '0$5$0$15':'سوپ آماده ', '0$5$0$16':'آش آماده', '0$5$0$17':'سیب زمینی سرخ کرده', '0$5$0$18':'نخود آبگوشتی', '0$5$0$19':'خوراک بادمجان', '0$5$0$20':'برگ مو', '0$5$0$21':'قارچ', '0$5$0$22':'کنسرو سبزیجات ', '0$5$0$23':'سالاد اولویه مرغ', '0$5$0$24':'سالاد اولویه کالباس', '0$5$0$25':'سالاد اولویه مرغ ماکارونی', '0$5$0$26':'کنسرو ماکارونی', '0$5$0$27':'رب گوجه فرنگی', '0$5$0$28':'قلیله ماهی', '0$5$1$0':'کمپوت سیب', '0$5$1$1':'کمپوت گلابی', '0$5$1$2':'کمپوت گیلاس', '0$5$1$3':'کمپوت آناناس', '0$6$0':'خلال سیب زمینی', '0$6$1':'سبزیجات منجمد', '0$6$2':'میگو', '0$6$3':'میگوی سوخاری', '0$6$4':'فلافل پخته', '0$6$5':'ناگت مرغ', '0$7$0':'یوکفا', '0$8$0':'چیپس', '0$8$1':'پفک', '0$8$2':'پفیلا', '0$8$3':'بستنی', '0$8$4':'شکلات فله‌‌ای', '0$8$5':'شکلات کادوئی', '0$8$6':'شکلات تلخ تخته ای', '0$8$7':'اسمارتیز', '0$8$8':'کشمش', '0$8$9':'بادام', '0$8$10':'فندق', '0$8$11':'پسته', '0$8$12':'گردو', '0$8$13':'مغز گردو', '0$8$14':'بادام زمینی', '0$8$15':'تخم کدو', '0$8$16':'آلو خشک', '0$8$17':'آلبالو خشک', '0$8$18':'توت خشک', '0$8$19':'بادام زمینی', '0$8$20':'تخمه آفتابگردان', '0$8$21':'مغز تخم آفتابگردان', '0$8$22':'آجیل مخلوط', '0$8$23':'تخم کدو', '0$8$24':'تخم هندوانه', '0$8$25':'مغز تخم هندوانه', '0$8$26':'بیسکویت تک نفری', '0$8$27':'بیسکویت جعبه‌ای', '0$8$28':'بیسکویت شکلاتی', '0$8$29':'ژله', '0$8$30':'ژله پف', '0$8$31':'ویفر', '0$8$32':'بستنی زمستانی', '0$8$33':'شکلات صبحانه', '0$8$34':'آدامس', '0$8$35':'خوشبو کننده دهان', '0$8$36':'اسنک پنیری', '0$8$37':'پاستیل', '0$8$38':'کورن نسکوئیک جعبه‌ای', '0$8$39':'لواشک', '0$8$40':'تمبر هندی', '0$8$41':'قرص نعناع', '0$8$42':'قرص زنجبیل', '0$8$43':'میوه خشک', '0$8$44':'شیرینی قنادی', '0$8$45':'نوقا', '0$8$46':'ریس', '0$8$47':'قطاب', '0$8$48':'گز', '0$8$49':'خشکبار', '0$9$0':'کالباس', '0$9$1':'سوسیس', '0$9$2':'تخم مرغ', '0$9$3':'قارچ', '0$9$4':'گوشت مرغ', '0$9$5':'گوشت گوسفند', '0$9$6':'گوشت گوساله', '0$9$7':'گوشت چرخ کرده', '0$9$8':'گوشت اردک', '0$9$9':'گوشت شتر', '0$9$10':'گوشت شتر مرغ', '0$9$11':'میگو', '0$9$12':'ماهی', '0$9$13':'بلدرچین', '0$9$14':'بوقلمون', '0$9$15':'کله و پاچه', '0$9$16':'سیرابی', '0$9$17':'جگر', '0$9$18':'دل', '0$9$19':'قلوه', '0$9$20':'استخوان قلم', '0$9$21':'پای مرغ', '0$9$22':'جگر مرغ', '0$9$23':'تخم مرغ روز', '0$9$24':'تخم مرغ سنتی', '0$9$25':'تخم مرغ تاریخدار', '0$9$26':'تخم مرغ شتر مرغ', '0$10$0':'خیار شور فله‌ای', '0$10$1':'خیارشور شیشه‌ای', '0$10$2':'زیتون فله‌ای', '0$10$3':'زیتون بسته‌ای', '0$10$4':'ترشی', '0$10$5':'سیر ترشی', '0$11$0':'پودر ژله', '0$11$1':'پودر پودینگ', '0$11$2':'کرم کارامل', '0$11$3':'دسر بیسکویتی', '0$11$4':'دسر وانیلی', '0$11$5':'دسر زعفرانی', '0$11$6':'دسر شکلاتی', '0$11$7':'دسر موزی', '0$11$8':'دسر توت فرنگی', '0$11$9':'دسر نوشیدنی دنت', '0$11$10':'دسر طالبی', '0$11$11':'دسر بلوبری', '0$11$12':'دسر ژله‌ای چند میوه', '0$12$0':'قند حبه‌ای‌', '0$12$1':'قند کله‌ای', '0$12$2':'قند کلوغ', '0$12$3':'شکر', '0$12$4':'نبات', '0$12$5':'نبات بسته بندی زعفرانی', '0$12$6':'نبات نی دار بسته‌ای', '0$12$7':'نبات فله‌ای بی رنگ', '0$12$8':'نبات فله‌ای زعفرانی', '0$12$9':'نقل', '0$13$0':'روغن زیتون', '0$13$1':'روغن کنجد', '0$13$2':'روغن آفتابگردان', '0$13$3':'روغن سرخ کردنی', '0$13$4':'روغن ذرت', '0$13$5':'روغن جامد', '0$13$6':'روغن زرد حیوانی', '0$13$7':'روغن کانولا', '0$14$0':'ادویه جات', '0$14$1':'پودر نارگیل', '0$14$2':'آب لیمو', '0$14$3':'لیمو امانی', '0$14$4':'زرشک', '0$14$5':'نمک پودری', '0$14$6':'نمک سنگی', '0$14$7':'جوش شیرین', '0$14$8':'آب غوره', '0$14$9':'فلفل سیاه', '0$14$10':'زرد چوبه', '0$14$11':'پودر فلفل', '0$14$12':'کنجد', '0$14$13':'سس گوجه فرنگی', '0$14$14':'سرکه سفید', '0$14$15':'سس مایونیز', '0$14$16':'پیاز سرخ شده', '0$14$17':'رب گوجه فرنگی', '0$14$18':'سس خردل', '0$14$19':'عصاره گوشت مرغ', '0$14$20':'عصاره گوشت', '0$14$21':'سرکه قرمز', '0$14$22':'زعفران', '0$14$23':'سس فرانسوی', '0$14$24':'سس فلفل سبز', '0$14$25':'سس فلفل قرمز', '0$14$26':'سس ایتالیایی', '0$14$27':'سرکه سیب', '0$15$0':'حلوا شکری کوچک', '0$15$1':'حلوا شکری بزرگ', '0$15$2':'حلوا شکری فله‌ای', '0$15$3':'ارده', '0$15$4':'حلوا ارده', '0$15$5':'گردو', '0$15$6':'بادام', '0$15$7':'مربای انجیر', '0$15$8':'مربای هویج', '0$15$9':'مربای زنجبیل', '0$15$10':'مربای به', '0$15$11':'مربای آلبالو', '0$15$12':'کره', '0$15$13':'کره بادام', '0$15$14':'کره پسته', '0$15$15':'کورن فلکس', '0$15$16':'عسل', '0$15$17':'کرم کنجد', '0$15$18':'شکلات صبحانه قهوه‌ای', '0$15$19':'شکلات صبحانه دورنگ', '0$16$0':'ازگیل', '0$16$1':'انار', '0$16$2':'انبه', '0$16$3':'انجیر', '0$16$4':'انگور', '0$16$5':'آلبالو', '0$16$6':'آلو', '0$16$7':'آناناس', '0$16$8':'آواکادو', '0$16$9':'بادام', '0$16$10':'بالنگ', '0$16$11':'بلوط', '0$16$12':'به', '0$16$13':'پرتغال', '0$16$14':'پرتغال تامسون', '0$16$15':'پرتغال خونی', '0$16$16':'پرتغال محلی', '0$16$17':'پسته', '0$16$18':'تمشک', '0$16$19':'توت سفید', '0$16$20':'توت فرنگی', '0$16$21':'توت', '0$16$22':'خربزه', '0$16$23':'خرما', '0$16$24':'خرمالو', '0$16$25':'خیار', '0$16$26':'ذرت', '0$16$27':'زالزالک', '0$16$28':'زرد آلو', '0$16$29':'زرشک', '0$16$30':'زغال اخته', '0$16$31':'زنجبیل', '0$16$32':'زیتون', '0$16$33':'سنجد', '0$16$34':'سیب زرد', '0$16$35':'سیب سبز', '0$16$36':'سیب سرخ', '0$16$37':'سیب سفید', '0$16$38':'سیب قندک', '0$16$39':'سیب گلاب', '0$16$40':'شاه توت', '0$16$41':'شفتالو', '0$16$42':'شلیل', '0$16$43':'طالبی', '0$16$44':'عناب', '0$16$45':'فندق', '0$16$46':'کدو', '0$16$47':'کیوی', '0$16$48':'گردو', '0$16$49':'گریپ فروت', '0$16$50':'گلابی', '0$16$51':'گلابی زرد', '0$16$52':'گلابی قرمز', '0$16$53':'گوجه سبز', '0$16$54':'گیلاس', '0$16$55':'لیمو', '0$16$56':'لیموترش', '0$16$57':'موز', '0$16$58':'نارگیل', '0$16$59':'نارنج', '0$16$60':'نارنگی', '0$16$61':'هلو', '0$16$62':'هلو انجیری', '0$16$63':'هندوانه', '0$17$0':'اسفناج', '0$17$1':'بادمجان', '0$17$2':'بادمجان دلمه‌ای', '0$17$3':'باقلا', '0$17$4':'بامیه', '0$17$5':'برگ چغندر', '0$17$6':'پیاز', '0$17$7':'پیاز سفید', '0$17$8':'پیاز قرمز', '0$17$9':'پیاز کوهی', '0$17$10':'ترب', '0$17$11':'ترب سیاه', '0$17$12':'تربچه', '0$17$13':'تره', '0$17$14':'تلخون', '0$17$15':'جعفری', '0$17$16':'جلبک دریایی', '0$17$17':'جوانه ها', '0$17$18':'چغندر', '0$17$19':'خردل', '0$17$20':'خیار', '0$17$21':'دنبلان', '0$17$22':'ذرت', '0$17$23':'ریحان', '0$17$24':'زیتون', '0$17$25':'سبزی آش', '0$17$26':'سبزی آش آماده', '0$17$27':'سبزی خوردنی', '0$17$28':'سبزی خوردنی آماده', '0$17$29':'سبزی قورمه سبزی', '0$17$30':'سبزی قورمه‌سبزی(آماده)', '0$17$31':'سبزی کوکو', '0$17$32':'سبزی کوکو(آماده)', '0$17$33':'سبزی کوهی', '0$17$34':'سبزیجات خرد شده', '0$17$35':'سیب زمینی', '0$17$36':'سیر', '0$17$37':'شاه تره', '0$17$38':'شاهی', '0$17$39':'شلغم', '0$17$40':'شنبلیله', '0$17$41':'شوید', '0$17$42':'علف چشمه', '0$17$43':'فلفل', '0$17$44':'فلفل دلمه‌ای', '0$17$45':'قارچ', '0$17$46':'کاسنی', '0$17$47':'کاکوتی', '0$17$48':'کاهو', '0$17$49':'کدو', '0$17$50':'کدو تنبل', '0$17$51':'کرفس', '0$17$52':'کلم برکلی', '0$17$53':'کلم پیچ', '0$17$54':'کلم سفید', '0$17$55':'کلم قرمز', '0$17$56':'کنگر', '0$17$57':'گزنه', '0$17$58':'گشنیز', '0$17$59':'گل کلم', '0$17$60':'گوجه فرنگی', '0$17$61':'لوبیا سبز', '0$17$62':'مارچوبه', '0$17$63':'مرزنگوش', '0$17$64':'مرزه', '0$17$65':'موسیر', '0$17$66':'نخود سبز', '0$17$67':'نخود فرنگی', '0$17$68':'نعناع', '0$17$69':'هویج', '0$17$70':'هویج خرد شده خورشتی', '0$17$71':'هویج خرد شده سوپی', '0$18$0':'باقالی پلو با ماهی قزل آلا', '0$18$1':'چلو کباب میکس', '0$18$2':'باقالی پلو با ماهیچه', '0$18$3':'چلو کباب شیشلیک', '0$18$4':'زرشک پلو با مرغ', '0$18$5':'باقالی پلو با مرغ', '0$18$6':'چلو مرغ و بادمجان', '0$18$7':'چلو مرغ', '0$18$8':'زرشک پلو', '0$18$9':'خوراک ماهی قزل آلا', '0$18$10':'باقالی پلو', '0$18$11':'چلو خورشت قرمه سبزی', '0$18$12':'چلو خورشت قیمه', '0$18$13':'خورش قیمه', '0$18$14':'خورش قرمه سبزی', '0$18$15':'خورشت قیمه بادمجان', '0$18$16':'ترشی ها', '0$18$17':'سس ها', '0$18$18':'کشک بادمجان', '0$18$19':'میرزا قاسمی', '0$18$20':'سوپ جو', '0$18$21':'پنیر', '0$18$22':'سیب زمینی مکزیکی', '0$18$23':'ماست و اسفناج', '0$18$24':'ماست و خیار', '0$18$25':'ماست', '0$18$26':'زیتون سیاه و سبز', '0$18$27':'سبزی خوردن', '0$18$28':'سالاد شیرازی', '0$18$29':'سالاد سزار', '0$18$30':'سالاد فصل', '0$18$31':'سالاد گرجی', '0$18$32':'سالاد یونانی', '0$18$33':'چلو کباب میکس', '0$18$34':'چلو کباب لقمه بادمجان', '0$18$35':'چلو کباب رول میکس', '0$18$36':'چلو کباب وزیری', '0$18$37':'جوجه کباب جوجه با استخوان', '0$18$38':'چلو کباب جوجه', '0$18$39':'چلو کباب لقمه', '0$18$40':'چلو کباب کوبیده', '0$18$41':'چلو کباب بختیاری', '0$18$42':'کباب بلغاری', '0$18$43':'چلو کباب برگ', '0$18$44':'چلو کباب فیله', '0$18$45':'چلو کباب شیشلیک', '0$18$46':'چلو کباب سلطانی', '0$18$47':'چلو گردن', '0$19$0$0':'کارامل گلاسه', '0$19$0$1':'تیرامیسو گلاسه', '0$19$0$2':'کوکا گلاسه', '0$19$0$3':'میوه گلاسه', '0$19$0$4':'شاه توت', '0$19$0$5':'طالبی گلاسه', '0$19$0$6':'فانتا گلاسه', '0$19$0$7':'شکلات گلاسه', '0$19$0$8':'کافه گلاسه', '0$19$1$0':'اسموتی لیمو', '0$19$1$1':'اسموتی پرتقال', '0$19$1$2':'آبمیوه مخصوص', '0$19$1$3':'آبمیوه', '0$19$1$4':'شیر سرد', '0$19$1$5':'ماءالشعیر بدون الکل', '0$19$2$0':'شیر قهوه', '0$19$2$1':'شیر نسکافه', '0$19$2$2':'قهوه ترک', '0$19$2$3':'قهوه فرانسه', '0$19$2$4':'نسکافه', '0$19$2$5':'اسپرسو', '0$19$2$6':'دابل اسپرسو', '0$19$2$7':'هات چاکلت', '0$19$2$8':'کاپوچینو با کف شیر', '0$19$2$9':'کاپوچینو با کف خامه', '0$19$2$10':'کاپو ایرانی با کف قهوه', '0$19$2$11':'شیر کاکائو', '0$19$2$12':'چای ساده', '0$19$2$13':'چای نعنا', '0$19$2$14':'چای سبز طعم دار', '0$19$2$15':'چای نبات', '0$19$2$16':'چای دارچین', '0$19$2$17':'چای نبات‌طعم‌دار(میوه‌ای)', '0$19$3$0':'میلک شیک', '0$19$3$1':'میلک شیک قهوه', '0$19$3$2':'میلک شیک شکلات', '0$19$3$3':'میلک شیک کاپوچینو', '0$19$3$4':'میلک شیک تیرامیسو', '0$19$3$5':'میلک شیک کارامل', '0$19$3$6':'میلک شیک کاکائو', '0$19$3$7':'میلک شیک خرما', '0$19$3$8':'هانی شیک', '0$19$3$9':'میلک شیک وانیل', '0$19$3$10':'میلک شیک میوه', '0$19$3$11':'میلک شیک فانتا', '0$19$3$12':'میلک شیک نسکافه', '0$19$3$13':'میلک شیک طالبی', '0$19$3$14':'میلک شیک طالبی', '0$19$4$0':'بستنی ساین شاین', '0$19$4$1':'کیک بستنی ساندی', '0$19$4$2':'بنانا اسپلیت', '0$19$4$3':'کوکتل میوه و بستنی', '0$19$4$4':'شکلات ساندی', '0$19$4$5':'بستنی میوه‌ای', '0$19$4$6':'بستنی با ژله و خامه', '0$19$4$7':'کوکتل آناناس', '0$19$4$8':'بستنی خامه هلویی', '0$19$4$9':'بستنی کارامل نسکافه', '0$19$4$10':'بستنی ایتالیایی', '0$19$4$11':'بستنی شکلاتی', '0$19$4$12':'بستنی وانیلی', '0$19$4$13':'بستنی طالبی', '0$19$4$14':'بستنی شاه توت', '0$19$4$15':'بستنی تیرامیسو', '0$20$0':'پیتزا', '0$20$1':'بیف', '0$20$2':'قارچ و مرغ', '0$20$3':'قارچ و گوشت', '0$20$4':'زبان', '0$20$5':'پیده', '0$20$6':'فلادیلفیا', '0$20$7':'سوخاری', '0$20$8':'ساندویج ', '0$20$9':'همبرگر', '0$20$10':'کالباس', '0$20$11':'سوسیس', '0$20$12':'زبان', '0$20$13':'مغز', '0$20$14':'هات داگ', '0$20$15':'ژامبون', '0$20$16':'کنتاکی', '0$20$17':'پاستا', '1$0$0':'تلویزیون', '1$0$1':'کنسول بازی', '1$0$2':'ضبط و پخش‌‌کننده ‌دیجیتال', '1$0$3':'ضبط کننده صدا', '1$0$4':'موزیک پلیر', '1$0$5':'اف ام پلیر', '1$0$6':'پخش کننده دی وی دی', '1$0$7':'گیرنده دیجیتال', '1$0$8':'ساندبار', '1$0$9':'بلوری پلیر', '1$0$10':'سینمای خانگی', '1$0$11':'میکروفون', '1$0$12':'اسپیکر', '1$0$13':'رادیو', '1$0$14':'عینک و هدست مجازی', '1$0$15':'واکی تاکی', '1$0$16':'میز تلویزیون', '1$0$17':'آمپلی فایر', '1$0$18':'باتری قلمی و شارژر', '1$0$19':'بلندگوی سقفی', '1$0$20':'براکت دیواری', '1$0$21':'محافظ و چند راهی برق', '1$0$22':'استابیلایزر', '1$0$23':'لوازم جانبی کنسول بازی', '1$0$24':'دسته بازی', '1$0$25':'فرمان ماشین بازی', '1$0$26':'جوی استیک', '1$0$27':'کینکت', '1$0$28':'صندلی گیمینگ', '1$0$29':'میز گیمنگ', '1$0$30':'عینک سه بعدی', '1$0$31':'ریموت کنترل', '1$0$32':'کابل AUX', '1$0$33':'محافظ صفحه تلویزیون', '1$0$34':'کابل HDMI', '1$0$35':'دوربین عکاسی', '1$0$36':'دوربین فیلم برداری', '1$0$37':'لنز دوربین عکاسی', '1$0$38':'تلسکوپ', '1$0$39':'دوربین ورزشی', '1$0$40':'دوربین دو چشمی', '1$0$41':'کیف دوربین', '1$0$42':'پایه و سه پایه دوربین', '1$0$43':'فلاش استودیویی', '1$0$44':'شکل دهنده نور', '1$0$45':'رادیو تریگر', '1$0$46':'پرده و پایه پرده', '1$0$47':'میز نور عکاسی', '1$0$48':'فلاش دوربین', '1$0$49':'نورسنج و کالرمتر', '1$0$50':'فیلترها و لوازم جانبی لنز', '1$0$51':'ریموت دوربین', '1$0$52':'محافظ صفحه دوربین', '1$0$53':'کیت فلاش آتلیه', '1$0$54':'سافت باکس آتلیه', '1$0$55':'قاب عکس دیجیتال', '1$0$56':'هود لنز', '1$0$57':'سر سه پایه', '1$0$58':'آداپتور و کانورتر دوربین', '1$0$59':'نور ثابت فوتوفلکس', '1$0$60':'باتری و شارژر دوربین', '1$0$61':'راهنمای فارسی دوربین', '1$0$62':'گریپ دوربین', '1$0$63':'چادر عکاسی', '1$0$64':'رفلکتور', '1$0$65':'پنکه آتلیه', '1$0$66':'فیلم دوربین', '1$0$67':'فون عکاسی', '1$0$68':'میکروفون دوربین', '1$0$69':'تجهیزات آتلیه', '1$0$70':'لوازم جانبی تلسکوپ', '1$1$0':'آب میوه گیر', '1$1$1':'آرام پز', '1$1$2':'اسپرسوساز', '1$1$3':'آسیاب برقی', '1$1$4':'آون برقی', '1$1$5':'پارچ برقی', '1$1$6':'پاستا پز', '1$1$7':'پلوپز', '1$1$8':'توستر', '1$1$9':'چای ساز', '1$1$10':'چرخ گوشت', '1$1$11':'خرد کن', '1$1$12':'ساندویچ ساز', '1$1$13':'سرخ کن', '1$1$14':'سماور برقی', '1$1$15':'غذا ساز', '1$1$16':'قهوه جوش', '1$1$17':'قهوه ساز', '1$1$18':'کباب پز', '1$1$19':'کتری برقی', '1$1$20':'گوشت کوب برقی', '1$1$21':'ماشین ظرفشویی', '1$1$22':'ماشین لباسشویی', '1$1$23':'ماکروفر', '1$1$24':'ماکروویو', '1$1$25':'مخلوط کن', '1$1$26':'میوه و سبزی خشک کن', '1$1$27':'هم‌زن برقی', '1$1$28':'همزن کاسه دار', '1$1$29':'هود', '1$1$30':'یخچال', '1$1$31':'یخچال ساید‌بای‌ساید', '1$1$32':'یخچال فریزر', '1$1$33':'هواپز', '1$1$34':'سوپ ساز', '1$1$35':'آب پرتغال گیری', '1$1$36':'تخم‌مرغ پز', '1$1$37':'بخار پز', '1$1$38':'ساندویچ ساز', '1$1$39':'گریل', '1$1$40':'بستنی ساز', '1$1$41':'سبزی خرد‌کن', '1$1$42':'کیک پز و نان پز', '1$1$43':'کف شیر و خامه ساز', '1$1$44':'آبسرد کن', '1$1$45':'جارو برقی', '1$1$46':'جارو شارژی', '1$1$47':'بخار شوی', '1$1$48':'اتو', '1$1$49':'کولر', '1$1$50':'تصفیه هوا', '1$1$51':'تصفیه آب', '1$1$52':'بخور گرم', '1$1$53':'بخور سرد', '1$1$54':'کف و سرامیک شو', '1$1$55':'خشک کن لباس', '1$1$56':'مینی واش', '1$1$57':'اتو بخار پرس', '1$2$0':'مبل', '1$2$1':'تختخواب', '1$2$2':'میز غذاخوری', '1$2$3':'میز عسلی', '1$2$4':'صندلی غذاخوری', '1$2$5':'صندلی مطالعه', '1$2$6':'فرش ماشینی', '1$2$7':'فرش دست باف', '1$2$8':'تابلو فرش', '1$2$9':'بوفه', '1$2$10':'میز تلویزیون', '1$2$11':'روانداز مبل', '1$2$12':'ساعت دیواری', '1$2$13':'لوستر', '1$2$14':'آباژور', '1$2$15':'گلدان', '1$2$16':'گل طبیعی', '1$2$17':'گل مصنوعی', '1$2$18':'سرویس خواب', '1$2$19':'روتختی', '1$2$20':'پتو', '1$2$21':'بالش', '1$2$22':'کوسن', '1$2$23':'پادری', '1$2$24':'رو بالشی', '1$2$25':'محافظ تشک', '1$2$26':'تشک', '1$2$27':'لحاف', '1$2$28':'بالش', '1$2$29':'متکا', '1$2$30':'آباژور رو میزی', '1$2$31':'روبالشی', '1$2$32':'رختخواب', '1$2$33':'خوشخواب', '1$2$34':'پتو', '1$2$35':'ملحفه', '1$2$36':'چراغ مطالعه', '1$2$37':'قفل', '1$2$38':'در باز کن', '1$2$39':'کلید', '1$2$40':'آرام بند', '1$2$41':'چرخ خیاطی', '1$2$42':'درب قوطی باز کن', '1$2$43':'کباب پز و باربیکیو', '1$2$44':'چشمه شکلات', '1$2$45':'گاوصندوق', '1$2$46':'مخزن آب', '1$2$47':'تخته گوشت', '1$2$48':'رنده و پوست کن', '1$2$49':'زیر قاشقی کنار گاز', '1$2$50':'کفگیر و ملاقه', '1$2$51':'دستمال نظافت', '1$2$52':'کمد و کتابخانه', '1$2$53':'میز اتو', '1$2$54':'جا کفشی', '1$2$55':'بند رخت', '1$2$56':'ظروف ملامین', '1$2$57':'قوری چینی', '1$2$58':'قندان', '1$2$59':'ترازوی آشپزخانه', '1$3$0$0':'سطل و تی', '1$3$0$1':'زمین شوی', '1$3$0$2':'ست جارو و خاک انداز', '1$3$0$3':'فرچه', '1$3$0$4':'پایه رول دستمال ', '1$3$0$5':'دستمال توالت ', '1$3$0$6':'دستکش نظافت ', '1$3$0$7':'گرد گیر', '1$3$0$8':'سبد رخت چرک', '1$3$0$9':'بند رخت', '1$3$0$10':'گیره لباس', '1$3$0$11':'پرزگیر', '1$3$0$12':'کیسه زباله', '1$3$0$13':'اسکاچ ', '1$3$0$14':'سیم ظرفشویی', '1$3$1$0':'مخزن مایع دستشویی', '1$3$1$1':'ست سرویس بهداشتی', '1$3$1$2':'پمپ چاه بازکن', '1$3$1$3':'پادری', '1$3$1$4':'جای مایع ظرفشویی', '1$3$1$5':'تی و شیشه شوی', '1$3$1$6':'جای پودر شوینده', '1$3$1$7':'جارو و خاک انداز', '1$3$1$8':'جای دستمال کاغذی', '1$3$1$9':'آبکش و لگن', '1$3$1$10':'سرویس حمام', '1$3$1$11':'برس بهداشتی', '1$3$1$12':'جای اسکاج و صابون', '1$3$1$13':'سطل زباله', '1$3$1$14':'حوله دستی', '1$3$1$15':'فرچه دستشویی', '1$3$1$16':'لوازم حمام', '1$3$1$17':'وان حمام', '1$3$1$18':'پرده حمام', '1$3$1$19':'دمپایی', '1$3$1$20':'بند سیار', '1$3$1$21':'ابزار حمام', '1$3$1$22':'حوله حمام', '1$3$1$23':'لیف و اسفنج', '1$3$1$24':'سنگ پا', '1$3$2$0':'کرم مرطوب کننده', '1$3$2$1':'ژل مرطوب کننده', '1$3$2$2':'مسواک', '1$3$2$3':'خمیر دندان', '1$3$2$4':'نخ دندان', '1$3$2$5':'خلال دندان', '1$3$2$6':'گوش پاکن', '1$3$2$7':'شانه', '1$3$2$8':'صابون جامد', '1$3$2$9':'صابون مایع', '1$3$2$10':'صابون مراغه', '1$3$2$11':'شامپو', '1$3$2$12':'شامپو بچه', '1$3$2$13':'شامپو بدن', '1$3$2$14':'شامپو بدن کودک', '1$3$2$15':'ماسک', '1$3$2$16':'الکل', '1$3$2$17':'پوشاک بچه', '1$3$2$18':'نوار  بهداشتی', '1$3$2$19':'ژل بانوان', '1$3$2$20':'پودر نظافت', '1$3$2$21':'تیغ اصلاح', '1$3$2$22':'خودتراش', '1$3$3$0':'نرم کننده', '1$3$3$1':'پودر لباسشویی دست', '1$3$3$2':'پودر لباسشویی ماشین', '1$3$3$3':'مایع دستشویی بزرگ', '1$3$3$4':'مایع دستشویی کوچک', '1$3$3$5':'مایع ظرف‌شویی بزرگ', '1$3$3$6':'مایع ظرف‌شویی کوچک', '1$3$3$7':'دستمال', '1$3$3$8':'بوگیر', '1$3$3$9':'سفید کننده', '1$3$3$10':'جرم گیر', '1$3$3$11':'اسکاچ', '1$3$3$12':'دستکش ظرف شویی', '1$3$3$13':'سیم ظرفشویی', '1$3$3$14':'قرص ماشین‌ظرفشویی', '1$3$3$15':'پودر ماشین‌ظرفشویی', '1$3$3$16':'ژل ماشین ظرفشویی', '1$3$3$17':'شیشه پاک کن', '1$3$3$18':'پاک کننده چند منظوره', '1$3$3$19':'پودر بچه', '1$3$3$20':'حشره کش', '1$3$3$21':'عود', '1$3$3$22':'ظروف یکبار مصرف', '1$3$3$23':'چسب زخم', '1$3$3$24':'الکل', '1$3$3$25':'محلول ضدعفونی دست', '1$3$3$26':'محلول ضدعفونی میوه و سبزیجات', '1$3$3$27':'دستمال کاغذی قوطی', '1$3$3$28':'دستمال مرطوب', '1$3$3$29':'دستمال کاغذی جیبی', '1$3$3$30':'دستمال توالت', '1$3$3$31':'دستمال کاغذی حوله‌ای', '1$3$3$32':'دستمال کاغذی ماشین', '1$4$0':'کولر گازی', '1$4$1':'کولر آبی', '1$4$2':'تصفیه هوا', '1$4$3':'پنکه', '1$4$4':'بخاری گازی', '1$4$5':'بخاری برقی', '1$4$6':'رادیاتور برقی', '1$4$7':'آبگرمکن', '1$4$8':'پکیج دیواری', '1$4$9':'فن هیتر', '1$4$10':'شوفاژ رادیاتور', '1$4$11':'کشوی گرمکن', '1$4$12':'لوازم جانبی کولر', '1$4$13':'شناور کولر', '1$4$14':'تسمه کولر', '1$4$15':'آبریز پوشال', '1$4$16':'فلکه موتور', '1$4$17':'یاتاقان', '1$4$18':'فن کویل', '1$4$19':'هواساز', '1$4$20':'پرده هوا', '1$4$21':'چیلر', '1$4$22':'لوازم جانبی پکیج های گرمایشی', '1$4$23':'دستگاه تصفیه آب', '1$4$24':'اجاق گاز', '1$4$25':'آبسردکن', '1$5$0':'لوستر و نورپردازی', '1$5$1':'پروژکتور', '1$5$2':'پنل اچ لایت', '1$5$3':'لامپ', '1$5$4':'مهتابی', '1$5$5':'لوستر', '1$5$6':'آویز', '1$5$7':'دیوارکوب', '1$5$8':'چراغ دیواری', '1$5$9':'آباژور', '1$5$10':'چراغ رومیزی', '1$5$11':'هالوژن', '1$5$12':'چراغ اضطراری', '1$5$13':'چراغ خواب', '1$5$14':'کف ال ای دی', '1$6$0':'مبل', '1$6$1':'میز و صندلی ناهارخوری', '1$6$2':'میز عسلی', '1$6$3':'مبل تخت خوابشو', '1$6$4':'بوفه', '1$6$5':'کمد و دراور', '1$6$6':'تخت یک نفره', '1$6$7':'تخت دو نفره', '1$6$8':'میز جلو مبلی', '1$6$9':'میز دکوری', '1$6$10':'پاتختی', '1$6$11':'جالباسی', '1$6$12':'جاکفشی', '1$6$13':'فرش دستبافت', '1$6$14':'گلیم و جاجیم', '1$6$15':'فرش تزیینی', '1$6$16':'روفرشی', '1$6$17':'فرش ماشینی', '1$6$18':'موکت', '1$6$19':'باکس', '1$6$20':'کتابخانه', '1$6$21':'پرده', '1$6$22':'ملزومات پرده', '1$6$23':'صندلی اپن', '1$6$24':'صندلی', '1$6$25':'صندلی کودک و نوجوان', '1$6$26':'سرویس تخت و کمد', '1$6$27':'میز تحریر', '1$6$28':'گرامافون', '1$6$29':'پشتی سنتی', '1$6$30':'ملزومات فرش', '1$6$31':'لوازم تزئینی', '1$6$32':'هفت سین', '1$6$33':'زیر سیگاری', '1$6$34':'آبگینه و چینی', '1$6$35':'محصولات مسی', '1$6$36':'مجسمه', '1$6$37':'تابلو فرش', '1$6$38':'تلفن کلاسیک', '1$6$39':'جعبه', '1$6$40':'باکس', '1$6$41':'شلف', '1$6$42':'استند', '1$6$43':'سطل زباله', '1$6$44':'جا دستمال', '1$6$45':'ساعت تزئینی', '1$6$46':'صنایع هنری و دستی', '1$6$47':'تابلو تزئینی', '1$6$48':'شمع و جا شمعی', '1$6$49':'گلدان', '1$6$50':'قاب عکس', '1$6$51':'آینه', '1$6$52':'آینه و کنسول', '1$6$53':'گل مصنوعی', '1$6$54':'ظروف دکوری', '1$6$55':'طبقه دیواری', '1$6$56':'قفسه کتاب', '1$6$57':'میز و صندلی کافه', '1$6$58':'کاغذ دیواری', '1$6$59':'استیکر و پوستر', '1$7$0':'وسایل سرو و پذیرایی', '1$7$1':'استکان', '1$7$2':'بستنی خوری', '1$7$3':'پارچ پیاله تخته چوبی', '1$7$4':'جای نان', '1$7$5':'چاقو چنگال', '1$7$6':'چنگال میوه خوری', '1$7$7':'سطل و جا دستمال کاغذی', '1$7$8':'چوب غذا خوری', '1$7$9':'در بازکن کنسرو و بطری', '1$7$10':'دیس بزرگ', '1$7$11':'سرویس چینی', '1$7$12':'سرویس قاشق و چنگال', '1$7$13':'سرویس نمکدان و فلفل‌دان', '1$7$14':'آسیاب دستی فلفل و نمک', '1$7$15':'روغن ریز', '1$7$16':'قندان', '1$7$17':'سرویس پیرکس', '1$7$18':'سینی', '1$7$19':'صافی چای', '1$7$20':'ظرف سالاد', '1$7$21':'ظرف یخ', '1$7$22':'ظرف روغن مایع', '1$7$23':'ظروف آجیل‌خوری', '1$7$24':'ظروف غذا‌خوری', '1$7$25':'ظروف کیک‌خوری', '1$7$26':'ظروف میوه‌خوری', '1$7$27':'فنجان', '1$7$28':'نعلبکی', '1$7$29':'قاشق ادویه', '1$7$30':'قاشق چایخوری', '1$7$31':'قاشق سوپ خوری', '1$7$32':'قاشق شربت خوری', '1$7$33':'قاشق عسل چوبی', '1$7$34':'قاشق غذا‌خوری', '1$7$35':'قاشق مرباخوری', '1$7$36':'قاشق و چنگال سالاد', '1$7$37':'قالب یخ', '1$7$38':'قهوه خوری', '1$7$39':'قوری', '1$7$40':'کارد میوه خوری', '1$7$41':'کارد و کفگیر کیک تولد', '1$7$42':'کاسه', '1$7$43':'کاسه آبگوشت', '1$7$44':'کاسه چوبی', '1$7$45':'کاسه سرامیکی', '1$7$46':'کاسه شیشه‌ای', '1$7$47':'کتری', '1$7$48':'کفگیر', '1$7$49':'گیره سالاد', '1$7$50':'گیره یخ', '1$7$51':'لیوان پلاستیکی', '1$7$52':'لیوان چینی', '1$7$53':'لیوان شیشه‌ای', '1$7$54':'لیوان فلزی', '1$7$55':'لیوان مسی', '1$7$56':'لیوان نی دار', '1$7$57':'ملاقه', '1$7$58':'نعلبکی', '1$7$59':'نی', '1$8$0':'اجاق گاز', '1$8$1':'فر توکار', '1$8$2':'گاز رومیزی', '1$8$3':'هود', '1$8$4':'سینک', '1$8$5':'توری سینک', '1$8$6':'گاز پیک نیک', '1$8$7':'توری گریل مرغ و ماهی', '1$8$8':'زود پز', '1$8$9':'زیر قابلمه', '1$8$10':'سرویس چاقو', '1$8$11':'سرویس قابلمه استیل', '1$8$12':'سرویس قابلمه گرانیتی', '1$8$13':'سماور گازی', '1$8$14':'سینی فر', '1$8$15':'شعله پخش کن', '1$8$16':'شیر جوش', '1$8$17':'قابلمه', '1$8$18':'ماهی تابه', '1$9$0':'صافی و سبد', '1$9$1':'سبد میوه', '1$9$2':'سبد نان و سبزی', '1$9$3':'سرویس پلاسکو', '1$9$4':'آبچکان', '1$9$5':'باکس و جانانی', '1$9$6':'پارچ و لیوان', '1$9$7':'چهارپایه', '1$9$8':'فریزری', '1$9$9':'جابرنجی', '1$9$10':'گیره و چوب لباسی', '1$9$11':'سبد لباس', '1$9$12':'آب میوه گیری', '1$9$13':'جعبه لوازم خیاطی', '1$9$14':'سبد خرید و زنبیل', '1$9$15':'جا سيب زمينی و پياز', '1$9$16':'جاقاشقی', '1$9$17':'قالب ها', '1$9$18':'سینی و پذیرایی', '1$9$19':'کاسه و بشقاب', '1$9$20':'نمکپاش و شکرپاش', '1$9$21':'بانکه ها', '1$10$0':'کاسه و بشقاب بلور', '1$10$1':'آبلیمو خوری', '1$10$2':'ادویه پاش بلور', '1$10$3':'نمک پاش بلور', '1$10$4':'شکرپاش بلور', '1$10$5':'بطری آب', '1$10$6':'بانکه حبوبات', '1$10$7':'بانکه ادویه', '1$10$8':'سرویس حبوبات', '1$10$9':'لیوان شیشه‌ای', '1$10$10':'قندان بلور', '1$10$11':'پارچ آب', '1$10$12':'فریزر و ماکروویو', '1$10$13':'دکوریجات', '1$10$14':'تنگ بلور', '1$10$15':'گلدان های بلور', '1$11$0':'فایل و درایور', '1$11$1':'صندلی پلاستیکی', '1$11$2':'میز پلاستیکی', '1$11$3':'پلاستیک صنعتی', '1$11$4':'سبد پلاستیکی', '1$11$5':'مخزن زباله', '1$11$6':'آبپاش', '1$11$7':'گلدان پلاستیکی', '1$11$8':'کلمن آب پلاستیکی', '1$11$9':'فلاسک', '1$11$10':'بادبزن مسافرتی', '1$11$11':'غلاف سیخ', '1$11$12':'سرویس مسافرتی', '1$11$13':'سبد پیک نیک', '1$12$0$0':'آهن', '1$12$0$1':'پولیش', '1$12$0$2':'مینی فرز و انگشتی', '1$12$1$0':'دریل بتن کن', '1$12$1$1':'پیکور و چکش تخریب', '1$12$1$2':'شیارزن', '1$12$2$0':'شارژی', '1$12$2$1':'همزن', '1$12$2$2':'ساده', '1$12$2$3':'مگنت', '1$12$2$4':'چکشی', '1$12$2$5':'ستونی', '1$12$2$6':'گیربکسی', '1$12$2$7':'نمونه بردار', '1$12$2$8':'پیچ گوشتی و غیره', '1$12$3$0':'ماله لب گرد ایزوگامی', '1$12$3$1':' نایلون و گونی', '1$12$3$2':'گونی نم', '1$12$4$0':'انواع پیستوله بادی', '1$12$4$1':'پیستوله رنگ', '1$12$4$2':'کنیتکس پاش', '1$12$4$3':'گازوئیل پاش', '1$12$4$4':'قیر پاش', '1$12$4$5':'باد پاش', '1$12$4$6':'دریل و پیچ گوشتی بادی', '1$12$4$7':'منگنه کوب بادی', '1$12$4$8':'میخ کوب بادی', '1$12$4$9':'اتصالات بادی', '1$12$4$10':'کمپرسور باد', '1$12$4$11':'جغجغه بادی', '1$12$4$12':'بکس بادی', '1$12$4$13':'پرچ بادی', '1$12$5$0':'اره سامورایی', '1$12$5$1':'اره سامورایی دسته چوبی', '1$12$5$2':'بیلچه باغبانی', '1$12$5$3':'بیلچه مقنی', '1$12$5$4':'چهار شاخ', '1$12$5$5':'داس ایرانی', '1$12$5$6':'داس چینی', '1$12$5$7':'داسک درخت زنی', '1$12$5$8':'زنگوله', '1$12$5$9':'شفره', '1$12$5$10':'شن کش', '1$12$5$11':'قورچه', '1$12$6$0':'منگنه کوب شارژی', '1$12$6$1':'میخکوب شارژی', '1$12$6$2':'جارو شارژی', '1$12$6$3':'دمنده و مکنده', '1$12$6$4':'منگنه کوب برقی', '1$12$6$5':'سشوار صنعتی', '1$12$6$6':'آچار بکس برقی', '1$12$6$7':'میخ کوب برقی', '1$12$6$8':'پروفیل بر', '1$12$6$9':'هویه و لحیم', '1$12$6$10':'کارواش خانگی و صنعتی', '1$12$7$0':'آچار‌ فرانسه', '1$12$7$1':'آچار شلاقی', '1$12$7$2':'آچار بکس', '1$12$7$3':'آچار آلن', '1$12$7$4':'جعبه ابزار', '1$12$7$5':'کیف ابزار', '1$12$7$6':'انبر دست', '1$12$7$7':'سیم چین', '1$12$7$8':'دم باریک', '1$12$7$9':'انبر پرچ', '1$12$7$10':'انبر قفلی', '1$12$7$11':'پیچ گوشتی', '1$12$7$12':'فازمتر', '1$12$7$13':'پیچ گوشتی چهارسو', '1$12$7$14':'پیچ گوشتی دوسو', '1$12$7$15':'پیچ گوشتی ستاره ای', '1$12$7$16':'سری پیچ گوشتی', '1$12$7$17':'ست پیچگوشتی', '1$12$7$18':'چکش', '1$12$7$19':'پتک', '1$12$7$20':'تیشه', '1$12$7$21':'کاردک', '1$12$7$22':'منگنه کوب دستی', '1$12$7$23':'کاتر', '1$12$7$24':'سرامیک بر', '1$12$7$25':'کمان اره', '1$12$7$26':'قیچی مفتول بری', '1$12$8$0':'برس سیمی پلاستیکی', '1$12$8$1':'برس سیمی چینی', '1$12$8$2':'پتک‌ جور کیلویی', '1$12$8$3':'تخته ماله شطرنجی', '1$12$8$4':'ترازو استوانه ایی', '1$12$8$5':'ترازو دیجیتال دستی', '1$12$8$6':'ترازو دیجیتال گرمی', '1$12$8$7':'تلمبه باد کوچک و بزرگ', '1$12$8$8':'تله موش قفسه ایی', '1$12$8$9':'توپی تگری پاش', '1$12$8$10':'تیشه بنایی با دسته', '1$12$8$11':'چسب پنچرگیری', '1$12$8$12':'چکش تمام لاستیکی', '1$12$8$13':'چکش لاستیکی دسته چوبی', '1$12$8$14':'درب بخاری گالوانیزه', '1$12$8$15':'دریچه نما پلاستیکی', '1$12$8$16':'دستکش لاستیکی', '1$12$8$17':'روغن دان هندی', '1$12$8$18':'زنجیرقلاده بند قرمز', '1$12$8$19':'سطل پلاستیکی', '1$12$8$20':'سطل مقنی فلزی', '1$12$8$21':'سوزن جوالدوز', '1$12$8$22':'سیم شاقول', '1$12$8$23':'شاقول مغناطیسی', '1$12$8$24':'صلیب کاشی', '1$12$8$25':'طناب بند رخت فلزی', '1$12$8$26':'طناب بندرخت ۱۰متری', '1$12$8$27':'طناب بندرخت ۲۰متری', '1$12$8$28':'قرقره بنایی بزرگ', '1$12$8$29':'قرقره بنایی سوپر', '1$12$8$30':'قرقره بنایی متوسط', '1$12$8$31':'قلم بنایی جور ایرانی', '1$12$8$32':'کاتر پلاستیکی', '1$12$8$33':'کلمن آب', '1$12$8$34':'کمان اره پلاستیکی', '1$12$8$35':'کمچه بندکشی', '1$12$8$36':'کمچه طرح موسوی', '1$12$8$37':'ماله بزرگ معمولی', '1$12$8$38':'ماله بند کشی', '1$12$8$39':'ماله پشت بسته سید', '1$12$8$40':'ماله کوچک معمولی', '1$12$8$41':'ملاقه بنایی', '1$12$8$42':'نخ ریسمانکار', '1$12$8$43':'همتراز و کلیپس کاشی', '1$12$9$0':'فرغون آذر ابزار', '1$12$9$1':'فرغون آذین', '1$12$9$2':'فرغون پارس اصل', '1$12$9$3':'فرغون پارس', '1$12$9$4':'فرغون پروفیلی', '1$12$9$5':'فرغون جوشی', '1$12$10$0':'دسته پتک ممتاز', '1$12$10$1':'دسته پتک معمولی', '1$12$10$2':'دسته پتک بلند', '1$12$11$0':'دسته کلنگ درختی درجه یک', '1$12$11$1':'دسته کلنگ چنار ۹۰ سانت', '1$12$11$2':'دسته کلنگ چنار ۸۰ سانت', '1$12$11$3':'دسته کلنگ ممتاز', '1$12$12$0':'کلنگ فولادی چینی', '1$12$12$1':'کلنگ دو سر تیز', '1$12$12$2':'کلنگ چدنی', '1$12$13$0':'دسته بیل درختی', '1$12$13$1':'دسته بیل زبان گنجشک', '1$12$13$2':'دسته بیل اندونزی', '1$12$13$3':'دسته بیل ممتاز', '1$12$13$4':'دسته بیل روسی', '1$12$13$5':'دسته بیل تخم مرغی اصفهان', '1$12$14$0':'بیل ژاپن اصل (فیل نشان)', '1$12$14$1':'بیل همدان', '1$12$14$2':'بیل همدان کابین استیل', '1$12$14$3':'بیل چینی ممتاز', '1$12$14$4':'بیل چینی معمولی', '1$12$14$5':'بیل پارویی سنگین وزن', '1$12$14$6':'بیل پارویی (بیل شهرداری)همدان', '1$12$14$7':'بیل پارویی (بیل شهرداری)ابزار محمدی', '1$12$14$8':'بیل همدان استیل استاندارد', '1$12$14$9':'بیل همدان ابزار امید استاندارد', '1$12$15$0':'الک آردی', '1$12$15$1':'الک تخت', '1$12$15$2':'سرند چشم بلبلی ریز', '1$12$15$3':'سرند چشم بلبلی درشت', '1$12$15$4':'الک چشم بلبلی(سفالکاری)', '1$12$15$5':'سرند قدی فلزی', '1$12$16$0':'سینی غلتک رنگ', '1$12$16$1':'غلتک رنگ ترک کوچک بادسته', '1$12$16$2':'قلم رنگ ایرانی', '1$12$16$3':'لیسه ۴عددی فلزی', '1$12$16$4':'لیسه شانه ایی فلزی', '1$12$16$5':'لیسه فلزی دسته چوبی', '1$12$17$0':'برس تک توالت شور', '1$12$17$1':'توالت شور کامل', '1$12$17$2':'تیغ شیشه پاک کن تعویض‌شو', '1$12$17$3':'جارو ۳۰سانت', '1$12$17$4':'جارو‌ و خاک انداز ایستاده', '1$12$17$5':'جارو‌۴۰سانت سرکج', '1$12$17$6':'چسب موش', '1$12$17$7':'خاک انداز پلاستیکی', '1$13$0$0':'زیر 10 وات', '1$13$0$1':'25 وات', '1$13$0$2':'26 تا 50 وات', '1$13$0$3':'بالای 50 وات', '1$13$1$0':'دیواری', '1$13$1$1':'سقفی', '1$13$1$2':'فیوز', '1$13$1$3':'ریموت', '1$13$2$0':'فن دار', '1$13$2$1':'کرسی برقی', '1$13$2$2':'رومیزی', '1$13$2$3':'دیواری', '1$13$2$4':'ایستاده', '1$13$3$0':'کلید', '1$13$3$1':'پریز', '1$13$3$2':'سوکت تلفن', '1$13$3$3':'زنگ', '1$13$3$4':'فیش آنتن', '1$13$3$5':'پریز تلفن', '1$13$3$6':'شاسی زنگ', '1$13$3$7':'پریز آنتن', '1$13$3$8':'شاسی تایمر', '1$13$4$0':'چندراهی برق', '1$13$4$1':'محافظ ولتاژ', '1$13$4$2':'محافظ شوک الکتریکی', '1$13$4$3':'پریز', '1$13$4$4':'کابل سیار', '1$13$4$5':'تبدیل دیواری', '1$13$4$6':'مادگی', '1$13$4$7':'دوشاخه', '1$13$4$8':'قرقره کابل', '1$13$5$0':'پایه دار', '1$13$5$1':'بدون پایه', '1$13$5$2':'دیواری', '1$13$5$3':'رومیزی', '1$13$5$4':'پریزی', '1$13$6$0':'پارکی', '1$13$6$1':'دیواری', '1$13$6$2':'چمنی', '1$13$6$3':'سردری', '1$13$6$4':'آویز', '1$13$6$5':'مینیاتوری', '1$13$6$6':'حلزونی', '1$13$7$0':'کم مصرف', '1$13$7$1':'LED SMD', '1$13$7$2':'LED', '1$13$7$3':'سقفی', '1$13$7$4':'فیلامنتی LED', '1$13$7$5':'LED COB', '1$13$7$6':'چراغ پروژکتور و وال واشر', '1$13$7$7':'ریسه', '1$13$7$8':'چراغ توکار', '1$13$7$9':'چراغ روکار', '1$13$7$10':'مهتابی', '1$13$7$11':'آفتابی', '1$13$7$12':'لامپ هوشمند', '1$13$7$13':'سرپیچ', '1$13$7$14':'زیر کابینت', '1$13$7$15':'FPL', '1$13$7$16':'FML', '1$13$7$17':'لامپ چراغ خواب', '1$13$7$18':'بالا آینه ای', '1$13$7$19':'قاب توکار', '1$13$7$20':'قاب روکار', '1$13$7$21':'ریل', '1$13$7$22':'بدون پایه', '1$13$7$23':'چراغ مطالعه', '1$13$8$0':'برق', '1$13$8$1':'روکش و محافظ کابل', '1$13$8$2':'مخابراتی', '1$13$8$3':'کواکسیال', '1$13$9$0':'هواکش خانگی', '1$13$9$1':'هواکش صنعتی', '1$13$9$2':'هواکش تاسیساتی', '1$13$9$3':'هواکش اداری و تجاری', '1$13$10$0':'آیفون تصویری', '1$13$10$1':'آیفون صوتی', '1$13$10$2':'درب باز کن برقی', '1$13$11$0':'تلفن بیسیم', '1$13$11$1':'تلفن سیمی', '1$13$11$2':'بیسیم تاکی واکی', '1$13$11$3':'تلفن سانترال', '1$13$11$4':'تلفن VOIP', '1$13$12$0':'باطری قلمی', '1$13$12$1':'باطری نیم قلمی', '1$13$12$2':'باطری کتابی', '1$13$12$3':'باطری شارژی', '1$13$13$0':'داخلی و رومیزی', '1$13$13$1':'هوایی', '1$13$14$0':'پوشال', '1$13$14$1':'پمپ آب', '1$13$14$2':'شناور', '1$13$15$0':'نردبان', '1$13$15$1':'آچار', '1$13$15$2':'انبر', '1$13$15$3':'پیچ گوشتی و فازمتر', '1$13$15$4':'روغن دان و لوازم روانکاری', '1$13$15$5':'چسب صنعتی', '1$14$0':'اسپند دود کن', '1$14$1':'کابینت آشپزخانه', '1$14$2':'بوگیر یخچال', '1$14$3':'پد ظرفشویی', '1$14$4':'پیش بند', '1$14$5':'ترازوی آشپزخانه', '1$14$6':'تایمر آشپزخانه', '1$14$7':'قمقمه', '1$14$8':'فلاسک', '1$14$9':'منقل', '1$14$10':'سیخ', '1$14$11':'باربیکیو', '1$14$12':'لوازم یکبار مصرف', '1$14$13':'نایلون زیپ دار', '1$14$14':'نایلون فریزر', '1$14$15':'نایلون سلفون', '1$14$16':'فویل آلومینیم', '1$14$17':'سبد سیب زمینی و پیاز', '1$14$18':'بغل گازی', '1$14$19':'زیر قابلمه', '1$14$20':'ابزار شرینی پزی', '1$14$21':'ابزار بستنی ساز', '1$14$22':'سفره', '1$14$23':'سفره یکبار مصرف', '1$14$24':'توری کباب', '1$14$25':'دمنوش ساز', '1$14$26':'ظرف مربا', '1$14$27':'جای حوله', '1$14$28':'جای مایع ظرفشویی', '1$14$29':'حوله آشپزخانه', '1$14$30':'دستمال سفره', '1$14$31':'دمکش', '1$14$32':'فندک', '1$14$33':'کبریت', '1$14$34':'رنده', '1$14$35':'روقوری', '1$14$36':'سبد مسافرتی', '1$14$37':'ست مسافرتی ظروف', '1$14$38':'سرویس آب کشی', '1$14$39':'سرویس پارچه‌ای آشپزخانه', '1$14$40':'سرویس ظروف ادویه', '1$14$41':'فایل کشویی', '1$14$42':'آب‌میوه گیری دستی', '1$14$43':'جا ظرفی', '1$14$44':'پیشبند', '1$14$45':'دستگیره', '1$14$46':'ست صبحانه', '1$14$47':'سرویس ظروف‌پلاستیکی درب‌دار', '1$14$48':'سرویس نگهداری حبوبات‌و‌خشکبار', '1$14$49':'سطل زباله آشپزخانه', '1$14$50':'سینک', '1$14$51':'سیر کوب', '1$14$52':'ظروف شیشه‌ای غذا در یخچال', '1$14$53':'ظروف نگهدارنده شفاف', '1$14$54':'قالب کیک', '1$14$55':'قیچی فلزی آشپزخانه', '1$14$56':'کاور', '1$14$57':'کاور لوازم خانگی', '1$14$58':'کیک پز', '1$14$59':'گوشت کوب فلزی', '1$14$60':'گیره های آویز حوله و لیوان', '1$14$61':'گیره یخ', '1$14$62':'هاونگ', '1$14$63':'همزن دستی', '1$14$64':'مخزن آب', '1$14$65':'چشمه شکلات', '2$0$0':'موبایل', '2$0$1':'تبلت', '2$0$2':'کتابخوان', '2$0$3':'هدست', '2$0$4':'هدفون', '2$0$5':'سیم کارت', '2$0$6':'کامپیوتر خانگی', '2$0$7':'لپ تاپ', '2$1$0':'مادربرد', '2$1$1':'پردازنده', '2$1$2':'پاور', '2$1$3':'کولر مستر', '2$1$4':'کارت گرافیگ', '2$1$5':'پرینتر', '2$1$6':'ماوس', '2$1$7':'کیبورد', '2$1$8':'وب کم', '2$1$9':'وب کم لاجیتک', '2$1$10':'مانیتور', '2$1$11':'فن کیس', '2$1$12':'فن پردازنده', '2$1$13':'اسکنر', '2$1$14':'فن کارت گرافیک', '2$1$15':'کیس', '2$1$16':'درایو نوری', '2$1$17':'رم سرور', '2$1$18':'رم ریدر', '2$1$19':'کامپیوتر سرور', '2$1$20':'کامپیوتر کوچک', '2$1$21':'کامپیوتر جمع آوری شده', '2$1$22':'دی وی دی رایتر', '2$1$23':'کارت صدا', '2$1$24':'منبع تغذیه', '2$1$25':'ست دسکتاپ(ماوس و کیبورد)', '2$1$26':'کنترل کننده فن', '2$1$27':'پرینتر سه بعدی', '2$1$28':'خمیر سیلیکونی و حرارتی', '2$2$0':'پاوربانک', '2$2$1':'هندزفری گوشی', '2$2$2':'مونوپاد', '2$2$3':'شارژر موبایل و تبلت', '2$2$4':'شارژر فندکی', '2$2$5':'شارژر بی سیم', '2$2$6':'باتری گوشی موبایل', '2$2$7':'کابل گوشی', '2$2$8':'کابل OTG', '2$2$9':'لنز گوشی', '2$2$10':'محافظ صفحه نمایش تبلت', '2$2$11':'استند تبلت', '2$2$12':'کیف و کاور تبلت', '2$2$13':'کیبورد تبلت', '2$2$14':'پایه نگهدارنده گوشی', '2$2$15':'کیف و کاور گوشی', '2$2$16':'محافظ صفحه نمایش گوشی', '2$2$17':'تاچ و ال', '2$2$18':'خشاب سیم کارت', '2$2$19':'برچسب تزئینی گوشی موبایل', '2$3$0':'مودم ADSL', '2$3$1':'مودم 3G و 4G', '2$3$2':'مودم دانگل', '2$3$3':'مودم دیال آپ', '2$3$4':'سوییچ شبکه', '2$3$5':'کارت شبکه', '2$3$6':'روتر و اکسس پوینت', '2$3$7':'پرینت سرور', '2$3$8':'آنتن تقویتی', '2$3$9':'ذخیره ساز تحت شبکه', '2$3$10':'آداپتور شبکه', '2$3$11':'هاب شبکه', '2$3$12':'کابل و سوکت شبکه', '2$3$13':'کیستون شبکه', '2$3$14':'داکت و ترانک شبکه', '2$3$15':'ابزار نصب شبکه', '2$3$16':'تستر کابل شبکه', '2$3$17':'اسپلیتر', '2$3$18':'مبدل فیبر شبکه', '2$3$19':'رک و سینی', '2$3$20':'فیس پلیت', '2$3$21':'ترمینال پاور', '2$3$22':'تجهیزات وایرلس', '2$3$23':'دوربین تحت شبکه', '2$3$24':'دوربین مدار بسته', '2$3$25':'دانگل بلوتوث', '2$3$26':'دانگل وای فای', '2$3$27':'لوازم جانبی NAS', '2$4$0':'ماشین های اداری', '2$4$1':'تلفن VOIP', '2$4$2':'تلفن بی سیم', '2$4$3':'ماشین حساب', '2$4$4':'تلفن رومیزی', '2$4$5':'تلفن سانترال', '2$4$6':'ویدیو پروژکتور', '2$4$7':'لیزر پوینتر', '2$4$8':'اسکناس شمار', '2$4$9':'تشخیص اصالت اسکناس', '2$4$10':'صندوق فروشگاهی', '2$4$11':'بارکد خوان', '2$4$12':'دستگاه چک پرینتر', '2$4$13':'پرزنتر', '2$4$14':'پرینتر لیبل زن', '2$4$15':'دستگاه کپی', '2$4$16':'فکس', '2$4$17':'دستگاه حضور و غیاب', '2$4$18':'کالر آی دی', '2$4$19':'کاغذ خردکن', '2$4$20':'سانترال', '2$4$21':'دیتا کالکتور', '2$4$22':'تجهیزات VOIP', '2$4$23':'چاپگر حرارتی', '2$4$24':'کپی برد', '2$4$25':'منگه زن برقی', '2$4$26':'پرس کارت', '2$4$27':'دزدگیر اماکن', '2$4$28':'دستگاه ضبط‌کننده DVR', '2$4$29':'پلاتر', '2$4$30':'منبع تغذیه UPS', '2$4$31':'پرینتر چاپ کارت', '2$4$32':'وایت برد هوشمند', '2$4$33':'تابلو روان', '2$4$34':'کشوی پول', '2$5$0':'تونر', '2$5$1':'درام و لوازم فکس', '2$5$2':'کارتریج', '2$5$3':'ریبون پرینتر', '2$5$4':'کابل پرینتر', '2$5$5':'لوازم جانبی پرینتر لیبل زن و حرارتی', '2$5$6':'باتری تلفن', '2$5$7':'لوازم جانبی پرینتر', '2$5$8':'لوازم بسته بندی', '2$6$0':'هارد اکسترنال', '2$6$1':'هارد اینترنال', '2$6$2':'حافظه SSD', '2$6$3':'فلش مموری', '2$6$4':'کارت حافظه و رم', '2$6$5':'لوح فشرده', '2$6$6':'کیف و کاور CD', '2$6$7':'کیف و قاب هارد', '2$6$8':'لوازم جانبی تجهیزات ذخیره سازی', '2$7$0':'شارژر لپ تاپ', '2$7$1':'باتری لپ تاپ', '2$7$2':'هارد لپ تاپ', '2$7$3':'هاب یو اس بی(USB Hub)', '2$7$4':'رم لپ تاپ', '2$7$5':'کابل برق کامپیوتر', '2$7$6':'کابل و مبدل', '2$7$7':'کابل VGA', '2$7$8':'مبدل برق', '2$7$9':'چراغ LED یو اس بی', '2$7$10':'قلم لمسی', '2$7$11':'قلم نوری', '2$7$12':'استند و پایه خنک کننده', '2$7$13':'کیبورد لپ تاپ', '2$7$14':'موس پد', '2$7$15':'کیت تمیز کننده', '2$7$16':'کیف و کاور لپ تاپ', '2$7$17':'محافظ کیبورد کامپیوتر', '2$7$18':'چیپست', '3$0$0':'پاک کن', '3$0$1':'پرگار', '3$0$2':'تراش', '3$0$3':'جامدادی', '3$0$4':'جلد چسبی کتاب', '3$0$5':'خط کش', '3$0$6':'خودکار', '3$0$7':'خودنویس', '3$0$8':'دفتر', '3$0$9':'دفتر انگلیسی', '3$0$10':'دفتر مشق', '3$0$11':'دفتر نقاشی', '3$0$12':'دفتر یادداشت', '3$0$13':'روان نویس', '3$0$14':'غلط گیر', '3$0$15':'کاغذ A4', '3$0$16':'کاغذ چرک نویس', '3$0$17':'کاغذ کادو', '3$0$18':'کاغذ کاهی', '3$0$19':'کلاسور', '3$0$20':'گچ تحریر', '3$0$21':'لاک غلط گیر', '3$0$22':'مارکر', '3$0$23':'ماژیک', '3$0$24':'ماژیک وایت برد', '3$0$25':'مداد', '3$0$26':'مداد تراش', '3$0$27':'مداد رنگی', '3$0$28':'مداد فشاری', '3$0$29':'مداد نوکی', '3$0$30':'نوک', '3$0$31':'مداد و پاک‌کن', '3$0$32':'مداد تراش', '3$1$0':'CD', '3$1$1':'DVD', '3$1$2':'ابرک', '3$1$3':'ابزار بایگانی', '3$1$4':'اسپیکر', '3$1$5':'استامپ', '3$1$6':'استند لوازم تحریر', '3$1$7':'اسکناس شمار', '3$1$8':'اسکنر', '3$1$9':'اقلام مصرفی اداری', '3$1$10':'آلبوم عکس', '3$1$11':'آهنربا', '3$1$12':'باتری', '3$1$13':'برچسب', '3$1$14':'پاستل', '3$1$15':'پاکت', '3$1$16':'پاکت دکمه دار', '3$1$17':'پایه تقویم رومیزی', '3$1$18':'پایه نگه دارنده مانیتور', '3$1$19':'پایه نوار چسب', '3$1$20':'پروژکتور', '3$1$21':'پرینتر', '3$1$22':'پوشه', '3$1$23':'تخته شاسی', '3$1$24':'تخته وایت برد', '3$1$25':'تونر و کارتریج', '3$1$26':'تیغ کاتر', '3$1$27':'جاسنجاقی', '3$1$28':'جامدادی رومیزی', '3$1$29':'جای کارت و جاکاغذی', '3$1$30':'جعبه بایگانی', '3$1$31':'جوهر', '3$1$32':'جوهر استامپ', '3$1$33':'چراغ مطالعه', '3$1$34':'چسب', '3$1$35':'چسب دوقلو', '3$1$36':'چسب فوری', '3$1$37':'چسب مایع', '3$1$38':'دفاتر اداری', '3$1$39':'دیوایدر', '3$1$40':'ذره‌بین', '3$1$41':'زونکن', '3$1$42':'سالنامه', '3$1$43':'ست رومیزی اداری', '3$1$44':'ست میز مدیریت', '3$1$45':'سوزن منگنه', '3$1$46':'شیرازه', '3$1$47':'طلق', '3$1$48':'فنر', '3$1$49':'قیچی', '3$1$50':'کاتر', '3$1$51':'کاربن', '3$1$52':'کارت پستال', '3$1$53':'کارتابل', '3$1$54':'کازیه', '3$1$55':'کاغذ', '3$1$56':'کاغذ خردکن', '3$1$57':'کاغذ یادداشت', '3$1$58':'کاور کاغذ', '3$1$59':'کلیر بوک', '3$1$60':'کیبورد', '3$1$61':'کیف آرشیو', '3$1$62':'گیره پوشه', '3$1$63':'گیره کاغذ', '3$1$64':'ماشین حساب', '3$1$65':'ماشین های اداری', '3$1$66':'مانیتور', '3$1$67':'مداد شمعی', '3$1$68':'ملزومات هدیه', '3$1$69':'منگنه', '3$1$70':'پانچ', '3$1$71':'مهر', '3$1$72':'موس', '3$1$73':'نشانگر کتاب', '3$1$74':'نگهدارنده کتاب', '3$1$75':'نوار چسب', '3$1$76':'نوار چسب پهن', '3$2$0':'ابزار نقاشی', '3$2$1':'رنگ آمیزی', '3$2$2':'قلم مو و کاردک', '3$2$3':'مداد رنگی', '3$2$4':'پاستل و مداد شمعی', '3$2$5':'آبرنگ', '3$2$6':'گواش', '3$2$7':'پالت رنگ', '3$2$8':'زغال طراحی', '3$2$9':'مداد طراحی', '3$2$10':'رنگ روغن', '3$2$11':'بوم نقاشی', '3$2$12':'دفتر طراحی', '3$2$13':'رنگ انگشتی', '3$2$14':'تخته شاسی', '3$3$0':'جا قلمی و قلمدان', '3$3$1':'لیقه ابریشمی', '3$3$2':'کتاب خوشنویسی', '3$3$3':'دفتر خوشنویسی', '3$3$4':'دوات', '3$3$5':'مرکب خوشنویسی', '3$3$6':'قلم خطاطی', '3$3$7':'زیرمشق', '3$3$8':'قط زن', '3$3$9':'شابلون خوشنویسی', '3$3$10':'ست خوشنویسی', '3$3$11':'قلمتراش و غلاف', '3$4$0':'خط کش', '3$4$1':'شابلون', '3$4$2':'دفتر شطرنجی', '3$4$3':'پرگار', '3$4$4':'ست ریاضی', '3$4$5':'تخته رسم', '3$4$6':'کیف آرشیو', '3$4$7':'راپید', '3$4$8':'ماشین حساب مهندسی', '3$4$9':'میز نور', '3$4$10':'نقاله ', '3$4$11':'گونیا', '3$4$12':'خط کش تی', '3$5$0':'وسایل کمک آموزشی', '3$5$1':'لوازم کاردستی', '3$5$2':'بازی و سرگرمی', '3$5$3':'کیت آموزشی', '3$5$4':'کره جغرافیایی', '3$5$5':'شابلون اشکال', '3$5$6':'پک آموزشی', '3$5$7':'پازل', '3$5$8':'گل رس', '3$5$9':'خمیر بازی', '3$5$10':'ساعت آموزشی', '3$5$11':'چرتکه', '3$5$12':'کتاب رنگ آمیزی', '3$5$13':'کتاب داستان', '3$6$0':'میز تحریر', '3$6$1':'چراغ مطالعه', '3$6$2':'کیف', '3$6$3':'جامدادی', '3$6$4':'کوله پشتی', '3$6$5':'قمقمه', '3$6$6':'ظرف غذا', '3$6$7':'لیوان', '3$6$8':'ذره بین', '3$6$9':'قیچی کودک', '3$7$0':'خودکار تبلیغاتی', '3$7$1':'جاکلیدی تبلیغاتی', '3$7$2':'پاکت دکمه دار', '3$7$3':'ساعت تبلیغاتی', '3$7$4':'تندیس و لوح تقدیر', '3$7$5':'بج سینه و پیکسل', '3$7$6':'لیوان تبلیغاتی', '3$7$7':'ست تبلیغاتی', '3$7$8':'تقویم و سررسید', '3$7$9':'فلش مموری تبلیغاتی', '3$7$10':'کیف پول و جلد مدارک', '3$8$0':'تابلو فرش', '3$8$1':'لاله و شمعدان', '3$8$2':'پرده چاپی', '3$8$3':'تابلو زربافت', '3$8$4':'قاب برجسته ', '3$8$5':'تابلو پرچم دوزی ', '3$8$6':'تابلو شبه فلز', '3$8$7':'مینا کاری', '3$8$8':'قلمکاری', '3$8$9':'تابلو کاشی', '3$8$10':'تندیس حدید', '3$8$11':'تندیس عقیق', '3$8$12':'جاکلیدی کوبه', '3$8$13':'ظروف مسی', '3$8$14':'تابلو سیاه مشق', '3$8$15':'ساعت', '3$8$16':'تابلو کتیبه', '3$8$17':'نشقاب اشعار سفالی', '3$8$18':'تابلو معرق کاری شده', '3$8$19':'وسایل نماز', '3$8$20':'قرآن و ادعیه', '3$8$21':'رحل قرآن', '3$8$22':'جعبه قرآن', '3$9$0':'انواع CD فیلم ', '3$9$1':'کارت تلفن ', '3$9$2':'اینترنت', '3$9$3':'شارژ موبایل', '3$9$4':'محصولات مذهبی', '3$10$0':'بازی های فکری', '3$10$1':'کیت های آموزشی', '3$10$2':'کره جغرافیایی', '3$10$3':'شابلون', '3$10$4':'پک های آموزشی', '3$10$5':'پازل های متنوع', '3$10$6':'گل رس مخصوص سفال گری', '3$10$7':'لوازم مخصوص کاردستی', '3$10$8':'ساعت های آموزشی', '3$10$9':'چرتکه', '3$10$10':'کتاب رنگ آمیزی', '3$10$11':'کتاب داستان', '3$10$12':'لوازم دانش آموزی', '3$10$13':'میز تحریر', '3$11$0':'کیبورد و ارگ', '3$11$1':'پیانو', '3$11$2':'گیتار', '3$11$3':'فلوت', '3$11$4':'ویولن', '3$11$5':'ساز دهنی', '3$11$6':'درام', '3$11$7':'ملودیکا', '3$11$8':'مترونوم و تیونر', '3$11$9':'سازهای کوبه ای', '3$11$10':'سازهای افکت', '3$11$11':'فلوت رکوردر', '3$11$12':'کلارینت', '3$11$13':'ساکسیفون', '3$11$14':'پرکاشن', '3$11$15':'ترومپت', '3$11$16':'ترومبون', '3$11$17':'ابوا', '3$11$18':'دف', '3$11$19':'سینتی سایزر', '3$11$20':'تار', '3$11$21':'سه تار', '3$11$22':'سنتور', '3$11$23':'تنبک', '3$11$24':'باغلاما', '3$11$25':'جیمبی', '3$11$26':'آکاردئون', '3$11$27':'کاخن', '3$11$28':'نی', '3$11$29':'کابل موسیقی', '3$11$30':'سیم ادوات موسیقی', '3$11$31':'آمپلی فایر و افکت گیتار', '3$11$32':'استند', '3$11$33':'پایه', '3$11$34':'صندلی و زیرپایی', '3$11$35':'کیس و کاور', '3$12$0$0':'قرآن', '3$12$0$1':'کتاب آزمون', '3$12$0$2':'کتاب میکرو', '3$12$0$3':'کتاب کلاسیک', '3$12$0$4':'سایت فیدیبو', '3$12$0$5':'سایت کتابراه', '3$12$0$6':'ادبیات داستانی', '3$12$0$7':'کتاب مصور', '3$12$0$8':'روانشناسی', '3$12$0$9':'فلسفی', '3$12$0$10':'تاریخی', '3$12$0$11':'داستان کوتاه', '3$12$0$12':'خودپروری', '3$12$0$13':'دینی و مذهبی', '3$12$0$14':'زندگی نامه', '3$12$0$15':'سیاسی', '3$12$0$16':'شعر', '3$12$0$17':'نقد ادبی', '3$12$0$18':'سینما و تئاتر', '3$12$0$19':'آموزشی', '3$12$0$20':'علمی', '3$12$0$21':'هنری', '3$12$0$22':'ادبیات نمایشی', '3$12$0$23':'تجارت و کسب و کار', '3$12$0$24':'اجتماعی', '3$12$0$25':'جامعه شناسی', '3$12$0$26':'مجموعه مقالات', '3$12$0$27':'اقتصادی', '3$12$0$28':'گردآوری و تلفیق', '3$12$0$29':'مدیریت', '3$12$0$30':'خود زندگی نامه', '3$12$0$31':'زنان و فمنیسم', '3$12$0$32':'فرهنگی', '3$12$0$33':'عاشقانه', '3$12$0$34':'تعلیم و تربیت', '3$12$0$35':'فانتزی', '3$12$0$36':'عرفان', '3$12$0$37':'معنویت', '3$12$0$38':'سلامت', '3$12$0$39':'مصاحبه', '3$12$0$40':'درام', '3$12$0$41':'جنگی', '3$12$0$42':'نقد هنری', '3$12$0$43':'پزشکی', '3$12$0$44':'کتاب مرجع', '3$12$0$45':'رهبری', '3$12$0$46':'ازدواج و زناشویی', '3$12$0$47':'الهیات', '3$12$0$48':'سفرنامه', '3$12$0$49':'موسیقی', '3$12$0$50':'زبان شناسی', '3$12$0$51':'تکنولوژی', '3$12$0$52':'نقاشی', '3$12$0$53':'دانستنی ها', '3$12$0$54':'سرگرمی', '3$12$0$55':'حقوقی', '3$12$0$56':'نویسندگی', '3$12$0$57':'ورزشی', '3$12$0$58':'مجموعه آثار هنری', '3$12$0$59':'دیوان اشعار ایرانی', '3$12$0$60':'جملات قصار', '3$12$0$61':'عکاسی', '3$12$0$62':'فرهنگ لغت', '3$12$0$63':'فیزیک', '3$12$0$64':'جغرافیا', '3$12$0$65':'کمدی', '3$12$0$66':'علوم انسانی', '3$12$0$67':'انسان شناسی', '3$12$0$68':'محیط زیست', '3$12$0$69':'رنگ آمیزی', '3$12$0$70':'مجموعه مکاتبات(نامه‌ها)', '3$12$0$71':'معماری', '3$12$0$72':'زیست شناسی', '3$12$0$73':'نجوم', '3$12$0$74':'مقاله', '3$12$0$75':'علوم سیاسی', '3$12$0$76':'ریاضی', '3$12$0$77':'خلاقیت', '3$12$0$78':'ترانه', '3$12$0$79':'روانشناسی کودک', '3$12$0$80':'داستان نویسی', '3$12$0$81':'مردم شناسی', '3$12$0$82':'کارگردانی', '3$12$0$83':'علوم اعصاب', '3$12$0$84':'احکام', '3$12$0$85':'بهداشت', '3$12$0$86':'کتاب های نفیس', '3$12$0$87':'آشپزی', '3$12$0$88':'معناشناسی', '3$12$0$89':'حماسی', '3$12$0$90':'آموزش زبان خارجی', '3$12$0$91':'حیوانات', '3$12$0$92':'کتابهای نابینایان', '3$12$0$93':'ادبیات', '3$12$0$94':'مالی', '3$12$0$95':'ادبیات فارسی', '3$12$0$96':'شهرسازی', '3$12$0$97':'مجموعه یادداشت', '3$12$0$98':'تغذیه و تربیت کودک', '3$12$0$99':'پژوهشی', '3$12$0$100':'ماجرایی', '3$12$0$101':'ادبیات آذربایجان', '3$12$0$102':'تصویرگری', '3$12$0$103':'علوم تجربی', '3$12$0$104':'منسوجات', '3$12$0$105':'شیمی', '3$12$0$106':'مهندسی عمران', '3$12$0$107':'گیاه شناسی', '3$12$0$108':'دکوراسیون داخلی', '3$12$0$109':'زمین شناسی', '3$12$0$110':'شبه علم', '3$12$0$111':'ادبیات غیراقتباسی', '3$12$0$112':'تولید محتوا', '3$12$0$113':'کتاب صوتی', '3$12$1$0':'مجلات نشنال جئوگرافیک', '3$12$1$1':'مجلات آمریکا', '3$12$1$2':'مجلات بهمن', '3$13$0':'قیچی و کاتر', '3$13$1':'زیرپایی اداری', '3$13$2':'سطل زباله اداری', '3$13$3':'کپی هولدر', '3$13$4':'تخته وایت برد', '3$13$5':'تابلو اعلانات', '3$13$6':'تخته پاکن', '3$13$7':'میز و صندلی اداری', '3$13$8':'کابینت کلید و شماره کمد', '3$13$9':'طلق سینه', '3$13$10':'شماره زن', '3$13$11':'زیردستی', '3$13$12':'نقشه', '3$13$13':'فلش کارت', '4$0$0':'دارت', '4$0$1':'گجت', '4$0$2':'عروسک', '4$0$3':'تفنگ و مبارزه', '4$0$4':'پازل و ساختنی', '4$0$5':'ماشین', '4$0$6':'موتور شارژی', '4$0$7':'جعبه موزیکال', '4$0$8':'هلی کوپتر و هواپیما', '4$0$9':'ابزار شوخی', '4$0$10':'بازی های فکری', '4$0$11':'بازی آموزشی', '4$0$12':'لباس شخصیت', '4$0$13':'لگو', '4$0$14':'فیگور', '4$0$15':'ماکت', '4$0$16':'وان کودک', '4$0$17':'قصری کودک', '4$1$0':'فوتبال دستی', '4$1$1':'شطرنج', '4$1$2':'میز پینگ پنگ', '4$1$3':'تلمبه دستی', '4$1$4':'راکت', '4$1$5':'توپ فوتبال', '4$1$6':'توپ بدمینتون', '4$1$7':'توپ تنیس', '4$1$8':'توپ هندبال', '4$1$9':'توپ بیسبال', '4$1$10':'توپ فوتسال', '4$1$11':'توپ اسکواش', '4$1$12':'طناب', '4$1$13':'دمبل', '4$1$14':'بارفیکس', '4$1$15':'دارت', '4$1$16':'اسکیت و اسکوتر', '4$1$17':'اسکوتر برقی', '4$1$18':'تقویت کننده تنفس', '4$1$19':'لوازم پوششی و محافظتی ورزشی', '4$1$20':'لوازم جانبی اسکوتر برقی', '4$1$21':'تردمیل', '4$1$22':'دوچرخه ثابت و الپتیکال', '4$1$23':'روینگ', '4$1$24':'استپر', '4$1$25':'زیر انداز', '4$1$26':'لوازم جانبی دارت', '4$1$27':'تردمیل', '4$1$28':'استپر', '4$1$29':'روئینگ', '4$1$30':'دوچرخه ثابت', '4$1$31':'دوچرخه ثابت باشگاهی', '4$1$32':'دوچرخه ثابت خانگی', '4$2$0':'عینک شنا', '4$2$1':'کلاه شنا', '4$2$2':'مایو', '4$2$3':'لوازم جانبی شنا', '4$2$4':'لوازم تمرین شنا', '4$2$5':'لوازم غواصی', '4$3$0':'عینک اسکی', '4$3$1':'فیکس اسکی', '4$3$2':'اسنوبورد اسکی', '4$3$3':'کفش اسکی', '4$3$4':'چوب اسکی', '4$3$5':'دستکش اسکی', '4$3$6':'کلاه اسکی', '4$3$7':'بست اسکی', '4$3$8':'ساک اسکی', '4$3$9':'کفش پاتیناژ', '4$4$0':'دوچرخه شهری', '4$4$1':'دوچرخه کوهستان', '4$4$2':'دوچرخه مسابقه‌ای', '4$4$3':'دوچرخه برقی', '4$4$4':'لوازم جانبی دوچرخه', '4$4$5':'بچه دوچرخه', '4$4$6':'کلاه کاسکت', '4$5$0':'کفش فوتبال', '4$5$1':'کفش پیاده روی', '4$5$2':'کفش ورزشی مردانه', '4$5$3':'کفش ورزشی زنانه', '4$6$0':'مچ بند', '4$6$1':'هد بند', '4$6$2':'گرمکن ورزشی زنانه ', '4$6$3':'گرمکن ورزشی مردانه ', '4$6$4':'تی شرت ورزشی', '4$6$5':'شلوار ورزشی', '4$6$6':'شورت ورزشی', '4$6$7':'دامن ورزشی', '4$6$8':'پیراهن ورزشی', '4$6$9':'حوله ورزشی', '4$6$10':'ست مردانه ورزشی', '4$6$11':'دستکش ورزشی', '4$6$12':'جوراب ورزشی', '4$6$13':'ساک ورزشی', '4$7$0':'چوب', '4$7$1':'نخ', '4$7$2':'لانسه', '4$7$3':'تور', '4$7$4':'قلاب', '4$7$5':'سرب', '4$7$6':'طعمه', '4$8$0':'قایق بادی', '4$8$1':'تخته موج سواری', '4$9$0':'کفش کوهنوردی', '4$9$1':'کوله پشتی', '4$9$2':'عصا', '4$9$3':'لباس کوهنوردی لایه اول', '4$9$4':'لباس کوهنوردی لایه دوم', '4$9$5':'لباس کوهنوردی لایه سوم', '4$9$6':'کلاه', '4$9$7':'گتر', '4$9$8':'زیر انداز', '4$9$9':'غذای مقوی', '4$9$10':'آب و قمقمه', '4$9$11':'کیسه خواب', '4$9$12':'چادر', '4$9$13':'چراغ', '4$9$14':'لامپ', '4$9$15':'لیوان و قاشق چنگال', '4$9$16':'وسایل بهداشتی', '4$9$17':'سنگ آتش زنه', '4$9$18':'قطب نما', '4$9$19':'نقشه', '4$9$20':'طناب', '4$9$21':'کارابین', '4$9$22':'سوت نجات', '4$10$0':'اسکی فضایی', '4$10$1':'دوچرخه ثابت', '4$10$2':'تردمیل', '4$10$3':'الپتیکال', '5$0$0$0':'خط چشم', '5$0$0$1':'ریمل', '5$0$0$2':'سایه', '5$0$0$3':'لنز', '5$0$0$4':'مایع لنز', '5$0$0$5':'مداد ابرو', '5$0$0$6':'مداد چشم', '5$0$1$0':'رژ لب جامد', '5$0$1$1':'رژ لب مایع', '5$0$1$2':'مداد لب', '5$0$2$0':'پنکک', '5$0$2$1':'رژ گونه', '5$0$2$2':'فیکساتور', '5$0$2$3':'کانسیلر', '5$0$2$4':'کرم پودر', '5$0$3$0':'اتو مو', '5$0$3$1':'تافت', '5$0$3$2':'خرید رنگ مو', '5$0$3$3':'ژل مو', '5$0$3$4':'سشوار', '5$0$3$5':'شانه و برس', '5$0$4$0':'لاک', '5$0$4$1':'لاک پاک کن', '5$0$5$0':'فر کننده مو', '5$0$5$1':'اتو و حالت دهنده مو', '5$0$5$2':'برس مو', '5$0$5$3':'سشوار', '5$0$5$4':'اپیلاتور', '5$0$5$5':'مو زن گوش و بینی', '5$0$5$6':'ریش تراش', '5$0$5$7':'لوازم جانبی ریش تراش', '5$0$5$8':'اصلاح موی سر', '5$0$5$9':'پاکسازی و لیزر پوست', '5$0$5$10':'خوشبو کننده هوا', '5$0$5$11':'چتر', '5$0$5$12':'کیف غذا', '5$0$5$13':'ساک و چمدان', '5$1$0':'اسپری موبر', '5$1$1':'پودر', '5$1$2':'تیغ', '5$1$3':'کرم موبر', '5$1$4':'موم', '5$1$5':'وکس', '5$2$0':'اسپری تاخیری', '5$2$1':'اصلاح برقی', '5$2$2':'اصلاح دستی', '5$2$3':'بعد از اصلاح', '5$2$4':'ژل تاخیری', '5$2$5':'قبل از اصلاح', '5$2$6':'خمیر ریش', '5$2$7':'ژل اصلاح', '5$2$8':'فوم اصلاح', '5$2$9':'کاندوم', '5$3$0':'پد روزانه', '5$3$1':'تامپون', '5$3$2':'تست بارداری', '5$3$3':'ژل لوبریکانت', '5$3$4':'شوینده واژینال', '5$3$5':'نوار بهداشتی', '5$4$0':'آفت دهان', '5$4$1':'پودر سفید کننده', '5$4$2':'چسب دندان مصنوعی', '5$4$3':'خلال دندان', '5$4$4':'خمیر دندان', '5$4$5':'خوشبو کننده دهان', '5$4$6':'دهانشویه', '5$4$7':'زبان شور', '5$4$8':'مسواک', '5$4$9':'نخ دندان', '5$5$0':'پنبه', '5$5$1':'پوشینه بزرگسالان', '5$5$2':'ایزی لایف', '5$5$3':'دستمال کاغذی', '5$5$4':'دستمال مرطوب', '5$5$5':'گوش پاک کن', '5$5$6':'محصولات ضد تعریق', '5$5$7':'اسپری ضد تعریق', '5$5$8':'استیک ضد تعریق', '5$5$9':'بادی اسپلش', '5$5$10':'پد ضد تعریق', '5$5$11':'رول ضد تعریق', '5$5$12':'کرم ضد تعریق', '5$6$0':'ارتوپدی و ارتز', '5$6$1':'فشارسنج', '5$6$2':'دستگاه تست قند خون', '5$6$3':'نبولایزر', '5$6$4':'تب سنج', '5$6$5':'نوار تست قند', '5$6$6':'نمایشگر ضربان قلب', '5$6$7':'دستگاه فیزیوتراپی', '5$6$8':'گام شمار', '5$6$9':'جعبه قرص', '5$6$10':'توالت فرنگی قابل حمل', '5$6$11':'واکر', '5$6$12':'ویلچر', '5$6$13':'گوشی پزشکی', '5$6$14':'تخت بیمار', '5$6$15':'دماسنج محیطی', '5$6$16':'میکروسکوپ', '5$6$17':'دماسنج دیجیتالی', '5$6$18':'نخ و سوزن جراحی', '5$6$19':'آنژیوکت', '5$6$20':'محصولات پلیمری', '5$6$21':'سوند', '5$6$22':'ساکشن های پزشکی', '5$6$23':'پالس اکسیمتر', '5$6$24':'ذره بین و میکروسکوپ', '5$6$25':'برانکارد', '5$6$26':'جعبه کمک های اولیه', '5$6$27':'اتوسکوپ و افتالموسکوپ', '5$6$28':'لارنگوسکوپ', '5$6$29':'اکسیژن ساز', '5$6$30':'کپسول اکسیژن', '5$6$31':'پانسمان و چسب', '5$6$32':'دستکش جراحی', '5$6$33':'آرنج بند', '5$6$34':'آویز دست', '5$6$35':'انگشتان', '5$6$36':'ترقوه بند', '5$6$37':'جوراب واریس', '5$6$38':'زانوبند', '5$6$39':'ساعد بند', '5$6$40':'ساق بند', '5$6$41':'شکم بند', '5$6$42':'فتق بند', '5$6$43':'قوزبند', '5$6$44':'قوزک بند', '5$6$45':'کتف بند', '5$6$46':'کف پا و انگشت پا', '5$6$47':'کمربند', '5$6$48':'گردنبند', '5$6$49':'مچ بند', '5$7$0':'پانسمان زخم', '5$7$1':'آلژینات', '5$7$2':'چسب پانسمان', '5$7$3':'ژل و کرم', '5$7$4':'فوم پانسمان', '5$7$5':'هیدرواکتیو', '5$8$0':'بخور و مرطوب کننده هوا', '5$8$1':'دوچرخه شارژی', '5$8$2':'ترازو', '5$8$3':'پتو و تشک برقی', '5$8$4':'صندلی ماساژ', '5$8$5':'ماساژور و گرمکن پا', '5$8$6':'تخت ماساژ', '5$8$7':'ماساژور چشم', '5$8$8':'ماساژور گردن', '5$8$9':'شمع ماساژ', '5$8$10':'روغن و کرم ماساژ', '5$8$11':'جکوزی پا', '5$8$12':'تشک مواج', '5$8$13':'یادآور دارو', '5$8$14':'سنسور دما', '5$8$15':'عینک طبی', '5$8$16':'اکسیمتر', '5$8$17':'بالشت طبی', '5$8$18':'تب سنج', '5$8$19':'ترازو', '5$8$20':'تست قند خون', '5$8$21':'دستگاه قند خون', '5$8$22':'سوزن تست قند خون', '5$8$23':'کیف نگهدارنده انسولین', '5$8$24':'نوار تست قند خون', '5$8$25':'تشکچه برقی', '5$8$26':'دستگاه بخور', '5$8$27':'دماسنج', '5$8$28':'فشارسنج', '5$8$29':'کیسه آب گرم', '5$8$30':'ماساژور', '5$9$0':'زنانه', '5$9$1':'مردانه', '5$10$0':'آنژیوکت', '5$10$1':'باند', '5$10$2':'دستکش', '5$10$3':'سرنگ', '5$10$4':'سوند', '5$10$5':'ضد عفونی کننده', '5$10$6':'کیسه کلستومی', '5$10$7':'لباس اتاق عمل', '5$10$8':'لوله اکسیژن', '5$10$9':'ماسک', '5$10$10':'محصولات کمک درمانی', '5$10$11':'تشکچه مواج', '5$10$12':'توالت فرنگی', '5$10$13':'چسب عضله', '5$10$14':'زیر انداز بیمار', '5$10$15':'عصا', '5$10$16':'گردن', '5$10$17':'نگهدارنده قرص', '5$11$0':'شیر خشک', '5$11$1':'غذای کمکی', '5$11$2':'لوازم کودک', '5$11$3':'پستانک', '5$11$4':'پوشک کودک', '5$11$5':'دستمال مرطوب کودک', '5$11$6':'دندان گیر', '5$11$7':'سر شیشه', '5$11$8':'شوینده لباس', '5$11$9':'شیشه شیر', '5$11$10':'فین گیر', '5$11$11':'ست قیچی و سوهان', '5$11$12':'لوازم غذا خوری', '5$11$13':'قاشق', '5$11$14':'لیوان نی دار', '5$11$15':'مسواک کودک', '5$11$16':'لوازم مادر بعد از بارداری', '5$11$17':'لوازم مادر دوران بارداری', '5$11$18':'مراقبت از پوست کودک', '5$11$19':'التیام بخش پوست کودکان', '5$11$20':'پاک کننده کودک', '5$11$21':'شوینده پوست کودک', '5$11$22':'ضد آفتاب کودکان', '5$11$23':'ضد التهاب', '5$11$24':'مرطوب کننده کودک', '5$11$25':'مراقبت از مو کودک', '5$11$26':'شامپو کودک', '5$11$27':'نرم کننده مو کودک', '5$12$0':'آفتاب سوختگی', '5$12$1':'رفع ترک', '5$12$2':'ضد سلولیت', '5$12$3':'بعد از مو زدایی', '5$12$4':'سوختگی صورت و بدن', '5$12$5':'اسکراب صورت', '5$12$6':'اسکراب و لایه بردار پوست', '5$12$7':'التیام بخش پوست', '5$12$8':'برنزه کننده', '5$12$9':'پاک کننده صورت', '5$12$10':'ترمیم کننده', '5$12$11':'ترمیم کننده لب', '5$12$12':'جمع کننده منافذ باز پوست', '5$12$13':'دور چشم', '5$12$14':'روشن کننده', '5$12$15':'شوینده', '5$12$16':'ضد آفتاب', '5$12$17':'ضد التهاب صورت', '5$12$18':'ضد جوش', '5$12$19':'ضد چروک', '5$12$20':'ضد لک صورت', '5$12$21':'کرم روز', '5$12$22':'کرم شب', '5$12$23':'لیفتینگ', '5$12$24':'ماسک صورت', '5$12$25':'مرطوب کننده', '5$12$26':'ضد قرمزی پوست', '5$12$27':'گزیدگی حشرات', '5$13$0':'اسپری 2 فاز', '5$13$1':'تثبیت کننده رنگ مو', '5$13$2':'ترمیم کننده مو', '5$13$3':'تقویت کننده مو', '5$13$4':'حجم دهنده مو', '5$13$5':'رنگ مو', '5$13$6':'سرم مو', '5$13$7':'شامپو', '5$13$8':'ضد ریزش', '5$13$9':'ضد شپش', '5$13$10':'ضد شوره', '5$13$11':'ضد موخوره', '5$13$12':'ماسک مو', '5$13$13':'نرم کننده مو', '5$14$0':'از بین برنده پوست اطراف ناخن', '5$14$1':'ترمیم کننده ناخن', '5$14$2':'تقویت کننده ناخن', '5$14$3':'جلوگیری از جویدن ناخن', '5$14$4':'خشک کننده سریع ناخن', '5$14$5':'محرک رشد ناخن', '5$15$0':'آمینو', '5$15$1':'ال آرژنین', '5$15$2':'ال کارنیتین', '5$15$3':'انرژی زا', '5$15$4':'بتا آلانین', '5$15$5':'بی سی ای ای', '5$15$6':'پروتئین', '5$15$7':'پری هورمون', '5$15$8':'پمپ', '5$15$9':'سی ال ای', '5$15$10':'شیکر', '5$15$11':'فیبر', '5$15$12':'کازئین', '5$15$13':'کافئین', '5$15$14':'کراتین', '5$15$15':'کربوهیدرات', '5$15$16':'گلوتامین', '5$15$17':'گینر', '5$16$0':'مکمل ها', '5$16$1':'ترکیبات مغذی', '5$16$2':'امگا ٣ و روغن ماهی', '5$16$3':'رویال ژلی', '5$16$4':'کلاژن', '5$16$5':'کوآنزیم', '5$16$6':'گلوکوزامین', '5$17$0':'افزایش اشتها', '5$17$1':'چربی سوز', '5$17$2':'کاهش اشتها', '5$17$3':'کاهش دهنده جذب', '5$17$4':'چای و دمنوش', '5$17$5':'پک های نیوشا', '5$17$6':'دمنوش', '5$17$7':'قهوه و هات چاکلت', '5$17$8':'مخلوط چای سبز', '5$17$9':'مخلوط چای سیاه', '5$17$10':'حافظه و اعصاب', '5$17$11':'تقویت حافظه و یادگیری', '5$17$12':'قرص ملاتونین', '5$17$13':'کاهش استرس و بهبود خواب', '5$18$0':'بارداری و شیردهی', '5$18$1':'پیش از بارداری', '5$18$2':'تقویت میل و عملکرد جنسی', '5$18$3':'شیر افزا', '5$18$4':'قاعدگی', '5$18$5':'مولتی ویتامین مخصوص بانوان', '5$18$6':'یائسگی', '5$19$0':'بهبود خواب', '5$19$1':'تقویت کننده سیستم ایمنی کودک', '5$19$2':'سلامت گوارش', '5$19$3':'کم خونی کودکان', '5$19$4':'ویتامین های کودکان', '5$20$0':'پرو بیوتیک', '5$20$1':'ضد اسهال', '5$20$2':'ضد سوزش معده', '5$20$3':'ضد نفخ', '5$20$4':'قرص کبد', '5$20$5':'هموروئید', '5$20$6':'یبوست', '5$21$0':'قرص پروستات', '5$21$1':'قرص تاخیری', '5$21$2':'مکمل تقویت قوای جنسی', '5$21$3':'مولتی ویتامین مخصوص آقایان', '5$22$0':'انرژی زا', '5$22$1':'بینایی (چشم)', '5$22$2':'پوست مو و ناخن', '5$22$3':'تقویت سیستم ایمنی', '5$22$4':'زگیل تناسلی', '5$22$5':'سلامت ریه', '5$22$6':'سیستم تنفس', '5$22$7':'قرص جوشان', '5$22$8':'قرص دیابت', '5$22$9':'قرص کم خونی', '5$22$10':'قرص مفاصل و استخوان', '5$22$11':'غضروف سازها', '5$22$12':'قلب و عروق', '5$22$13':'کرم و ژل تسکین دهنده درد', '5$22$14':'کلیه و مجاری ادرار', '5$23$0':'آلگومد', '5$23$1':'آووکادو', '5$23$2':'خار مریم', '5$23$3':'دارچین', '5$23$4':'زردچوبه', '5$23$5':'سایر گیاهان', '5$23$6':'سلدرین', '5$23$7':'سویا', '5$23$8':'سیر', '5$23$9':'قرص جینسینگ', '5$23$10':'گل مغربی', '5$23$11':'مخمر', '5$23$12':'مواد معدنی', '5$23$13':'آهن', '5$23$14':'زینک', '5$23$15':'زینک پلاس', '5$23$16':'سلنیوم', '5$23$17':'کروم', '5$23$18':'کلسیم', '5$23$19':'منیزیم', '5$23$20':'ید', '5$24$0':'امگا ٣ و روغن ماهی', '5$24$1':'آهن', '5$24$2':'ب کمپلکس', '5$24$3':'بیوتین B7', '5$24$4':'پوست مو و ناخن', '5$24$5':'ترکیبات مغذی', '5$24$6':'رویال ژلی', '5$24$7':'زگیل تناسلی', '5$24$8':'زینک (روی)', '5$24$9':'زینک پلاس', '5$24$10':'سلنیوم', '5$24$11':'فولیک اسید', '5$24$12':'فولیک اسید B9', '5$24$13':'قرص بیوتین', '5$24$14':'قرص جینسینگ', '5$24$15':'قرص دیابت', '5$24$16':'قرص کم خونی', '5$24$17':'قرص مفاصل و استخوان', '5$24$18':'قرص ویتامین B12', '5$24$19':'قرص ویتامین C', '5$24$20':'قرص ویتامین D', '5$24$21':'قرص ویتامین E', '5$24$22':'کرم و ژل تسکین دهنده درد', '5$24$23':'کروم', '5$24$24':'کلاژن', '5$24$25':'کلسیم', '5$24$26':'کوآنزیم', '5$24$27':'گلوکوزامین', '5$24$28':'منیزیم', '5$24$29':'مواد معدنی', '5$24$30':'مولتی ویتامین', '5$24$31':'مولتی ویتامین و مینرال', '5$24$32':'ویتامین ها', '5$24$33':'ید', '5$25$0':'محلول ضد عفونی کننده', '5$25$1':'ضد عفونی کننده سطوح', '5$25$2':'اسپری ضد عفونی کننده', '5$25$3':'ژل ضد عفونی کننده', '5$25$4':'ضد عفونی کننده دست', '5$25$5':'اکسیمتر', '5$25$6':'تب سنج', '5$25$7':'ماسک', '5$25$8':'دستکش', '5$25$9':'تقویت سیستم ایمنی', '5$25$10':'مکمل های غذایی', '6$0$0':'استرچ', '6$0$1':'بلوز', '6$0$2':'پاپیون', '6$0$3':'پلوور', '6$0$4':'پولوشرت', '6$0$5':'پیراهن', '6$0$6':'تکه دوزی', '6$0$7':'تی شرت', '6$0$8':'جلیقه', '6$0$9':'جوراب', '6$0$10':'جوراب شلواری پسرانه', '6$0$11':'دستکش', '6$0$12':'دمپایی مردانه', '6$0$13':'دوسیلندر', '6$0$14':'ژاکت', '6$0$15':'ژیله', '6$0$16':'سویشرت', '6$0$17':'شلوار پارچه‌ای', '6$0$18':'شلوار راحتی', '6$0$19':'شلوار کتان', '6$0$20':'شلوارک', '6$0$21':'کت و شلوار', '6$0$22':'کراوات', '6$0$23':'کفش مردانه', '6$0$24':'چکمه', '6$0$25':'پوتین', '6$0$26':'کمربند', '6$0$27':'لباس زیر مردانه', '6$0$28':'لباس ورزشی مردانه', '6$0$29':'مایو', '6$1$0':'بدنسازی', '6$1$1':'بلوزشلوارک', '6$1$2':'بلوز', '6$1$3':'بند جوراب', '6$1$4':'تاپ', '6$1$5':'تی‌شرت', '6$1$6':'مانتو', '6$1$7':'دامن', '6$1$8':'کت', '6$1$9':'لباس مجلسی', '6$1$10':'جوراب', '6$1$11':'جوراب شلواری', '6$1$12':'چادر', '6$1$13':'دستکش', '6$1$14':'روبنده', '6$1$15':'ساق', '6$1$16':'ساق شلواری', '6$1$17':'ست', '6$1$18':'شلوار', '6$1$19':'شلوارک', '6$1$20':'کلاه شنا', '6$1$21':'کمر', '6$1$22':'لباس بدنسازی', '6$1$23':'لباس خواب', '6$1$24':'لباس زیر زنانه', '6$1$25':'لباس ورزشی زنانه', '6$1$26':'مایو', '6$1$27':'مقنعه', '6$1$28':'روسری', '6$2$0':'پیراهن', '6$2$1':'شلوار', '6$2$2':'بلوز', '6$2$3':'دوتکه (بلوز و شلوار)', '6$2$4':'سه تکه (بلوز و شلوار و سوئی شرت)', '6$2$5':'سه تکه (بلوز و شلواز و تاپ)', '6$3$0':'یونیفورم', '6$3$1':'کمربند', '6$3$2':'جوشن', '6$3$3':'خرقه', '6$3$4':'دشداشه', '6$3$5':'قبا', '6$3$6':'عبا', '6$3$7':'نعلین', '6$3$8':'اسموکینگ', '6$3$9':'پولوور', '6$3$10':'بارانی', '6$3$11':'سرهمی', '6$3$12':'کلاه', '6$3$13':'کلاه کپ', '6$3$14':'دستبند', '6$3$15':'گردنبند', '7$0$0':'پژو', '7$0$1':'هیوندای', '7$0$2':'بی ام دبلیو', '7$0$3':'رنو', '7$0$4':'کيا', '7$0$5':'تويوتا', '7$0$6':'سایپا', '7$0$7':'مرسدس بنز', '7$0$8':'میتسوبیشی', '7$0$9':'مزدا', '7$0$10':'نيسان', '7$0$11':'فولکس واگن', '7$0$12':'ام وی ام', '7$0$13':'لکسوس', '7$1$0':'ست کاور بدنه خودرو', '7$1$1':'فلاپ', '7$1$2':'ساید بورد', '7$1$3':'گارد', '7$1$4':'کانتینر عقب', '7$1$5':'قاب آینه', '7$1$6':'کاتالیزور', '7$1$7':'سینی خودرو', '7$1$8':'جلو پنجره و قاب پلاک', '7$1$9':'چراغ خودرو', '7$1$10':'باربند خودرو', '7$1$11':'آینه بغل', '7$1$12':'باربند دوچرخه', '7$1$13':'محافظ میل گاردن', '7$2$0':'کفپوش خودرو', '7$2$1':'روکش فرمان خودرو', '7$2$2':'روکش صندلی خودرو', '7$2$3':'زیر دستی راننده', '7$2$4':'روکش سپر', '7$2$5':'روکش سالن', '7$2$6':'روکش داشبورد خودرو', '7$3$0':'مانیتور ماشین', '7$3$1':'دزدگیر خودرو', '7$3$2':'پنل کامپیوتر خودرو', '7$3$3':'باتری خودرو', '7$3$4':'ست کیتهای لامپ زنون', '7$3$5':'آنتن اتومبیل', '7$3$6':'استارت خودرو', '7$3$7':'اسپیکر تلفن خودرو', '7$3$8':'برقی خودرو', '7$3$9':'گرمکن شیشه و آینه', '7$3$10':'سیستم پارک خودرو', '7$3$11':'مبدل ولتاژ', '7$3$12':'ردیاب خودرو', '7$3$13':'آژیر و بلندگو', '7$3$14':'شمع خودرو', '7$3$15':'دوربین دید عقب خودرو', '7$3$16':'دوربین ضبط حرکت خودرو', '7$3$17':'دینام', '7$3$18':'اسپیکر خودرو', '7$3$19':'آمپلی فایر خودرو', '7$3$20':'بلندگوی خودرو', '7$3$21':'ضبط خودرو', '7$3$22':'چنجر خودرو', '7$4$0':'ساب خودرو', '7$4$1':'روغن گیربکس', '7$4$2':'روغن ترمز', '7$4$3':'دیسک ترمز', '7$4$4':'سیستم ترمز', '7$4$5':'وایر شمع', '7$4$6':'تسمه تایم', '7$4$7':'تسمه دینام', '7$4$8':'فیلتر سوخت', '7$4$9':'کمک فنر', '7$4$10':'رادیاتور ماشین', '7$4$11':'تسمه کولر ماشین', '7$4$12':'ترموستات', '7$4$13':'مکمل سوخت', '7$4$14':'ECU', '7$4$15':'سپر', '7$4$16':'روغن موتور', '7$4$17':'فیلتر روغن ماشین', '7$4$18':'لنت ترمز', '7$4$19':'فیلتر بنزین', '7$4$20':'کیت کلاچ', '7$4$21':'فیلتر هوای ماشین', '7$4$22':'فیلتر کابین ماشین', '7$4$23':'حسگر خودرو', '7$4$24':'لاستیک ماشین', '7$4$25':'ضدیخ', '7$4$26':'شلنگ خودرو', '7$4$27':'لامپ ماشین', '7$4$28':'واشر سر سیلندر', '7$4$29':'پولی سر میل لنگ', '7$4$30':'جلوبندی و تعلیق', '7$4$31':'جک خودرو', '7$4$32':'روکش خودرو', '7$4$33':'نظافت و نگهداری خودرو', '7$4$34':'آفتابگیر خودرو', '7$4$35':'قفل فرمان و پدال', '7$4$36':'تیغه برف پاکن', '7$4$37':'قالپاق', '7$4$38':'زنجیر چرخ', '7$4$39':'فشارسنج لاستیک', '7$4$40':'سایه‌بان کاپوت', '7$4$41':'رینگ', '7$4$42':'سایه‌بان پنجره خودرو', '7$4$43':'اگزوز اسپرت', '7$4$44':'زه چراغ خودرو', '7$4$45':'اسپویلر', '7$4$46':'چراغ زنون', '7$4$47':'خوشبو کننده ماشین', '7$4$48':'لگو خودرو', '7$4$49':'قاب ریموت', '7$5$0':'موتور سیکلت هوندا', '7$5$1':'موتور سیکلت سوزوکی', '7$5$2':'موتور سیکلت یاماها', '7$5$3':'موتور سیکلت متفرقه', '7$5$4':'موتور سیکلت نیرو محرکه', '7$5$5':'موتور سیکلت زیگما', '7$5$6':'موتور سیکلت کاوازاکی', '7$5$7':'موتور سیکلت رایکا', '7$5$8':'موتور سیکلت سابین', '7$5$9':'موتور سیکلت آرشیا', '7$5$10':'موتور سیکلت رگال', '7$5$11':'موتور سیکلت انرژی', '7$5$12':'موتور سیکلت بالت', '7$5$13':'موتور سیکلت دریم', '7$5$14':'موتور سیکلت کيا', '7$5$15':'لاستیک موتور', '7$5$16':'قفل موتور سیکلت', '7$5$17':'دزدگیر موتورسیکلت', '7$5$18':'دستکش موتور سواری', '7$6$0':'دوچرخه کوهستان', '7$6$1':'دوچرخه شهری', '7$6$2':'دوچرخه برق', '7$6$3':'دوچرخه اسپلینگ', '7$6$4':'دوچرخه مسابقه‌ای', '7$6$5':'دوچرخه بچه', '7$6$6':'کلاه کاسکت', '7$6$7':'لوازم ایمنی', '7$6$8':'چراغ دوچرخه', '7$6$9':'قمقمه', '7$6$10':'بوق و زنگ', '7$6$11':'چادر و پوشش دوچرخه', '7$6$12':'دستکش دوچرخه سواری', '7$6$13':'گریپ و نوار دسته', '7$6$14':'بست قمقمه', '7$6$15':'کیف دوچرخه', '7$6$16':'قفل دوچرخه', '7$6$17':'لوازم جانبی دوچرخه', '7$6$18':'کتلمبه', '7$6$19':'آینه دوچرخه', '7$6$20':'عینک دوچرخه سواری', '7$6$21':'ابزار دوچرخه', '7$6$22':'قطعات دوچرخه', '8$0$0':'مدال', '8$0$1':'آویز', '8$0$2':'زنجیر', '8$0$3':'نیم ست', '8$0$4':'سرویس طلا', '8$0$5':'سرویس جواهر', '8$0$6':'پابند طلا', '8$0$7':'آویز ساعت', '8$0$8':'رولباسی', '8$0$9':'النگو', '8$0$10':'انگشتر', '8$0$11':'جعبه جواهرات', '8$0$12':'دستبند', '8$0$13':'زنجیر', '8$0$14':'ست زیورآلات', '8$0$15':'گردنبند', '8$0$16':'گوشواره', '8$0$17':'سکه', '8$1$0':'ساعت مچی زنانه', '8$1$1':'ساعت مچی مردانه', '8$1$2':'ساعت بچگانه', '8$1$3':'ساعت دیواری', '8$2$0':'عینک آفتابی', '8$2$1':'عینک طبی', '8$2$2':'شیشه عینک ', '8$2$3':'عینک صنعتی', '9$0$0':'باکس', '9$0$1':'خانه', '9$0$2':'لوازم خواب', '9$0$3':'اسباب بازی حیوانات', '9$0$4':'انواع قلاده و ملزومات', '9$0$5':'پوشاک حیوانات', '9$0$6':'غذای حیوانات', '9$0$7':'وسایل آموزشی حیوانات', '9$0$8':'ظرف آب و غذا حیوانات', '9$1$0':'شامپو و اسپری و شوینده ها حیوانات', '9$1$1':'برس و شانه و ناخن گیر حیوانات', '9$1$2':'بهداشت دهان و دندان حیوانات', '9$1$3':'توالت و کیسه جمع آوری حیوانات', '9$1$4':'دستمال مرطوب حیوانات', '9$2$0':'مکمل و دارویی حیوانات', '9$2$1':'پت شاپ', '9$3$0':'گربه', '9$3$1':'سگ', '9$3$2':'پرنده', '9$3$3':'همستر', '9$3$4':'ماهی',
    };

    for (var i=0;i<$('.kala_quick_list_item').length;i++) {
        item = $('.kala_quick_list_item').eq(i).find('.kala_items_name');
        item_txt = item.text();
        if (datas[item_txt]) {
            kala_name = datas[item_txt];
        }
        else {
            kala_name = item_txt
        }
        item.text(topersianNumber((i+1).toString()) + '. ' + kala_name);
    }

    $('.kala_question_sign').click(function () {
        if (!($(this).hasClass('disable_click'))) {
            if ($(this).parent().parent().find('.kala_items_explain').css('display') === 'none') {
                $(this).parent().parent().find('.kala_items_name').animate({'padding-top': '18px'},500);
                $(this).parent().parent().find('.kala_question_sign').animate({'margin-top': '18px'},500);
                $(this).parent().parent().find('.kala_items_num').animate({'margin-top': '10px'},500);
                $(this).parent().parent().find('.kala_items_measurement').animate({'margin-top': '10px'},500);
            }
            else {
                $(this).parent().parent().find('.kala_items_name').animate({'padding-top': '7px'},500);
                $(this).parent().parent().find('.kala_question_sign').animate({'margin-top': '9px'},500);
                $(this).parent().parent().find('.kala_items_num').animate({'margin-top': '0px'},500);
                $(this).parent().parent().find('.kala_items_measurement').animate({'margin-top': '0px'},500);
            }
            $(this).parent().parent().find('.col-4 .kala_items_explain').slideToggle();
        }
    });

    $('#search_voice').keyup(function () {
        if ($('#search_voice').val() === '') {
            $('#search_plus').css({'color': '#424242', 'cursor': 'default'})
        }
        else {
            $('#search_plus').css({'color': '#4caf50', 'cursor': 'pointer'})
        }
    });

    $('#kala_quick_list_share_btn').hover(function () {
        $(this).addClass('shadow');
    }, function () {
        $(this).removeClass('shadow');
    });

    $('#kala_quick_list_copy_btn').hover(function () {
        $(this).addClass('shadow');
    }, function () {
        $(this).removeClass('shadow');
    });

    $('#kala_quick_list_print').hover(function () {
        $(this).addClass('shadow');
    }, function () {
        $(this).removeClass('shadow');
    });

    var data_codes = {"نخود سفید":"0$0$0", "نخود سیاه":"0$0$1", "نخود فرنگی سبز":"0$0$2", "لوبیا چیتی":"0$0$3", "لوبیا قرمز":"0$0$4", "لوبیا سفید":"0$0$5", "لوبیا چشم بلبلی":"0$0$6", "لوبیا سیاه":"0$0$7", "لوبیا عروس":"0$0$8", "لپه":"0$0$9", "عدس سیز":"0$0$10", "عدس قرمز":"0$0$11", "عدس قهوه ای":"0$0$12", "عدس نارنجی":"0$0$13", "ماش":"0$0$14", "باقلا":"0$0$15", "سویای بافتدار":"0$0$16", "سویای دانه ای":"0$0$17", "جو":"0$1$0", "جو پرک":"0$1$1", "جو دو سرپرک":"0$1$2", "ذرت":"0$1$3", "بلغور جو":"0$1$4", "جو پوست کنده":"0$1$5", "سبوس جو دوسر":"0$1$6", "سبوس جو":"0$1$7", "گندم":"0$1$8", "بلغور گندم":"0$1$9", "گندم پرک":"0$1$10", "جوانه گندم":"0$1$11", "سبوس گندم":"0$1$12", "گندم پوست کنده":"0$1$13", "سبوس برنج":"0$1$14", "برنج ایرانی":"0$1$15", "برنج خارجی":"0$1$16", "برنج ریز آش":"0$1$17", "آرد گندم نول(سفید قنادی)":"0$1$18", "آرد گندم(سبوس دار)":"0$1$19", "آرد فانتزی گندم":"0$1$20", "آرد جوانه گندم":"0$1$21", "آرد گندم نان معمولی":"0$1$22", "آرد همه منظوره":"0$1$23", "آرد برنج":"0$1$24", "آرد سمولینا":"0$1$25", "آرد ایرمیک":"0$1$26", "آرد ذرت":"0$1$27", "آرد نخودچی":"0$1$28", "آرد سوخاری":"0$1$29", "نان لواش":"0$2$0", "نان تست":"0$2$1", "باگت":"0$2$2", "نان سنتی":"0$2$3", "نان سوخاری":"0$2$4", "سنگک":"0$2$5", "بربری":"0$2$6", "نان روغنی":"0$2$7", "تافتون":"0$2$8", "نان سبوسدار":"0$2$9", "نان تقویت شده":"0$2$10", "کره پاستوریزه":"0$3$0$0", "کره بانمک ":"0$3$0$1", "کره باسیر و نمک":"0$3$0$2", "کره حیوانی گاوی ":"0$3$0$3", "کره حیوانی گاومیش":"0$3$0$4", "کره گیاهی مارگارین":"0$3$0$5", "کره پسته":"0$3$0$6", "کره بادام زمینی":"0$3$0$7", "پنیر تبریز":"0$3$1$0", "پنیر خامه ای":"0$3$1$1", "پنیر پاستوریزه ":"0$3$1$2", "پنیر پیتزا":"0$3$1$3", "ماست پاستوریزه کم‌چرب":"0$3$2$0", "ماست پاستوریزه پرچرب":"0$3$2$1", "ماست سنتی گاوی":"0$3$2$2", "ماست سنتی گوسفندی":"0$3$2$3", "ماست سنتی گاومیش":"0$3$2$4", "ماست چکیده":"0$3$2$5", "ماست طعم دار میوه‌ای":"0$3$2$6", "ماست کفیر":"0$3$2$7", "ماست یونانی":"0$3$2$8", "ماست همزده":"0$3$2$9", "ماست ایسلندی":"0$3$2$10", "ماست موسیر":"0$3$2$11", "ماست کفیر پربیوتیک":"0$3$2$12", "ماست پربیوتیک":"0$3$2$13", "شیر نایلونی کم چرب ":"0$3$3$0", "شیر نایلونی پر چرب ":"0$3$3$1", "شیر پاکتی کم چرب":"0$3$3$2", "شیر پاکتی کم چرب":"0$3$3$3", "شیر خرما":"0$3$3$4", "شیر موز":"0$3$3$5", "شیر کاکائو":"0$3$3$6", "شیر سویا":"0$3$3$7", "شیر شتر":"0$3$3$8", "شیر نارگیل":"0$3$3$9", "شیر غنی شده":"0$3$3$10", "شیر بدون لاکتوز":"0$3$3$11", "شیر نیم چرب":"0$3$3$12", "شیر قهوه":"0$3$3$13", "سرشیر سنتی":"0$3$4$0", "خامه پاستوریزه":"0$3$4$1", "خامه شکلاتی":"0$3$4$2", "خامه کاکوئی":"0$3$4$3", "خامه عسل":"0$3$4$4", "کشک پاستوریزه ":"0$3$5$0", "کشک خشک سنتی":"0$3$5$1", "عسل شهد طبیعی":"0$3$6$0", "عسل شهد بسته بندی کارخانه ای":"0$3$6$1", "عسل مومدار":"0$3$6$2", "عسل بسته بندی انفرادی":"0$3$6$3", "دوغ گازدار ":"0$3$7$0", "دوغ بدون گاز":"0$3$7$1", "دوغ طعم دار با سیر":"0$3$7$2", "دوغ گازدار تخمیری":"0$3$7$3", "دوغ با طعم نعناع":"0$3$7$4", "دوغ محلی":"0$3$7$5", "دوغ با گلپر":"0$3$7$6", "دوغ کفیر":"0$3$7$7", "دوغ آبعلی":"0$3$7$8", "دوغ گرمادیده":"0$3$7$9", "خانواده 1.5 لیتری ":"0$4$0$0", "خانواده 2 لیتری ":"0$4$0$1", "معمولی شیشه ای":"0$4$0$2", "معمولی بطری ":"0$4$0$3", "قوطی فلزی":"0$4$0$4", "نوشابه انرژی زا":"0$4$0$5", "خانواده":"0$4$1$0", "معمولی شیشه ای":"0$4$1$1", "قوطی فلزی":"0$4$1$2", "آب معدنی بزرگ":"0$4$2$0", "آب معدنی کوچک":"0$4$2$1", "کوچک نی دار":"0$4$3$0", "قوطی بزرگ":"0$4$3$1", "بطری یک و نیم لیتری ":"0$4$3$2", "آب میوه گازدار":"0$4$3$3", "چای فله ای":"0$4$4$0", "چای قوطی فلزی":"0$4$4$1", "چای بسته کاغذی":"0$4$4$2", "چای کیسه ای":"0$4$4$3", "دمنوش":"0$4$4$4", "پودر قهوه":"0$4$5$0", "پودر کاکائو":"0$4$5$1", "نسکافه":"0$4$5$2", "کافی میلک":"0$4$5$3", "عرق نعناع":"0$4$6$0", "گلاب":"0$4$6$1", "عرق پونه":"0$4$6$2", "عرق گل گاوزبان":"0$4$6$3", "عرق شاهسپران":"0$4$6$4", "عرق بادرنجبو":"0$4$6$5", "عرق یونجه":"0$4$6$6", "کنسرو لوبیا":"0$5$0$0", "کنسرو لوبیا و قارچ":"0$5$0$1", "کنسرو ذرت ":"0$5$0$2", "تن ماهی ":"0$5$0$3", "خورشت قیمه ":"0$5$0$4", "خورشت قرمه سبزی":"0$5$0$5", "کشک بادمجان":"0$5$0$6", "نخود فرنگی":"0$5$0$7", "گوجه فرنگی":"0$5$0$8", "ناگت مرغ":"0$5$0$9", "ناگت میگو ":"0$5$0$10", "خاویار":"0$5$0$11", "جوجه ":"0$5$0$12", "پیتزا":"0$5$0$13", "شنسل مرغ ":"0$5$0$14", "سوپ آماده ":"0$5$0$15", "آش آماده":"0$5$0$16", "سیب زمینی سرخ کرده":"0$5$0$17", "نخود آبگوشتی":"0$5$0$18", "خوراک بادمجان":"0$5$0$19", "برگ مو":"0$5$0$20", "قارچ":"0$5$0$21", "کنسرو سبزیجات ":"0$5$0$22", "سالاد اولویه مرغ":"0$5$0$23", "سالاد اولویه کالباس":"0$5$0$24", "سالاد اولویه مرغ ماکارونی":"0$5$0$25", "کنسرو ماکارونی":"0$5$0$26", "رب گوجه فرنگی":"0$5$0$27", "قلیله ماهی":"0$5$0$28", "کمپوت سیب":"0$5$1$0", "کمپوت گلابی":"0$5$1$1", "کمپوت گیلاس":"0$5$1$2", "کمپوت آناناس":"0$5$1$3", "خلال سیب زمینی":"0$6$0", "سبزیجات منجمد":"0$6$1", "میگو":"0$6$2", "میگوی سوخاری":"0$6$3", "فلافل پخته":"0$6$4", "ناگت مرغ":"0$6$5", "یوکفا":"0$7$0", "چیپس":"0$8$0", "پفک":"0$8$1", "پفیلا":"0$8$2", "بستنی":"0$8$3", "شکلات فله‌‌ای":"0$8$4", "شکلات کادوئی":"0$8$5", "شکلات تلخ تخته ای":"0$8$6", "اسمارتیز":"0$8$7", "کشمش":"0$8$8", "بادام":"0$8$9", "فندق":"0$8$10", "پسته":"0$8$11", "گردو":"0$8$12", "مغز گردو":"0$8$13", "بادام زمینی":"0$8$14", "تخم کدو":"0$8$15", "آلو خشک":"0$8$16", "آلبالو خشک":"0$8$17", "توت خشک":"0$8$18", "بادام زمینی":"0$8$19", "تخمه آفتابگردان":"0$8$20", "مغز تخم آفتابگردان":"0$8$21", "آجیل مخلوط":"0$8$22", "تخم کدو":"0$8$23", "تخم هندوانه":"0$8$24", "مغز تخم هندوانه":"0$8$25", "بیسکویت تک نفری":"0$8$26", "بیسکویت جعبه‌ای":"0$8$27", "بیسکویت شکلاتی":"0$8$28", "ژله":"0$8$29", "ژله پف":"0$8$30", "ویفر":"0$8$31", "بستنی زمستانی":"0$8$32", "شکلات صبحانه":"0$8$33", "آدامس":"0$8$34", "خوشبو کننده دهان":"0$8$35", "اسنک پنیری":"0$8$36", "پاستیل":"0$8$37", "کورن نسکوئیک جعبه‌ای":"0$8$38", "لواشک":"0$8$39", "تمبر هندی":"0$8$40", "قرص نعناع":"0$8$41", "قرص زنجبیل":"0$8$42", "میوه خشک":"0$8$43", "شیرینی قنادی":"0$8$44", "نوقا":"0$8$45", "ریس":"0$8$46", "قطاب":"0$8$47", "گز":"0$8$48", "خشکبار":"0$8$49", "کالباس":"0$9$0", "سوسیس":"0$9$1", "تخم مرغ":"0$9$2", "قارچ":"0$9$3", "گوشت مرغ":"0$9$4", "گوشت گوسفند":"0$9$5", "گوشت گوساله":"0$9$6", "گوشت چرخ کرده":"0$9$7", "گوشت اردک":"0$9$8", "گوشت شتر":"0$9$9", "گوشت شتر مرغ":"0$9$10", "میگو":"0$9$11", "ماهی":"0$9$12", "بلدرچین":"0$9$13", "بوقلمون":"0$9$14", "کله و پاچه":"0$9$15", "سیرابی":"0$9$16", "جگر":"0$9$17", "دل":"0$9$18", "قلوه":"0$9$19", "استخوان قلم":"0$9$20", "پای مرغ":"0$9$21", "جگر مرغ":"0$9$22", "تخم مرغ روز":"0$9$23", "تخم مرغ سنتی":"0$9$24", "تخم مرغ تاریخدار":"0$9$25", "تخم مرغ شتر مرغ":"0$9$26", "خیار شور فله‌ای":"0$10$0", "خیارشور شیشه‌ای":"0$10$1", "زیتون فله‌ای":"0$10$2", "زیتون بسته‌ای":"0$10$3", "ترشی":"0$10$4", "سیر ترشی":"0$10$5", "پودر ژله":"0$11$0", "پودر پودینگ":"0$11$1", "کرم کارامل":"0$11$2", "دسر بیسکویتی":"0$11$3", "دسر وانیلی":"0$11$4", "دسر زعفرانی":"0$11$5", "دسر شکلاتی":"0$11$6", "دسر موزی":"0$11$7", "دسر توت فرنگی":"0$11$8", "دسر نوشیدنی دنت":"0$11$9", "دسر طالبی":"0$11$10", "دسر بلوبری":"0$11$11", "دسر ژله‌ای چند میوه":"0$11$12", "قند حبه‌ای‌":"0$12$0", "قند کله‌ای":"0$12$1", "قند کلوغ":"0$12$2", "شکر":"0$12$3", "نبات":"0$12$4", "نبات بسته بندی زعفرانی":"0$12$5", "نبات نی دار بسته‌ای":"0$12$6", "نبات فله‌ای بی رنگ":"0$12$7", "نبات فله‌ای زعفرانی":"0$12$8", "نقل":"0$12$9", "روغن زیتون":"0$13$0", "روغن کنجد":"0$13$1", "روغن آفتابگردان":"0$13$2", "روغن سرخ کردنی":"0$13$3", "روغن ذرت":"0$13$4", "روغن جامد":"0$13$5", "روغن زرد حیوانی":"0$13$6", "روغن کانولا":"0$13$7", "ادویه جات":"0$14$0", "پودر نارگیل":"0$14$1", "آب لیمو":"0$14$2", "لیمو امانی":"0$14$3", "زرشک":"0$14$4", "نمک پودری":"0$14$5", "نمک سنگی":"0$14$6", "جوش شیرین":"0$14$7", "آب غوره":"0$14$8", "فلفل سیاه":"0$14$9", "زرد چوبه":"0$14$10", "پودر فلفل":"0$14$11", "کنجد":"0$14$12", "سس گوجه فرنگی":"0$14$13", "سرکه سفید":"0$14$14", "سس مایونیز":"0$14$15", "پیاز سرخ شده":"0$14$16", "رب گوجه فرنگی":"0$14$17", "سس خردل":"0$14$18", "عصاره گوشت مرغ":"0$14$19", "عصاره گوشت":"0$14$20", "سرکه قرمز":"0$14$21", "زعفران":"0$14$22", "سس فرانسوی":"0$14$23", "سس فلفل سبز":"0$14$24", "سس فلفل قرمز":"0$14$25", "سس ایتالیایی":"0$14$26", "سرکه سیب":"0$14$27", "حلوا شکری کوچک":"0$15$0", "حلوا شکری بزرگ":"0$15$1", "حلوا شکری فله‌ای":"0$15$2", "ارده":"0$15$3", "حلوا ارده":"0$15$4", "گردو":"0$15$5", "بادام":"0$15$6", "مربای انجیر":"0$15$7", "مربای هویج":"0$15$8", "مربای زنجبیل":"0$15$9", "مربای به":"0$15$10", "مربای آلبالو":"0$15$11", "کره":"0$15$12", "کره بادام":"0$15$13", "کره پسته":"0$15$14", "کورن فلکس":"0$15$15", "عسل":"0$15$16", "کرم کنجد":"0$15$17", "شکلات صبحانه قهوه‌ای":"0$15$18", "شکلات صبحانه دورنگ":"0$15$19", "ازگیل":"0$16$0", "انار":"0$16$1", "انبه":"0$16$2", "انجیر":"0$16$3", "انگور":"0$16$4", "آلبالو":"0$16$5", "آلو":"0$16$6", "آناناس":"0$16$7", "آواکادو":"0$16$8", "بادام":"0$16$9", "بالنگ":"0$16$10", "بلوط":"0$16$11", "به":"0$16$12", "پرتغال":"0$16$13", "پرتغال تامسون":"0$16$14", "پرتغال خونی":"0$16$15", "پرتغال محلی":"0$16$16", "پسته":"0$16$17", "تمشک":"0$16$18", "توت سفید":"0$16$19", "توت فرنگی":"0$16$20", "توت":"0$16$21", "خربزه":"0$16$22", "خرما":"0$16$23", "خرمالو":"0$16$24", "خیار":"0$16$25", "ذرت":"0$16$26", "زالزالک":"0$16$27", "زرد آلو":"0$16$28", "زرشک":"0$16$29", "زغال اخته":"0$16$30", "زنجبیل":"0$16$31", "زیتون":"0$16$32", "سنجد":"0$16$33", "سیب زرد":"0$16$34", "سیب سبز":"0$16$35", "سیب سرخ":"0$16$36", "سیب سفید":"0$16$37", "سیب قندک":"0$16$38", "سیب گلاب":"0$16$39", "شاه توت":"0$16$40", "شفتالو":"0$16$41", "شلیل":"0$16$42", "طالبی":"0$16$43", "عناب":"0$16$44", "فندق":"0$16$45", "کدو":"0$16$46", "کیوی":"0$16$47", "گردو":"0$16$48", "گریپ فروت":"0$16$49", "گلابی":"0$16$50", "گلابی زرد":"0$16$51", "گلابی قرمز":"0$16$52", "گوجه سبز":"0$16$53", "گیلاس":"0$16$54", "لیمو":"0$16$55", "لیموترش":"0$16$56", "موز":"0$16$57", "نارگیل":"0$16$58", "نارنج":"0$16$59", "نارنگی":"0$16$60", "هلو":"0$16$61", "هلو انجیری":"0$16$62", "هندوانه":"0$16$63", "اسفناج":"0$17$0", "بادمجان":"0$17$1", "بادمجان دلمه‌ای":"0$17$2", "باقلا":"0$17$3", "بامیه":"0$17$4", "برگ چغندر":"0$17$5", "پیاز":"0$17$6", "پیاز سفید":"0$17$7", "پیاز قرمز":"0$17$8", "پیاز کوهی":"0$17$9", "ترب":"0$17$10", "ترب سیاه":"0$17$11", "تربچه":"0$17$12", "تره":"0$17$13", "تلخون":"0$17$14", "جعفری":"0$17$15", "جلبک دریایی":"0$17$16", "جوانه ها":"0$17$17", "چغندر":"0$17$18", "خردل":"0$17$19", "خیار":"0$17$20", "دنبلان":"0$17$21", "ذرت":"0$17$22", "ریحان":"0$17$23", "زیتون":"0$17$24", "سبزی آش":"0$17$25", "سبزی آش آماده":"0$17$26", "سبزی خوردنی":"0$17$27", "سبزی خوردنی آماده":"0$17$28", "سبزی قورمه سبزی":"0$17$29", "سبزی قورمه‌سبزی(آماده)":"0$17$30", "سبزی کوکو":"0$17$31", "سبزی کوکو(آماده)":"0$17$32", "سبزی کوهی":"0$17$33", "سبزیجات خرد شده":"0$17$34", "سیب زمینی":"0$17$35", "سیر":"0$17$36", "شاه تره":"0$17$37", "شاهی":"0$17$38", "شلغم":"0$17$39", "شنبلیله":"0$17$40", "شوید":"0$17$41", "علف چشمه":"0$17$42", "فلفل":"0$17$43", "فلفل دلمه‌ای":"0$17$44", "قارچ":"0$17$45", "کاسنی":"0$17$46", "کاکوتی":"0$17$47", "کاهو":"0$17$48", "کدو":"0$17$49", "کدو تنبل":"0$17$50", "کرفس":"0$17$51", "کلم برکلی":"0$17$52", "کلم پیچ":"0$17$53", "کلم سفید":"0$17$54", "کلم قرمز":"0$17$55", "کنگر":"0$17$56", "گزنه":"0$17$57", "گشنیز":"0$17$58", "گل کلم":"0$17$59", "گوجه فرنگی":"0$17$60", "لوبیا سبز":"0$17$61", "مارچوبه":"0$17$62", "مرزنگوش":"0$17$63", "مرزه":"0$17$64", "موسیر":"0$17$65", "نخود سبز":"0$17$66", "نخود فرنگی":"0$17$67", "نعناع":"0$17$68", "هویج":"0$17$69", "هویج خرد شده خورشتی":"0$17$70", "هویج خرد شده سوپی":"0$17$71", "باقالی پلو با ماهی قزل آلا":"0$18$0", "چلو کباب میکس":"0$18$1", "باقالی پلو با ماهیچه":"0$18$2", "چلو کباب شیشلیک":"0$18$3", "زرشک پلو با مرغ":"0$18$4", "باقالی پلو با مرغ":"0$18$5", "چلو مرغ و بادمجان":"0$18$6", "چلو مرغ":"0$18$7", "زرشک پلو":"0$18$8", "خوراک ماهی قزل آلا":"0$18$9", "باقالی پلو":"0$18$10", "چلو خورشت قرمه سبزی":"0$18$11", "چلو خورشت قیمه":"0$18$12", "خورش قیمه":"0$18$13", "خورش قرمه سبزی":"0$18$14", "خورشت قیمه بادمجان":"0$18$15", "ترشی ها":"0$18$16", "سس ها":"0$18$17", "کشک بادمجان":"0$18$18", "میرزا قاسمی":"0$18$19", "سوپ جو":"0$18$20", "پنیر":"0$18$21", "سیب زمینی مکزیکی":"0$18$22", "ماست و اسفناج":"0$18$23", "ماست و خیار":"0$18$24", "ماست":"0$18$25", "زیتون سیاه و سبز":"0$18$26", "سبزی خوردن":"0$18$27", "سالاد شیرازی":"0$18$28", "سالاد سزار":"0$18$29", "سالاد فصل":"0$18$30", "سالاد گرجی":"0$18$31", "سالاد یونانی":"0$18$32", "چلو کباب میکس":"0$18$33", "چلو کباب لقمه بادمجان":"0$18$34", "چلو کباب رول میکس":"0$18$35", "چلو کباب وزیری":"0$18$36", "جوجه کباب جوجه با استخوان":"0$18$37", "چلو کباب جوجه":"0$18$38", "چلو کباب لقمه":"0$18$39", "چلو کباب کوبیده":"0$18$40", "چلو کباب بختیاری":"0$18$41", "کباب بلغاری":"0$18$42", "چلو کباب برگ":"0$18$43", "چلو کباب فیله":"0$18$44", "چلو کباب شیشلیک":"0$18$45", "چلو کباب سلطانی":"0$18$46", "چلو گردن":"0$18$47", "کارامل گلاسه":"0$19$0$0", "تیرامیسو گلاسه":"0$19$0$1", "کوکا گلاسه":"0$19$0$2", "میوه گلاسه":"0$19$0$3", "شاه توت":"0$19$0$4", "طالبی گلاسه":"0$19$0$5", "فانتا گلاسه":"0$19$0$6", "شکلات گلاسه":"0$19$0$7", "کافه گلاسه":"0$19$0$8", "اسموتی لیمو":"0$19$1$0", "اسموتی پرتقال":"0$19$1$1", "آبمیوه مخصوص":"0$19$1$2", "آبمیوه":"0$19$1$3", "شیر سرد":"0$19$1$4", "ماءالشعیر بدون الکل":"0$19$1$5", "شیر قهوه":"0$19$2$0", "شیر نسکافه":"0$19$2$1", "قهوه ترک":"0$19$2$2", "قهوه فرانسه":"0$19$2$3", "نسکافه":"0$19$2$4", "اسپرسو":"0$19$2$5", "دابل اسپرسو":"0$19$2$6", "هات چاکلت":"0$19$2$7", "کاپوچینو با کف شیر":"0$19$2$8", "کاپوچینو با کف خامه":"0$19$2$9", "کاپو ایرانی با کف قهوه":"0$19$2$10", "شیر کاکائو":"0$19$2$11", "چای ساده":"0$19$2$12", "چای نعنا":"0$19$2$13", "چای سبز طعم دار":"0$19$2$14", "چای نبات":"0$19$2$15", "چای دارچین":"0$19$2$16", "چای نبات‌طعم‌دار(میوه‌ای)":"0$19$2$17", "میلک شیک":"0$19$3$0", "میلک شیک قهوه":"0$19$3$1", "میلک شیک شکلات":"0$19$3$2", "میلک شیک کاپوچینو":"0$19$3$3", "میلک شیک تیرامیسو":"0$19$3$4", "میلک شیک کارامل":"0$19$3$5", "میلک شیک کاکائو":"0$19$3$6", "میلک شیک خرما":"0$19$3$7", "هانی شیک":"0$19$3$8", "میلک شیک وانیل":"0$19$3$9", "میلک شیک میوه":"0$19$3$10", "میلک شیک فانتا":"0$19$3$11", "میلک شیک نسکافه":"0$19$3$12", "میلک شیک طالبی":"0$19$3$13", "میلک شیک طالبی":"0$19$3$14", "بستنی ساین شاین":"0$19$4$0", "کیک بستنی ساندی":"0$19$4$1", "بنانا اسپلیت":"0$19$4$2", "کوکتل میوه و بستنی":"0$19$4$3", "شکلات ساندی":"0$19$4$4", "بستنی میوه‌ای":"0$19$4$5", "بستنی با ژله و خامه":"0$19$4$6", "کوکتل آناناس":"0$19$4$7", "بستنی خامه هلویی":"0$19$4$8", "بستنی کارامل نسکافه":"0$19$4$9", "بستنی ایتالیایی":"0$19$4$10", "بستنی شکلاتی":"0$19$4$11", "بستنی وانیلی":"0$19$4$12", "بستنی طالبی":"0$19$4$13", "بستنی شاه توت":"0$19$4$14", "بستنی تیرامیسو":"0$19$4$15", "پیتزا":"0$20$0", "بیف":"0$20$1", "قارچ و مرغ":"0$20$2", "قارچ و گوشت":"0$20$3", "زبان":"0$20$4", "پیده":"0$20$5", "فلادیلفیا":"0$20$6", "سوخاری":"0$20$7", "ساندویج ":"0$20$8", "همبرگر":"0$20$9", "کالباس":"0$20$10", "سوسیس":"0$20$11", "زبان":"0$20$12", "مغز":"0$20$13", "هات داگ":"0$20$14", "ژامبون":"0$20$15", "کنتاکی":"0$20$16", "پاستا":"0$20$17", "تلویزیون":"1$0$0", "کنسول بازی":"1$0$1", "ضبط و پخش‌‌کننده ‌دیجیتال":"1$0$2", "ضبط کننده صدا":"1$0$3", "موزیک پلیر":"1$0$4", "اف ام پلیر":"1$0$5", "پخش کننده دی وی دی":"1$0$6", "گیرنده دیجیتال":"1$0$7", "ساندبار":"1$0$8", "بلوری پلیر":"1$0$9", "سینمای خانگی":"1$0$10", "میکروفون":"1$0$11", "اسپیکر":"1$0$12", "رادیو":"1$0$13", "عینک و هدست مجازی":"1$0$14", "واکی تاکی":"1$0$15", "میز تلویزیون":"1$0$16", "آمپلی فایر":"1$0$17", "باتری قلمی و شارژر":"1$0$18", "بلندگوی سقفی":"1$0$19", "براکت دیواری":"1$0$20", "محافظ و چند راهی برق":"1$0$21", "استابیلایزر":"1$0$22", "لوازم جانبی کنسول بازی":"1$0$23", "دسته بازی":"1$0$24", "فرمان ماشین بازی":"1$0$25", "جوی استیک":"1$0$26", "کینکت":"1$0$27", "صندلی گیمینگ":"1$0$28", "میز گیمنگ":"1$0$29", "عینک سه بعدی":"1$0$30", "ریموت کنترل":"1$0$31", "کابل AUX":"1$0$32", "محافظ صفحه تلویزیون":"1$0$33", "کابل HDMI":"1$0$34", "دوربین عکاسی":"1$0$35", "دوربین فیلم برداری":"1$0$36", "لنز دوربین عکاسی":"1$0$37", "تلسکوپ":"1$0$38", "دوربین ورزشی":"1$0$39", "دوربین دو چشمی":"1$0$40", "کیف دوربین":"1$0$41", "پایه و سه پایه دوربین":"1$0$42", "فلاش استودیویی":"1$0$43", "شکل دهنده نور":"1$0$44", "رادیو تریگر":"1$0$45", "پرده و پایه پرده":"1$0$46", "میز نور عکاسی":"1$0$47", "فلاش دوربین":"1$0$48", "نورسنج و کالرمتر":"1$0$49", "فیلترها و لوازم جانبی لنز":"1$0$50", "ریموت دوربین":"1$0$51", "محافظ صفحه دوربین":"1$0$52", "کیت فلاش آتلیه":"1$0$53", "سافت باکس آتلیه":"1$0$54", "قاب عکس دیجیتال":"1$0$55", "هود لنز":"1$0$56", "سر سه پایه":"1$0$57", "آداپتور و کانورتر دوربین":"1$0$58", "نور ثابت فوتوفلکس":"1$0$59", "باتری و شارژر دوربین":"1$0$60", "راهنمای فارسی دوربین":"1$0$61", "گریپ دوربین":"1$0$62", "چادر عکاسی":"1$0$63", "رفلکتور":"1$0$64", "پنکه آتلیه":"1$0$65", "فیلم دوربین":"1$0$66", "فون عکاسی":"1$0$67", "میکروفون دوربین":"1$0$68", "تجهیزات آتلیه":"1$0$69", "لوازم جانبی تلسکوپ":"1$0$70", "آب میوه گیر":"1$1$0", "آرام پز":"1$1$1", "اسپرسوساز":"1$1$2", "آسیاب برقی":"1$1$3", "آون برقی":"1$1$4", "پارچ برقی":"1$1$5", "پاستا پز":"1$1$6", "پلوپز":"1$1$7", "توستر":"1$1$8", "چای ساز":"1$1$9", "چرخ گوشت":"1$1$10", "خرد کن":"1$1$11", "ساندویچ ساز":"1$1$12", "سرخ کن":"1$1$13", "سماور برقی":"1$1$14", "غذا ساز":"1$1$15", "قهوه جوش":"1$1$16", "قهوه ساز":"1$1$17", "کباب پز":"1$1$18", "کتری برقی":"1$1$19", "گوشت کوب برقی":"1$1$20", "ماشین ظرفشویی":"1$1$21", "ماشین لباسشویی":"1$1$22", "ماکروفر":"1$1$23", "ماکروویو":"1$1$24", "مخلوط کن":"1$1$25", "میوه و سبزی خشک کن":"1$1$26", "هم‌زن برقی":"1$1$27", "همزن کاسه دار":"1$1$28", "هود":"1$1$29", "یخچال":"1$1$30", "یخچال ساید‌بای‌ساید":"1$1$31", "یخچال فریزر":"1$1$32", "هواپز":"1$1$33", "سوپ ساز":"1$1$34", "آب پرتغال گیری":"1$1$35", "تخم‌مرغ پز":"1$1$36", "بخار پز":"1$1$37", "ساندویچ ساز":"1$1$38", "گریل":"1$1$39", "بستنی ساز":"1$1$40", "سبزی خرد‌کن":"1$1$41", "کیک پز و نان پز":"1$1$42", "کف شیر و خامه ساز":"1$1$43", "آبسرد کن":"1$1$44", "جارو برقی":"1$1$45", "جارو شارژی":"1$1$46", "بخار شوی":"1$1$47", "اتو":"1$1$48", "کولر":"1$1$49", "تصفیه هوا":"1$1$50", "تصفیه آب":"1$1$51", "بخور گرم":"1$1$52", "بخور سرد":"1$1$53", "کف و سرامیک شو":"1$1$54", "خشک کن لباس":"1$1$55", "مینی واش":"1$1$56", "اتو بخار پرس":"1$1$57", "مبل":"1$2$0", "تختخواب":"1$2$1", "میز غذاخوری":"1$2$2", "میز عسلی":"1$2$3", "صندلی غذاخوری":"1$2$4", "صندلی مطالعه":"1$2$5", "فرش ماشینی":"1$2$6", "فرش دست باف":"1$2$7", "تابلو فرش":"1$2$8", "بوفه":"1$2$9", "میز تلویزیون":"1$2$10", "روانداز مبل":"1$2$11", "ساعت دیواری":"1$2$12", "لوستر":"1$2$13", "آباژور":"1$2$14", "گلدان":"1$2$15", "گل طبیعی":"1$2$16", "گل مصنوعی":"1$2$17", "سرویس خواب":"1$2$18", "روتختی":"1$2$19", "پتو":"1$2$20", "بالش":"1$2$21", "کوسن":"1$2$22", "پادری":"1$2$23", "رو بالشی":"1$2$24", "محافظ تشک":"1$2$25", "تشک":"1$2$26", "لحاف":"1$2$27", "بالش":"1$2$28", "متکا":"1$2$29", "آباژور رو میزی":"1$2$30", "روبالشی":"1$2$31", "رختخواب":"1$2$32", "خوشخواب":"1$2$33", "پتو":"1$2$34", "ملحفه":"1$2$35", "چراغ مطالعه":"1$2$36", "قفل":"1$2$37", "در باز کن":"1$2$38", "کلید":"1$2$39", "آرام بند":"1$2$40", "چرخ خیاطی":"1$2$41", "درب قوطی باز کن":"1$2$42", "کباب پز و باربیکیو":"1$2$43", "چشمه شکلات":"1$2$44", "گاوصندوق":"1$2$45", "مخزن آب":"1$2$46", "تخته گوشت":"1$2$47", "رنده و پوست کن":"1$2$48", "زیر قاشقی کنار گاز":"1$2$49", "کفگیر و ملاقه":"1$2$50", "دستمال نظافت":"1$2$51", "کمد و کتابخانه":"1$2$52", "میز اتو":"1$2$53", "جا کفشی":"1$2$54", "بند رخت":"1$2$55", "ظروف ملامین":"1$2$56", "قوری چینی":"1$2$57", "قندان":"1$2$58", "ترازوی آشپزخانه":"1$2$59", "سطل و تی":"1$3$0$0", "زمین شوی":"1$3$0$1", "ست جارو و خاک انداز":"1$3$0$2", "فرچه":"1$3$0$3", "پایه رول دستمال ":"1$3$0$4", "دستمال توالت ":"1$3$0$5", "دستکش نظافت ":"1$3$0$6", "گرد گیر":"1$3$0$7", "سبد رخت چرک":"1$3$0$8", "بند رخت":"1$3$0$9", "گیره لباس":"1$3$0$10", "پرزگیر":"1$3$0$11", "کیسه زباله":"1$3$0$12", "اسکاچ ":"1$3$0$13", "سیم ظرفشویی":"1$3$0$14", "مخزن مایع دستشویی":"1$3$1$0", "ست سرویس بهداشتی":"1$3$1$1", "پمپ چاه بازکن":"1$3$1$2", "پادری":"1$3$1$3", "جای مایع ظرفشویی":"1$3$1$4", "تی و شیشه شوی":"1$3$1$5", "جای پودر شوینده":"1$3$1$6", "جارو و خاک انداز":"1$3$1$7", "جای دستمال کاغذی":"1$3$1$8", "آبکش و لگن":"1$3$1$9", "سرویس حمام":"1$3$1$10", "برس بهداشتی":"1$3$1$11", "جای اسکاج و صابون":"1$3$1$12", "سطل زباله":"1$3$1$13", "حوله دستی":"1$3$1$14", "فرچه دستشویی":"1$3$1$15", "لوازم حمام":"1$3$1$16", "وان حمام":"1$3$1$17", "پرده حمام":"1$3$1$18", "دمپایی":"1$3$1$19", "بند سیار":"1$3$1$20", "ابزار حمام":"1$3$1$21", "حوله حمام":"1$3$1$22", "لیف و اسفنج":"1$3$1$23", "سنگ پا":"1$3$1$24", "کرم مرطوب کننده":"1$3$2$0", "ژل مرطوب کننده":"1$3$2$1", "مسواک":"1$3$2$2", "خمیر دندان":"1$3$2$3", "نخ دندان":"1$3$2$4", "خلال دندان":"1$3$2$5", "گوش پاکن":"1$3$2$6", "شانه":"1$3$2$7", "صابون جامد":"1$3$2$8", "صابون مایع":"1$3$2$9", "صابون مراغه":"1$3$2$10", "شامپو":"1$3$2$11", "شامپو بچه":"1$3$2$12", "شامپو بدن":"1$3$2$13", "شامپو بدن کودک":"1$3$2$14", "ماسک":"1$3$2$15", "الکل":"1$3$2$16", "پوشاک بچه":"1$3$2$17", "نوار  بهداشتی":"1$3$2$18", "ژل بانوان":"1$3$2$19", "پودر نظافت":"1$3$2$20", "تیغ اصلاح":"1$3$2$21", "خودتراش":"1$3$2$22", "نرم کننده":"1$3$3$0", "پودر لباسشویی دست":"1$3$3$1", "پودر لباسشویی ماشین":"1$3$3$2", "مایع دستشویی بزرگ":"1$3$3$3", "مایع دستشویی کوچک":"1$3$3$4", "مایع ظرف‌شویی بزرگ":"1$3$3$5", "مایع ظرف‌شویی کوچک":"1$3$3$6", "دستمال":"1$3$3$7", "بوگیر":"1$3$3$8", "سفید کننده":"1$3$3$9", "جرم گیر":"1$3$3$10", "اسکاچ":"1$3$3$11", "دستکش ظرف شویی":"1$3$3$12", "سیم ظرفشویی":"1$3$3$13", "قرص ماشین‌ظرفشویی":"1$3$3$14", "پودر ماشین‌ظرفشویی":"1$3$3$15", "ژل ماشین ظرفشویی":"1$3$3$16", "شیشه پاک کن":"1$3$3$17", "پاک کننده چند منظوره":"1$3$3$18", "پودر بچه":"1$3$3$19", "حشره کش":"1$3$3$20", "عود":"1$3$3$21", "ظروف یکبار مصرف":"1$3$3$22", "چسب زخم":"1$3$3$23", "الکل":"1$3$3$24", "محلول ضدعفونی دست":"1$3$3$25", "محلول ضدعفونی میوه و سبزیجات":"1$3$3$26", "دستمال کاغذی قوطی":"1$3$3$27", "دستمال مرطوب":"1$3$3$28", "دستمال کاغذی جیبی":"1$3$3$29", "دستمال توالت":"1$3$3$30", "دستمال کاغذی حوله‌ای":"1$3$3$31", "دستمال کاغذی ماشین":"1$3$3$32", "کولر گازی":"1$4$0", "کولر آبی":"1$4$1", "تصفیه هوا":"1$4$2", "پنکه":"1$4$3", "بخاری گازی":"1$4$4", "بخاری برقی":"1$4$5", "رادیاتور برقی":"1$4$6", "آبگرمکن":"1$4$7", "پکیج دیواری":"1$4$8", "فن هیتر":"1$4$9", "شوفاژ رادیاتور":"1$4$10", "کشوی گرمکن":"1$4$11", "لوازم جانبی کولر":"1$4$12", "شناور کولر":"1$4$13", "تسمه کولر":"1$4$14", "آبریز پوشال":"1$4$15", "فلکه موتور":"1$4$16", "یاتاقان":"1$4$17", "فن کویل":"1$4$18", "هواساز":"1$4$19", "پرده هوا":"1$4$20", "چیلر":"1$4$21", "لوازم جانبی پکیج های گرمایشی":"1$4$22", "دستگاه تصفیه آب":"1$4$23", "اجاق گاز":"1$4$24", "آبسردکن":"1$4$25", "لوستر و نورپردازی":"1$5$0", "پروژکتور":"1$5$1", "پنل اچ لایت":"1$5$2", "لامپ":"1$5$3", "مهتابی":"1$5$4", "لوستر":"1$5$5", "آویز":"1$5$6", "دیوارکوب":"1$5$7", "چراغ دیواری":"1$5$8", "آباژور":"1$5$9", "چراغ رومیزی":"1$5$10", "هالوژن":"1$5$11", "چراغ اضطراری":"1$5$12", "چراغ خواب":"1$5$13", "کف ال ای دی":"1$5$14", "مبل":"1$6$0", "میز و صندلی ناهارخوری":"1$6$1", "میز عسلی":"1$6$2", "مبل تخت خوابشو":"1$6$3", "بوفه":"1$6$4", "کمد و دراور":"1$6$5", "تخت یک نفره":"1$6$6", "تخت دو نفره":"1$6$7", "میز جلو مبلی":"1$6$8", "میز دکوری":"1$6$9", "پاتختی":"1$6$10", "جالباسی":"1$6$11", "جاکفشی":"1$6$12", "فرش دستبافت":"1$6$13", "گلیم و جاجیم":"1$6$14", "فرش تزیینی":"1$6$15", "روفرشی":"1$6$16", "فرش ماشینی":"1$6$17", "موکت":"1$6$18", "باکس":"1$6$19", "کتابخانه":"1$6$20", "پرده":"1$6$21", "ملزومات پرده":"1$6$22", "صندلی اپن":"1$6$23", "صندلی":"1$6$24", "صندلی کودک و نوجوان":"1$6$25", "سرویس تخت و کمد":"1$6$26", "میز تحریر":"1$6$27", "گرامافون":"1$6$28", "پشتی سنتی":"1$6$29", "ملزومات فرش":"1$6$30", "لوازم تزئینی":"1$6$31", "هفت سین":"1$6$32", "زیر سیگاری":"1$6$33", "آبگینه و چینی":"1$6$34", "محصولات مسی":"1$6$35", "مجسمه":"1$6$36", "تابلو فرش":"1$6$37", "تلفن کلاسیک":"1$6$38", "جعبه":"1$6$39", "باکس":"1$6$40", "شلف":"1$6$41", "استند":"1$6$42", "سطل زباله":"1$6$43", "جا دستمال":"1$6$44", "ساعت تزئینی":"1$6$45", "صنایع هنری و دستی":"1$6$46", "تابلو تزئینی":"1$6$47", "شمع و جا شمعی":"1$6$48", "گلدان":"1$6$49", "قاب عکس":"1$6$50", "آینه":"1$6$51", "آینه و کنسول":"1$6$52", "گل مصنوعی":"1$6$53", "ظروف دکوری":"1$6$54", "طبقه دیواری":"1$6$55", "قفسه کتاب":"1$6$56", "میز و صندلی کافه":"1$6$57", "کاغذ دیواری":"1$6$58", "استیکر و پوستر":"1$6$59", "وسایل سرو و پذیرایی":"1$7$0", "استکان":"1$7$1", "بستنی خوری":"1$7$2", "پارچ پیاله تخته چوبی":"1$7$3", "جای نان":"1$7$4", "چاقو چنگال":"1$7$5", "چنگال میوه خوری":"1$7$6", "سطل و جا دستمال کاغذی":"1$7$7", "چوب غذا خوری":"1$7$8", "در بازکن کنسرو و بطری":"1$7$9", "دیس بزرگ":"1$7$10", "سرویس چینی":"1$7$11", "سرویس قاشق و چنگال":"1$7$12", "سرویس نمکدان و فلفل‌دان":"1$7$13", "آسیاب دستی فلفل و نمک":"1$7$14", "روغن ریز":"1$7$15", "قندان":"1$7$16", "سرویس پیرکس":"1$7$17", "سینی":"1$7$18", "صافی چای":"1$7$19", "ظرف سالاد":"1$7$20", "ظرف یخ":"1$7$21", "ظرف روغن مایع":"1$7$22", "ظروف آجیل‌خوری":"1$7$23", "ظروف غذا‌خوری":"1$7$24", "ظروف کیک‌خوری":"1$7$25", "ظروف میوه‌خوری":"1$7$26", "فنجان":"1$7$27", "نعلبکی":"1$7$28", "قاشق ادویه":"1$7$29", "قاشق چایخوری":"1$7$30", "قاشق سوپ خوری":"1$7$31", "قاشق شربت خوری":"1$7$32", "قاشق عسل چوبی":"1$7$33", "قاشق غذا‌خوری":"1$7$34", "قاشق مرباخوری":"1$7$35", "قاشق و چنگال سالاد":"1$7$36", "قالب یخ":"1$7$37", "قهوه خوری":"1$7$38", "قوری":"1$7$39", "کارد میوه خوری":"1$7$40", "کارد و کفگیر کیک تولد":"1$7$41", "کاسه":"1$7$42", "کاسه آبگوشت":"1$7$43", "کاسه چوبی":"1$7$44", "کاسه سرامیکی":"1$7$45", "کاسه شیشه‌ای":"1$7$46", "کتری":"1$7$47", "کفگیر":"1$7$48", "گیره سالاد":"1$7$49", "گیره یخ":"1$7$50", "لیوان پلاستیکی":"1$7$51", "لیوان چینی":"1$7$52", "لیوان شیشه‌ای":"1$7$53", "لیوان فلزی":"1$7$54", "لیوان مسی":"1$7$55", "لیوان نی دار":"1$7$56", "ملاقه":"1$7$57", "نعلبکی":"1$7$58", "نی":"1$7$59", "اجاق گاز":"1$8$0", "فر توکار":"1$8$1", "گاز رومیزی":"1$8$2", "هود":"1$8$3", "سینک":"1$8$4", "توری سینک":"1$8$5", "گاز پیک نیک":"1$8$6", "توری گریل مرغ و ماهی":"1$8$7", "زود پز":"1$8$8", "زیر قابلمه":"1$8$9", "سرویس چاقو":"1$8$10", "سرویس قابلمه استیل":"1$8$11", "سرویس قابلمه گرانیتی":"1$8$12", "سماور گازی":"1$8$13", "سینی فر":"1$8$14", "شعله پخش کن":"1$8$15", "شیر جوش":"1$8$16", "قابلمه":"1$8$17", "ماهی تابه":"1$8$18", "صافی و سبد":"1$9$0", "سبد میوه":"1$9$1", "سبد نان و سبزی":"1$9$2", "سرویس پلاسکو":"1$9$3", "آبچکان":"1$9$4", "باکس و جانانی":"1$9$5", "پارچ و لیوان":"1$9$6", "چهارپایه":"1$9$7", "فریزری":"1$9$8", "جابرنجی":"1$9$9", "گیره و چوب لباسی":"1$9$10", "سبد لباس":"1$9$11", "آب میوه گیری":"1$9$12", "جعبه لوازم خیاطی":"1$9$13", "سبد خرید و زنبیل":"1$9$14", "جا سيب زمينی و پياز":"1$9$15", "جاقاشقی":"1$9$16", "قالب ها":"1$9$17", "سینی و پذیرایی":"1$9$18", "کاسه و بشقاب":"1$9$19", "نمکپاش و شکرپاش":"1$9$20", "بانکه ها":"1$9$21", "کاسه و بشقاب بلور":"1$10$0", "آبلیمو خوری":"1$10$1", "ادویه پاش بلور":"1$10$2", "نمک پاش بلور":"1$10$3", "شکرپاش بلور":"1$10$4", "بطری آب":"1$10$5", "بانکه حبوبات":"1$10$6", "بانکه ادویه":"1$10$7", "سرویس حبوبات":"1$10$8", "لیوان شیشه‌ای":"1$10$9", "قندان بلور":"1$10$10", "پارچ آب":"1$10$11", "فریزر و ماکروویو":"1$10$12", "دکوریجات":"1$10$13", "تنگ بلور":"1$10$14", "گلدان های بلور":"1$10$15", "فایل و درایور":"1$11$0", "صندلی پلاستیکی":"1$11$1", "میز پلاستیکی":"1$11$2", "پلاستیک صنعتی":"1$11$3", "سبد پلاستیکی":"1$11$4", "مخزن زباله":"1$11$5", "آبپاش":"1$11$6", "گلدان پلاستیکی":"1$11$7", "کلمن آب پلاستیکی":"1$11$8", "فلاسک":"1$11$9", "بادبزن مسافرتی":"1$11$10", "غلاف سیخ":"1$11$11", "سرویس مسافرتی":"1$11$12", "سبد پیک نیک":"1$11$13", "آهن":"1$12$0$0", "پولیش":"1$12$0$1", "مینی فرز و انگشتی":"1$12$0$2", "دریل بتن کن":"1$12$1$0", "پیکور و چکش تخریب":"1$12$1$1", "شیارزن":"1$12$1$2", "شارژی":"1$12$2$0", "همزن":"1$12$2$1", "ساده":"1$12$2$2", "مگنت":"1$12$2$3", "چکشی":"1$12$2$4", "ستونی":"1$12$2$5", "گیربکسی":"1$12$2$6", "نمونه بردار":"1$12$2$7", "پیچ گوشتی و غیره":"1$12$2$8", "ماله لب گرد ایزوگامی":"1$12$3$0", " نایلون و گونی":"1$12$3$1", "گونی نم":"1$12$3$2", "انواع پیستوله بادی":"1$12$4$0", "پیستوله رنگ":"1$12$4$1", "کنیتکس پاش":"1$12$4$2", "گازوئیل پاش":"1$12$4$3", "قیر پاش":"1$12$4$4", "باد پاش":"1$12$4$5", "دریل و پیچ گوشتی بادی":"1$12$4$6", "منگنه کوب بادی":"1$12$4$7", "میخ کوب بادی":"1$12$4$8", "اتصالات بادی":"1$12$4$9", "کمپرسور باد":"1$12$4$10", "جغجغه بادی":"1$12$4$11", "بکس بادی":"1$12$4$12", "پرچ بادی":"1$12$4$13", "اره سامورایی":"1$12$5$0", "اره سامورایی دسته چوبی":"1$12$5$1", "بیلچه باغبانی":"1$12$5$2", "بیلچه مقنی":"1$12$5$3", "چهار شاخ":"1$12$5$4", "داس ایرانی":"1$12$5$5", "داس چینی":"1$12$5$6", "داسک درخت زنی":"1$12$5$7", "زنگوله":"1$12$5$8", "شفره":"1$12$5$9", "شن کش":"1$12$5$10", "قورچه":"1$12$5$11", "منگنه کوب شارژی":"1$12$6$0", "میخکوب شارژی":"1$12$6$1", "جارو شارژی":"1$12$6$2", "دمنده و مکنده":"1$12$6$3", "منگنه کوب برقی":"1$12$6$4", "سشوار صنعتی":"1$12$6$5", "آچار بکس برقی":"1$12$6$6", "میخ کوب برقی":"1$12$6$7", "پروفیل بر":"1$12$6$8", "هویه و لحیم":"1$12$6$9", "کارواش خانگی و صنعتی":"1$12$6$10", "آچار‌ فرانسه":"1$12$7$0", "آچار شلاقی":"1$12$7$1", "آچار بکس":"1$12$7$2", "آچار آلن":"1$12$7$3", "جعبه ابزار":"1$12$7$4", "کیف ابزار":"1$12$7$5", "انبر دست":"1$12$7$6", "سیم چین":"1$12$7$7", "دم باریک":"1$12$7$8", "انبر پرچ":"1$12$7$9", "انبر قفلی":"1$12$7$10", "پیچ گوشتی":"1$12$7$11", "فازمتر":"1$12$7$12", "پیچ گوشتی چهارسو":"1$12$7$13", "پیچ گوشتی دوسو":"1$12$7$14", "پیچ گوشتی ستاره ای":"1$12$7$15", "سری پیچ گوشتی":"1$12$7$16", "ست پیچگوشتی":"1$12$7$17", "چکش":"1$12$7$18", "پتک":"1$12$7$19", "تیشه":"1$12$7$20", "کاردک":"1$12$7$21", "منگنه کوب دستی":"1$12$7$22", "کاتر":"1$12$7$23", "سرامیک بر":"1$12$7$24", "کمان اره":"1$12$7$25", "قیچی مفتول بری":"1$12$7$26", "برس سیمی پلاستیکی":"1$12$8$0", "برس سیمی چینی":"1$12$8$1", "پتک‌ جور کیلویی":"1$12$8$2", "تخته ماله شطرنجی":"1$12$8$3", "ترازو استوانه ایی":"1$12$8$4", "ترازو دیجیتال دستی":"1$12$8$5", "ترازو دیجیتال گرمی":"1$12$8$6", "تلمبه باد کوچک و بزرگ":"1$12$8$7", "تله موش قفسه ایی":"1$12$8$8", "توپی تگری پاش":"1$12$8$9", "تیشه بنایی با دسته":"1$12$8$10", "چسب پنچرگیری":"1$12$8$11", "چکش تمام لاستیکی":"1$12$8$12", "چکش لاستیکی دسته چوبی":"1$12$8$13", "درب بخاری گالوانیزه":"1$12$8$14", "دریچه نما پلاستیکی":"1$12$8$15", "دستکش لاستیکی":"1$12$8$16", "روغن دان هندی":"1$12$8$17", "زنجیرقلاده بند قرمز":"1$12$8$18", "سطل پلاستیکی":"1$12$8$19", "سطل مقنی فلزی":"1$12$8$20", "سوزن جوالدوز":"1$12$8$21", "سیم شاقول":"1$12$8$22", "شاقول مغناطیسی":"1$12$8$23", "صلیب کاشی":"1$12$8$24", "طناب بند رخت فلزی":"1$12$8$25", "طناب بندرخت ۱۰متری":"1$12$8$26", "طناب بندرخت ۲۰متری":"1$12$8$27", "قرقره بنایی بزرگ":"1$12$8$28", "قرقره بنایی سوپر":"1$12$8$29", "قرقره بنایی متوسط":"1$12$8$30", "قلم بنایی جور ایرانی":"1$12$8$31", "کاتر پلاستیکی":"1$12$8$32", "کلمن آب":"1$12$8$33", "کمان اره پلاستیکی":"1$12$8$34", "کمچه بندکشی":"1$12$8$35", "کمچه طرح موسوی":"1$12$8$36", "ماله بزرگ معمولی":"1$12$8$37", "ماله بند کشی":"1$12$8$38", "ماله پشت بسته سید":"1$12$8$39", "ماله کوچک معمولی":"1$12$8$40", "ملاقه بنایی":"1$12$8$41", "نخ ریسمانکار":"1$12$8$42", "همتراز و کلیپس کاشی":"1$12$8$43", "فرغون آذر ابزار":"1$12$9$0", "فرغون آذین":"1$12$9$1", "فرغون پارس اصل":"1$12$9$2", "فرغون پارس":"1$12$9$3", "فرغون پروفیلی":"1$12$9$4", "فرغون جوشی":"1$12$9$5", "دسته پتک ممتاز":"1$12$10$0", "دسته پتک معمولی":"1$12$10$1", "دسته پتک بلند":"1$12$10$2", "دسته کلنگ درختی درجه یک":"1$12$11$0", "دسته کلنگ چنار ۹۰ سانت":"1$12$11$1", "دسته کلنگ چنار ۸۰ سانت":"1$12$11$2", "دسته کلنگ ممتاز":"1$12$11$3", "کلنگ فولادی چینی":"1$12$12$0", "کلنگ دو سر تیز":"1$12$12$1", "کلنگ چدنی":"1$12$12$2", "دسته بیل درختی":"1$12$13$0", "دسته بیل زبان گنجشک":"1$12$13$1", "دسته بیل اندونزی":"1$12$13$2", "دسته بیل ممتاز":"1$12$13$3", "دسته بیل روسی":"1$12$13$4", "دسته بیل تخم مرغی اصفهان":"1$12$13$5", "بیل ژاپن اصل (فیل نشان)":"1$12$14$0", "بیل همدان":"1$12$14$1", "بیل همدان کابین استیل":"1$12$14$2", "بیل چینی ممتاز":"1$12$14$3", "بیل چینی معمولی":"1$12$14$4", "بیل پارویی سنگین وزن":"1$12$14$5", "بیل پارویی (بیل شهرداری)همدان":"1$12$14$6", "بیل پارویی (بیل شهرداری)ابزار محمدی":"1$12$14$7", "بیل همدان استیل استاندارد":"1$12$14$8", "بیل همدان ابزار امید استاندارد":"1$12$14$9", "الک آردی":"1$12$15$0", "الک تخت":"1$12$15$1", "سرند چشم بلبلی ریز":"1$12$15$2", "سرند چشم بلبلی درشت":"1$12$15$3", "الک چشم بلبلی(سفالکاری)":"1$12$15$4", "سرند قدی فلزی":"1$12$15$5", "سینی غلتک رنگ":"1$12$16$0", "غلتک رنگ ترک کوچک بادسته":"1$12$16$1", "قلم رنگ ایرانی":"1$12$16$2", "لیسه ۴عددی فلزی":"1$12$16$3", "لیسه شانه ایی فلزی":"1$12$16$4", "لیسه فلزی دسته چوبی":"1$12$16$5", "برس تک توالت شور":"1$12$17$0", "توالت شور کامل":"1$12$17$1", "تیغ شیشه پاک کن تعویض‌شو":"1$12$17$2", "جارو ۳۰سانت":"1$12$17$3", "جارو‌ و خاک انداز ایستاده":"1$12$17$4", "جارو‌۴۰سانت سرکج":"1$12$17$5", "چسب موش":"1$12$17$6", "خاک انداز پلاستیکی":"1$12$17$7", "زیر 10 وات":"1$13$0$0", "25 وات":"1$13$0$1", "26 تا 50 وات":"1$13$0$2", "بالای 50 وات":"1$13$0$3", "دیواری":"1$13$1$0", "سقفی":"1$13$1$1", "فیوز":"1$13$1$2", "ریموت":"1$13$1$3", "فن دار":"1$13$2$0", "کرسی برقی":"1$13$2$1", "رومیزی":"1$13$2$2", "دیواری":"1$13$2$3", "ایستاده":"1$13$2$4", "کلید":"1$13$3$0", "پریز":"1$13$3$1", "سوکت تلفن":"1$13$3$2", "زنگ":"1$13$3$3", "فیش آنتن":"1$13$3$4", "پریز تلفن":"1$13$3$5", "شاسی زنگ":"1$13$3$6", "پریز آنتن":"1$13$3$7", "شاسی تایمر":"1$13$3$8", "چندراهی برق":"1$13$4$0", "محافظ ولتاژ":"1$13$4$1", "محافظ شوک الکتریکی":"1$13$4$2", "پریز":"1$13$4$3", "کابل سیار":"1$13$4$4", "تبدیل دیواری":"1$13$4$5", "مادگی":"1$13$4$6", "دوشاخه":"1$13$4$7", "قرقره کابل":"1$13$4$8", "پایه دار":"1$13$5$0", "بدون پایه":"1$13$5$1", "دیواری":"1$13$5$2", "رومیزی":"1$13$5$3", "پریزی":"1$13$5$4", "پارکی":"1$13$6$0", "دیواری":"1$13$6$1", "چمنی":"1$13$6$2", "سردری":"1$13$6$3", "آویز":"1$13$6$4", "مینیاتوری":"1$13$6$5", "حلزونی":"1$13$6$6", "کم مصرف":"1$13$7$0", "LED SMD":"1$13$7$1", "LED":"1$13$7$2", "سقفی":"1$13$7$3", "فیلامنتی LED":"1$13$7$4", "LED COB":"1$13$7$5", "چراغ پروژکتور و وال واشر":"1$13$7$6", "ریسه":"1$13$7$7", "چراغ توکار":"1$13$7$8", "چراغ روکار":"1$13$7$9", "مهتابی":"1$13$7$10", "آفتابی":"1$13$7$11", "لامپ هوشمند":"1$13$7$12", "سرپیچ":"1$13$7$13", "زیر کابینت":"1$13$7$14", "FPL":"1$13$7$15", "FML":"1$13$7$16", "لامپ چراغ خواب":"1$13$7$17", "بالا آینه ای":"1$13$7$18", "قاب توکار":"1$13$7$19", "قاب روکار":"1$13$7$20", "ریل":"1$13$7$21", "بدون پایه":"1$13$7$22", "چراغ مطالعه":"1$13$7$23", "برق":"1$13$8$0", "روکش و محافظ کابل":"1$13$8$1", "مخابراتی":"1$13$8$2", "کواکسیال":"1$13$8$3", "هواکش خانگی":"1$13$9$0", "هواکش صنعتی":"1$13$9$1", "هواکش تاسیساتی":"1$13$9$2", "هواکش اداری و تجاری":"1$13$9$3", "آیفون تصویری":"1$13$10$0", "آیفون صوتی":"1$13$10$1", "درب باز کن برقی":"1$13$10$2", "تلفن بیسیم":"1$13$11$0", "تلفن سیمی":"1$13$11$1", "بیسیم تاکی واکی":"1$13$11$2", "تلفن سانترال":"1$13$11$3", "تلفن VOIP":"1$13$11$4", "باطری قلمی":"1$13$12$0", "باطری نیم قلمی":"1$13$12$1", "باطری کتابی":"1$13$12$2", "باطری شارژی":"1$13$12$3", "داخلی و رومیزی":"1$13$13$0", "هوایی":"1$13$13$1", "پوشال":"1$13$14$0", "پمپ آب":"1$13$14$1", "شناور":"1$13$14$2", "نردبان":"1$13$15$0", "آچار":"1$13$15$1", "انبر":"1$13$15$2", "پیچ گوشتی و فازمتر":"1$13$15$3", "روغن دان و لوازم روانکاری":"1$13$15$4", "چسب صنعتی":"1$13$15$5", "اسپند دود کن":"1$14$0", "کابینت آشپزخانه":"1$14$1", "بوگیر یخچال":"1$14$2", "پد ظرفشویی":"1$14$3", "پیش بند":"1$14$4", "ترازوی آشپزخانه":"1$14$5", "تایمر آشپزخانه":"1$14$6", "قمقمه":"1$14$7", "فلاسک":"1$14$8", "منقل":"1$14$9", "سیخ":"1$14$10", "باربیکیو":"1$14$11", "لوازم یکبار مصرف":"1$14$12", "نایلون زیپ دار":"1$14$13", "نایلون فریزر":"1$14$14", "نایلون سلفون":"1$14$15", "فویل آلومینیم":"1$14$16", "سبد سیب زمینی و پیاز":"1$14$17", "بغل گازی":"1$14$18", "زیر قابلمه":"1$14$19", "ابزار شرینی پزی":"1$14$20", "ابزار بستنی ساز":"1$14$21", "سفره":"1$14$22", "سفره یکبار مصرف":"1$14$23", "توری کباب":"1$14$24", "دمنوش ساز":"1$14$25", "ظرف مربا":"1$14$26", "جای حوله":"1$14$27", "جای مایع ظرفشویی":"1$14$28", "حوله آشپزخانه":"1$14$29", "دستمال سفره":"1$14$30", "دمکش":"1$14$31", "فندک":"1$14$32", "کبریت":"1$14$33", "رنده":"1$14$34", "روقوری":"1$14$35", "سبد مسافرتی":"1$14$36", "ست مسافرتی ظروف":"1$14$37", "سرویس آب کشی":"1$14$38", "سرویس پارچه‌ای آشپزخانه":"1$14$39", "سرویس ظروف ادویه":"1$14$40", "فایل کشویی":"1$14$41", "آب‌میوه گیری دستی":"1$14$42", "جا ظرفی":"1$14$43", "پیشبند":"1$14$44", "دستگیره":"1$14$45", "ست صبحانه":"1$14$46", "سرویس ظروف‌پلاستیکی درب‌دار":"1$14$47", "سرویس نگهداری حبوبات‌و‌خشکبار":"1$14$48", "سطل زباله آشپزخانه":"1$14$49", "سینک":"1$14$50", "سیر کوب":"1$14$51", "ظروف شیشه‌ای غذا در یخچال":"1$14$52", "ظروف نگهدارنده شفاف":"1$14$53", "قالب کیک":"1$14$54", "قیچی فلزی آشپزخانه":"1$14$55", "کاور":"1$14$56", "کاور لوازم خانگی":"1$14$57", "کیک پز":"1$14$58", "گوشت کوب فلزی":"1$14$59", "گیره های آویز حوله و لیوان":"1$14$60", "گیره یخ":"1$14$61", "هاونگ":"1$14$62", "همزن دستی":"1$14$63", "مخزن آب":"1$14$64", "چشمه شکلات":"1$14$65", "موبایل":"2$0$0", "تبلت":"2$0$1", "کتابخوان":"2$0$2", "هدست":"2$0$3", "هدفون":"2$0$4", "سیم کارت":"2$0$5", "کامپیوتر خانگی":"2$0$6", "لپ تاپ":"2$0$7", "مادربرد":"2$1$0", "پردازنده":"2$1$1", "پاور":"2$1$2", "کولر مستر":"2$1$3", "کارت گرافیگ":"2$1$4", "پرینتر":"2$1$5", "ماوس":"2$1$6", "کیبورد":"2$1$7", "وب کم":"2$1$8", "وب کم لاجیتک":"2$1$9", "مانیتور":"2$1$10", "فن کیس":"2$1$11", "فن پردازنده":"2$1$12", "اسکنر":"2$1$13", "فن کارت گرافیک":"2$1$14", "کیس":"2$1$15", "درایو نوری":"2$1$16", "رم سرور":"2$1$17", "رم ریدر":"2$1$18", "کامپیوتر سرور":"2$1$19", "کامپیوتر کوچک":"2$1$20", "کامپیوتر جمع آوری شده":"2$1$21", "دی وی دی رایتر":"2$1$22", "کارت صدا":"2$1$23", "منبع تغذیه":"2$1$24", "ست دسکتاپ(ماوس و کیبورد)":"2$1$25", "کنترل کننده فن":"2$1$26", "پرینتر سه بعدی":"2$1$27", "خمیر سیلیکونی و حرارتی":"2$1$28", "پاوربانک":"2$2$0", "هندزفری گوشی":"2$2$1", "مونوپاد":"2$2$2", "شارژر موبایل و تبلت":"2$2$3", "شارژر فندکی":"2$2$4", "شارژر بی سیم":"2$2$5", "باتری گوشی موبایل":"2$2$6", "کابل گوشی":"2$2$7", "کابل OTG":"2$2$8", "لنز گوشی":"2$2$9", "محافظ صفحه نمایش تبلت":"2$2$10", "استند تبلت":"2$2$11", "کیف و کاور تبلت":"2$2$12", "کیبورد تبلت":"2$2$13", "پایه نگهدارنده گوشی":"2$2$14", "کیف و کاور گوشی":"2$2$15", "محافظ صفحه نمایش گوشی":"2$2$16", "تاچ و ال":"2$2$17", "خشاب سیم کارت":"2$2$18", "برچسب تزئینی گوشی موبایل":"2$2$19", "مودم ADSL":"2$3$0", "مودم 3G و 4G":"2$3$1", "مودم دانگل":"2$3$2", "مودم دیال آپ":"2$3$3", "سوییچ شبکه":"2$3$4", "کارت شبکه":"2$3$5", "روتر و اکسس پوینت":"2$3$6", "پرینت سرور":"2$3$7", "آنتن تقویتی":"2$3$8", "ذخیره ساز تحت شبکه":"2$3$9", "آداپتور شبکه":"2$3$10", "هاب شبکه":"2$3$11", "کابل و سوکت شبکه":"2$3$12", "کیستون شبکه":"2$3$13", "داکت و ترانک شبکه":"2$3$14", "ابزار نصب شبکه":"2$3$15", "تستر کابل شبکه":"2$3$16", "اسپلیتر":"2$3$17", "مبدل فیبر شبکه":"2$3$18", "رک و سینی":"2$3$19", "فیس پلیت":"2$3$20", "ترمینال پاور":"2$3$21", "تجهیزات وایرلس":"2$3$22", "دوربین تحت شبکه":"2$3$23", "دوربین مدار بسته":"2$3$24", "دانگل بلوتوث":"2$3$25", "دانگل وای فای":"2$3$26", "لوازم جانبی NAS":"2$3$27", "ماشین های اداری":"2$4$0", "تلفن VOIP":"2$4$1", "تلفن بی سیم":"2$4$2", "ماشین حساب":"2$4$3", "تلفن رومیزی":"2$4$4", "تلفن سانترال":"2$4$5", "ویدیو پروژکتور":"2$4$6", "لیزر پوینتر":"2$4$7", "اسکناس شمار":"2$4$8", "تشخیص اصالت اسکناس":"2$4$9", "صندوق فروشگاهی":"2$4$10", "بارکد خوان":"2$4$11", "دستگاه چک پرینتر":"2$4$12", "پرزنتر":"2$4$13", "پرینتر لیبل زن":"2$4$14", "دستگاه کپی":"2$4$15", "فکس":"2$4$16", "دستگاه حضور و غیاب":"2$4$17", "کالر آی دی":"2$4$18", "کاغذ خردکن":"2$4$19", "سانترال":"2$4$20", "دیتا کالکتور":"2$4$21", "تجهیزات VOIP":"2$4$22", "چاپگر حرارتی":"2$4$23", "کپی برد":"2$4$24", "منگه زن برقی":"2$4$25", "پرس کارت":"2$4$26", "دزدگیر اماکن":"2$4$27", "دستگاه ضبط‌کننده DVR":"2$4$28", "پلاتر":"2$4$29", "منبع تغذیه UPS":"2$4$30", "پرینتر چاپ کارت":"2$4$31", "وایت برد هوشمند":"2$4$32", "تابلو روان":"2$4$33", "کشوی پول":"2$4$34", "تونر":"2$5$0", "درام و لوازم فکس":"2$5$1", "کارتریج":"2$5$2", "ریبون پرینتر":"2$5$3", "کابل پرینتر":"2$5$4", "لوازم جانبی پرینتر لیبل زن و حرارتی":"2$5$5", "باتری تلفن":"2$5$6", "لوازم جانبی پرینتر":"2$5$7", "لوازم بسته بندی":"2$5$8", "هارد اکسترنال":"2$6$0", "هارد اینترنال":"2$6$1", "حافظه SSD":"2$6$2", "فلش مموری":"2$6$3", "کارت حافظه و رم":"2$6$4", "لوح فشرده":"2$6$5", "کیف و کاور CD":"2$6$6", "کیف و قاب هارد":"2$6$7", "لوازم جانبی تجهیزات ذخیره سازی":"2$6$8", "شارژر لپ تاپ":"2$7$0", "باتری لپ تاپ":"2$7$1", "هارد لپ تاپ":"2$7$2", "هاب یو اس بی(USB Hub)":"2$7$3", "رم لپ تاپ":"2$7$4", "کابل برق کامپیوتر":"2$7$5", "کابل و مبدل":"2$7$6", "کابل VGA":"2$7$7", "مبدل برق":"2$7$8", "چراغ LED یو اس بی":"2$7$9", "قلم لمسی":"2$7$10", "قلم نوری":"2$7$11", "استند و پایه خنک کننده":"2$7$12", "کیبورد لپ تاپ":"2$7$13", "موس پد":"2$7$14", "کیت تمیز کننده":"2$7$15", "کیف و کاور لپ تاپ":"2$7$16", "محافظ کیبورد کامپیوتر":"2$7$17", "چیپست":"2$7$18", "پاک کن":"3$0$0", "پرگار":"3$0$1", "تراش":"3$0$2", "جامدادی":"3$0$3", "جلد چسبی کتاب":"3$0$4", "خط کش":"3$0$5", "خودکار":"3$0$6", "خودنویس":"3$0$7", "دفتر":"3$0$8", "دفتر انگلیسی":"3$0$9", "دفتر مشق":"3$0$10", "دفتر نقاشی":"3$0$11", "دفتر یادداشت":"3$0$12", "روان نویس":"3$0$13", "غلط گیر":"3$0$14", "کاغذ A4":"3$0$15", "کاغذ چرک نویس":"3$0$16", "کاغذ کادو":"3$0$17", "کاغذ کاهی":"3$0$18", "کلاسور":"3$0$19", "گچ تحریر":"3$0$20", "لاک غلط گیر":"3$0$21", "مارکر":"3$0$22", "ماژیک":"3$0$23", "ماژیک وایت برد":"3$0$24", "مداد":"3$0$25", "مداد تراش":"3$0$26", "مداد رنگی":"3$0$27", "مداد فشاری":"3$0$28", "مداد نوکی":"3$0$29", "نوک":"3$0$30", "مداد و پاک‌کن":"3$0$31", "مداد تراش":"3$0$32", "CD":"3$1$0", "DVD":"3$1$1", "ابرک":"3$1$2", "ابزار بایگانی":"3$1$3", "اسپیکر":"3$1$4", "استامپ":"3$1$5", "استند لوازم تحریر":"3$1$6", "اسکناس شمار":"3$1$7", "اسکنر":"3$1$8", "اقلام مصرفی اداری":"3$1$9", "آلبوم عکس":"3$1$10", "آهنربا":"3$1$11", "باتری":"3$1$12", "برچسب":"3$1$13", "پاستل":"3$1$14", "پاکت":"3$1$15", "پاکت دکمه دار":"3$1$16", "پایه تقویم رومیزی":"3$1$17", "پایه نگه دارنده مانیتور":"3$1$18", "پایه نوار چسب":"3$1$19", "پروژکتور":"3$1$20", "پرینتر":"3$1$21", "پوشه":"3$1$22", "تخته شاسی":"3$1$23", "تخته وایت برد":"3$1$24", "تونر و کارتریج":"3$1$25", "تیغ کاتر":"3$1$26", "جاسنجاقی":"3$1$27", "جامدادی رومیزی":"3$1$28", "جای کارت و جاکاغذی":"3$1$29", "جعبه بایگانی":"3$1$30", "جوهر":"3$1$31", "جوهر استامپ":"3$1$32", "چراغ مطالعه":"3$1$33", "چسب":"3$1$34", "چسب دوقلو":"3$1$35", "چسب فوری":"3$1$36", "چسب مایع":"3$1$37", "دفاتر اداری":"3$1$38", "دیوایدر":"3$1$39", "ذره‌بین":"3$1$40", "زونکن":"3$1$41", "سالنامه":"3$1$42", "ست رومیزی اداری":"3$1$43", "ست میز مدیریت":"3$1$44", "سوزن منگنه":"3$1$45", "شیرازه":"3$1$46", "طلق":"3$1$47", "فنر":"3$1$48", "قیچی":"3$1$49", "کاتر":"3$1$50", "کاربن":"3$1$51", "کارت پستال":"3$1$52", "کارتابل":"3$1$53", "کازیه":"3$1$54", "کاغذ":"3$1$55", "کاغذ خردکن":"3$1$56", "کاغذ یادداشت":"3$1$57", "کاور کاغذ":"3$1$58", "کلیر بوک":"3$1$59", "کیبورد":"3$1$60", "کیف آرشیو":"3$1$61", "گیره پوشه":"3$1$62", "گیره کاغذ":"3$1$63", "ماشین حساب":"3$1$64", "ماشین های اداری":"3$1$65", "مانیتور":"3$1$66", "مداد شمعی":"3$1$67", "ملزومات هدیه":"3$1$68", "منگنه":"3$1$69", "پانچ":"3$1$70", "مهر":"3$1$71", "موس":"3$1$72", "نشانگر کتاب":"3$1$73", "نگهدارنده کتاب":"3$1$74", "نوار چسب":"3$1$75", "نوار چسب پهن":"3$1$76", "ابزار نقاشی":"3$2$0", "رنگ آمیزی":"3$2$1", "قلم مو و کاردک":"3$2$2", "مداد رنگی":"3$2$3", "پاستل و مداد شمعی":"3$2$4", "آبرنگ":"3$2$5", "گواش":"3$2$6", "پالت رنگ":"3$2$7", "زغال طراحی":"3$2$8", "مداد طراحی":"3$2$9", "رنگ روغن":"3$2$10", "بوم نقاشی":"3$2$11", "دفتر طراحی":"3$2$12", "رنگ انگشتی":"3$2$13", "تخته شاسی":"3$2$14", "جا قلمی و قلمدان":"3$3$0", "لیقه ابریشمی":"3$3$1", "کتاب خوشنویسی":"3$3$2", "دفتر خوشنویسی":"3$3$3", "دوات":"3$3$4", "مرکب خوشنویسی":"3$3$5", "قلم خطاطی":"3$3$6", "زیرمشق":"3$3$7", "قط زن":"3$3$8", "شابلون خوشنویسی":"3$3$9", "ست خوشنویسی":"3$3$10", "قلمتراش و غلاف":"3$3$11", "خط کش":"3$4$0", "شابلون":"3$4$1", "دفتر شطرنجی":"3$4$2", "پرگار":"3$4$3", "ست ریاضی":"3$4$4", "تخته رسم":"3$4$5", "کیف آرشیو":"3$4$6", "راپید":"3$4$7", "ماشین حساب مهندسی":"3$4$8", "میز نور":"3$4$9", "نقاله ":"3$4$10", "گونیا":"3$4$11", "خط کش تی":"3$4$12", "وسایل کمک آموزشی":"3$5$0", "لوازم کاردستی":"3$5$1", "بازی و سرگرمی":"3$5$2", "کیت آموزشی":"3$5$3", "کره جغرافیایی":"3$5$4", "شابلون اشکال":"3$5$5", "پک آموزشی":"3$5$6", "پازل":"3$5$7", "گل رس":"3$5$8", "خمیر بازی":"3$5$9", "ساعت آموزشی":"3$5$10", "چرتکه":"3$5$11", "کتاب رنگ آمیزی":"3$5$12", "کتاب داستان":"3$5$13", "میز تحریر":"3$6$0", "چراغ مطالعه":"3$6$1", "کیف":"3$6$2", "جامدادی":"3$6$3", "کوله پشتی":"3$6$4", "قمقمه":"3$6$5", "ظرف غذا":"3$6$6", "لیوان":"3$6$7", "ذره بین":"3$6$8", "قیچی کودک":"3$6$9", "خودکار تبلیغاتی":"3$7$0", "جاکلیدی تبلیغاتی":"3$7$1", "پاکت دکمه دار":"3$7$2", "ساعت تبلیغاتی":"3$7$3", "تندیس و لوح تقدیر":"3$7$4", "بج سینه و پیکسل":"3$7$5", "لیوان تبلیغاتی":"3$7$6", "ست تبلیغاتی":"3$7$7", "تقویم و سررسید":"3$7$8", "فلش مموری تبلیغاتی":"3$7$9", "کیف پول و جلد مدارک":"3$7$10", "تابلو فرش":"3$8$0", "لاله و شمعدان":"3$8$1", "پرده چاپی":"3$8$2", "تابلو زربافت":"3$8$3", "قاب برجسته ":"3$8$4", "تابلو پرچم دوزی ":"3$8$5", "تابلو شبه فلز":"3$8$6", "مینا کاری":"3$8$7", "قلمکاری":"3$8$8", "تابلو کاشی":"3$8$9", "تندیس حدید":"3$8$10", "تندیس عقیق":"3$8$11", "جاکلیدی کوبه":"3$8$12", "ظروف مسی":"3$8$13", "تابلو سیاه مشق":"3$8$14", "ساعت":"3$8$15", "تابلو کتیبه":"3$8$16", "نشقاب اشعار سفالی":"3$8$17", "تابلو معرق کاری شده":"3$8$18", "وسایل نماز":"3$8$19", "قرآن و ادعیه":"3$8$20", "رحل قرآن":"3$8$21", "جعبه قرآن":"3$8$22", "انواع CD فیلم ":"3$9$0", "کارت تلفن ":"3$9$1", "اینترنت":"3$9$2", "شارژ موبایل":"3$9$3", "محصولات مذهبی":"3$9$4", "بازی های فکری":"3$10$0", "کیت های آموزشی":"3$10$1", "کره جغرافیایی":"3$10$2", "شابلون":"3$10$3", "پک های آموزشی":"3$10$4", "پازل های متنوع":"3$10$5", "گل رس مخصوص سفال گری":"3$10$6", "لوازم مخصوص کاردستی":"3$10$7", "ساعت های آموزشی":"3$10$8", "چرتکه":"3$10$9", "کتاب رنگ آمیزی":"3$10$10", "کتاب داستان":"3$10$11", "لوازم دانش آموزی":"3$10$12", "میز تحریر":"3$10$13", "کیبورد و ارگ":"3$11$0", "پیانو":"3$11$1", "گیتار":"3$11$2", "فلوت":"3$11$3", "ویولن":"3$11$4", "ساز دهنی":"3$11$5", "درام":"3$11$6", "ملودیکا":"3$11$7", "مترونوم و تیونر":"3$11$8", "سازهای کوبه ای":"3$11$9", "سازهای افکت":"3$11$10", "فلوت رکوردر":"3$11$11", "کلارینت":"3$11$12", "ساکسیفون":"3$11$13", "پرکاشن":"3$11$14", "ترومپت":"3$11$15", "ترومبون":"3$11$16", "ابوا":"3$11$17", "دف":"3$11$18", "سینتی سایزر":"3$11$19", "تار":"3$11$20", "سه تار":"3$11$21", "سنتور":"3$11$22", "تنبک":"3$11$23", "باغلاما":"3$11$24", "جیمبی":"3$11$25", "آکاردئون":"3$11$26", "کاخن":"3$11$27", "نی":"3$11$28", "کابل موسیقی":"3$11$29", "سیم ادوات موسیقی":"3$11$30", "آمپلی فایر و افکت گیتار":"3$11$31", "استند":"3$11$32", "پایه":"3$11$33", "صندلی و زیرپایی":"3$11$34", "کیس و کاور":"3$11$35", "قرآن":"3$12$0$0", "کتاب آزمون":"3$12$0$1", "کتاب میکرو":"3$12$0$2", "کتاب کلاسیک":"3$12$0$3", "سایت فیدیبو":"3$12$0$4", "سایت کتابراه":"3$12$0$5", "ادبیات داستانی":"3$12$0$6", "کتاب مصور":"3$12$0$7", "روانشناسی":"3$12$0$8", "فلسفی":"3$12$0$9", "تاریخی":"3$12$0$10", "داستان کوتاه":"3$12$0$11", "خودپروری":"3$12$0$12", "دینی و مذهبی":"3$12$0$13", "زندگی نامه":"3$12$0$14", "سیاسی":"3$12$0$15", "شعر":"3$12$0$16", "نقد ادبی":"3$12$0$17", "سینما و تئاتر":"3$12$0$18", "آموزشی":"3$12$0$19", "علمی":"3$12$0$20", "هنری":"3$12$0$21", "ادبیات نمایشی":"3$12$0$22", "تجارت و کسب و کار":"3$12$0$23", "اجتماعی":"3$12$0$24", "جامعه شناسی":"3$12$0$25", "مجموعه مقالات":"3$12$0$26", "اقتصادی":"3$12$0$27", "گردآوری و تلفیق":"3$12$0$28", "مدیریت":"3$12$0$29", "خود زندگی نامه":"3$12$0$30", "زنان و فمنیسم":"3$12$0$31", "فرهنگی":"3$12$0$32", "عاشقانه":"3$12$0$33", "تعلیم و تربیت":"3$12$0$34", "فانتزی":"3$12$0$35", "عرفان":"3$12$0$36", "معنویت":"3$12$0$37", "سلامت":"3$12$0$38", "مصاحبه":"3$12$0$39", "درام":"3$12$0$40", "جنگی":"3$12$0$41", "نقد هنری":"3$12$0$42", "پزشکی":"3$12$0$43", "کتاب مرجع":"3$12$0$44", "رهبری":"3$12$0$45", "ازدواج و زناشویی":"3$12$0$46", "الهیات":"3$12$0$47", "سفرنامه":"3$12$0$48", "موسیقی":"3$12$0$49", "زبان شناسی":"3$12$0$50", "تکنولوژی":"3$12$0$51", "نقاشی":"3$12$0$52", "دانستنی ها":"3$12$0$53", "سرگرمی":"3$12$0$54", "حقوقی":"3$12$0$55", "نویسندگی":"3$12$0$56", "ورزشی":"3$12$0$57", "مجموعه آثار هنری":"3$12$0$58", "دیوان اشعار ایرانی":"3$12$0$59", "جملات قصار":"3$12$0$60", "عکاسی":"3$12$0$61", "فرهنگ لغت":"3$12$0$62", "فیزیک":"3$12$0$63", "جغرافیا":"3$12$0$64", "کمدی":"3$12$0$65", "علوم انسانی":"3$12$0$66", "انسان شناسی":"3$12$0$67", "محیط زیست":"3$12$0$68", "رنگ آمیزی":"3$12$0$69", "مجموعه مکاتبات(نامه‌ها)":"3$12$0$70", "معماری":"3$12$0$71", "زیست شناسی":"3$12$0$72", "نجوم":"3$12$0$73", "مقاله":"3$12$0$74", "علوم سیاسی":"3$12$0$75", "ریاضی":"3$12$0$76", "خلاقیت":"3$12$0$77", "ترانه":"3$12$0$78", "روانشناسی کودک":"3$12$0$79", "داستان نویسی":"3$12$0$80", "مردم شناسی":"3$12$0$81", "کارگردانی":"3$12$0$82", "علوم اعصاب":"3$12$0$83", "احکام":"3$12$0$84", "بهداشت":"3$12$0$85", "کتاب های نفیس":"3$12$0$86", "آشپزی":"3$12$0$87", "معناشناسی":"3$12$0$88", "حماسی":"3$12$0$89", "آموزش زبان خارجی":"3$12$0$90", "حیوانات":"3$12$0$91", "کتابهای نابینایان":"3$12$0$92", "ادبیات":"3$12$0$93", "مالی":"3$12$0$94", "ادبیات فارسی":"3$12$0$95", "شهرسازی":"3$12$0$96", "مجموعه یادداشت":"3$12$0$97", "تغذیه و تربیت کودک":"3$12$0$98", "پژوهشی":"3$12$0$99", "ماجرایی":"3$12$0$100", "ادبیات آذربایجان":"3$12$0$101", "تصویرگری":"3$12$0$102", "علوم تجربی":"3$12$0$103", "منسوجات":"3$12$0$104", "شیمی":"3$12$0$105", "مهندسی عمران":"3$12$0$106", "گیاه شناسی":"3$12$0$107", "دکوراسیون داخلی":"3$12$0$108", "زمین شناسی":"3$12$0$109", "شبه علم":"3$12$0$110", "ادبیات غیراقتباسی":"3$12$0$111", "تولید محتوا":"3$12$0$112", "کتاب صوتی":"3$12$0$113", "مجلات نشنال جئوگرافیک":"3$12$1$0", "مجلات آمریکا":"3$12$1$1", "مجلات بهمن":"3$12$1$2", "قیچی و کاتر":"3$13$0", "زیرپایی اداری":"3$13$1", "سطل زباله اداری":"3$13$2", "کپی هولدر":"3$13$3", "تخته وایت برد":"3$13$4", "تابلو اعلانات":"3$13$5", "تخته پاکن":"3$13$6", "میز و صندلی اداری":"3$13$7", "کابینت کلید و شماره کمد":"3$13$8", "طلق سینه":"3$13$9", "شماره زن":"3$13$10", "زیردستی":"3$13$11", "نقشه":"3$13$12", "فلش کارت":"3$13$13", "دارت":"4$0$0", "گجت":"4$0$1", "عروسک":"4$0$2", "تفنگ و مبارزه":"4$0$3", "پازل و ساختنی":"4$0$4", "ماشین":"4$0$5", "موتور شارژی":"4$0$6", "جعبه موزیکال":"4$0$7", "هلی کوپتر و هواپیما":"4$0$8", "ابزار شوخی":"4$0$9", "بازی های فکری":"4$0$10", "بازی آموزشی":"4$0$11", "لباس شخصیت":"4$0$12", "لگو":"4$0$13", "فیگور":"4$0$14", "ماکت":"4$0$15", "وان کودک":"4$0$16", "قصری کودک":"4$0$17", "فوتبال دستی":"4$1$0", "شطرنج":"4$1$1", "میز پینگ پنگ":"4$1$2", "تلمبه دستی":"4$1$3", "راکت":"4$1$4", "توپ فوتبال":"4$1$5", "توپ بدمینتون":"4$1$6", "توپ تنیس":"4$1$7", "توپ هندبال":"4$1$8", "توپ بیسبال":"4$1$9", "توپ فوتسال":"4$1$10", "توپ اسکواش":"4$1$11", "طناب":"4$1$12", "دمبل":"4$1$13", "بارفیکس":"4$1$14", "دارت":"4$1$15", "اسکیت و اسکوتر":"4$1$16", "اسکوتر برقی":"4$1$17", "تقویت کننده تنفس":"4$1$18", "لوازم پوششی و محافظتی ورزشی":"4$1$19", "لوازم جانبی اسکوتر برقی":"4$1$20", "تردمیل":"4$1$21", "دوچرخه ثابت و الپتیکال":"4$1$22", "روینگ":"4$1$23", "استپر":"4$1$24", "زیر انداز":"4$1$25", "لوازم جانبی دارت":"4$1$26", "تردمیل":"4$1$27", "استپر":"4$1$28", "روئینگ":"4$1$29", "دوچرخه ثابت":"4$1$30", "دوچرخه ثابت باشگاهی":"4$1$31", "دوچرخه ثابت خانگی":"4$1$32", "عینک شنا":"4$2$0", "کلاه شنا":"4$2$1", "مایو":"4$2$2", "لوازم جانبی شنا":"4$2$3", "لوازم تمرین شنا":"4$2$4", "لوازم غواصی":"4$2$5", "عینک اسکی":"4$3$0", "فیکس اسکی":"4$3$1", "اسنوبورد اسکی":"4$3$2", "کفش اسکی":"4$3$3", "چوب اسکی":"4$3$4", "دستکش اسکی":"4$3$5", "کلاه اسکی":"4$3$6", "بست اسکی":"4$3$7", "ساک اسکی":"4$3$8", "کفش پاتیناژ":"4$3$9", "دوچرخه شهری":"4$4$0", "دوچرخه کوهستان":"4$4$1", "دوچرخه مسابقه‌ای":"4$4$2", "دوچرخه برقی":"4$4$3", "لوازم جانبی دوچرخه":"4$4$4", "بچه دوچرخه":"4$4$5", "کلاه کاسکت":"4$4$6", "کفش فوتبال":"4$5$0", "کفش پیاده روی":"4$5$1", "کفش ورزشی مردانه":"4$5$2", "کفش ورزشی زنانه":"4$5$3", "مچ بند":"4$6$0", "هد بند":"4$6$1", "گرمکن ورزشی زنانه ":"4$6$2", "گرمکن ورزشی مردانه ":"4$6$3", "تی شرت ورزشی":"4$6$4", "شلوار ورزشی":"4$6$5", "شورت ورزشی":"4$6$6", "دامن ورزشی":"4$6$7", "پیراهن ورزشی":"4$6$8", "حوله ورزشی":"4$6$9", "ست مردانه ورزشی":"4$6$10", "دستکش ورزشی":"4$6$11", "جوراب ورزشی":"4$6$12", "ساک ورزشی":"4$6$13", "چوب":"4$7$0", "نخ":"4$7$1", "لانسه":"4$7$2", "تور":"4$7$3", "قلاب":"4$7$4", "سرب":"4$7$5", "طعمه":"4$7$6", "قایق بادی":"4$8$0", "تخته موج سواری":"4$8$1", "کفش کوهنوردی":"4$9$0", "کوله پشتی":"4$9$1", "عصا":"4$9$2", "لباس کوهنوردی لایه اول":"4$9$3", "لباس کوهنوردی لایه دوم":"4$9$4", "لباس کوهنوردی لایه سوم":"4$9$5", "کلاه":"4$9$6", "گتر":"4$9$7", "زیر انداز":"4$9$8", "غذای مقوی":"4$9$9", "آب و قمقمه":"4$9$10", "کیسه خواب":"4$9$11", "چادر":"4$9$12", "چراغ":"4$9$13", "لامپ":"4$9$14", "لیوان و قاشق چنگال":"4$9$15", "وسایل بهداشتی":"4$9$16", "سنگ آتش زنه":"4$9$17", "قطب نما":"4$9$18", "نقشه":"4$9$19", "طناب":"4$9$20", "کارابین":"4$9$21", "سوت نجات":"4$9$22", "اسکی فضایی":"4$10$0", "دوچرخه ثابت":"4$10$1", "تردمیل":"4$10$2", "الپتیکال":"4$10$3", "خط چشم":"5$0$0$0", "ریمل":"5$0$0$1", "سایه":"5$0$0$2", "لنز":"5$0$0$3", "مایع لنز":"5$0$0$4", "مداد ابرو":"5$0$0$5", "مداد چشم":"5$0$0$6", "رژ لب جامد":"5$0$1$0", "رژ لب مایع":"5$0$1$1", "مداد لب":"5$0$1$2", "پنکک":"5$0$2$0", "رژ گونه":"5$0$2$1", "فیکساتور":"5$0$2$2", "کانسیلر":"5$0$2$3", "کرم پودر":"5$0$2$4", "اتو مو":"5$0$3$0", "تافت":"5$0$3$1", "خرید رنگ مو":"5$0$3$2", "ژل مو":"5$0$3$3", "سشوار":"5$0$3$4", "شانه و برس":"5$0$3$5", "لاک":"5$0$4$0", "لاک پاک کن":"5$0$4$1", "فر کننده مو":"5$0$5$0", "اتو و حالت دهنده مو":"5$0$5$1", "برس مو":"5$0$5$2", "سشوار":"5$0$5$3", "اپیلاتور":"5$0$5$4", "مو زن گوش و بینی":"5$0$5$5", "ریش تراش":"5$0$5$6", "لوازم جانبی ریش تراش":"5$0$5$7", "اصلاح موی سر":"5$0$5$8", "پاکسازی و لیزر پوست":"5$0$5$9", "خوشبو کننده هوا":"5$0$5$10", "چتر":"5$0$5$11", "کیف غذا":"5$0$5$12", "ساک و چمدان":"5$0$5$13", "اسپری موبر":"5$1$0", "پودر":"5$1$1", "تیغ":"5$1$2", "کرم موبر":"5$1$3", "موم":"5$1$4", "وکس":"5$1$5", "اسپری تاخیری":"5$2$0", "اصلاح برقی":"5$2$1", "اصلاح دستی":"5$2$2", "بعد از اصلاح":"5$2$3", "ژل تاخیری":"5$2$4", "قبل از اصلاح":"5$2$5", "خمیر ریش":"5$2$6", "ژل اصلاح":"5$2$7", "فوم اصلاح":"5$2$8", "کاندوم":"5$2$9", "پد روزانه":"5$3$0", "تامپون":"5$3$1", "تست بارداری":"5$3$2", "ژل لوبریکانت":"5$3$3", "شوینده واژینال":"5$3$4", "نوار بهداشتی":"5$3$5", "آفت دهان":"5$4$0", "پودر سفید کننده":"5$4$1", "چسب دندان مصنوعی":"5$4$2", "خلال دندان":"5$4$3", "خمیر دندان":"5$4$4", "خوشبو کننده دهان":"5$4$5", "دهانشویه":"5$4$6", "زبان شور":"5$4$7", "مسواک":"5$4$8", "نخ دندان":"5$4$9", "پنبه":"5$5$0", "پوشینه بزرگسالان":"5$5$1", "ایزی لایف":"5$5$2", "دستمال کاغذی":"5$5$3", "دستمال مرطوب":"5$5$4", "گوش پاک کن":"5$5$5", "محصولات ضد تعریق":"5$5$6", "اسپری ضد تعریق":"5$5$7", "استیک ضد تعریق":"5$5$8", "بادی اسپلش":"5$5$9", "پد ضد تعریق":"5$5$10", "رول ضد تعریق":"5$5$11", "کرم ضد تعریق":"5$5$12", "ارتوپدی و ارتز":"5$6$0", "فشارسنج":"5$6$1", "دستگاه تست قند خون":"5$6$2", "نبولایزر":"5$6$3", "تب سنج":"5$6$4", "نوار تست قند":"5$6$5", "نمایشگر ضربان قلب":"5$6$6", "دستگاه فیزیوتراپی":"5$6$7", "گام شمار":"5$6$8", "جعبه قرص":"5$6$9", "توالت فرنگی قابل حمل":"5$6$10", "واکر":"5$6$11", "ویلچر":"5$6$12", "گوشی پزشکی":"5$6$13", "تخت بیمار":"5$6$14", "دماسنج محیطی":"5$6$15", "میکروسکوپ":"5$6$16", "دماسنج دیجیتالی":"5$6$17", "نخ و سوزن جراحی":"5$6$18", "آنژیوکت":"5$6$19", "محصولات پلیمری":"5$6$20", "سوند":"5$6$21", "ساکشن های پزشکی":"5$6$22", "پالس اکسیمتر":"5$6$23", "ذره بین و میکروسکوپ":"5$6$24", "برانکارد":"5$6$25", "جعبه کمک های اولیه":"5$6$26", "اتوسکوپ و افتالموسکوپ":"5$6$27", "لارنگوسکوپ":"5$6$28", "اکسیژن ساز":"5$6$29", "کپسول اکسیژن":"5$6$30", "پانسمان و چسب":"5$6$31", "دستکش جراحی":"5$6$32", "آرنج بند":"5$6$33", "آویز دست":"5$6$34", "انگشتان":"5$6$35", "ترقوه بند":"5$6$36", "جوراب واریس":"5$6$37", "زانوبند":"5$6$38", "ساعد بند":"5$6$39", "ساق بند":"5$6$40", "شکم بند":"5$6$41", "فتق بند":"5$6$42", "قوزبند":"5$6$43", "قوزک بند":"5$6$44", "کتف بند":"5$6$45", "کف پا و انگشت پا":"5$6$46", "کمربند":"5$6$47", "گردنبند":"5$6$48", "مچ بند":"5$6$49", "پانسمان زخم":"5$7$0", "آلژینات":"5$7$1", "چسب پانسمان":"5$7$2", "ژل و کرم":"5$7$3", "فوم پانسمان":"5$7$4", "هیدرواکتیو":"5$7$5", "بخور و مرطوب کننده هوا":"5$8$0", "دوچرخه شارژی":"5$8$1", "ترازو":"5$8$2", "پتو و تشک برقی":"5$8$3", "صندلی ماساژ":"5$8$4", "ماساژور و گرمکن پا":"5$8$5", "تخت ماساژ":"5$8$6", "ماساژور چشم":"5$8$7", "ماساژور گردن":"5$8$8", "شمع ماساژ":"5$8$9", "روغن و کرم ماساژ":"5$8$10", "جکوزی پا":"5$8$11", "تشک مواج":"5$8$12", "یادآور دارو":"5$8$13", "سنسور دما":"5$8$14", "عینک طبی":"5$8$15", "اکسیمتر":"5$8$16", "بالشت طبی":"5$8$17", "تب سنج":"5$8$18", "ترازو":"5$8$19", "تست قند خون":"5$8$20", "دستگاه قند خون":"5$8$21", "سوزن تست قند خون":"5$8$22", "کیف نگهدارنده انسولین":"5$8$23", "نوار تست قند خون":"5$8$24", "تشکچه برقی":"5$8$25", "دستگاه بخور":"5$8$26", "دماسنج":"5$8$27", "فشارسنج":"5$8$28", "کیسه آب گرم":"5$8$29", "ماساژور":"5$8$30", "زنانه":"5$9$0", "مردانه":"5$9$1", "آنژیوکت":"5$10$0", "باند":"5$10$1", "دستکش":"5$10$2", "سرنگ":"5$10$3", "سوند":"5$10$4", "ضد عفونی کننده":"5$10$5", "کیسه کلستومی":"5$10$6", "لباس اتاق عمل":"5$10$7", "لوله اکسیژن":"5$10$8", "ماسک":"5$10$9", "محصولات کمک درمانی":"5$10$10", "تشکچه مواج":"5$10$11", "توالت فرنگی":"5$10$12", "چسب عضله":"5$10$13", "زیر انداز بیمار":"5$10$14", "عصا":"5$10$15", "گردن":"5$10$16", "نگهدارنده قرص":"5$10$17", "شیر خشک":"5$11$0", "غذای کمکی":"5$11$1", "لوازم کودک":"5$11$2", "پستانک":"5$11$3", "پوشک کودک":"5$11$4", "دستمال مرطوب کودک":"5$11$5", "دندان گیر":"5$11$6", "سر شیشه":"5$11$7", "شوینده لباس":"5$11$8", "شیشه شیر":"5$11$9", "فین گیر":"5$11$10", "ست قیچی و سوهان":"5$11$11", "لوازم غذا خوری":"5$11$12", "قاشق":"5$11$13", "لیوان نی دار":"5$11$14", "مسواک کودک":"5$11$15", "لوازم مادر بعد از بارداری":"5$11$16", "لوازم مادر دوران بارداری":"5$11$17", "مراقبت از پوست کودک":"5$11$18", "التیام بخش پوست کودکان":"5$11$19", "پاک کننده کودک":"5$11$20", "شوینده پوست کودک":"5$11$21", "ضد آفتاب کودکان":"5$11$22", "ضد التهاب":"5$11$23", "مرطوب کننده کودک":"5$11$24", "مراقبت از مو کودک":"5$11$25", "شامپو کودک":"5$11$26", "نرم کننده مو کودک":"5$11$27", "آفتاب سوختگی":"5$12$0", "رفع ترک":"5$12$1", "ضد سلولیت":"5$12$2", "بعد از مو زدایی":"5$12$3", "سوختگی صورت و بدن":"5$12$4", "اسکراب صورت":"5$12$5", "اسکراب و لایه بردار پوست":"5$12$6", "التیام بخش پوست":"5$12$7", "برنزه کننده":"5$12$8", "پاک کننده صورت":"5$12$9", "ترمیم کننده":"5$12$10", "ترمیم کننده لب":"5$12$11", "جمع کننده منافذ باز پوست":"5$12$12", "دور چشم":"5$12$13", "روشن کننده":"5$12$14", "شوینده":"5$12$15", "ضد آفتاب":"5$12$16", "ضد التهاب صورت":"5$12$17", "ضد جوش":"5$12$18", "ضد چروک":"5$12$19", "ضد لک صورت":"5$12$20", "کرم روز":"5$12$21", "کرم شب":"5$12$22", "لیفتینگ":"5$12$23", "ماسک صورت":"5$12$24", "مرطوب کننده":"5$12$25", "ضد قرمزی پوست":"5$12$26", "گزیدگی حشرات":"5$12$27", "اسپری 2 فاز":"5$13$0", "تثبیت کننده رنگ مو":"5$13$1", "ترمیم کننده مو":"5$13$2", "تقویت کننده مو":"5$13$3", "حجم دهنده مو":"5$13$4", "رنگ مو":"5$13$5", "سرم مو":"5$13$6", "شامپو":"5$13$7", "ضد ریزش":"5$13$8", "ضد شپش":"5$13$9", "ضد شوره":"5$13$10", "ضد موخوره":"5$13$11", "ماسک مو":"5$13$12", "نرم کننده مو":"5$13$13", "از بین برنده پوست اطراف ناخن":"5$14$0", "ترمیم کننده ناخن":"5$14$1", "تقویت کننده ناخن":"5$14$2", "جلوگیری از جویدن ناخن":"5$14$3", "خشک کننده سریع ناخن":"5$14$4", "محرک رشد ناخن":"5$14$5", "آمینو":"5$15$0", "ال آرژنین":"5$15$1", "ال کارنیتین":"5$15$2", "انرژی زا":"5$15$3", "بتا آلانین":"5$15$4", "بی سی ای ای":"5$15$5", "پروتئین":"5$15$6", "پری هورمون":"5$15$7", "پمپ":"5$15$8", "سی ال ای":"5$15$9", "شیکر":"5$15$10", "فیبر":"5$15$11", "کازئین":"5$15$12", "کافئین":"5$15$13", "کراتین":"5$15$14", "کربوهیدرات":"5$15$15", "گلوتامین":"5$15$16", "گینر":"5$15$17", "مکمل ها":"5$16$0", "ترکیبات مغذی":"5$16$1", "امگا ٣ و روغن ماهی":"5$16$2", "رویال ژلی":"5$16$3", "کلاژن":"5$16$4", "کوآنزیم":"5$16$5", "گلوکوزامین":"5$16$6", "افزایش اشتها":"5$17$0", "چربی سوز":"5$17$1", "کاهش اشتها":"5$17$2", "کاهش دهنده جذب":"5$17$3", "چای و دمنوش":"5$17$4", "پک های نیوشا":"5$17$5", "دمنوش":"5$17$6", "قهوه و هات چاکلت":"5$17$7", "مخلوط چای سبز":"5$17$8", "مخلوط چای سیاه":"5$17$9", "حافظه و اعصاب":"5$17$10", "تقویت حافظه و یادگیری":"5$17$11", "قرص ملاتونین":"5$17$12", "کاهش استرس و بهبود خواب":"5$17$13", "بارداری و شیردهی":"5$18$0", "پیش از بارداری":"5$18$1", "تقویت میل و عملکرد جنسی":"5$18$2", "شیر افزا":"5$18$3", "قاعدگی":"5$18$4", "مولتی ویتامین مخصوص بانوان":"5$18$5", "یائسگی":"5$18$6", "بهبود خواب":"5$19$0", "تقویت کننده سیستم ایمنی کودک":"5$19$1", "سلامت گوارش":"5$19$2", "کم خونی کودکان":"5$19$3", "ویتامین های کودکان":"5$19$4", "پرو بیوتیک":"5$20$0", "ضد اسهال":"5$20$1", "ضد سوزش معده":"5$20$2", "ضد نفخ":"5$20$3", "قرص کبد":"5$20$4", "هموروئید":"5$20$5", "یبوست":"5$20$6", "قرص پروستات":"5$21$0", "قرص تاخیری":"5$21$1", "مکمل تقویت قوای جنسی":"5$21$2", "مولتی ویتامین مخصوص آقایان":"5$21$3", "انرژی زا":"5$22$0", "بینایی (چشم)":"5$22$1", "پوست مو و ناخن":"5$22$2", "تقویت سیستم ایمنی":"5$22$3", "زگیل تناسلی":"5$22$4", "سلامت ریه":"5$22$5", "سیستم تنفس":"5$22$6", "قرص جوشان":"5$22$7", "قرص دیابت":"5$22$8", "قرص کم خونی":"5$22$9", "قرص مفاصل و استخوان":"5$22$10", "غضروف سازها":"5$22$11", "قلب و عروق":"5$22$12", "کرم و ژل تسکین دهنده درد":"5$22$13", "کلیه و مجاری ادرار":"5$22$14", "آلگومد":"5$23$0", "آووکادو":"5$23$1", "خار مریم":"5$23$2", "دارچین":"5$23$3", "زردچوبه":"5$23$4", "سایر گیاهان":"5$23$5", "سلدرین":"5$23$6", "سویا":"5$23$7", "سیر":"5$23$8", "قرص جینسینگ":"5$23$9", "گل مغربی":"5$23$10", "مخمر":"5$23$11", "مواد معدنی":"5$23$12", "آهن":"5$23$13", "زینک":"5$23$14", "زینک پلاس":"5$23$15", "سلنیوم":"5$23$16", "کروم":"5$23$17", "کلسیم":"5$23$18", "منیزیم":"5$23$19", "ید":"5$23$20", "امگا ٣ و روغن ماهی":"5$24$0", "آهن":"5$24$1", "ب کمپلکس":"5$24$2", "بیوتین B7":"5$24$3", "پوست مو و ناخن":"5$24$4", "ترکیبات مغذی":"5$24$5", "رویال ژلی":"5$24$6", "زگیل تناسلی":"5$24$7", "زینک (روی)":"5$24$8", "زینک پلاس":"5$24$9", "سلنیوم":"5$24$10", "فولیک اسید":"5$24$11", "فولیک اسید B9":"5$24$12", "قرص بیوتین":"5$24$13", "قرص جینسینگ":"5$24$14", "قرص دیابت":"5$24$15", "قرص کم خونی":"5$24$16", "قرص مفاصل و استخوان":"5$24$17", "قرص ویتامین B12":"5$24$18", "قرص ویتامین C":"5$24$19", "قرص ویتامین D":"5$24$20", "قرص ویتامین E":"5$24$21", "کرم و ژل تسکین دهنده درد":"5$24$22", "کروم":"5$24$23", "کلاژن":"5$24$24", "کلسیم":"5$24$25", "کوآنزیم":"5$24$26", "گلوکوزامین":"5$24$27", "منیزیم":"5$24$28", "مواد معدنی":"5$24$29", "مولتی ویتامین":"5$24$30", "مولتی ویتامین و مینرال":"5$24$31", "ویتامین ها":"5$24$32", "ید":"5$24$33", "محلول ضد عفونی کننده":"5$25$0", "ضد عفونی کننده سطوح":"5$25$1", "اسپری ضد عفونی کننده":"5$25$2", "ژل ضد عفونی کننده":"5$25$3", "ضد عفونی کننده دست":"5$25$4", "اکسیمتر":"5$25$5", "تب سنج":"5$25$6", "ماسک":"5$25$7", "دستکش":"5$25$8", "تقویت سیستم ایمنی":"5$25$9", "مکمل های غذایی":"5$25$10", "استرچ":"6$0$0", "بلوز":"6$0$1", "پاپیون":"6$0$2", "پلوور":"6$0$3", "پولوشرت":"6$0$4", "پیراهن":"6$0$5", "تکه دوزی":"6$0$6", "تی شرت":"6$0$7", "جلیقه":"6$0$8", "جوراب":"6$0$9", "جوراب شلواری پسرانه":"6$0$10", "دستکش":"6$0$11", "دمپایی مردانه":"6$0$12", "دوسیلندر":"6$0$13", "ژاکت":"6$0$14", "ژیله":"6$0$15", "سویشرت":"6$0$16", "شلوار پارچه‌ای":"6$0$17", "شلوار راحتی":"6$0$18", "شلوار کتان":"6$0$19", "شلوارک":"6$0$20", "کت و شلوار":"6$0$21", "کراوات":"6$0$22", "کفش مردانه":"6$0$23", "چکمه":"6$0$24", "پوتین":"6$0$25", "کمربند":"6$0$26", "لباس زیر مردانه":"6$0$27", "لباس ورزشی مردانه":"6$0$28", "مایو":"6$0$29", "بدنسازی":"6$1$0", "بلوزشلوارک":"6$1$1", "بلوز":"6$1$2", "بند جوراب":"6$1$3", "تاپ":"6$1$4", "تی‌شرت":"6$1$5", "مانتو":"6$1$6", "دامن":"6$1$7", "کت":"6$1$8", "لباس مجلسی":"6$1$9", "جوراب":"6$1$10", "جوراب شلواری":"6$1$11", "چادر":"6$1$12", "دستکش":"6$1$13", "روبنده":"6$1$14", "ساق":"6$1$15", "ساق شلواری":"6$1$16", "ست":"6$1$17", "شلوار":"6$1$18", "شلوارک":"6$1$19", "کلاه شنا":"6$1$20", "کمر":"6$1$21", "لباس بدنسازی":"6$1$22", "لباس خواب":"6$1$23", "لباس زیر زنانه":"6$1$24", "لباس ورزشی زنانه":"6$1$25", "مایو":"6$1$26", "مقنعه":"6$1$27", "روسری":"6$1$28", "پیراهن":"6$2$0", "شلوار":"6$2$1", "بلوز":"6$2$2", "دوتکه (بلوز و شلوار)":"6$2$3", "سه تکه (بلوز و شلوار و سوئی شرت)":"6$2$4", "سه تکه (بلوز و شلواز و تاپ)":"6$2$5", "یونیفورم":"6$3$0", "کمربند":"6$3$1", "جوشن":"6$3$2", "خرقه":"6$3$3", "دشداشه":"6$3$4", "قبا":"6$3$5", "عبا":"6$3$6", "نعلین":"6$3$7", "اسموکینگ":"6$3$8", "پولوور":"6$3$9", "بارانی":"6$3$10", "سرهمی":"6$3$11", "کلاه":"6$3$12", "کلاه کپ":"6$3$13", "دستبند":"6$3$14", "گردنبند":"6$3$15", "پژو":"7$0$0", "هیوندای":"7$0$1", "بی ام دبلیو":"7$0$2", "رنو":"7$0$3", "کيا":"7$0$4", "تويوتا":"7$0$5", "سایپا":"7$0$6", "مرسدس بنز":"7$0$7", "میتسوبیشی":"7$0$8", "مزدا":"7$0$9", "نيسان":"7$0$10", "فولکس واگن":"7$0$11", "ام وی ام":"7$0$12", "لکسوس":"7$0$13", "ست کاور بدنه خودرو":"7$1$0", "فلاپ":"7$1$1", "ساید بورد":"7$1$2", "گارد":"7$1$3", "کانتینر عقب":"7$1$4", "قاب آینه":"7$1$5", "کاتالیزور":"7$1$6", "سینی خودرو":"7$1$7", "جلو پنجره و قاب پلاک":"7$1$8", "چراغ خودرو":"7$1$9", "باربند خودرو":"7$1$10", "آینه بغل":"7$1$11", "باربند دوچرخه":"7$1$12", "محافظ میل گاردن":"7$1$13", "کفپوش خودرو":"7$2$0", "روکش فرمان خودرو":"7$2$1", "روکش صندلی خودرو":"7$2$2", "زیر دستی راننده":"7$2$3", "روکش سپر":"7$2$4", "روکش سالن":"7$2$5", "روکش داشبورد خودرو":"7$2$6", "مانیتور ماشین":"7$3$0", "دزدگیر خودرو":"7$3$1", "پنل کامپیوتر خودرو":"7$3$2", "باتری خودرو":"7$3$3", "ست کیتهای لامپ زنون":"7$3$4", "آنتن اتومبیل":"7$3$5", "استارت خودرو":"7$3$6", "اسپیکر تلفن خودرو":"7$3$7", "برقی خودرو":"7$3$8", "گرمکن شیشه و آینه":"7$3$9", "سیستم پارک خودرو":"7$3$10", "مبدل ولتاژ":"7$3$11", "ردیاب خودرو":"7$3$12", "آژیر و بلندگو":"7$3$13", "شمع خودرو":"7$3$14", "دوربین دید عقب خودرو":"7$3$15", "دوربین ضبط حرکت خودرو":"7$3$16", "دینام":"7$3$17", "اسپیکر خودرو":"7$3$18", "آمپلی فایر خودرو":"7$3$19", "بلندگوی خودرو":"7$3$20", "ضبط خودرو":"7$3$21", "چنجر خودرو":"7$3$22", "ساب خودرو":"7$4$0", "روغن گیربکس":"7$4$1", "روغن ترمز":"7$4$2", "دیسک ترمز":"7$4$3", "سیستم ترمز":"7$4$4", "وایر شمع":"7$4$5", "تسمه تایم":"7$4$6", "تسمه دینام":"7$4$7", "فیلتر سوخت":"7$4$8", "کمک فنر":"7$4$9", "رادیاتور ماشین":"7$4$10", "تسمه کولر ماشین":"7$4$11", "ترموستات":"7$4$12", "مکمل سوخت":"7$4$13", "ECU":"7$4$14", "سپر":"7$4$15", "روغن موتور":"7$4$16", "فیلتر روغن ماشین":"7$4$17", "لنت ترمز":"7$4$18", "فیلتر بنزین":"7$4$19", "کیت کلاچ":"7$4$20", "فیلتر هوای ماشین":"7$4$21", "فیلتر کابین ماشین":"7$4$22", "حسگر خودرو":"7$4$23", "لاستیک ماشین":"7$4$24", "ضدیخ":"7$4$25", "شلنگ خودرو":"7$4$26", "لامپ ماشین":"7$4$27", "واشر سر سیلندر":"7$4$28", "پولی سر میل لنگ":"7$4$29", "جلوبندی و تعلیق":"7$4$30", "جک خودرو":"7$4$31", "روکش خودرو":"7$4$32", "نظافت و نگهداری خودرو":"7$4$33", "آفتابگیر خودرو":"7$4$34", "قفل فرمان و پدال":"7$4$35", "تیغه برف پاکن":"7$4$36", "قالپاق":"7$4$37", "زنجیر چرخ":"7$4$38", "فشارسنج لاستیک":"7$4$39", "سایه‌بان کاپوت":"7$4$40", "رینگ":"7$4$41", "سایه‌بان پنجره خودرو":"7$4$42", "اگزوز اسپرت":"7$4$43", "زه چراغ خودرو":"7$4$44", "اسپویلر":"7$4$45", "چراغ زنون":"7$4$46", "خوشبو کننده ماشین":"7$4$47", "لگو خودرو":"7$4$48", "قاب ریموت":"7$4$49", "موتور سیکلت هوندا":"7$5$0", "موتور سیکلت سوزوکی":"7$5$1", "موتور سیکلت یاماها":"7$5$2", "موتور سیکلت متفرقه":"7$5$3", "موتور سیکلت نیرو محرکه":"7$5$4", "موتور سیکلت زیگما":"7$5$5", "موتور سیکلت کاوازاکی":"7$5$6", "موتور سیکلت رایکا":"7$5$7", "موتور سیکلت سابین":"7$5$8", "موتور سیکلت آرشیا":"7$5$9", "موتور سیکلت رگال":"7$5$10", "موتور سیکلت انرژی":"7$5$11", "موتور سیکلت بالت":"7$5$12", "موتور سیکلت دریم":"7$5$13", "موتور سیکلت کيا":"7$5$14", "لاستیک موتور":"7$5$15", "قفل موتور سیکلت":"7$5$16", "دزدگیر موتورسیکلت":"7$5$17", "دستکش موتور سواری":"7$5$18", "دوچرخه کوهستان":"7$6$0", "دوچرخه شهری":"7$6$1", "دوچرخه برق":"7$6$2", "دوچرخه اسپلینگ":"7$6$3", "دوچرخه مسابقه‌ای":"7$6$4", "دوچرخه بچه":"7$6$5", "کلاه کاسکت":"7$6$6", "لوازم ایمنی":"7$6$7", "چراغ دوچرخه":"7$6$8", "قمقمه":"7$6$9", "بوق و زنگ":"7$6$10", "چادر و پوشش دوچرخه":"7$6$11", "دستکش دوچرخه سواری":"7$6$12", "گریپ و نوار دسته":"7$6$13", "بست قمقمه":"7$6$14", "کیف دوچرخه":"7$6$15", "قفل دوچرخه":"7$6$16", "لوازم جانبی دوچرخه":"7$6$17", "کتلمبه":"7$6$18", "آینه دوچرخه":"7$6$19", "عینک دوچرخه سواری":"7$6$20", "ابزار دوچرخه":"7$6$21", "قطعات دوچرخه":"7$6$22", "مدال":"8$0$0", "آویز":"8$0$1", "زنجیر":"8$0$2", "نیم ست":"8$0$3", "سرویس طلا":"8$0$4", "سرویس جواهر":"8$0$5", "پابند طلا":"8$0$6", "آویز ساعت":"8$0$7", "رولباسی":"8$0$8", "النگو":"8$0$9", "انگشتر":"8$0$10", "جعبه جواهرات":"8$0$11", "دستبند":"8$0$12", "زنجیر":"8$0$13", "ست زیورآلات":"8$0$14", "گردنبند":"8$0$15", "گوشواره":"8$0$16", "سکه":"8$0$17", "ساعت مچی زنانه":"8$1$0", "ساعت مچی مردانه":"8$1$1", "ساعت بچگانه":"8$1$2", "ساعت دیواری":"8$1$3", "عینک آفتابی":"8$2$0", "عینک طبی":"8$2$1", "شیشه عینک ":"8$2$2", "عینک صنعتی":"8$2$3", "باکس":"9$0$0", "خانه":"9$0$1", "لوازم خواب":"9$0$2", "اسباب بازی حیوانات":"9$0$3", "انواع قلاده و ملزومات":"9$0$4", "پوشاک حیوانات":"9$0$5", "غذای حیوانات":"9$0$6", "وسایل آموزشی حیوانات":"9$0$7", "ظرف آب و غذا حیوانات":"9$0$8", "شامپو و اسپری و شوینده ها حیوانات":"9$1$0", "برس و شانه و ناخن گیر حیوانات":"9$1$1", "بهداشت دهان و دندان حیوانات":"9$1$2", "توالت و کیسه جمع آوری حیوانات":"9$1$3", "دستمال مرطوب حیوانات":"9$1$4", "مکمل و دارویی حیوانات":"9$2$0", "پت شاپ":"9$2$1", "گربه":"9$3$0", "سگ":"9$3$1", "پرنده":"9$3$2", "همستر":"9$3$3", "ماهی":"9$3$4"}

    $('#search_plus').click(function () {
        var search_data = $('#search_voice').val();
        if ($('#quick_list_form .form-group').length < 30 && search_data !== '') {
            if (data_codes[search_data]) {
                flag = false;

                if ($('#empty_list').css('display') !== 'none') {
                    $('#empty_list').hide();
                    $('#quick_list_title').show();
                    $('#list_info').show();
                    $('#security_box').show();
                    $('#quick_list_form_btn').show();
                    $('#list_box').css('min-height', '630px');
                }

                for (var i=0;i<$('#quick_list_form .form-group').length;i++) {
                    if ($('#quick_list_form .form-group').eq(i).children('input').eq(0).val() === data_codes[search_data]) {
                        flag = true;
                    }
                }

                if (!flag && $('#quick_list_form .form-group').length < 30) {

                    var class_name = (data_codes[search_data]).toString();
                    var name_slice = class_name;
                    var num_sign = 0;
                    for (var j=0;j<class_name.length;j++) {
                        if (class_name[j] === '$') {
                            num_sign = num_sign + 1;
                        }
                    }

                    if (num_sign === 2) {
                        var first_floor = 0,second_floor = 0,third_floor = 0,fourth_floor = 0,box_address = 0,box_mod = 0,counter = 0,mod = 0;

                        first_floor = parseInt(name_slice.slice(0,1));
                        name_slice = class_name.slice(2,class_name.length);

                        second_floor = parseInt(name_slice.slice(0,name_slice.indexOf('$')));
                        name_slice = name_slice.slice(name_slice.indexOf('$')+1,name_slice.length);

                        third_floor = parseInt(name_slice);
                        
                        if (!$('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('div').eq(1).hasClass('items_plus_parts')) {
                            counter = parseInt(third_floor / $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('div').length);

                            mod = third_floor % $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('div').length;
                        }

                        else {
                            counter = parseInt(third_floor / ($('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('div').length / 2));

                            mod = (third_floor % ($('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('div').length / 2)) * 2;
                        }
                        
                        $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(counter).children('div').eq(mod).children('span').eq(0).addClass('text-success');
                    }
                    else if (num_sign === 3) {
                        first_floor = parseInt(name_slice.slice(0,1));
                        name_slice = class_name.slice(2,class_name.length);

                        second_floor = parseInt(name_slice.slice(0,name_slice.indexOf('$')));
                        name_slice = name_slice.slice(name_slice.indexOf('$')+1,name_slice.length);

                        third_floor = parseInt(name_slice.slice(0,name_slice.indexOf('$')));
                        name_slice = name_slice.slice(name_slice.indexOf('$')+1,name_slice.length);

                        fourth_floor = parseInt(name_slice);

                        box_address = parseInt(third_floor / $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('.items_plus_parts').length);

                        box_mod = parseInt(third_floor % $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('.items_plus_parts').length);


                        counter = parseInt(fourth_floor / $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(box_address).children('.items_plus_parts').eq(box_mod).children('div').eq(0).children('div').eq(0).children('div').length);

                        mod = parseInt(fourth_floor % $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(box_address).children('.items_plus_parts').eq(box_mod).children('div').eq(0).children('div').eq(0).children('div').length);

                        $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(box_address).children('.items_plus_parts').eq(box_mod).children('div').eq(0).children('div').eq(counter).children('div').eq(mod).children('span').eq(0).addClass('text-success');
                    }

                    const sound = new Audio('static/app/sound/sound.mp3');
                    sound.play();

                    item3 = $('<div class="form-group rounded-pill"></div>');
                    item0 = $('<input type="text" name="input[]" style="display: none">');
                    item1 = $('<div class="item_name"></div>');
                    item2 = $('<textarea name="input[]" class="item_explain form-control" placeholder="توضیحات ..."></textarea>' +
                        '<i class="question_sign fas fa-question-circle" title="توضیحات" data-toggle="tooltip" data-placement="right"></i>' +
                        '<input type="number" step="any" name="input[]" class="item_num form-control" min="0" max="999999" autocomplete="off">' +
                        '<select name="input[]" class="item_measurement form-control">\n' +
                        '  <option value="0">عدد</option>\n' +
                        '  <option value="1">بسته</option>\n' +
                        '  <option value="2">کیلوگرم</option>\n' +
                        '  <option value="3">گرم</option>\n' +
                        '</select>' +
                        '<i class="close_item fas fa-times-circle" title="حذف" data-toggle="tooltip" data-placement="top"></i>');
                    item0.val(data_codes[search_data]);
                    s = topersianNumber(($('#quick_list_form .form-group').length + 1).toString());
                    s = s + '. ' + search_data;
                    item1.text(s);
                    item3.append(item0,item1,item2);
                    $(item3).insertBefore($('#security_box'));

                    $('.question_sign').eq($('.question_sign').length - 1).click(function () {
                        if ($(this).parent().find('.item_explain').css('display') === 'none') {
                            $(this).parent().find('.item_name').animate({'margin-top': '18px'},500);
                            $(this).parent().find('.question_sign').animate({'margin-top': '18px'},500);
                            $(this).parent().find('.item_num').animate({'margin-top': '10px'},500);
                            $(this).parent().find('.item_measurement').animate({'margin-top': '10px'},500);
                            $(this).parent().find('.close_item').animate({'margin-top': '18px'},500);
                        }
                        else {
                            $(this).parent().find('.item_name').animate({'margin-top': '5px'},500);
                            $(this).parent().find('.question_sign').animate({'margin-top': '9px'},500);
                            $(this).parent().find('.item_num').animate({'margin-top': '0px'},500);
                            $(this).parent().find('.item_measurement').animate({'margin-top': '0px'},500);
                            $(this).parent().find('.close_item').animate({'margin-top': '9px'},500);
                        }
                        $(this).parent().find('.item_explain').slideToggle();
                    });

                    $('.item_explain').eq($('.item_explain').length - 1).keydown(function (e) {
                        txt_len = $(this).val().length;
                        if (txt_len > 499 && e.keyCode !== 8) {
                            e.preventDefault();
                        }
                    });

                    $('.item_num').eq($('.item_num').length - 1).keydown(function (e) {
                        if (e.keyCode === 109 || e.keyCode === 107) {
                            e.preventDefault()
                        }

                        var len = ($(this).val()).toString().length;
                        if (len>5) {
                            e.preventDefault()
                        }
                    });

                    $('.close_item').eq($('.close_item').length -1).click(function (attributeName) {
                        var class_name = (data_codes[search_data]).toString();
                        var name_slice = class_name;
                        var num_sign = 0;
                        for (var j=0;j<class_name.length;j++) {
                            if (class_name[j] === '$') {
                                num_sign = num_sign + 1;
                            }
                        }

                        if (num_sign === 2) {
                            var first_floor = 0,second_floor = 0,third_floor = 0,fourth_floor = 0,box_address = 0,box_mod = 0,counter = 0,mod = 0;

                            first_floor = parseInt(name_slice.slice(0,1));
                            name_slice = class_name.slice(2,class_name.length);

                            second_floor = parseInt(name_slice.slice(0,name_slice.indexOf('$')));
                            name_slice = name_slice.slice(name_slice.indexOf('$')+1,name_slice.length);

                            third_floor = parseInt(name_slice);
                            
                            if (!$('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('div').eq(1).hasClass('items_plus_parts')) {
                                counter = parseInt(third_floor / $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('div').length);

                                mod = third_floor % $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('div').length;
                            }

                            else {
                                counter = parseInt(third_floor / ($('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('div').length / 2));

                                mod = (third_floor % ($('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('div').length / 2)) * 2;
                            }
                            
                            $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(counter).children('div').eq(mod).children('span').eq(0).removeClass('text-success');

                            $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(counter).children('div').eq(mod).children('span').eq(0).hover(function () {
                                $(this).css({'color': '#616161','cursor': 'pointer'});
                            }, function () {
                                $(this).css({'color': '#212121'});
                            });
                        }
                        else if (num_sign === 3) {
                            first_floor = parseInt(name_slice.slice(0,1));
                            name_slice = class_name.slice(2,class_name.length);

                            second_floor = parseInt(name_slice.slice(0,name_slice.indexOf('$')));
                            name_slice = name_slice.slice(name_slice.indexOf('$')+1,name_slice.length);

                            third_floor = parseInt(name_slice.slice(0,name_slice.indexOf('$')));
                            name_slice = name_slice.slice(name_slice.indexOf('$')+1,name_slice.length);

                            fourth_floor = parseInt(name_slice);

                            box_address = parseInt(third_floor / $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('.items_plus_parts').length);

                            box_mod = parseInt(third_floor % $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(0).children('.items_plus_parts').length);


                            counter = parseInt(fourth_floor / $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(box_address).children('.items_plus_parts').eq(box_mod).children('div').eq(0).children('div').eq(0).children('div').length);

                            mod = parseInt(fourth_floor % $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(box_address).children('.items_plus_parts').eq(box_mod).children('div').eq(0).children('div').eq(0).children('div').length);

                            $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(box_address).children('.items_plus_parts').eq(box_mod).children('div').eq(0).children('div').eq(counter).children('div').eq(mod).children('span').eq(0).removeClass('text-success');

                            $('#quick_list_bar>div').eq(first_floor).find('.list_items').children('div').eq(second_floor).find('.items').children('div').eq(box_address).children('.items_plus_parts').eq(box_mod).children('div').eq(0).children('div').eq(counter).children('div').eq(mod).children('span').eq(0).hover(function () {
                                $(this).css({'color': '#616161','cursor': 'pointer'});
                            }, function () {
                                $(this).css({'color': '#212121'});
                            });
                        }

                        $('.tooltip').hide();
                        x = $(this).parent().index();
                        $(this).parent().remove();
                        var dot_index;

                        for (var i = x-1;i<$('#quick_list_form .form-group').length;i++) {
                            c = $('#quick_list_form .form-group').eq(i).find('.item_name').text();
                            dot_index = c.search(' ');
                            c = c.slice(dot_index,);
                            c = topersianNumber((i + 1).toString()) + '.' + c;
                            $('#quick_list_form .form-group').eq(i).find('.item_name').text(c);
                        }

                        if ($('#quick_list_form .form-group').length === 0) {
                            $('#list_box').css('min-height', '455px');
                            $('#quick_list_title').hide();
                            $('#list_info').hide();
                            $('#security_box').hide();
                            $('#quick_list_form_btn').hide();
                            $('#empty_list').show();
                        }

                        $('#basket_items_num').text($('#quick_list_form .form-group').length);
                    })
                }

                $('[data-toggle = "tooltip"]').tooltip();

                $('#basket_items_num').text($('#quick_list_form .form-group').length);
            }

            else {
                $('#list_box').css('min-height', '630px');

                if ($('#empty_list').css('display') !== 'none') {
                    $('#empty_list').hide();
                    $('#quick_list_title').show();
                    $('#list_info').show();
                    $('#security_box').show();
                    $('#quick_list_form_btn').show();
                    $('#list_box').css('min-height', '630px');
                }

                if ($('#quick_list_form .form-group').length < 30) {
                    const sound = new Audio('static/app/sound/sound.mp3');
                    sound.play();
                    item3 = $('<div class="form-group rounded-pill"></div>');
                    item0 = $('<input type="text" name="input[]" class="form-control other_input_name" autocomplete="off">');
                    item1 = $('<div class="item_name other_item_name"></div>');
                    item2 = $('<textarea name="input[]" class="item_explain form-control" placeholder="توضیحات ..."></textarea>' +
                        '<i class="question_sign fas fa-question-circle" title="توضیحات" data-toggle="tooltip" data-placement="right"></i>' +
                        '<input type="number" step="any" name="input[]" class="item_num form-control" min="0" max="999999" autocomplete="off">' +
                        '<select name="input[]" class="item_measurement form-control">\n' +
                        '  <option value="0">عدد</option>\n' +
                        '  <option value="1">بسته</option>\n' +
                        '  <option value="2">کیلوگرم</option>\n' +
                        '  <option value="3">گرم</option>\n' +
                        '</select>' +
                        '<i class="close_item fas fa-times-circle" title="حذف" data-toggle="tooltip" data-placement="top"></i>');
                    item0.val(search_data);
                    s = topersianNumber(($('#quick_list_form .form-group').length + 1).toString())+ '. ';
                    item1.text(s);
                    item3.append(item1,item0,item2);
                    $(item3).insertBefore($('#security_box'));

                    $('.question_sign').eq($('.question_sign').length - 1).click(function () {
                        if ($(this).parent().find('.item_explain').css('display') === 'none') {
                            $(this).parent().find('.item_name').animate({'margin-top': '18px'},500);
                            $(this).parent().find('.question_sign').animate({'margin-top': '18px'},500);
                            $(this).parent().find('.item_num').animate({'margin-top': '10px'},500);
                            $(this).parent().find('.item_measurement').animate({'margin-top': '10px'},500);
                            $(this).parent().find('.close_item').animate({'margin-top': '18px'},500);
                        }
                        else {
                            $(this).parent().find('.item_name').animate({'margin-top': '5px'},500);
                            $(this).parent().find('.question_sign').animate({'margin-top': '9px'},500);
                            $(this).parent().find('.item_num').animate({'margin-top': '0px'},500);
                            $(this).parent().find('.item_measurement').animate({'margin-top': '0px'},500);
                            $(this).parent().find('.close_item').animate({'margin-top': '9px'},500);
                        }
                        $(this).parent().find('.item_explain').slideToggle();
                    });

                    $('.other_input_name').eq($('.other_input_name').length - 1).keydown(function (e) {
                        txt_len = $(this).val().length;
                        if (txt_len > 39 && e.keyCode !== 8) {
                            e.preventDefault();
                        }
                    });

                    $('.item_explain').eq($('.item_explain').length - 1).keydown(function (e) {
                        txt_len = $(this).val().length;
                        if (txt_len > 499 && e.keyCode !== 8) {
                            e.preventDefault();
                        }
                    });

                    $('.item_num').eq($('.item_num').length - 1).keydown(function (e) {
                        if (e.keyCode === 109 || e.keyCode === 107) {
                            e.preventDefault()
                        }

                        var len = ($(this).val()).toString().length;
                        if (len>5) {
                            e.preventDefault()
                        }
                    });

                    $('.close_item').eq($('.close_item').length -1).click(function (attributeName) {
                        $('.tooltip').hide();
                        x = $(this).parent().index();
                        $(this).parent().remove();
                        var dot_index;

                        for (var i = x-1;i<$('#quick_list_form .form-group').length;i++) {
                            c = $('#quick_list_form .form-group').eq(i).find('.item_name').text();
                            dot_index = c.search(' ');
                            c = c.slice(dot_index,);
                            c = topersianNumber((i + 1).toString()) + '.' + c;
                            $('#quick_list_form .form-group').eq(i).find('.item_name').text(c);
                        }

                        if ($('#quick_list_form .form-group').length === 0) {
                            $('#list_box').css('min-height', '455px');
                            $('#quick_list_title').hide();
                            $('#list_info').hide();
                            $('#security_box').hide();
                            $('#quick_list_form_btn').hide();
                            $('#empty_list').show();
                        }

                        $('#basket_items_num').text($('#quick_list_form .form-group').length);
                    });
                }

                $('[data-toggle = "tooltip"]').tooltip();

                $('#basket_items_num').text($('#quick_list_form .form-group').length);
            }
        }
    });

    $('#kala_quick_list_print').click(function () {
        var flag_footer = true;
        $('#quick_btn').hide();
        $('#menu_box').attr('style', 'display: none !important;');
        $('#kala_quick_list').css('margin-top', '150px');
        if ($('#footer').css('display') !== 'none') {
            $('#footer').hide();
        }
        else {
            $('#footer_mobile').hide();
            flag_footer = false
        }
        for (var j=0;j<$('.kala_items_explain').length;j++) {
            $('.kala_items_explain').eq(j).parent().parent().find('.kala_question_sign').hide();
            if ($('.kala_items_explain').eq(j).text() !== ' ') {
                if ($('.kala_items_explain').eq(j).css('display') === 'none') {
                    $('.kala_items_explain').eq(j).show();
                    $('.kala_items_explain').eq(j).css('width', '400px');
                }
            }
        }
        $('#kala_quick_list_btns').attr('style', 'display: none !important;');
        $('.tooltip').css('opacity', '0');

        window.print();

        $('#quick_btn').show();
        $('#menu_box').attr('style', 'display: flex !important;');
        $('#kala_quick_list').css('margin-top', '50px');
        if (flag_footer) {
            $('#footer').show();
        }
        else {
            $('#footer_mobile').show();
        }
        for (var j=0;j<$('.kala_items_explain').length;j++) {
            $('.kala_items_explain').eq(j).parent().parent().find('.kala_question_sign').show();
            if ($('.kala_items_explain').eq(j).text() !== ' ') {
                if ($('.kala_items_explain').eq(j).css('display') !== 'none') {
                    $('.kala_items_explain').eq(j).hide();
                    $('.kala_items_explain').eq(j).css('width', '455px');
                }
            }
        }
        $('#kala_quick_list_btns').attr('style', 'display: flex !important;');
        $('.tooltip').css('opacity', '1');
    });

    $('#kala_quick_list_copy_btn').click(function () {
        var link_address = $('#kala_quick_list_serial').text();
        link_address = 'https://tadvinmasraf.com/' + 'kala_quick_list/' + link_address + '/';
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(link_address).select();
        document.execCommand("copy");
        $temp.remove();
    });

    $('#kala_quick_list_print').mousedown(function () {
        $(this).css('backgroundColor', '#E1E1E1');
    });

    $('#kala_quick_list_print').mouseup(function () {
        $(this).css('backgroundColor', '#f5f5f5');
    });

    $('#kala_quick_list_copy_btn').mousedown(function () {
        $(this).css('backgroundColor', '#E1E1E1');
    });

    $('#kala_quick_list_copy_btn').mouseup(function () {
        $(this).css('backgroundColor', '#f5f5f5');
    });

    $('#kala_quick_list_share_btn').click(function () {
        $('#mask_share').fadeIn();
        $('#share_box').fadeIn();
    });

    $('#mask_share').click(function () {
        $(this).fadeOut();
        $('#share_box').fadeOut();
    });

    $('#share_box_close').click(function () {
        $('#mask_share').fadeOut();
        $('#share_box').fadeOut();
    });

    $('#kala_quick_list_share_btn').mousedown(function () {
        $(this).css('backgroundColor', '#E1E1E1');
    });

    $('#kala_quick_list_share_btn').mouseup(function () {
        $(this).css('backgroundColor', '#f5f5f5');
    });

    $('#kala_quick_list_faceBook_share').click(function() {
        var pageUrl = encodeURIComponent(document.URL);
        url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
        socialWindow(url);
    });

    $('#kala_quick_list_whatsApp_share').click(function() {
        var pageUrl = encodeURIComponent(document.URL);
        url = "https://web.whatsapp.com/send?text=" + pageUrl;
        socialWindow(url);
    });

    $('#kala_quick_list_telegram_share').click(function() {
        var pageUrl = encodeURIComponent(document.URL);
        url = "https://t.me/share/url?url=" + pageUrl;
        socialWindow(url);
    });

    $('#kala_quick_list_twitter_share').click(function() {
        var pageUrl = encodeURIComponent(document.URL);
        url = "https://twitter.com/intent/tweet?url=" + pageUrl;
        socialWindow(url);
    });

    $('#kala_quick_list_linkedin_share').click(function() {
        var pageUrl = encodeURIComponent(document.URL);
        var tweet = 'کوئیک لیست تدوین مصرف';
        var summary = 'تدوین مصرف تم';
        url = "http://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl + "&title=" + tweet + "&summary=" + summary + "&source=in1.com";
        socialWindow(url);
    });

    $('#kala_quick_list_google_plus_share').click(function() {
        var pageUrl = encodeURIComponent(document.URL);
        url = "https://plus.google.com/share?url=" + pageUrl;
        socialWindow(url);
    });

    $('#kala_quick_list_reddit_share').click(function() {
        var pageUrl = encodeURIComponent(document.URL);
        url = "http://reddit.com/submit?url=" + pageUrl;
        socialWindow(url);
    });

    $('#kala_quick_list_pinterest_share').click(function() {
        var pageUrl = encodeURIComponent(document.URL);
        var tweet = 'کوئیک لیست تدوین مصرف';
        url = "http://pinterest.com/pin/create/button/?url=" + tweet + "&media=&description=" + pageUrl;
        socialWindow(url);
    });

    $('#kala_quick_list_signal_share').click(function() {
        var pageUrl = encodeURIComponent(document.URL);
        var tweet = 'کوئیک لیست تدوین مصرف';
        url = "http://pinterest.com/pin/create/button/?url=" + tweet + "&media=&description=" + pageUrl;
        socialWindow(url);
    });

    $('#kala_quick_list_email_share').click(function() {
        var pageUrl = encodeURIComponent(document.URL);
        var tweet = 'کوئیک لیست تدوین مصرف';
        url = "mailto:?Subject=" + tweet + "&Body=" + pageUrl;
        socialWindow(url);
    });

    // captcha
    function createCaptchaText() {
        let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

        let code_a = letters[Math.floor(Math.random() * letters.length)];
        let code_b = letters[Math.floor(Math.random() * letters.length)];
        let code_c = letters[Math.floor(Math.random() * letters.length)];
        let code_d = letters[Math.floor(Math.random() * letters.length)];
        let code_e = letters[Math.floor(Math.random() * letters.length)];
        let code_f = letters[Math.floor(Math.random() * letters.length)];
        let code_s = code_a + code_b + code_c + code_d + code_e + code_f;

        return code_s;
    }

    var s_code;
    function createCaptcha() {
        $('#securitiCode').html('');
        var captcha = createCaptchaText();

        var canv = document.createElement("canvas");
        canv.id = "captcha_img";
        canv.width = 120;
        canv.height = 46;
        var ctx = canv.getContext("2d");
        ctx.font = "25px Georgia";
        ctx.strokeText(captcha, 0, 30);

        s_code = captcha;
        $("#securitiCode").append(canv);
    }

    createCaptcha();

    $('.changeText').click(function () {
        createCaptcha();
    })

    $('.readText').click(function () {
        var msg = new SpeechSynthesisUtterance();
        msg.text = s_code;
        window.speechSynthesis.speak(msg);
    })

    $('#date_test').pDatepicker();
    var test_str = $('#date_test').val();
    // $('#quick_list_date').text(test_str.slice(0,test_str.indexOf(':')-2));

    // convert voice to text


    // mobile quick_list
    $('.menu_first_floor').click(function() {
        for (var i=0;i<$('.mobile_quick_list_dropdown_menu_second').length;i++) {
            if (($(this).nextAll('.mobile_quick_list_dropdown_menu_second').first().index() + 1)/2 !== i + 1) {
                $('.mobile_quick_list_dropdown_menu_second').eq(i).slideUp();
                $('.menu_first_floor').eq(i).find('.menu_floor_up_sign').hide();
                $('.menu_first_floor').eq(i).find('.menu_floor_down_sign').show();
            }
        }

        if ($(this).nextAll('.mobile_quick_list_dropdown_menu_second').first().css('display') === 'none') {
            $(this).children('.menu_floor_down_sign').hide();
            $(this).children('.menu_floor_up_sign').show();
        }
        else {
            $(this).children('.menu_floor_up_sign').hide();
            $(this).children('.menu_floor_down_sign').show();
        }

        $(this).nextAll('.mobile_quick_list_dropdown_menu_second').first().slideToggle();
    });

    $('.menu_second_floor').click(function() {
        for (var i=0;i<$('.menu_second_floor').length;i++) {
            if ($('.menu_second_floor').eq(i).html() !== $(this).html()) {
                $('.menu_second_floor').eq(i).nextAll('div').first().slideUp();
                $('.menu_second_floor').eq(i).find('.menu_floor_up_sign').hide();
                $('.menu_second_floor').eq(i).find('.menu_floor_down_sign').show();
            }
        }

        if ($(this).nextAll('div').first().css('display') === 'none') {
            $(this).find('.menu_floor_down_sign').hide();
            $(this).find('.menu_floor_up_sign').show();
        }
        else {
            $(this).find('.menu_floor_up_sign').hide();
            $(this).find('.menu_floor_down_sign').show();
        }

        $(this).nextAll('div').first().slideToggle();
    });

    $('.menu_third_floor').click(function() {
        for (var i=0;i<$('.menu_third_floor').parent().find('.mobile_quick_list_dropdown_menu_last').length;i++) {
            if ($('.menu_third_floor').parent().children('.mobile_quick_list_dropdown_menu_last').eq(i).html() !== $(this).nextAll('.mobile_quick_list_dropdown_menu_last').first().html()) {
                $('.menu_third_floor').parent().children('.mobile_quick_list_dropdown_menu_last').eq(i).slideUp();
                $('.menu_third_floor').eq(i).find('.menu_floor_up_sign').hide();
                $('.menu_third_floor').eq(i).find('.menu_floor_down_sign').show();
            }
        }
          
        if ($(this).nextAll('.mobile_quick_list_dropdown_menu_last').first().css('display') === 'none') {
            $(this).find('.menu_floor_down_sign').hide();
            $(this).find('.menu_floor_up_sign').show();
        }
        else {
            $(this).find('.menu_floor_up_sign').hide();
            $(this).find('.menu_floor_down_sign').show();
        }
        
        $(this).nextAll('.mobile_quick_list_dropdown_menu_last').first().slideToggle();
    });

    var codes = [];
    var names = [];
    var datas_code = [];
    var datas_name = [];
    $('.mobile_quick_list_dropdown_menu_last>div').click(function() {

        if (codes.includes($(this).attr('class'))) {
            var j = codes.indexOf($(this).attr('class'));
            codes.splice(j,1);
            names.splice(j,1);
            $(this).animate({'background-color': '#80d8ff','color': '#221122'}, 150);
        }

        else if (datas_code.includes($(this).attr('class'))) {
            var j = datas_code.indexOf($(this).attr('class'));
            datas_code.splice(j,1);
            datas_name.splice(j,1);
            $(this).animate({'background-color': '#80d8ff','color': '#221122'}, 150);
        }

        else {
            if (codes.length + datas_code.length < 30) {
                datas_code.push($(this).attr('class'));
                datas_name.push($(this).text());
                const sound = new Audio('static/app/sound/sound.mp3');
                sound.play();
                $(this).animate({'background-color': '#43a047','color': '#e0f7fa'}, 150);
            }
        }
    });

    $('.btn_add_item').click(function() {
        datas_code = [];
        datas_name = [];

        for (var i=0;i<$('#mobile_quick_list_select').find('.mobile_quick_list_dropdown_menu_last').find('div').length;i++) {
            if (codes.includes($('#mobile_quick_list_select').find('.mobile_quick_list_dropdown_menu_last').find('div').eq(i).attr('class'))) {
                $('#mobile_quick_list_select').find('.mobile_quick_list_dropdown_menu_last').find('div').eq(i).css({'background-color': '#43a047','color': '#e0f7fa'});
            }
            else {
                $('#mobile_quick_list_select').find('.mobile_quick_list_dropdown_menu_last').find('div').eq(i).css({'background-color': '#80d8ff','color': '#221122'});
            }
        }

        $('#mobile_quick_list_show').fadeOut();
        $('#mobile_quick_list_select').delay(300).fadeIn();
    });

    $('#btn_done').click(function() {
        var remove_item_index = [];
        var num_items = $('#mobile_quick_list_form .form-group').length;
        for (var j=0;j<num_items;j++) {
            if (!codes.includes($('#mobile_quick_list_form .form-group').eq(j).children('.item_code').val())) {
                remove_item_index.push(j);
            }
        }

        remove_item_index.sort();
        for (var j=remove_item_index.length-1;j>-1;j--) {
            $('#mobile_quick_list_form .form-group').eq(remove_item_index[j]).remove();
            var dot_index;

            for (var i = remove_item_index[j];i<$('#mobile_quick_list_form .form-group').length;i++) {
                c = $('#mobile_quick_list_form .form-group').eq(i).find('.item_name').text();
                dot_index = c.search(' ');
                c = c.slice(dot_index,);
                c = topersianNumber((i + 1).toString()) + '.' + c;
                $('#mobile_quick_list_form .form-group').eq(i).find('.item_name').text(c);
            }

            if ($('#mobile_quick_list_form .form-group').length === 0) {
                $('#mobile_quick_list_form').hide();
                $('#mobile_quick_list_empty').show();
            }
        }

        for (var j=0;j<datas_code.length;j++) {

            if ($('#mobile_quick_list_empty').css('display') !== 'none' && datas_code.length > 0) {
                $('#mobile_quick_list_empty').hide();
                $('#mobile_quick_list_form').show();
            }

            item3 = $('<div class="form-group"></div>');
            item0 = $('<input class="item_code" type="text" name="input[]" style="display: none">');
            item1 = $('<div class="item_name"></div>');
            item2 = $('<textarea name="input[]" class="item_explain form-control" placeholder="توضیحات ..."></textarea>' +
                '<i class="question_sign fas fa-question-circle"></i>' +
                '<input type="number" step="any" name="input[]" class="item_num form-control" min="0" max="999999" autocomplete="off">' +
                '<select name="input[]" class="item_measurement form-control">\n' +
                '  <option value="0">عدد</option>\n' +
                '  <option value="1">بسته</option>\n' +
                '  <option value="2">کیلوگرم</option>\n' +
                '  <option value="3">گرم</option>\n' +
                '</select>' +
                '<i class="close_item fas fa-times-circle"></i>');
            item0.val(datas_code[j]);
            s = topersianNumber(($('#mobile_quick_list_form .form-group').length + 1).toString());
            s = s + '. ' + datas_name[j];
            item1.text(s);
            item3.append(item0,item1,item2);
            $(item3).insertBefore($('#mobile_quick_list_form_btn'));

            $('.question_sign').eq($('.question_sign').length - 1).click(function () {
                $(this).prev('.item_explain').first().slideToggle();
            });

            $('.item_explain').eq($('.item_explain').length - 1).keydown(function (e) {
                txt_len = $(this).val().length;
                if (txt_len > 499 && e.keyCode !== 8) {
                    e.preventDefault();
                }
            });

            $('.item_num').eq($('.item_num').length - 1).keydown(function (e) {
                if (e.keyCode === 109 || e.keyCode === 107) {
                    e.preventDefault()
                }

                var len = ($(this).val()).toString().length;
                if (len>5) {
                    e.preventDefault()
                }
            });

            $('.close_item').eq($('.close_item').length -1).click(function () {
                var k = codes.indexOf($(this).parent().children('.item_code').val());
                codes.splice(k,1);
                names.splice(k,1);

                $('.tooltip').hide();
                x = $(this).parent().index();
                $(this).parent().remove();
                var dot_index;

                for (var i = x-1;i<$('#mobile_quick_list_form .form-group').length;i++) {
                    c = $('#mobile_quick_list_form .form-group').eq(i).find('.item_name').text();
                    dot_index = c.search(' ');
                    c = c.slice(dot_index,);
                    c = topersianNumber((i + 1).toString()) + '.' + c;
                    $('#mobile_quick_list_form .form-group').eq(i).find('.item_name').text(c);
                }

                if ($('#mobile_quick_list_form .form-group').length === 0) {
                    $('#mobile_quick_list_form').hide();
                    $('#mobile_quick_list_empty').show();
                }

            });
        }

        codes = codes.concat(datas_code);
        names = names.concat(datas_name);
        datas_code = [];
        datas_name = [];

        $('#mobile_quick_list_select').fadeOut();
        $('#mobile_quick_list_show').delay(300).fadeIn();
        $(this).css('outline', 'none');
    });

    $('#btn_minimize').click(function () {
        for (var i=0;i<$('.mobile_quick_list_dropdown_menu_last').length;i++) {
            $('.mobile_quick_list_dropdown_menu_last').eq(i).slideUp();
        }
        for (var i=0;i<$('.mobile_quick_list_dropdown_menu_third').length;i++) {
            $('.mobile_quick_list_dropdown_menu_third').slideUp();
        }
        for (var i=0;i<$('.mobile_quick_list_dropdown_menu_second').length;i++) {
            $('.mobile_quick_list_dropdown_menu_second').slideUp();
        }
        for (var i=0;i<$('.menu_floor_down_sign').length;i++) {
            $('.menu_floor_up_sign').eq(i).hide();
            $('.menu_floor_down_sign').eq(i).show();
        }
        $(this).css('outline', 'none');
    });

    var item_val = '';
    $('#btn_cancel').click(function () {
        for (var j=0;j<$('#mobile_quick_list_form .form-group').length;j++) {
            item_val = $('#mobile_quick_list_form .form-group').eq(j).find('.item_code').val();
            if (!codes.includes(item_val)) {
                codes.push(item_val);
                names.push(data_codes[item_val]);
            }
        }

        for (var j=0;j<datas_code.length;j++) {
            for (var k=0;k<$('.mobile_quick_list_dropdown_menu_last>div').length;k++) {
                if ($('.mobile_quick_list_dropdown_menu_last>div').eq(k).attr('class') === datas_code[j]) {
                    $('.mobile_quick_list_dropdown_menu_last>div').eq(k).css({'background-color': '#80d8ff','color': '#221122'});
                }
            }
        }
        datas_code = [];
        datas_name = [];

        $('#mobile_quick_list_select').fadeOut();
        $('#mobile_quick_list_show').delay(300).fadeIn();
        $(this).css('outline', 'none');
    });

    $('#list_name').keydown(function (e) {
        if ($(this).val().length > 49 && e.keyCode !== 8) {
            e.preventDefault();
        }
    })

    $('#list_explain').keydown(function (e) {
        if ($(this).val().length > 149 && e.keyCode !== 8) {
            e.preventDefault();
        }
    })

    // $('#title_box').click(function () {
    //     alert($('#date_test').val())
    // })
});

function socialWindow(url) {
    var left = (screen.width - 570) / 2;
    var top = (screen.height - 570) / 2;
    var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
    window.open(url,"NewWindow",params);
}

function topersianNumber(strNum) {
    var pn = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    var en = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var cache = strNum;
    for (var i = 0; i < 10; i++) {
        var regex_fa = new RegExp(en[i], 'g');
        cache = cache.replace(regex_fa, pn[i]);
    }
    return cache;
}
