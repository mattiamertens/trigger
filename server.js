// var mailTo = document.getElementById('mail');

// Nodemailer
var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');
const handlebarOptions = {
    viewEngine: {
      extName: '.hbs',
      partialsDir: 'public/views/partials',
      layoutsDir: 'public/views/layouts',
      defaultLayout: 'index.hbs',
    },
    viewPath: 'public/views/',
    extName: '.hbs',
};

// Transporter
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'trigger.superfluo@gmail.com',
        pass: 'piamose18'
    }
});

// Handlebars
transporter.use('compile', hbs(handlebarOptions));

// Mail options
var mailOptions = {
    from: 'trigger@gmail.com',
    to: 'gurki4.mm@gmail.com',
    subject: 'test con immagini + click',
    text: 'AAA',
    // attachments: [{
    //     filename: 'gianbibi.jpg', path: 'views/gianbibi.jpg'}
    // ],
    template: 'index'
};

//Send Mail





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

    // Email sender function
    socket.on('mail_sender', mail_sender);
    function mail_sender(data){
        console.log('Mail sent');
        
        transporter.sendMail(mailOptions, function(err, data){
            if (err){
                console.log('fuck no' + err);
            }
            else{
                console.log('yes daje');
            }            
        });
    }

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
    }

    // Calcio 3
    socket.on('co_3', co_3);
    function co_3(data){
        io.sockets.emit('r_co_3');
    }

    // Calcio 4
    socket.on('co_4', co_4);
    function co_4(data){
        io.sockets.emit('r_co_4');
    }
    // Calcio 5
    socket.on('co_5', co_5);
    function co_5(data){
        io.sockets.emit('r_co_5');
    }
    // Calcio 6
    socket.on('co_6', co_6);
    function co_6(data){
        io.sockets.emit('r_co_6');
    }
    // Calcio 7
    socket.on('co_7', co_7);
    function co_7(data){
        io.sockets.emit('r_co_7');
    }
    // Calcio 8
    socket.on('co_8', co_8);
    function co_8(data){
        io.sockets.emit('r_co_8');
    }
};