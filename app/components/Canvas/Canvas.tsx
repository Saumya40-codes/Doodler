"use client";

import React, { useEffect, useState } from "react";
import { useDraw } from "@/hooks/useDraw";
import { drawLine } from "@/utils/drawLine";
import socket from "@/utils/socket";
import { Box, VStack, HStack, Text, Tooltip } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Input } from "@chakra-ui/react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Draw } from "@/types/typing";

interface CanvasProps {
  roomId: string;
}

const Canvas: React.FC<CanvasProps> = ({ roomId }) => {
  const [color, setColor] = useState("#000000");
  const [brushRadius, setBrushRadius] = useState(5);
  const [eraserMode, setEraserMode] = useState(false);
  const { canvasRef, onMouseDown, clear } = useDraw(createLine);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) socket.emit("join-room", roomId, user);

    socket.emit("new-client", roomId);

    socket.on("canvas-state-from-server", (image) => {
      const ctx = canvasRef.current?.getContext("2d");
      if (!ctx) return;
      const canvasImage = new Image();
      canvasImage.src = image;
      canvasImage.onload = () => {
        ctx.drawImage(canvasImage, 0, 0);
      };
    });

    socket.on("get-canvas-state", () => [
      socket.emit("canvas-state", { canvasState: canvasRef.current?.toDataURL(), roomId }),
    ])

    socket.on("draw-line", ({ prevPoint, currentPoint, color }) => {
      const ctx = canvasRef.current?.getContext("2d");
      if (!ctx) return;
      drawLine({ prevPoint, currentPoint, ctx, color });
    });

    socket.on("clear", clear);

    return () => {
      socket.off("canvas-state-from-server");
      socket.off("draw-line");
      socket.off("clear");
    };
  }, [canvasRef]);

  function createLine({ prevPoint, currentPoint, ctx }: Draw) {
    const strokeColor = eraserMode ? "#ffffff" : color;
    ctx.lineWidth = eraserMode ? 20 : brushRadius;
    socket.emit("draw-line", { prevPoint, currentPoint, color: strokeColor, roomId });
    drawLine({ prevPoint, currentPoint, ctx, color: strokeColor });
  }

  const handleClear = () => {
    clear();
    socket.emit("clear", roomId);
  };

  return (
    <VStack spacing={6} w="100%" h="100%" bg="gray.800" borderRadius="lg" p={4}>
      <Box position="relative" borderRadius="lg" overflow="hidden">
        <canvas
          ref={canvasRef}
          width={1000}
          height={800}
          onMouseDown={onMouseDown}
          className="border border-gray-600 rounded-lg bg-slate-300"
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
      </HStack>
    </VStack>
  );
};

export default Canvas;
