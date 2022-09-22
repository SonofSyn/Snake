import SnakeGame from "./scripts/game.js"
const canvas: HTMLCanvasElement = document.getElementById('board') as HTMLCanvasElement;
const scoreElement: HTMLElement = document.getElementById('score') as HTMLElement;
const label: HTMLElement = document.getElementById('label') as HTMLElement;
SnakeGame(canvas,scoreElement,label)

