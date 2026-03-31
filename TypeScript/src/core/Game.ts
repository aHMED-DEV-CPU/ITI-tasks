import type { Card } from "../model/card.js";
import { shuffle } from "../utils/shuffle.js";
import { Sound } from "../services/sound.js";

export class Game {
  private cards: Card[] = [];
  private firstCard: Card | null = null;
  private secondCard: Card | null = null;
  private lockBoard = false;

  constructor(private container: HTMLElement) {}

  start() {
const images = [
  "assets/images/0.jpg",
  "assets/images/1.jpg",
  "assets/images/2.jpg",
  "assets/images/3.jpg",
  "assets/images/4.jpg",
  "assets/images/5.jpg",
  "assets/images/6.jpg",
  "assets/images/7.jpg",
  "assets/images/8.jpg",
  "assets/images/9.jpg",
  "assets/images/10.jpg",
];

    const duplicated = [...images, ...images];

    this.cards = shuffle(
      duplicated.map((img, index) => ({
        id: index,
        image: img,
        isFlipped: false,
        isMatched: false,
      }))
    );

    this.render();
  }

  private render() {
    this.container.innerHTML = "";

    this.cards.forEach((card) => {
      const div = document.createElement("div");
      div.classList.add("card");

      div.innerHTML = `
        <!-- FRONT = card back image -->
        <div class="front">
          <img src="assets/back.jpg" />
        </div>

        <!-- BACK = real image -->
        <div class="back">
          <img src="${card.image}" />
        </div>
      `;

      div.addEventListener("click", () => this.flipCard(card, div));

      this.container.appendChild(div);
    });
  }

  private flipCard(card: Card, element: HTMLElement) {
    if (this.lockBoard || card.isFlipped || card.isMatched) return;

    Sound.playFlip();

    card.isFlipped = true;
    element.classList.add("flipped");
    //first card
    if (!this.firstCard) {
      this.firstCard = card;
      return;
    }
    //second card
    this.secondCard = card;
    this.lockBoard = true;

    this.checkMatch();
  }

  private checkMatch() {
    // there is no cards flipped
    if (!this.firstCard || !this.secondCard) return;

if (this.firstCard.image === this.secondCard.image) {
  this.firstCard.isMatched = true;
  this.secondCard.isMatched = true;

  const firstIndex = this.cards.indexOf(this.firstCard);
  const secondIndex = this.cards.indexOf(this.secondCard);

  (this.container.children[firstIndex] as HTMLElement).classList.add("matched");
  (this.container.children[secondIndex] as HTMLElement).classList.add("matched");

  Sound.playWin();

  this.resetTurn();
  this.checkGameOver();
} else {
      Sound.playFail(); 

      setTimeout(() => {
        this.resetCards();
      }, 1000);
    }
  }
// if card wrong
  private resetCards() {
    this.cards.forEach((card, index) => {
      if (!card.isMatched) {
        card.isFlipped = false;
        const el = this.container.children[index] as HTMLElement;
        el.classList.remove("flipped");
      }
    });

    this.resetTurn();
  }
// return original state
  private resetTurn() {
    this.firstCard = null;
    this.secondCard = null;
    this.lockBoard = false;
  }

  private checkGameOver() {
    if (this.cards.every((c) => c.isMatched)) {
      Sound.playGameOver(); 
      alert("Game Over - You Won!");
    }
  }
}