import SnakeGame from "./scripts/game.js"

const canvas: HTMLCanvasElement = document.getElementById('board') as HTMLCanvasElement;
const score: HTMLElement = document.getElementById('score') as HTMLElement;

SnakeGame(canvas)
