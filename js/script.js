$('.calcio').on("click", function(){
    $('.c_w_co').addClass('visibility');
    noScroll();
    // inverted();
});

$('.canna').on("click", function(){
    $('.c_w_ca').addClass('visibility');
    noScroll();
    // inverted();
});

$('.grilletto').on("click", function(){
    $('.c_w_gr').addClass('visibility');
    noScroll();
    // inverted();
});

$('.dettagli').on("click", function(){
    $('.c_w_de').addClass('visibility');
    noScroll();
    // inverted();
});


function noScroll() {
  $(document.body).addClass('noScroll');
}

// Show - hide inverted components img
function inverted(){
    setTimeout(function(){
        $('.inverted_components').addClass('inverted_vis');
    }, 600);
}
function rem_inverted(){
    $('.inverted_components').removeClass('inverted_vis');
}

// Close color palette, invertes img
$(".close, .close_txt").on('click', function(){
    $('.color_wrapper').removeClass('visibility');
    $(document.body).removeClass('noScroll');
    rem_inverted();
});


    // SCROLL DOWN TO CANVAS
$('.done').click(function (){
    $('html, body').animate({
        scrollTop: $("#container").offset().top - 100
    }, 600);
    setTimeout(function(){
        $('.orbit_anim').hide();
    }, 2500);
});


// Video animation on scroll (ABOUT US)
var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 240, 
    // get page height from video duration
    setHeight = document.getElementById("set-height"), 
    // select video element         
    vid = document.getElementById('animated_txt'); 
    // var vid = $('#v0')[0]; // jquery option

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
  console.log('sticazzi');
});


// Use requestAnimationFrame for smooth playback
function scrollPlay(){  
  var frameNumber  = window.pageYOffset/playbackConst;
  vid.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);