$(function () {

    $('.contents13').click(function () {
        $(this).children(".inner1").slideToggle(300);
        $(this).children(".accordion1").toggleClass("active");
    });
});

$(function () {
    $('.contents8-right').click(function () {
        $(this).next().slideToggle(300);
        $(".contents8-right").not(this).next().slideUp(300);
        $(".contents8-right").not(this).removeClass("act");
        $(this).toggleClass("act");
    });


});