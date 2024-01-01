export interface Point{
    x:number,
    y:number
}

export interface DrawLine{
    prevPoint: Point | null,
    currentPoint: Point,
    color: string,
    roomId: string
}