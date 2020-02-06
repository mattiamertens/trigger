var socket;
// socket = io.connect('192.168.43.125:3000');
// socket = io.connect('192.168.100.5:3000');
// socket = io.connect('localhost:3000');
socket = io.connect('https://compassionate-pare-644149.netlify.com/public/index.html:3000');

// VAR miscellaneous 
var mail_trigger = document.getElementsByClassName('send')[0]; // send email via form
var message = document.getElementsByClassName('done')[0]; // non mi ricordo a cosa serva
var vid_start = document.getElementsByClassName('finish')[0]; // start video in loop sulla pistola
var vid_end = document.getElementsByClassName('components_wrapper')[0]; // end video in loop sulla pistola

// VAR for sockets
var v_co_1 = document.getElementsByClassName('magenta')[0],
    v_ca_1 = document.getElementsByClassName('magenta')[1],
    v_gr_1 = document.getElementsByClassName('magenta')[2],
    v_de_1 = document.getElementsByClassName('magenta')[3];

var v_co_2 = document.getElementsByClassName('calx')[0],
    v_ca_2 = document.getElementsByClassName('calx')[1],
    v_gr_2 = document.getElementsByClassName('calx')[2],
    v_de_2 = document.getElementsByClassName('calx')[3];

var v_co_3 = document.getElementsByClassName('lime')[0],
    v_ca_3 = document.getElementsByClassName('lime')[1],
    v_gr_3 = document.getElementsByClassName('lime')[2],
    v_de_3 = document.getElementsByClassName('lime')[3];

var v_co_4 = document.getElementsByClassName('extramarine')[0],
    v_ca_4 = document.getElementsByClassName('extramarine')[1],
    v_gr_4 = document.getElementsByClassName('extramarine')[2],
    v_de_4 = document.getElementsByClassName('extramarine')[3];

var v_co_5 = document.getElementsByClassName('obsidian')[0],
    v_ca_5 = document.getElementsByClassName('obsidian')[1],
    v_gr_5 = document.getElementsByClassName('obsidian')[2],
    v_de_5 = document.getElementsByClassName('obsidian')[3];

var v_co_6 = document.getElementsByClassName('white')[0],
    v_ca_6 = document.getElementsByClassName('white')[1],
    v_gr_6 = document.getElementsByClassName('white')[2],
    v_de_6 = document.getElementsByClassName('white')[3];

var v_co_7 = document.getElementsByClassName('orange')[0],
    v_ca_7 = document.getElementsByClassName('orange')[1],
    v_gr_7 = document.getElementsByClassName('orange')[2],
    v_de_7 = document.getElementsByClassName('orange')[3];

var v_co_8 = document.getElementsByClassName('fuck')[0],
    v_ca_8 = document.getElementsByClassName('fuck')[1],
    v_gr_8 = document.getElementsByClassName('fuck')[2],
    v_de_8 = document.getElementsByClassName('fuck')[3];

// Texture VAR
var v_tco_1 = document.getElementsByClassName('t_1')[0],
    v_tca_1 = document.getElementsByClassName('t_1')[1];

var v_tco_2 = document.getElementsByClassName('t_2')[0],
    v_tca_2 = document.getElementsByClassName('t_2')[1];

var v_tco_3 = document.getElementsByClassName('t_3')[0],
    v_tca_3 = document.getElementsByClassName('t_3')[1];

var v_tco_4 = document.getElementsByClassName('t_4')[0],
    v_tca_4 = document.getElementsByClassName('t_4')[1];

var v_tco_5 = document.getElementsByClassName('t_5')[0],
    v_tca_5 = document.getElementsByClassName('t_5')[1];

var v_tco_6 = document.getElementsByClassName('t_6')[0],
    v_tca_6 = document.getElementsByClassName('t_6')[1];

var v_tco_7 = document.getElementsByClassName('t_7')[0],
    v_tca_7 = document.getElementsByClassName('t_7')[1];

var v_tco_8 = document.getElementsByClassName('t_8')[0],
    v_tca_8 = document.getElementsByClassName('t_8')[1];


// send email via form
mail_trigger.addEventListener('click', function(){
    socket.emit('mail_sender', {});
});

// Start & stop video on gun
vid_start.addEventListener('click', function(){
    socket.emit('video_start', {
    });
    console.log('video start');
})
vid_end.addEventListener('click', function(){
    socket.emit('video_end', {
    });
    console.log('video end');
});

