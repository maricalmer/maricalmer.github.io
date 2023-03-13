import { Controller } from "@hotwired/stimulus";
import anime from 'animejs/lib/anime.es.js';

export default class extends Controller {
  static targets = ["title1", "title2"];
  connect() {
    console.log("title controller is connected");
  }

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

  // motionFirstShadow() {
  //   const scrollTop = document.documentElement.scrollTop * 0.2;
  //   anime({
  //     targets: '.titles__shadow1',
  //     translateX: -scrollTop,
  //     delay: 2
  //   });
  // }
  // motionSecondShadow() {
  //   const scrollTop = document.documentElement.scrollTop * 0.2;
  //   anime({
  //     targets: '.titles__shadow2',
  //     translateX: scrollTop,
  //     delay: 1
  //   });
  // }
}
