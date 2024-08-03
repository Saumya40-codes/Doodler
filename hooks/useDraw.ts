"use client";

import { useEffect, useRef, useState } from "react";
import { Point, Draw } from "@/types/typing";

export const useDraw = (onDraw: ({ currentPoint, prevPoint, ctx }: Draw) => void) => {
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [undoStack, setUndoStack] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prevPoint = useRef<Point | null>(null);

  const onMouseDown = () => {
    setMouseDown(true);
    if (canvasRef.current) {
      const currentCanvas = canvasRef.current;
      setUndoStack((prev) => [...prev, currentCanvas.toDataURL()]);
    }
  };

  const clear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const undo = () => {
    const canvas = canvasRef.current;
    if (!canvas || undoStack.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const previousState = undoStack.pop();
    if (previousState) {
      const img = new Image();
      img.src = previousState;
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      };
    }

    setUndoStack([...undoStack]);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!mouseDown) return;
      const currentPoint = computePointInCanvas(e);

      const ctx = canvasRef.current?.getContext("2d");

      if (!ctx || !currentPoint) return;

      onDraw({ currentPoint, prevPoint: prevPoint.current, ctx });
      prevPoint.current = currentPoint;
    };

    const computePointInCanvas = (e: MouseEvent) => {
      const canvas = canvasRef.current;

      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();

      // relative mouse position
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      return { x, y };
    };

    const mouseUpHandler = () => {
      setMouseDown(false);
      prevPoint.current = null;
    };

    canvasRef.current?.addEventListener("mousemove", handler);
    window.addEventListener("mouseup", mouseUpHandler);

    return () => {
      canvasRef.current?.removeEventListener("mousemove", handler);
      window.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [onDraw, mouseDown]);

  return { canvasRef, onMouseDown, clear, undo };
};