// Socket for calcio
v_co_1.addEventListener('click', function(){
    socket.emit('co_1', {
    });
});
v_co_2.addEventListener('click', function(){
    socket.emit('co_2', {
    });
});
v_co_3.addEventListener('click', function(){
    socket.emit('co_3', {
    });
});
v_co_4.addEventListener('click', function(){
    socket.emit('co_4', {
    });
});
v_co_5.addEventListener('click', function(){
    socket.emit('co_5', {
    });
});
v_co_6.addEventListener('click', function(){
    socket.emit('co_6', {
    });
});
v_co_7.addEventListener('click', function(){
    socket.emit('co_7', {
    });
});
v_co_8.addEventListener('click', function(){
    socket.emit('co_8', {
    });
});
v_tco_1.addEventListener('click', function(){
    socket.emit('tco_1', {
    });
});
v_tco_2.addEventListener('click', function(){
    socket.emit('tco_2', {
    });
});
v_tco_3.addEventListener('click', function(){
    socket.emit('tco_3', {
    });
});
v_tco_4.addEventListener('click', function(){
    socket.emit('tco_4', {
    });
});
v_tco_5.addEventListener('click', function(){
    socket.emit('tco_5', {
    });
});
v_tco_6.addEventListener('click', function(){
    socket.emit('tco_6', {
    });
});
v_tco_7.addEventListener('click', function(){
    socket.emit('tco_7', {
    });
});
v_tco_8.addEventListener('click', function(){
    socket.emit('tco_8', {
    });
});

// Socket for canna
v_ca_1.addEventListener('click', function(){
    socket.emit('ca_1', {
    });
});
v_ca_2.addEventListener('click', function(){
    socket.emit('ca_2', {
    });
});
v_ca_3.addEventListener('click', function(){
    socket.emit('ca_3', {
    });
});
v_ca_4.addEventListener('click', function(){
    socket.emit('ca_4', {
    });
});
v_ca_5.addEventListener('click', function(){
    socket.emit('ca_5', {
    });
});
v_ca_6.addEventListener('click', function(){
    socket.emit('ca_6', {
    });
});
v_ca_7.addEventListener('click', function(){
    socket.emit('ca_7', {
    });
});
v_ca_8.addEventListener('click', function(){
    socket.emit('ca_8', {
    });
});
v_tca_1.addEventListener('click', function(){
    socket.emit('tca_1', {
    });
});
v_tca_2.addEventListener('click', function(){
    socket.emit('tca_2', {
    });
});
v_tca_3.addEventListener('click', function(){
    socket.emit('tca_3', {
    });
});
v_tca_4.addEventListener('click', function(){
    socket.emit('tca_4', {
    });
});
v_tca_5.addEventListener('click', function(){
    socket.emit('tca_5', {
    });
});
v_tca_6.addEventListener('click', function(){
    socket.emit('tca_6', {
    });
});
v_tca_7.addEventListener('click', function(){
    socket.emit('tca_7', {
    });
});
v_tca_8.addEventListener('click', function(){
    socket.emit('tca_8', {
    });
});


// Socket for grilletto
v_gr_1.addEventListener('click', function(){
    socket.emit('gr_1', {
    });
});
v_gr_2.addEventListener('click', function(){
    socket.emit('gr_2', {
    });
});
v_gr_3.addEventListener('click', function(){
    socket.emit('gr_3', {
    });
});
v_gr_4.addEventListener('click', function(){
    socket.emit('gr_4', {
    });
});
v_gr_5.addEventListener('click', function(){
    socket.emit('gr_5', {
    });
});
v_gr_6.addEventListener('click', function(){
    socket.emit('gr_6', {
    });
});
v_gr_7.addEventListener('click', function(){
    socket.emit('gr_7', {
    });
});
v_gr_8.addEventListener('click', function(){
    socket.emit('gr_8', {
    });
});

// Socket for dettagli
v_de_1.addEventListener('click', function(){
    socket.emit('de_1', {
    });
});
v_de_2.addEventListener('click', function(){
    socket.emit('de_2', {
    });
});
v_de_3.addEventListener('click', function(){
    socket.emit('de_3', {
    });
});
v_de_4.addEventListener('click', function(){
    socket.emit('de_4', {
    });
});
v_de_5.addEventListener('click', function(){
    socket.emit('de_5', {
    });
});
v_de_6.addEventListener('click', function(){
    socket.emit('de_6', {
    });
});
v_de_7.addEventListener('click', function(){
    socket.emit('de_7', {
    });
});
v_de_8.addEventListener('click', function(){
    socket.emit('de_8', {
    });
});


