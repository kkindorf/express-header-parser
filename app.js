var express = require('express');
var hbs = require('express-handlebars');
var platform = require('platform');
var getIP = require('ipware')().get_ip;

var app = express();

app.use(express.static(__dirname + '/public'));



app.engine('.hbs', hbs({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');

app.get('/', function(req, res, next) {
  var ip = getIP(req);
  var ua = platform.parse(req.headers['user-agent'])
  res.render('index', {ip: 'Your IP address is '+ip.clientIp, language: 'The language your currently using on your computer is '+ req.headers['accept-language'], OS: 'your currently on the following browser and operating system '+ua.description})



})



app.listen(3000, function() {
  console.log('app listening on port 3000')
})
