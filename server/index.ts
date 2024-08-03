import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);

import { leaveRoom } from './controllers/leaveRoom';
import { DrawLine } from './types/types';

interface Point {
    x: number;
    y: number;
}

interface CanvasPath {
    paths: Point[];
    strokeWidth: number;
    strokeColor: string;
    drawMode: boolean;
    startTimestamp?: number;
    endTimestamp?: number;
}
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000", "https://doodler-ecru.vercel.app", "https://doodler-saumya40-codes.vercel.app/", "https://doodler-git-master-saumya40-codes.vercel.app/", "https://doodler-oonjpf5hg-saumya40-codes.vercel.app/"],
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    }
});

server.listen(5000, () => {
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

    socket.on('draw-line', (data: { paths: CanvasPath[], roomId: string }) => {
        socket.broadcast.to(data.roomId).emit('draw-line', data.paths);
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