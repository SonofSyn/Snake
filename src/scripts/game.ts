import { Coordinate } from "./interface.js";
import createSnake from "./snake.js";

export default function SnakeGame(canvas: HTMLCanvasElement) {
    console.log("Startet Game");
    let context: CanvasRenderingContext2D | null = canvas.getContext("2d");
    if (context === null) return;
    let nextKey: string | null = null;
    
    let snakePos: Coordinate = { xPos: 0, yPos: 0 };
    let snake = createSnake(context, snakePos);
    let timeStamp:number=0
    let speed:number=50
    const keyboardListener = () => {
        console.log("Added listener");
        document.addEventListener("keydown", (e: KeyboardEvent) => {
            if (nextKey == null || nextKey != e.key) {
                console.log("Key Pressed");
                nextKey = e.key;
            }
        });
    };
    const checkKey = () => {
        if (nextKey == null) {
            return;
        }

        switch (nextKey) {
            case "ArrowLeft":
                snakePos.xPos = snakePos.xPos - 10;
                snake.move(snakePos);
                break;
            case "ArrowUp":
                snakePos.yPos = snakePos.yPos - 5;
                snake.move(snakePos);
                break;
            case "ArrowRight":
                snakePos.xPos = snakePos.xPos + 10;
                snake.move(snakePos);
                break;
            case "ArrowDown":
                snakePos.yPos = snakePos.yPos + 5;
                snake.move(snakePos);
                break;
        }

        nextKey = null;
    };

    const update = (time?: number) => {
        time = time || 0;
        if(time - timeStamp >= speed) {
            timeStamp = time;
            checkKey();
        }
        requestAnimationFrame(update.bind(timeStamp))
    };

    keyboardListener();
    update()
}
