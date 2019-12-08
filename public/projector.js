var socket;
socket = io.connect('http://localhost:3000');

var trigger = document.getElementsByClassName('email')[0];
var message = document.getElementsByClassName('done')[0];

trigger.addEventListener('click', function(){
    socket.emit('co_1', {
    });
});
message.addEventListener('click', function(){
    socket.emit('co_2', {
    });
});


// LISTENER FOR EVENTS
//Calcio 1
socket.on('r_co_1', co_1);
function co_1(data){
    console.log('calcio 1');
    $('.calx_co').addClass('projected');
    $('#calcio').children('div').not('.calx_co').removeClass('projected'); // remove Class from other parts
};

//Calcio 2
socket.on('r_co_2', co_2);
function co_2(data){
    console.log('calcio 2');
    $('.magenta_co').addClass('projected');
    $('#calcio').children('div').not('.magenta_co').removeClass('projected'); // remove Class from other parts
};