// LISTENER FOR EVENTS

// Start & stop video on gun
socket.on('r_vid_start', start_video);
function start_video(data) {
    $('.video_loop').show('fast');
    $('#calcio, #canna, #grilletto, #dettagli').children('div').removeClass('projected'); // remove all the colors and show video
};

socket.on('r_vid_end', end_video);
function end_video(data){
    $('.video_loop').hide("fast");
};

//Calcio 1
socket.on('r_co_1', co_1);
function co_1(data){
    console.log('calcio 1');
    $('.magenta_co').addClass('projected');
    $('#calcio').children('div').not('.magenta_co').removeClass('projected'); // remove Class from other parts
};

//Calcio 2
socket.on('r_co_2', co_2);
function co_2(data){
    console.log('calcio 2');
    $('.calx_co').addClass('projected');
    $('#calcio').children('div').not('.calx_co').removeClass('projected'); // remove Class from other parts
};

//Calcio 3
socket.on('r_co_3', co_3);
function co_3(data){
    console.log('calcio 3');
    $('.lime_co').addClass('projected');
    $('#calcio').children('div').not('.lime_co').removeClass('projected'); // remove Class from other parts
};

//Calcio 4
socket.on('r_co_4', co_4);
function co_4(data){
    console.log('calcio 4');
    $('.extramarine_co').addClass('projected');
    $('#calcio').children('div').not('.extramarine_co').removeClass('projected'); // remove Class from other parts
};

//Calcio 5
socket.on('r_co_5', co_5);
function co_5(data){
    console.log('calcio 5');
    $('.obsidian_co').addClass('projected');
    $('#calcio').children('div').not('.obsidian_co').removeClass('projected'); // remove Class from other parts
};

//Calcio 6
socket.on('r_co_6', co_6);
function co_6(data){
    console.log('calcio 6');
    $('.white_co').addClass('projected');
    $('#calcio').children('div').not('.white_co').removeClass('projected'); // remove Class from other parts
};

//Calcio 7
socket.on('r_co_7', co_7);
function co_7(data){
    console.log('calcio 7');
    $('.orange_co').addClass('projected');
    $('#calcio').children('div').not('.orange_co').removeClass('projected'); // remove Class from other parts
};

//Calcio 8
socket.on('r_co_8', co_8);
function co_8(data){
    console.log('calcio 8');
    $('.fuck_co').addClass('projected');
    $('#calcio').children('div').not('.fuck_co').removeClass('projected'); // remove Class from other parts
};

//Calcio T 1
socket.on('r_tco_1', tco_1);
function tco_1(data){
    console.log('calcio T 1');
    $('.t_1_co').addClass('projected');
    $('#calcio').children('div').not('.t_1_co').removeClass('projected'); // remove Class from other parts
};

//Calcio T 2
socket.on('r_tco_2', tco_2);
function tco_2(data){
    console.log('calcio T 2');
    $('.t_2_co').addClass('projected');
    $('#calcio').children('div').not('.t_2_co').removeClass('projected'); // remove Class from other parts
};

//Calcio T 3
socket.on('r_tco_3', tco_3);
function tco_3(data){
    console.log('calcio T 3');
    $('.t_3_co').addClass('projected');
    $('#calcio').children('div').not('.t_3_co').removeClass('projected'); // remove Class from other parts
};

//Calcio T 4
socket.on('r_tco_4', tco_4);
function tco_4(data){
    console.log('calcio T 4');
    $('.t_4_co').addClass('projected');
    $('#calcio').children('div').not('.t_4_co').removeClass('projected'); // remove Class from other parts
};

//Calcio T 5
socket.on('r_tco_5', tco_5);
function tco_5(data){
    console.log('calcio T 5');
    $('.t_5_co').addClass('projected');
    $('#calcio').children('div').not('.t_5_co').removeClass('projected'); // remove Class from other parts
};

//Calcio T 6
socket.on('r_tco_6', tco_6);
function tco_6(data){
    console.log('calcio T 6');
    $('.t_6_co').addClass('projected');
    $('#calcio').children('div').not('.t_6_co').removeClass('projected'); // remove Class from other parts
};

//Calcio T 7
socket.on('r_tco_7', tco_7);
function tco_7(data){
    console.log('calcio T 7');
    $('.t_7_co').addClass('projected');
    $('#calcio').children('div').not('.t_7_co').removeClass('projected'); // remove Class from other parts
};

