"use client";

import React, { useEffect, useState, useRef } from "react";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import socket from "@/utils/socket";

interface CanvasProps {
  roomId: string;
}

const Canvas: React.FC<CanvasProps> = ({ roomId }) => {
  const [color, setColor] = useState<string>("#000000");
  const [brushRadius, setBrushRadius] = useState<number>(5);
  const [eraserMode, setEraserMode] = useState<boolean>(false);
  const canvasRef = useRef<ReactSketchCanvasRef>(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) socket.emit('join-room', roomId, user);

    socket.emit('new-client', roomId);

    socket.on('canvas-state-from-server', (canvasState: string) => {
      if (canvasRef.current) {
        canvasRef.current.loadPaths(JSON.parse(canvasState));
      }
    });

    socket.on('draw-line', (line: any) => {
      if (canvasRef.current) {
        canvasRef.current.loadPaths(line);
      }
    });

    socket.on('clear', () => {
      if (canvasRef.current) {
        canvasRef.current.clearCanvas();
      }
    });

    return () => {
      socket.off('canvas-state-from-server');
      socket.off('draw-line');
      socket.off('clear');
    };
  }, [roomId]);

  const handleSketchChange = async () => {
    if (canvasRef.current) {
      const paths = await canvasRef.current.exportPaths();
      socket.emit('draw-line', paths);
    }
  };

  const handleUndo = async () => {
    if (canvasRef.current) {
      await canvasRef.current.undo();
      const paths = await canvasRef.current.exportPaths();
      socket.emit('canvas-state', { canvasState: JSON.stringify(paths), roomId });
    }
  };

  const handleClear = async () => {
    if (canvasRef.current) {
      await canvasRef.current.clearCanvas();
      socket.emit('clear', roomId);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-8 bg-gray-100 rounded-lg shadow-xl">
      <div className="relative">
        <ReactSketchCanvas
          ref={canvasRef}
          width="800px"
          height="600px"
          strokeColor={eraserMode ? "#ffffff" : color}
          strokeWidth={eraserMode ? 20 : brushRadius}
          onChange={handleSketchChange}
          className="border border-gray-300 rounded-lg"
        />
        {eraserMode && (
          <div className="absolute top-0 right-0 p-2 text-red-500 bg-white border rounded-lg shadow-md">
            Eraser Mode
          </div>
        )}
      </div>
      <div className="flex space-x-4 items-center">
        <Input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-12 h-12 p-1 rounded-full"
        />
        <Slider
          min={1}
          max={20}
          step={1}
          value={[brushRadius]}
          onValueChange={(value) => setBrushRadius(value[0])}
          className="w-48"
        />
        <span className="text-sm text-gray-600">Brush size: {brushRadius}</span>
        <Switch
          checked={eraserMode}
          onCheckedChange={() => setEraserMode(!eraserMode)}
          className="ml-4"
        />
        <span className="text-sm text-gray-600">Eraser Mode</span>
      </div>
      <div className="flex space-x-4">
        <Button onClick={handleClear} variant="destructive">
          Clear Canvas
        </Button>
        <Button onClick={handleUndo} variant="secondary">
          Undo
        </Button>
      </div>
    </div>
  );
};

export default Canvas;
