import { Coordinate } from "./interface";

export function randomPos(blockedPos: Coordinate[]): Coordinate {
    let xPos = 0
    let yPos = 0
    let flag = true
    while (flag) {
        xPos = Math.floor(Math.random() * 290);
        yPos = Math.floor(Math.random() * 145);
        flag = false
        blockedPos.forEach(pos => {
            if (pos.xPos === xPos && pos.yPos === yPos) flag = true
        })
    }
    xPos = xPos - xPos % 10
    yPos = yPos - yPos % 10
    return { xPos, yPos };
}
