import { Coordinate } from "./interface";

export function render(context: CanvasRenderingContext2D, pos: Coordinate, type: "snake" | "food") {
    context.fillStyle = type == "snake" ? "#0fd24f" : "#ec0f36";
    context.fillRect(pos.xPos, pos.yPos, 10, 5);
}

export function unrender(context: CanvasRenderingContext2D, pos: Coordinate) {
    context.clearRect(pos.xPos, pos.yPos, 10, 5);
}
