import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
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
}

io.on('connection',(socket)=>{

    socket.on('new-client',()=>{
        socket.broadcast.emit('get-canvas-state');
    });

    socket.on('join-room',(roomId:string,username:string)=>{
        socket.join(roomId);
        socket.broadcast.to(roomId).emit('user-connected',username);
    });

    socket.on('draw-line',({prevPoint,currentPoint,color}:DrawLine)=>{
        socket.broadcast.emit('draw-line',{prevPoint,currentPoint,color});
    })

    socket.on('canvas-state',(canvasState:string)=>{
        socket.broadcast.emit('canvas-state-from-server',canvasState);
    });

    socket.on('clear',()=>{
        io.emit('clear');
    })
});

server.listen(5000,()=>{
    console.log('listening on port 5000');
});