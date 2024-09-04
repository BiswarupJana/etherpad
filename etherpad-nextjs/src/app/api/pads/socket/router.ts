import { Server } from 'socket.io';
import { NextApiRequest, NextApiResponse } from 'next';

// Socket.io server initialization
export default function handler(req: NextApiRequest, res: any) {
  if (!res.socket.server.io) {
    console.log('Socket.io server initializing...');
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      console.log('A user connected', socket.id);

      // Handle document updates from clients
      socket.on('updateDocument', (data) => {
        socket.broadcast.emit('documentUpdated', data); // Broadcast updates to other clients
      });

      socket.on('disconnect', () => {
        console.log('User disconnected', socket.id);
      });
    });
  } else {
    console.log('Socket.io server already running');
  }

  res.end(); // End the request since Socket.io works outside of normal API responses
}
