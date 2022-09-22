import { Coordinate } from "./interface.js";
import { render, unrender } from "./render.js";

export default function createSnake(context: CanvasRenderingContext2D, startPos: Coordinate) {
    let currentPos: Coordinate[] = [Object.assign({}, startPos)];
    context.fillStyle = "#0fd24f";
    render(context, currentPos[0], "snake");
    const move = (newPos: Coordinate, length: number) => {

        let errorFlag = false
        currentPos.forEach(e => {
            if (e.xPos === newPos.xPos && e.yPos === newPos.yPos) errorFlag = true
        })
        if (errorFlag) return true
        if (currentPos.length === length + 1) {
            unrender(context, currentPos[0]);
            currentPos.splice(0, 1)
        }
        currentPos.push(Object.assign({}, newPos));
        render(context, newPos, "snake");
        return false
    };
    return { move, getPos: () => currentPos };
}
