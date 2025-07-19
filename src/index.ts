import { Server, Socket } from 'socket.io'

const port = 3000
console.log(`listening on port ${port}`)
const io = new Server(port, {
  cors: {
    origin: '*',
  }
});
io.on('connection', (client: Socket) => {
  client.emit("message", "hello my man")
});


