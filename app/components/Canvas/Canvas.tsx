"use client";

import React, { useEffect, useState, useRef } from "react";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import { Box, VStack, HStack, Text, Tooltip } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Input } from "@chakra-ui/react"
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
    <VStack spacing={6} w="100%" h="100%" bg="gray.800" borderRadius="lg" p={4}>
      <Box position="relative" w="100%" h="80%" borderRadius="lg" overflow="hidden">
        <ReactSketchCanvas
          ref={canvasRef}
          width="100%"
          height="100%"
          strokeColor={eraserMode ? "#ffffff" : color}
          strokeWidth={eraserMode ? 20 : brushRadius}
          onChange={handleSketchChange}
          className="border border-gray-600 rounded-lg"
        />
        {eraserMode && (
          <Box
            position="absolute"
            top={2}
            right={2}
            p={2}
            bg="red.500"
            color="white"
            borderRadius="md"
            fontSize="sm"
          >
            Eraser Mode
          </Box>
        )}
      </Box>
      <HStack spacing={4} w="100%" justifyContent="center">
        <Tooltip label="Choose color">
          <Input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            w={12}
            h={12}
            p={1}
            borderRadius="full"
            border="none"
          />
        </Tooltip>
        <Box w="200px">
          <Slider
            min={1}
            max={20}
            step={1}
            value={[brushRadius]}
            onValueChange={(value) => setBrushRadius(value[0])}
          />
        </Box>
        <Text fontSize="sm" color="gray.300">
          Brush size: {brushRadius}
        </Text>
        <Tooltip label="Toggle eraser mode">
          <Switch
            checked={eraserMode}
            onCheckedChange={() => setEraserMode(!eraserMode)}
          />
        </Tooltip>
      </HStack>
      <HStack spacing={4}>
        <Button onClick={handleClear} variant="destructive">
          Clear Canvas
        </Button>
        <Button onClick={handleUndo} variant="secondary">
          Undo
        </Button>
      </HStack>
    </VStack>
  );
};

export default Canvas;