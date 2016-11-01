var express = require('express');
var server = express();
var io = require('socket.io');
const port = 3000;

server.use('/', express.static(__dirname  + '/'));

console.log('Started Socket.io, listening on port: ' + port);
server.listen(port);
