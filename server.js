
// Nodemailer
var nodemailer = require('nodemailer');
var path = require('path')
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true })
// var mailTo= (req.body.mail); // same as name value in customise_1 file
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

// Socket.io projector
var express = require('express');
var app = express();
var server = app.listen(3000);
app.use('/public', express.static(path.join(__dirname, 'public')));

// Get email address from form
app.get('customise_1.html', urlencodedParser, function(req, res) {
    console.log(req.body); // same as name value in customise_1 file
    console.log('osmedjdfj');
});

// Mail options
var mailOptions = {
    from: 'trigger@gmail.com',
    to: 'gurki4.mm@gmail.com',
    // to: mailTo,
    subject: 'test con immagini + click',
    text: 'AAA',
    // attachments: [{
    //     filename: 'gianbibi.jpg', path: 'views/layouts/gianbibi.jpg'}
    // ],
    template: 'index'
};

// Socket.io setup
var socket = require('socket.io');
var io = socket(server);
io.sockets.on('connection', newConnection);

function newConnection(socket){
    console.log('ciao: ' + socket.id);

    // Email sender function
    socket.on('mail_sender', mail_sender);
    function mail_sender(data){
        transporter.sendMail(mailOptions, function(err, data){
            if (err){
                console.log('fuck no' + err);
            }
            else{
                console.log('Mail sent');
                console.log(req.body.name);
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
    // Calcio T 1
    socket.on('tco_1', tco_1);
    function tco_1(data){
        io.sockets.emit('r_tco_1');
    }
    // Calcio T 2
    socket.on('tco_2', tco_2);
    function tco_2(data){
        io.sockets.emit('r_tco_2');
    }
    // Calcio T 3
    socket.on('tco_3', tco_3);
    function tco_3(data){
        io.sockets.emit('r_tco_3');
    }
    // Calcio T 4
    socket.on('tco_4', tco_4);
    function tco_4(data){
        io.sockets.emit('r_tco_4');
    }
    // Calcio T 5
    socket.on('tco_5', tco_5);
    function tco_5(data){
        io.sockets.emit('r_tco_5');
    }
    // Calcio T 6
    socket.on('tco_6', tco_6);
    function tco_6(data){
        io.sockets.emit('r_tco_6');
    }
    // Calcio T 7
    socket.on('tco_7', tco_7);
    function tco_7(data){
        io.sockets.emit('r_tco_7');
    }
    // Calcio T 8
    socket.on('tco_8', tco_8);
    function tco_8(data){
        io.sockets.emit('r_tco_8');
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

    // Canna T 1
    socket.on('tca_1', tca_1);
    function tca_1(data){
        console.log('insomma?')
        io.sockets.emit('r_tca_1');
    }
    // Canna T 2
    socket.on('tca_2', tca_2);
    function tca_2(data){
        io.sockets.emit('r_tca_2');
    }
    // Canna T 3
    socket.on('tca_3', tca_3);
    function tca_3(data){
        io.sockets.emit('r_tca_3');
    }
    // Canna T 4
    socket.on('tca_4', tca_4);
    function tca_4(data){
        io.sockets.emit('r_tca_4');
    }
    // Canna T 5
    socket.on('tca_5', tca_5);
    function tca_5(data){
        io.sockets.emit('r_tca_5');
    }
    // Canna T 6
    socket.on('tca_6', tca_6);
    function tca_6(data){
        io.sockets.emit('r_tca_6');
    }
    // Canna T 7
    socket.on('tca_7', tca_7);
    function tca_7(data){
        io.sockets.emit('r_tca_7');
    }
    // Canna T 8
    socket.on('tca_8', tca_8);
    function tca_8(data){
        io.sockets.emit('r_tca_8');
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
    
    
    // Dettagli 1
    socket.on('de_1', de_1);
    function de_1(data){
        io.sockets.emit('r_de_1');
    }
    // Dettagli 2
    socket.on('de_2', de_2);
    function de_2(data){
        io.sockets.emit('r_de_2');
    }
    // Dettagli 3
    socket.on('de_3', de_3);
    function de_3(data){
        io.sockets.emit('r_de_3');
    }
    // Dettagli 4
    socket.on('de_4', de_4);
    function de_4(data){
        io.sockets.emit('r_de_4');
    }
    // Dettagli 5
    socket.on('de_5', de_5);
    function de_5(data){
        io.sockets.emit('r_de_5');
    }
    // Dettagli 6
    socket.on('de_6', de_6);
    function de_6(data){
        io.sockets.emit('r_de_6');
    }
    // Dettagli 7
    socket.on('de_7', de_7);
    function de_7(data){
        io.sockets.emit('r_de_7');
    }
    // Dettagli 8
    socket.on('de_8', de_8);
    function de_8(data){
        io.sockets.emit('r_de_8');
    }
};
