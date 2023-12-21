'use client'

import { useEffect, useState } from "react";
import { useDraw } from "@/hooks/useDraw";
import CloseBtn from "../CloseBtn/CloseBtn";

const Canvas = () => {
  const[color,setColor] = useState('#000')
  const { canvasRef, onMouseDown, clear} = useDraw(drawLine);

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

  function drawLine({prevPoint, currentPoint, ctx} : Draw) {
    const {x: currX, y: currY} = currentPoint;

    const lineColor = color;
    const lineWidth = 5

    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath();

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;

    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();

    ctx.fillStyle = lineColor;
    ctx.beginPath();

    ctx.arc(startPoint.x, startPoint.y, 2, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();
  }

  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
      <div className="block  flex-col items-center">
      <label htmlFor="color-picker">Select a color:</label>
      <input id="color-picker" type="color" />
      </div>
        <CloseBtn clear={clear} />
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
