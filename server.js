import express from 'express';
import proxy from 'express-http-proxy';
const app = express();
import * as http from 'http';
const server = http.createServer(app);
import { Server } from 'socket.io';
const io = new Server(server);

app.use('/', proxy('http://localhost:5173/'));

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(8080, () => {
  console.log('listening on *:8080');
});
