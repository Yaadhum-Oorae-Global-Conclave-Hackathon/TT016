var express = require('express');
var app = express();

//engine
app.set('view engine', 'hbs');

//route
app.get('/', function(req, res) {
	res.render('./views/index');
});

//gTTS
const gTTS = require('gtts');
var speech = 'வணக்கம்';
var gtts = new gTTS(speech, 'ta');

gtts.save('Voice.mp3', function (err, result){
	if(err) { throw new Error(err); }
	console.log("Text to speech converted!");
});

//server startup
var server = app.listen(3122, function() {
  host = server.address().address;
  port = server.address().port;

  console.log("listening at http://%s:%s", host, port);
})
