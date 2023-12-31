type Draw = {
    currentPoint: Point;
    prevPoint: Point | null;
    ctx: CanvasRenderingContext2D;
}

type Point = {
    x: number;
    y: number;
}

type DrawLineProps = Draw & {
    color: string;
    roomId: string;
}