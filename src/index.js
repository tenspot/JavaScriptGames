/*
*   FreeCodeCamp
*   Example of writing games in JavaScript using https://codesandbox.io
*   Source: https://www.youtube.com/watch?v=3EMxBkqC4z0
*/
import Game from "/src/game";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

/*
* Some example code to start...
// clear the whole canvas
ctx.clearRect(0, 0, 800, 600);

// Draw a red square
ctx.fillStyle = "#f00";
ctx.fillRect(20, 20, 100, 100);

// Draw a blue square
ctx.fillStyle = "#00f";
ctx.fillRect(200, 200, 50, 50);
*/

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

let lastTime = 0;

function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

// Start the game loop by synch it to the animation frame request signal
requestAnimationFrame(gameLoop);
