var express = require("express");
var arDrone = require('ar-drone');
var ffmpeg = require('ffmpeg');
require("./drone/camera-feed")
var app = express();

 //require("dronestream").listen(3001);

app.use(express.static('public'))

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var client = arDrone.createClient();

client.on('error', console.log)
 .on('data', function(frame) {
     socket.emit('image', { image: frame });
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index');    
});

app.post('/takeoff', (req, res) => {
    client.takeoff(); 
});

app.post('/land', (req, res) => {
    client.land();    
});

app.post('/right', (req, res) => {
    var spped = req.body.speed;
    client.right(speed);
});

var right=function(speed){
    var spped = req.body.speed;
    client.right(speed);

};

app.listen(4100, () => {
    console.log(`Server started on port 4100`);
});
