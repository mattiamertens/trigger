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


    // Canna 1
    socket.on('ca_1', ca_1);
    function ca_1(data){
        io.sockets.emit('r_ca_1');
    }
    // Canna 2
    socket.on('ca_2', ca_2);
    function ca_2(data){
        io.sockets.emit('r_ca_2');
    }
    // Canna 3
    socket.on('ca_3', ca_3);
    function ca_3(data){
        console.log('arrivato?');
        io.sockets.emit('r_ca_3');
    }
    // Canna 4
    socket.on('ca_4', ca_4);
    function ca_4(data){
        io.sockets.emit('r_ca_4');
    }
    // Canna 5
    socket.on('ca_5', ca_5);
    function ca_5(data){
        io.sockets.emit('r_ca_5');
    }
    // Canna 6
    socket.on('ca_6', ca_6);
    function ca_6(data){
        io.sockets.emit('r_ca_6');
    }
    // Canna 7
    socket.on('ca_7', ca_7);
    function ca_7(data){
        io.sockets.emit('r_ca_7');
    }
    // Canna 8
    socket.on('ca_8', ca_8);
    function ca_8(data){
        io.sockets.emit('r_ca_8');
    }
    
    // Grilletto 1
    socket.on('gr_1', gr_1);
    function gr_1(data){
        io.sockets.emit('r_gr_1');
    }
    // Grilletto 2
    socket.on('gr_2', gr_2);
    function gr_2(data){
        io.sockets.emit('r_gr_2');
    }
    // Grilletto 3
    socket.on('gr_3', gr_3);
    function gr_3(data){
        io.sockets.emit('r_gr_3');
    }
    // Grilletto 4
    socket.on('gr_4', gr_4);
    function gr_4(data){
        io.sockets.emit('r_gr_4');
    }
    // Grilletto 5
    socket.on('gr_5', gr_5);
    function gr_5(data){
        io.sockets.emit('r_gr_5');
    }
    // Grilletto 6
    socket.on('gr_6', gr_6);
    function gr_6(data){
        io.sockets.emit('r_gr_6');
    }
    // Grilletto 7
    socket.on('gr_7', gr_7);
    function gr_7(data){
        io.sockets.emit('r_gr_7');
    }
    // Grilletto 8
    socket.on('gr_8', gr_8);
    function gr_8(data){
        io.sockets.emit('r_gr_8');
    }
};