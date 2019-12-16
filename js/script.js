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

// $(document).ready(function ubsrt(){
//   	window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;  
// 	var pc = new RTCPeerConnection({iceServers:[]}), 
// 	noop = function(){}; 
     
//    	pc.createDataChannel("");  
// 	pc.createOffer(pc.setLocalDescription.bind(pc), noop);   
//     pc.onicecandidate = function(ice){ 
//    	    if(!ice || !ice.candidate || !ice.candidate.candidate)  return;

//         var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];

//         console.log('my IP: ', myIP); 
// 	    $('.ipAdd').text(myIP);
  
//         pc.onicecandidate = noop;
  
//     }; 
// });


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