//Calcio T 8
socket.on('r_tco_8', tco_8);
function tco_8(data){
    console.log('calcio T 8');
    $('.t_8_co').addClass('projected');
    $('#calcio').children('div').not('.t_8_co').removeClass('projected'); // remove Class from other parts
};


//Canna 1
socket.on('r_ca_1', ca_1);
function ca_1(data){
    console.log('canna 1');
    $('.magenta_ca').addClass('projected');
    $('#canna').children('div').not('.magenta_ca').removeClass('projected'); // remove Class from other parts
};
//Canna 2
socket.on('r_ca_2', ca_2);
function ca_2(data){
    console.log('canna 2');
    $('.calx_ca').addClass('projected');
    $('#canna').children('div').not('.calx_ca').removeClass('projected'); // remove Class from other parts
};
//Canna 3
socket.on('r_ca_3', ca_3);
function ca_3(data){
    console.log('canna 3');
    $('.lime_ca').addClass('projected');
    $('#canna').children('div').not('.lime_ca').removeClass('projected'); // remove Class from other parts
};

//Canna 4
socket.on('r_ca_4', ca_4);
function ca_4(data){
    console.log('canna 4');
    $('.extramarine_ca').addClass('projected');
    $('#canna').children('div').not('.extramarine_ca').removeClass('projected'); // remove Class from other parts
};

//Canna 5
socket.on('r_ca_5', ca_5);
function ca_5(data){
    console.log('canna 5');
    $('.obsidian_ca').addClass('projected');
    $('#canna').children('div').not('.obsidian_ca').removeClass('projected'); // remove Class from other parts
};

//Canna 6
socket.on('r_ca_6', ca_6);
function ca_6(data){
    console.log('canna 6');
    $('.white_ca').addClass('projected');
    $('#canna').children('div').not('.white_ca').removeClass('projected'); // remove Class from other parts
};

//Canna 7
socket.on('r_ca_7', ca_7);
function ca_7(data){
    console.log('canna 7');
    $('.orange_ca').addClass('projected');
    $('#canna').children('div').not('.orange_ca').removeClass('projected'); // remove Class from other parts
};

//Canna 8
socket.on('r_ca_8', ca_8);
function ca_8(data){
    console.log('canna 8');
    $('.fuck_ca').addClass('projected');
    $('#canna').children('div').not('.fuck_ca').removeClass('projected'); // remove Class from other parts
};

//Canna T 1
socket.on('r_tca_1', tca_1);
function tca_1(data){
    console.log('canna T 1');
    $('.t_1_ca').addClass('projected');
    $('#canna').children('div').not('.t_1_ca').removeClass('projected'); // remove Class from other parts
};

//Canna T 2
socket.on('r_tca_2', tca_2);
function tca_2(data){
    console.log('canna T 2');
    $('.t_2_ca').addClass('projected');
    $('#canna').children('div').not('.t_2_ca').removeClass('projected'); // remove Class from other parts
};

//Canna T 3
socket.on('r_tca_3', tca_3);
function tca_3(data){
    console.log('canna T 3');
    $('.t_3_ca').addClass('projected');
    $('#canna').children('div').not('.t_3_ca').removeClass('projected'); // remove Class from other parts
};

//Canna T 4
socket.on('r_tca_4', tca_4);
function tca_4(data){
    console.log('canna T 4');
    $('.t_4_ca').addClass('projected');
    $('#canna').children('div').not('.t_4_ca').removeClass('projected'); // remove Class from other parts
};

//Canna T 5
socket.on('r_tca_5', tca_5);
function tca_5(data){
    console.log('canna T 5');
    $('.t_5_ca').addClass('projected');
    $('#canna').children('div').not('.t_5_ca').removeClass('projected'); // remove Class from other parts
};

//Canna T 6
socket.on('r_tca_6', tca_6);
function tca_6(data){
    console.log('canna T 6');
    $('.t_6_ca').addClass('projected');
    $('#canna').children('div').not('.t_6_ca').removeClass('projected'); // remove Class from other parts
};

//Canna T 7
socket.on('r_tca_7', tca_7);
function tca_7(data){
    console.log('canna T 7');
    $('.t_7_ca').addClass('projected');
    $('#canna').children('div').not('.t_7_ca').removeClass('projected'); // remove Class from other parts
};

//Canna T 8
socket.on('r_tca_8', tca_8);
function tca_8(data){
    console.log('canna T 8');
    $('.t_8_ca').addClass('projected');
    $('#canna').children('div').not('.t_8_ca').removeClass('projected'); // remove Class from other parts
};



