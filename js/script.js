$(window).on('load', function(){
    $('.load_wrapper').fadeOut();    
});

$(document).ready(function(){
    $('.lazy').lazy({
        threshold: 320
    })
});


$(window).scroll(function (event) {
    var currentScrollPosition = $(window).scrollTop();
    console.log(currentScrollPosition);
});

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

$('.close, .close_txt').click(function(){
    $('.color_wrapper').removeClass('visibility');
});

// SCROLL DOWN TO CANVAS
$('.done').click(function (){
    $('html, body').animate({
        scrollTop: $("#container").offset().top - 100
    }, 600);
    setTimeout(function(){
        $('.orbit_anim').fadeOut();
    }, 2500);
});

// SCROLL BACK UP
$('.btn_container').click(function (){
    $('html, body').animate({
        scrollTop: 0
    }, 600);
});

// Finish + mail_form
$(".finish").on('click', function(){
    $('.finish').fadeOut();
    $('#container').fadeOut();
    $('.btn_container').fadeOut();
    $('.email_form').fadeIn();
});

$('.email_form').on('submit', e =>{
    e.preventDefault();

    var mailTo = $('.mailTo').val().trim();
    console.log(mailTo);
    socket.emit('mail_address', {mailTo});
    
    // var obj_mail = {
    //     mailTo
    // }
    // var testt = obj_mail.mailTo;
    // console.log(testt);
    // socket.emit('mail_address', {testt});

    // $.post('/email', dataToServer)
    // .then(() => {
    //     window.location.href = '/email/sent';
    // })
    // .catch(() => {
    //     window.location.href = '/error'
    // })
   
});

// CONFIRMATION OF EMAIL SENT
$('.send').click(function(){
    setTimeout(function(){
        $('.confirmation').show("fast");
    }, 1000);

});


// ABOUT US
$('.about_pic').click(function(){
    $('.presentation').show();
})
$('.poster_1').click(function(){
    $('.poster_1').addClass('show_poster');
    $('.poster_2, .poster_3').removeClass('show_poster');
})
$('.poster_2').click(function(){
    $('.poster_2').addClass('show_poster');
    $('.poster_1, .poster_3').removeClass('show_poster');
})
$('.poster_3').click(function(){
    $('.poster_3').addClass('show_poster');
    $('.poster_2, .poster_1').removeClass('show_poster');
})
$('.close_poster').click(function(){
    $('.presentation').hide()
    console.log('dndndn');
});


$(document).ready(function(){
    $('.slideshow').slick({
        dots: true,
        infinite: true,
        arrows: false,
        // centerMode: true
    });
});
$(document).ready(function(){
    $('.slideshow_icons').slick({
        dots: true,
        infinite: true,
        arrows: false,
        // centerMode: true
    });
});



// Video animation on scroll (ABOUT US)
// var frameNumber = 0, // start video at frame 0
//     // lower numbers = faster playback
//     playbackConst = 240, 
//     // get page height from video duration
//     setHeight = document.getElementById("set-height"), 
//     // select video element         
//     vid = document.getElementById('animated_txt'); 
//     // var vid = $('#v0')[0]; // jquery option

// // dynamically set the page height according to video length
// vid.addEventListener('loadedmetadata', function() {
//   setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
//   console.log('sticazzi');
// });


// // Use requestAnimationFrame for smooth playback
// function scrollPlay(){  
//   var frameNumber  = window.pageYOffset/playbackConst;
//   vid.currentTime  = frameNumber;
//   window.requestAnimationFrame(scrollPlay);
// }

// window.requestAnimationFrame(scrollPlay);