const io = require('socket.io')();
io.on('connection', (client: any) => {
  console.log('client connected')
});
io.listen(3000);
