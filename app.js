var express = require('express');
var hbs = require('express-handlebars');
var platform = require('platform');
var getIP = require('ipware')().get_ip;

var app = express();
var port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'));



app.engine('.hbs', hbs({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');

app.get('/', function(req, res, next) {
  var ip = getIP(req);
  var ua = platform.parse(req.headers['user-agent'])
  res.json({ip: 'Your IP address is '+ip.clientIp, language: 'The language your currently using on your computer is '+ req.headers['accept-language'].substring(0, 5), OS: 'your currently on the following browser and operating system '+ua.description})



})

app.listen(port, function() {
  console.log('app listening on port 3000')
})
