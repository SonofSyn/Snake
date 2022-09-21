import createFood from "./foods.js";
import { Coordinate } from "./interface.js";
import { randomPos } from "./randomPos.js";
import { render, unrender } from "./render.js";

export default function createSnake(context: CanvasRenderingContext2D, startPos: Coordinate) {
    let currentPos: Coordinate = Object.assign({}, startPos);
    context.fillStyle = "#0fd24f";
    render(context, currentPos,"snake");
    let foodPos = randomPos()
    console.log(foodPos)
    createFood(context,foodPos)
    const move = (newPos: Coordinate) => {
        unrender(context, currentPos);
        currentPos = Object.assign({}, newPos);
        render(context, newPos,"snake");
    };
    const eat = () => {};
    return { move, eat };
}
