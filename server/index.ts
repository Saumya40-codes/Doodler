import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);

import { leaveRoom } from './controllers/leaveRoom';

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    }
});

server.listen(5000,()=>{
    console.log('listening on port 5000');
});

interface Point{
    x:number,
    y:number
}

interface DrawLine{
    prevPoint: Point | null,
    currentPoint: Point,
    color: string,
    roomId: string
}

io.on('connection', (socket) => {

    socket.on('new-client', (roomId: string) => {
        io.to(roomId).emit('get-canvas-state');
    });

    socket.on('join-room', (roomId: string, username: string) => {
        socket.join(roomId);

        socket.handshake.query = { roomId, username };

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

    socket.on('disconnect', ()=>{
        const {roomId,username} = socket.handshake.query as {roomId:string,username:string};
        console.log(roomId,username);
            
        if (roomId && username) {
            leaveRoom(roomId, username);
        }

        socket.broadcast.to(roomId).emit('user-disconnected', username);
    });
});