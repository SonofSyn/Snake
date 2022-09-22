import { Coordinate } from "./interface.js";
import { randomPos } from "./randomPos.js";
import { render } from "./render.js";
import createSnake from "./snake.js";

export default function SnakeGame(canvas: HTMLCanvasElement, scoreElement: HTMLElement, label: HTMLElement) {
    console.log("Startet Game");
    let context: CanvasRenderingContext2D | null = canvas.getContext("2d");
    if (context === null) return;
    let nextKey: string | null = null;
    let score = 0
    let snakePos: Coordinate = { xPos: 0, yPos: 0 };
    let foodPos: Coordinate = randomPos()
    render(context, foodPos, "food")
    let snake = createSnake(context, snakePos);
    let timeStamp: number = 0
    let speed: number = 100
    const keyboardListener = () => {
        document.addEventListener("keydown", (e: KeyboardEvent) => {
            if (nextKey == null || nextKey != e.key) {
                nextKey = e.key;
            }
        });
    };
    const checkKey = () => {
        if (nextKey == null) {
            return false;
        }

        switch (nextKey) {
            case "ArrowLeft":
                snakePos.xPos = snakePos.xPos - 10;
                if (snakePos.xPos < 0 || snakePos.xPos > 290) {
                    return true
                }
                if (snakePos.xPos === foodPos.xPos && snakePos.yPos === foodPos.yPos) {
                    score = score + 1
                    scoreElement.innerHTML = score + ""
                    foodPos = randomPos()
                    render(context, foodPos, "food")
                }
                return snake.move(snakePos, score);
            case "ArrowUp":
                snakePos.yPos = snakePos.yPos - 5;
                if (snakePos.yPos < 0 || snakePos.yPos > 145) {
                    return true
                }
                if (snakePos.xPos === foodPos.xPos && snakePos.yPos === foodPos.yPos) {
                    score = score + 1
                    foodPos = randomPos()
                    scoreElement.innerHTML = score + ""
                    render(context, foodPos, "food")
                }
                return snake.move(snakePos, score);
            case "ArrowRight":
                snakePos.xPos = snakePos.xPos + 10;
                if (snakePos.xPos < 0 || snakePos.xPos > 290) {

                    return true
                }
                if (snakePos.xPos === foodPos.xPos && snakePos.yPos === foodPos.yPos) {
                    score = score + 1
                    foodPos = randomPos()
                    scoreElement.innerHTML = score + ""
                    render(context, foodPos, "food")
                }
                return snake.move(snakePos, score)
            case "ArrowDown":
                snakePos.yPos = snakePos.yPos + 5;
                if (snakePos.yPos < 0 || snakePos.yPos > 145) {
                    return true
                }
                if (snakePos.xPos === foodPos.xPos && snakePos.yPos === foodPos.yPos) {
                    score = score + 1
                    foodPos = randomPos()
                    scoreElement.innerHTML = score + ""
                    render(context, foodPos, "food")
                }
                return snake.move(snakePos, score);
        }
        return false
    };

    const update = (time?: number) => {
        time = time || 0;
        if (time - timeStamp >= speed) {
            timeStamp = time;
            let over = checkKey();
            if (over) {
                label.innerHTML = ("Game Over")
                return}
        }
        requestAnimationFrame(update.bind(timeStamp))
    };

    keyboardListener();
    update()
}
