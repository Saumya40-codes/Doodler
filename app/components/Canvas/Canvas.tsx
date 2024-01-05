'use client'

import { useEffect, useState } from "react";
import { useDraw } from "@/hooks/useDraw";
import { drawLine } from "@/utils/drawLine";
import socket from "@/utils/socket";
import styles from './canvas.module.css';

const Canvas = ({ roomId }: { roomId: string }) => {
  const [color, setColor] = useState("#000");
  const { canvasRef, onMouseDown, clear } = useDraw(createLine);

  useEffect(() => {
    const colorPicker = document.getElementById('color-picker') as HTMLInputElement;
    colorPicker.addEventListener('change', (e) => {
      setColor(colorPicker.value);
    })

    return () => {
      colorPicker.removeEventListener("change", (e) => {
        setColor(colorPicker.value);
      });
    };
  }, []);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");

    const user = localStorage.getItem('user');

    if (user) socket.emit('join-room', roomId, user);

    socket.emit('new-client', roomId);

    socket.on('get-canvas-state', () => {
      if (!canvasRef.current?.toDataURL) return;
      socket.emit('canvas-state', { canvasState: canvasRef.current?.toDataURL(), roomId });
    });

    socket.on('canvas-state-from-server', (image) => {
      if (!ctx) return;
      const canvasImage = new Image();
      canvasImage.src = image;
      canvasImage.onload = () => {
        ctx.drawImage(canvasImage, 0, 0);
      }
    });

    socket.on('draw-line', ({ prevPoint, currentPoint, color }: DrawLineProps) => {
      if (!ctx) return;
      drawLine({ prevPoint, currentPoint, ctx, color });
    });

    socket.on('clear', clear);

  }, [canvasRef]);

  function createLine({ prevPoint, currentPoint, ctx }: Draw) {
    socket.emit('draw-line', { prevPoint, currentPoint, color, roomId });
    drawLine({ prevPoint, currentPoint, ctx, color });
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <canvas
        onMouseDown={onMouseDown}
        ref={canvasRef}
        width={800}
        height={800}
        className="border border-black rounded-md"
      />
      <div className={styles.colrs}>
        <label htmlFor="color-picker">Select a color:</label>
        <input id="color-picker" type="color" className={styles.cpicker} />
      </div>
      <div>
        <button className={styles.clr} onClick={() => socket.emit('clear', roomId)}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Canvas;
