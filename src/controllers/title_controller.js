import { Controller } from "@hotwired/stimulus";
import anime from 'animejs/lib/anime.es.js';

export default class extends Controller {
  static targets = ["title1", "title2"];

  motionFirstPair(event) {
    const scrollTop = document.documentElement.scrollTop * 0.1;
    this.title1Target.style.transform = "translateX(-" + scrollTop + "px)";
    anime({
      targets: '.titles__shadow1',
      translateX: -scrollTop,
      delay: 1
    });
  }
  motionSecondPair() {
    const scrollTop = document.documentElement.scrollTop * 0.1;
    this.title2Target.style.transform = "translateX(" + scrollTop + "px)";
    anime({
      targets: '.titles__shadow2',
      translateX: scrollTop,
      delay: 1
    });
  }
}
