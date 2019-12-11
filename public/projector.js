var socket;
socket = io.connect('http://localhost:3000');

var mail_trigger = document.getElementsByClassName('email')[0]; // send email via form
var message = document.getElementsByClassName('done')[0]; // non mi ricordo a cosa serva

// VAR for sockets CALCIO
var v_co_1 = document.getElementsByClassName('magenta')[0];
var v_co_2 = document.getElementsByClassName('calx')[0];
var v_co_3 = document.getElementsByClassName('lime')[0];
var v_co_4 = document.getElementsByClassName('extramarine')[0];
var v_co_5 = document.getElementsByClassName('obsidian')[0];
var v_co_6 = document.getElementsByClassName('white')[0];
var v_co_7 = document.getElementsByClassName('orange')[0];
var v_co_8 = document.getElementsByClassName('fuck')[0];

// send email via form
mail_trigger.addEventListener('click', function(){
    socket.emit('mail_sender', {
    });
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


// LISTENER FOR EVENTS
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