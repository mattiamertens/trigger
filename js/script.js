$('.calcio').on("click", function(){
    $('.c_w_co').addClass('visibility');
});

$('.canna').on("click", function(){
    $('.c_w_ca').addClass('visibility');
});

$('.grilletto').on("click", function(){
    $('.c_w_gr').addClass('visibility');
});

$('.dettagli').on("click", function(){
    $('.c_w_de').addClass('visibility');
});


// PALETTE SHOW / HIDE
$(".palette").on('click', function(){
    $('.color_wrapper').addClass('visibility');

    $('.navbar, #container, .components').addClass('blur');
});

$(".close").on('click', function(){
    $('.color_wrapper').removeClass('visibility');
    $('.navbar, #container, .components').removeClass('blur');
});

$('.done').click(function (){
    $('html, body').animate({
        scrollTop: $("#container").offset().top - 100
    }, 600);
});