type DrawLineProps = Draw & {
    color: string;
    roomId: string;
}

interface Point {
    x: number;
    y: number;
}

export interface CanvasPath {
    paths: Point[];
    strokeWidth: number;
    strokeColor: string;
    drawMode: boolean;
    startTimestamp?: number;
    endTimestamp?: number;
}

export type Draw = {
    currentPoint: Point;
    prevPoint: Point | null;
    ctx: CanvasRenderingContext2D;
}
