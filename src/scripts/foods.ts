import { Coordinate } from "./interface.js";
import { render } from "./render.js";
export default function createFood(context: CanvasRenderingContext2D, pos: Coordinate) {
    render(context, pos,"food");
}
