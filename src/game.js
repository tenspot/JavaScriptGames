import Paddle from "/src/paddle";
import InputHandler from "/src/input";
import Ball from "/src/ball";
import Brick from "/src/brick";

import { buildLevel, level1 } from "/src/levels";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);

    let bricks = buildLevel(this, level1);

    // Note the spread operator '...bricks' used to add an array to an
    // existing array.
    this.gameObjects = [this.ball, this.paddle, ...bricks];
    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    this.gameObjects.forEach(object => object.update(deltaTime));
  }

  draw(ctx) {
    this.gameObjects.forEach(object => object.draw(ctx));
  }
}
