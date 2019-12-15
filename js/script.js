$('.calcio').on("click", function(){
    $('.c_w_co').addClass('visibility');
    noScroll();
});

$('.canna').on("click", function(){
    $('.c_w_ca').addClass('visibility');
    noScroll();
});

$('.grilletto').on("click", function(){
    $('.c_w_gr').addClass('visibility');
    noScroll();
});

$('.dettagli').on("click", function(){
    $('.c_w_de').addClass('visibility');
    noScroll();
});


function noScroll() {
  $(document.body).addClass('noScroll')
}


$(".close, .close_txt").on('click', function(){
    $('.color_wrapper').removeClass('visibility');
    $(document.body).removeClass('noScroll');
});


    // SCROLL DOWN TO CANVAS
$('.done').click(function (){
    $('html, body').animate({
        scrollTop: $("#container").offset().top - 100
    }, 600);
});