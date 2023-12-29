'use client'

import { useEffect, useState } from "react";
import { useDraw } from "@/hooks/useDraw";
import { drawLine } from "@/utils/drawLine";

import { io } from "socket.io-client";
const socket = io("http://localhost:5000");

const Canvas = () => {
  const[color,setColor] = useState('#000')
  const { canvasRef, onMouseDown, clear} = useDraw(createLine);

  useEffect(() => {
    const colorPicker = document.getElementById('color-picker') as HTMLInputElement;
    colorPicker.addEventListener('change', (e) => {
        setColor(colorPicker.value);
    })

    return () => {
      colorPicker.removeEventListener("change", (e)=>{
        setColor(colorPicker.value);
      });
    };
  }, []);

  useEffect(() => {

    const ctx = canvasRef.current?.getContext("2d");

    socket.emit('new-client');

    socket.on('get-canvas-state',()=>{
      if(!canvasRef.current?.toDataURL) return;

      socket.emit('canvas-state',canvasRef.current.toDataURL());
    });

    socket.on('canvas-state-from-server',(image)=>{
      if(!ctx) return;
      const canvasImage = new Image();
      canvasImage.src = image;
      canvasImage.onload = () => {
        ctx.drawImage(canvasImage,0,0);
      }
    });

    socket.on('draw-line',({prevPoint, currentPoint, color}: DrawLineProps) => {
      if(!ctx) return;
      drawLine({prevPoint, currentPoint, ctx, color});
    });

    socket.on('clear',clear);

    return () => {
      socket.off('get-canvas-state');
      socket.off('canvas-state-from-server');
      socket.off('draw-line');
      socket.off('clear');
    };

  },[canvasRef]);

  function createLine({prevPoint, currentPoint, ctx} : Draw) {
    socket.emit('draw-line',{prevPoint, currentPoint, color});
    drawLine({prevPoint, currentPoint, ctx, color});
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="block  flex-col items-center">
      <label htmlFor="color-picker">Select a color:</label>
      <input id="color-picker" type="color" />
      </div>
        <button className="border border-black rounded-md px-2 py-1" onClick={()=> socket.emit('clear')}>
          Clear
        </button>
      <canvas
        onMouseDown={onMouseDown}
        ref={canvasRef}
        width={750}
        height={750}
        className="border border-black rounded-md"
      />
    </div>
  );
};

export default Canvas;
