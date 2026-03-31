export class Sound {
static bg = new Audio("assets/audio/background.mp3");
static flip = new Audio("assets/audio/flip.mp3");
static win = new Audio("assets/audio/win.mp3");
static fail = new Audio("assets/audio/fail.mp3");
static gameOver = new Audio("assets/audio/game-over.mp3");

  static playBg() {
    this.bg.loop = true
    this.bg.play()
  }

  static playFlip() {
    this.flip.currentTime = 0;
    this.flip.play();
  }

  static playWin() {
    this.win.play()
  }

  static playFail() {
    this.fail.play()
  }
  static playGameOver() {
    this.gameOver.play()
  }
}