import { Server } from 'socket.io';

const ioHandler = (req: any, res: any) => {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);
    io.on('connection', (socket) => {
      console.log('User connected');

      // Listen for document updates and broadcast them to other users
      socket.on('updateDocument', (data) => {
        socket.broadcast.emit('documentUpdated', data);
      });

      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });
    res.socket.server.io = io;
  }
  res.end();
};

export default ioHandler;
