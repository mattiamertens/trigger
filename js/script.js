$('.calcio').on("click", function(){
    $("#colors_co").addClass('top');
    
    $("#colors_ca").removeClass('top');
    $("#colors_gr").removeClass('top');
    $("#colors_de").removeClass('top');
});

$('.canna').on("click", function(){
    $("#colors_ca").addClass('top');

    $("#colors_co").removeClass('top');
    $("#colors_gr").removeClass('top');
    $("#colors_de").removeClass('top');
});

$('.grilletto').on("click", function(){
    $("#colors_gr").addClass('top');

    $("#colors_ca").removeClass('top');
    $("#colors_co").removeClass('top');
    $("#colors_de").removeClass('top');
});

$('.dettagli').on("click", function(){
    $("#colors_de").addClass('top');

    $("#colors_ca").removeClass('top');
    $("#colors_gr").removeClass('top');
    $("#colors_co").removeClass('top');
});