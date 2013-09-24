var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/client'));

app.get('/', function (req, res) {
	res.sendfile('client/index.html');
});

app.listen(8080);
console.log('Server running @ http://localhost:8080');