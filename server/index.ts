import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    }
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
});

server.listen(5000,()=>{
    console.log('listening on port 5000');
});