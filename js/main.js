$('.reviews').slick({
    dots: true,
    arrows: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<span class="reviews-nav prev">',
    nextArrow: '<span class="reviews-nav next">'

});

$('.topnav li a').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset:-120 });
    return false;
});



// Radiobuttons
$("input[type='radio']").ionCheckRadio();


//  Modal

$(".btn-modal").fancybox({
    'padding'    : 0,
    'tpl'        : {
        closeBtn : '<a title="Close" class="btn_close" href="javascript:;"></a>'
    }
});


// Map

ymaps.ready(init);

var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [48.6907,44.4860],
        zoom: 17,
        controls: ['smallMapDefaultSet']
    });

    myPlacemark = new ymaps.Placemark([48.6907,44.4860], {
        hintContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.png',
        iconImageSize: [47, 69],
        iconImageOffset: [-23, -70]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('multiTouch');
    myMap.geoObjects.add(myPlacemark);
}

// Calculation

$('.iphone-choice-form input[type="radio"]').change(function(e) {

    var irotate = parseInt($('input:radio[name=rotate]:checked').val());
    var icolor = $('input:radio[name=color]:checked').val();
    var iphoto = $('.iphone-image');
    var iprice = ($('input:radio[name=memory]:checked').val());
    var ivalue;

    console.log(irotate);
    console.log(icolor);
    console.log(iprice);

    switch (iprice) {
        case '16Gb':
            ivalue = '24 990';
            break;
        case '32Gb':
            ivalue = '27 990';
            break;
        case '64Gb':
            ivalue = '29 990';
            break;
    }

    switch (irotate) {
        case 1:

            switch (icolor) {
                case 'gray':
                    iphoto.css('background-position','0 0');
                    break;
                case 'white':
                    iphoto.css('background-position','-460px 0');
                    break;
                case 'gold':
                    iphoto.css('background-position','-920px 0');
                    break;
            }
            break;

        case 2:

            switch (icolor) {
                case 'gray':
                    iphoto.css('background-position','0 -920px');
                    break;
                case 'white':
                    iphoto.css('background-position','-460px -920px');
                    break;
                case 'gold':
                    iphoto.css('background-position','-920px -920px');
                    break;
            }
            break;

        case 3:

            switch (icolor) {
                case 'gray':
                    iphoto.css('background-position','0 -1380px');
                    break;
                case 'white':
                    iphoto.css('background-position','-460px -1380px');
                    break;
                case 'gold':
                    iphoto.css('background-position','-920px -1380px');
                    break;
            }
            break;
        case 4:

            switch (icolor) {
                case 'gray':
                    iphoto.css('background-position','0 -460px');
                    break;
                case 'white':
                    iphoto.css('background-position','-460px -460px');
                    break;
                case 'gold':
                    iphoto.css('background-position','-920px -460px');
                    break;
            }
            break;
    }

    console.log(ivalue);
    $(".price-value").text(ivalue);
});


$(document).ready(function() {

    $('.btn-send').click(function() {

        $('body').find('form:not(this)').children('div').removeClass('red'); //удаление всех сообщение об ошибке(валидатора)
        var answer = checkForm($(this).closest('form').get(0)); //ответ от валидатора
        if(answer != false)
        {
            var $form = $(this).closest('form'),
                type    =     $('input[name="type"]', $form).val(),
                name    =     $('input[name="name"]', $form).val(),
                phone   =     $('input[name="phone"]', $form).val(),
                email   =     $('input[name="email"]', $form).val(),
                color   =     $('input[name="color"]', $form).val(),
                memory  =     $('input[name="memory"]', $form).val(),
                message =     $('textarea[name="message"]', $form).val();
            console.log(name, phone, email, type, color, memory, message);
            $.ajax({
                type: "POST",
                url: "form-handler.php",
                data: {name: name, phone: phone, email:email, type:type, color:color, memory:memory, message:message}
            }).done(function(msg) {
                $('form').find('input[type=text], textarea').val('');
                console.log('удачно');
                document.location.href = "http://zephyrus.ru/project/2016/lp_iphone/done.html";
            });
        }
    });

});