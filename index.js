const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require(socket.io)
const {initBD, insertarMensaje,read } = require

const app = express();
const server = createServer(app)
const io = new Server(server)


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
  });

  io.on('connection', (socket) => {
    console.log("Usuario connectado")
    const mensajes = read()
    io.emit("init chat", mensajes)
    socket.on('chat message', (msg) => {
      insertarMensaje(msg)
      io.emit('chat message', msg);
    })

    socket.on('paint', (datos) => {
      console.log("La x es", data.x)
      console.log("La y es", datos.y)
    })
  })

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
  });
