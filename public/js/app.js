var socket = io();

socket.on("connect",function(){
    console.log("player connected to server");
});