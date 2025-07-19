import { Server, Socket } from 'socket.io'
import { Message, sequence } from './messages';
import pWaitFor from 'p-wait-for'

interface Client {
  socket: Socket,
  startTime: Date,
}
const runSequence = async (client: Client) => {
  let ind = 0;
  while (ind < sequence.length) {
    const message: Message = sequence[ind]

    await pWaitFor(() => new Date().getTime() >= client.startTime.getTime() + message.time * 10)
    ind++;

    client.socket.emit(message.type, message.msg, message.relevantDrivers)
  }
}

const port = 3000
console.log(`listening on port ${port}`)
const io = new Server(port, {
  cors: {
    origin: '*',
  }
});
io.on('connection', async (socket: Socket) => {
  const client: Client = {
    socket,
    startTime: new Date(),
  }

  await runSequence(client)

  socket.disconnect()

});


