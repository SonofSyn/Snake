import { Coordinate } from "./interface";

export function render(context: CanvasRenderingContext2D, pos: Coordinate, type: "snake" | "food") {
    context.fillStyle = type == "snake" ? "#0fd24f" : "#ec0f36";
    context.fillRect(pos.xPos + 1.45, pos.yPos + 1.45, 8, 8);
}

export function unrender(context: CanvasRenderingContext2D, pos: Coordinate) {
    context.clearRect(pos.xPos + 1.45, pos.yPos + 1.45, 8, 8);
}


export function renderBoard(context: CanvasRenderingContext2D) {

    for (let i = 0; i < 33; i++) {
        context.moveTo(i * 10, 0)
        context.lineTo(i * 10, 330)
        context.stroke()
        context.moveTo(0, i * 10)
        context.lineTo(330, i * 10)
        context.stroke()
    }

    context.moveTo(0, 0)
}