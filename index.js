const express = require("express");
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const { initDB, insertarMensaje, read } = require("./script/model.js")

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.get('/reset', (req, res) =>{
  initDB();
  res.send('Base de datos reseteada');
});

io.on('connection', (socket) => {
  console.log("Usuario conectado")

  io.emit("init chat", read())

  socket.on('chat message', (msg) => {
    insertarMensaje(msg)
    io.emit('chat message', msg);
  });
  
  
  socket.on('paint', (datos) => {
    //console.log("La x es", datos.x);
    //console.log("La y es", datos.y);
    io.emit('paint', datos);
  });
});


server.listen(3000, () => {
    console.log('Servidor iniciado en el http://localhost:3000/');
});
