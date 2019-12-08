// Nodemailer
var nodemailer = require('nodemailer');

// Transporter
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'trigger.superfluo@gmail.com',
        pass: 'piamose18'
    }
});

// Mail options
var mailOptions = {
    from: 'trigger@gmail.com',
    to: 'gurki4.mm@gmail.com',
    subject: 'test',
    text: 'AAA',
    attachments: [{
        filename: 'gianbibi.jpg', path: 'savedPNG/gianbibi.jpg'}
    ]
};

//Send Mail
transporter.sendMail(mailOptions, function(err, data){
    if (err){
        console.log('fuck no');
    }
    else{
        console.log('yes daje');
    }
    
});




// Socket.io projector
var express = require('express');

var app = express();
var server = app.listen(3000);
app.use(express.static('public'));


var socket = require('socket.io');
var io = socket(server);
io.sockets.on('connection', newConnection);

function newConnection(socket){
    console.log('ciao: ' + socket.id);

    // Calcio 1
    socket.on('co_1', co_1);
    function co_1(data){
        console.log('oopop');
        io.sockets.emit('r_co_1');
        // socket.broadcast.emit('return-msg', data);
    }
    // Calcio 2
    socket.on('co_2', co_2);
    function co_2(data){
        io.sockets.emit('r_co_2');
        // socket.broadcast.emit('return-msg', data);
    }
};