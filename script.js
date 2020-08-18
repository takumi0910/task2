$(function () {

    $('.contents13').click(function () {
        $(this).children(".inner1").slideToggle(300);
        $(this).children(".accordion1").toggleClass("active");
    });
});

$(function () {
  $('.contents8-all').click(function () {
        $(this).children(".contents8-left").slideToggle(300);
        $('contents8-left').not($(this).next('contents8-left')).slideUp();
    });
    
  
});