//grilletto 1
socket.on('r_gr_1', gr_1);
function gr_1(data){
    console.log('grilletto 1');
    $('.magenta_gr').addClass('projected');
    $('#grilletto').children('div').not('.magenta_gr').removeClass('projected'); // remove Class from other parts
};
//grilletto 2
socket.on('r_gr_2', gr_2);
function gr_2(data){
    console.log('grilletto 2');
    $('.calx_gr').addClass('projected');
    $('#grilletto').children('div').not('.calx_gr').removeClass('projected'); // remove Class from other parts
};
//grilletto 3
socket.on('r_gr_3', gr_3);
function gr_3(data){
    console.log('grilletto 3');
    $('.lime_gr').addClass('projected');
    $('#grilletto').children('div').not('.lime_gr').removeClass('projected'); // remove Class from other parts
};

//grilletto 4
socket.on('r_gr_4', gr_4);
function gr_4(data){
    console.log('grilletto 4');
    $('.extramarine_gr').addClass('projected');
    $('#grilletto').children('div').not('.extramarine_gr').removeClass('projected'); // remove Class from other parts
};

//grilletto 5
socket.on('r_gr_5', gr_5);
function gr_5(data){
    console.log('grilletto 5');
    $('.obsidian_gr').addClass('projected');
    $('#grilletto').children('div').not('.obsidian_gr').removeClass('projected'); // remove Class from other parts
};

//grilletto 6
socket.on('r_gr_6', gr_6);
function gr_6(data){
    console.log('grilletto 6');
    $('.white_gr').addClass('projected');
    $('#grilletto').children('div').not('.white_gr').removeClass('projected'); // remove Class from other parts
};

//grilletto 7
socket.on('r_gr_7', gr_7);
function gr_7(data){
    console.log('grilletto 7');
    $('.orange_gr').addClass('projected');
    $('#grilletto').children('div').not('.orange_gr').removeClass('projected'); // remove Class from other parts
};

//grilletto 8
socket.on('r_gr_8', gr_8);
function gr_8(data){
    console.log('grilletto 8');
    $('.fuck_gr').addClass('projected');
    $('#grilletto').children('div').not('.fuck_gr').removeClass('projected'); // remove Class from other parts
};



//dettagli 1
socket.on('r_de_1', de_1);
function de_1(data){
    console.log('dettagli 1');
    $('.magenta_de').addClass('projected');
    $('#dettagli').children('div').not('.magenta_de').removeClass('projected'); // remove Class from other parts
};
//dettagli 2
socket.on('r_de_2', de_2);
function de_2(data){
    console.log('dettagli 2');
    $('.calx_de').addClass('projected');
    $('#dettagli').children('div').not('.calx_de').removeClass('projected'); // remove Class from other parts
};
//dettagli 3
socket.on('r_de_3', de_3);
function de_3(data){
    console.log('dettagli 3');
    $('.lime_de').addClass('projected');
    $('#dettagli').children('div').not('.lime_de').removeClass('projected'); // remove Class from other parts
};

//dettagli 4
socket.on('r_de_4', de_4);
function de_4(data){
    console.log('dettagli 4');
    $('.extramarine_de').addClass('projected');
    $('#dettagli').children('div').not('.extramarine_de').removeClass('projected'); // remove Class from other parts
};

//dettagli 5
socket.on('r_de_5', de_5);
function de_5(data){
    console.log('dettagli 5');
    $('.obsidian_de').addClass('projected');
    $('#dettagli').children('div').not('.obsidian_de').removeClass('projected'); // remove Class from other parts
};

//dettagli 6
socket.on('r_de_6', de_6);
function de_6(data){
    console.log('dettagli 6');
    $('.white_de').addClass('projected');
    $('#dettagli').children('div').not('.white_de').removeClass('projected'); // remove Class from other parts
};

//dettagli 7
socket.on('r_de_7', de_7);
function de_7(data){
    console.log('dettagli 7');
    $('.orange_de').addClass('projected');
    $('#dettagli').children('div').not('.orange_de').removeClass('projected'); // remove Class from other parts
};

//dettagli 8
socket.on('r_de_8', de_8);
function de_8(data){
    console.log('dettagli 8');
    $('.fuck_de').addClass('projected');
    $('#dettagli').children('div').not('.fuck_de').removeClass('projected'); // remove Class from other parts
};