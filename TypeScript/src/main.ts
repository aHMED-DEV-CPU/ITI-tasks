import { Game } from "./core/Game.js";
import { Sound } from "./services/sound.js"; 
const container = document.getElementById("game")  as HTMLElement;
const game = new Game(container);


document.addEventListener(
  "click",
  () => {
    Sound.playBg();
  },
  { once: true }
);

game.start();