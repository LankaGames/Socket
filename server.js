var PORT = process.env.port || 3000;
var express = require("express");
var app = express();
var http = require("http").Server(app);
var socketio = require("socket.io")(http);


app.use(express.static(__dirname+"/public"));

socketio.on('connection',function(){
    console.log("connection event");
});
http.listen(PORT,function(){
            console.log("Server Started");
            });
