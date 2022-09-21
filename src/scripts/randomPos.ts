import { Coordinate } from "./interface";

export function randomPos(): Coordinate {
    let xPos = Math.floor(Math.random() * 290);
    let yPos = Math.floor(Math.random() * 145);
    xPos = xPos- xPos%10
    yPos = yPos- yPos%10
    return { xPos, yPos };
}
