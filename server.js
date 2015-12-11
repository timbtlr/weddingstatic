// MODULES =================================================
var express = require('express');

var server = express();
server.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8000;
server.listen(port);
console.log('Use port ' + port + ' to connect to this server');

// expose server
exports = module.exports = server;
