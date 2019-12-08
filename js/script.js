$(document).ready(function() { 
    $('.dettagli').addClass('selected');
 });
$('.calcio').on("click", function(){
    $("#colors_co, #textures_co").addClass('top'); // aggiugnere class TOP
    $(this).addClass('selected');
    
    $("#colors_ca, #colors_gr, #colors_de, #textures_ca, #textures_gr, #textures_de").removeClass('top');
    $(".canna, .grilletto, .dettagli").removeClass('selected');
});

$('.canna').on("click", function(){
    $("#colors_ca, #textures_co").addClass('top');  // aggiugnere class TOP
    $(this).addClass('selected');

    $("#colors_co, #colors_gr, #colors_de, #textures_co, #textures_gr, #textures_de").removeClass('top');
    $(".calcio, .grilletto, .dettagli").removeClass('selected');
});

$('.grilletto').on("click", function(){
    $("#colors_gr, #textures_gr").addClass('top'); // aggiugnere class TOP
    $(this).addClass('selected');
    
    $("#colors_ca, #colors_co, #colors_de, #textures_ca, #textures_co, #textures_de").removeClass('top');
    $(".canna, .calcio, .dettagli").removeClass('selected');
});

$('.dettagli').on("click", function(){
    $("#colors_de, #textures_de").addClass('top'); // aggiugnere class TOP
    $(this).addClass('selected');

    $("#colors_ca, #colors_gr, #colors_co, #textures_ca, #textures_gr, #textures_co").removeClass('top');
    $(".canna, .grilletto, .calcio").removeClass('selected');
});



$(".palette").on('click', function(){
    $('.color_wrapper').toggleClass('visibility');
    $('.navbar, #container, .components').toggleClass('blur');
});
$(".close").on('click', function(){
    $('.color_wrapper').toggleClass('visibility');
    $('.navbar, #container, .components').toggleClass('blur');
});

// const div1 = document.getElementsByClassName('palette');
// const align = div1.getAttribute('align');
// alert(align)


