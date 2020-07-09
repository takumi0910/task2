$(function () {

    $('.contents13').click(function () {
        $(this).children(".inner1").slideToggle(300);
        $(this).children(".accordion1").toggleClass("active");
        $(this).children(".accordion1").toggleClass("border");
    });
    
    $('.contents13').click(function () {
        if ($('accordion13').hasClass('border')) {
            $('.accordion13').css({'text-decoration': 'underline'})
        } else {
            $('.accordion13').css({'text-decoration': 'none'})
        }
    });

});