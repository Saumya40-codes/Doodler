"use client"

import { useEffect, useRef, useState } from "react";

export const useDraw = (onDraw:({currentPoint, prevPoint, ctx}: Draw) => void) => {
  const[mouseDown,setMouseDown] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prevPoint = useRef<Point | null>(null);

  const onMouseDown = () => setMouseDown(true);

  const clear = () => {
    const canvas = canvasRef.current;
    if(!canvas) return;

    const ctx = canvas.getContext("2d");
    if(!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if(!mouseDown) return;
      const currentPoint = computePointInCanvas(e);

      const ctx = canvasRef.current?.getContext("2d");

      if(!ctx || !currentPoint) return;

      onDraw({ currentPoint, prevPoint: prevPoint.current, ctx });
      prevPoint.current = currentPoint;
    };

    const computePointInCanvas = (e: MouseEvent) =>{
        const canvas = canvasRef.current;

        if(!canvas) return;

        const rect = canvas.getBoundingClientRect();


        // relative mouse position
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        return { x, y };
    }

    const mouseUpHandler = () => {
        setMouseDown(false);
        prevPoint.current = null;
    }

    canvasRef.current?.addEventListener('mousemove', handler);
    window.addEventListener('mouseup', mouseUpHandler);

    return () => {
        canvasRef.current?.removeEventListener('mousemove', handler);
        window.removeEventListener('mouseup', () => setMouseDown(false));
    }
  }, [onDraw, mouseDown]);

  return { canvasRef, onMouseDown, clear};
};