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
app.get('/reset', (req, res) => {
  initDB();
  res.send('Base de datos reseteada');
});

io.on('connection', (socket) => {
  console.log("Toy conectado")
  const mensajes = read();
  io.emit('init chat', mensajes);
  socket.on('chat message', (msg) => {
    insertarMensaje(msg)
    io.emit('chat message', msg);
  });
  /*
  socket.on('paint', (datos) => {
    io.emit('paint', datos);
  });
  */
});

server.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
  });