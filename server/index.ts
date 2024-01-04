import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);

import { leaveRoom } from './controllers/leaveRoom';
import {DrawLine} from './types/types';

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    }
});

server.listen(5000,()=>{
    console.log('listening on port 5000');
});

io.on('connection', (socket) => {

    socket.on('new-client', (roomId: string) => {
        io.to(roomId).emit('get-canvas-state');
    });

    socket.on('join-room', (roomId: string, username: string) => {
        socket.join(roomId);
        socket.handshake.query = { roomId, username };

        // io.to(roomId).emit('user-connected-to-room', username);
        io.to(roomId).emit('user-connected', username);
    });

    socket.on('draw-line', ({ prevPoint, currentPoint, color, roomId }: DrawLine) => {
        socket.broadcast.to(roomId).emit('draw-line', { prevPoint, currentPoint, color });
    });

    socket.on('canvas-state', ({canvasState,roomId}) => {
        io.to(roomId).emit('canvas-state-from-server', canvasState);
    });

    socket.on('clear', (roomId: string) => {
        io.to(roomId).emit('clear');
    });

    socket.on('disconnect', async () => {
        const { roomId, username } = socket.handshake.query as { roomId: string, username: string };
    
        try {
            if (roomId && username) {
                await leaveRoom(roomId, username);
    
                socket.broadcast.to(roomId).emit('user-disconnected', username);
            }
        } catch (error) {
            console.error(error);
        }
    });

    socket.on('message', (message: {message:string,roomId:string,username:string}) => {
        socket.broadcast.to(message.roomId).emit('message-receive', message);
    });
});