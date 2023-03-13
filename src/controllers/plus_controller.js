import { Controller } from "@hotwired/stimulus";
import anime from 'animejs/lib/anime.es.js';

function morphToMinus(button) {
  anime({
    targets: button,
    points: [
      { value: "2 47, 2 46, 2 84, 45 84, 45 127, 83 127, 83 84, 126 84, 126 46, 83 46, 83 3, 45 3, 45 46, 2 46, 2 47" },
      { value: "3 84, 2 84, 21 84, 45 84, 83 84, 104 84, 126 84, 126 46, 104 46, 83 46, 45 46, 21 46, 2 46, 2 84, 3 84" }
    ],
    easing: "easeInOutQuad",
    duration: 250
  });
  button.classList.add("project__icon-path--minus");
  button.classList.remove("project__icon-path--plus");
}

function morphToPlus(button) {
  anime({
    targets: button,
    points: [
      { value: "3 84, 2 84, 21 84, 45 84, 83 84, 104 84, 126 84, 126 46, 104 46, 83 46, 45 46, 21 46, 2 46, 2 84, 3 84" },
      { value: "2 47, 2 46, 2 84, 45 84, 45 127, 83 127, 83 84, 126 84, 126 46, 83 46, 83 3, 45 3, 45 46, 2 46, 2 47" }
    ],
    easing: "easeInOutQuad",
    duration: 250
  });
  button.classList.add("project__icon-path--plus");
  button.classList.remove("project__icon-path--minus");
}

function animeText(button) {
  button.parentElement.parentElement.nextElementSibling.classList.toggle("project__description--animated-in");
  button.parentElement.parentElement.nextElementSibling.classList.toggle("project__description--animated-out");
}

function animeWrapper(button) {
  if (button.dataset.project === "infamous") {
    button.parentElement.parentElement.parentElement.classList.toggle("project__infamous-wrapper--animated-in");
    button.parentElement.parentElement.parentElement.classList.toggle("project__infamous-wrapper--animated-out");
  } else if (button.dataset.project === "portfolio") {
    button.parentElement.parentElement.parentElement.classList.toggle("project__portfolio-wrapper--animated-in");
    button.parentElement.parentElement.parentElement.classList.toggle("project__portfolio-wrapper--animated-out");
  }
}

export default class extends Controller {
  connect() {
    console.log("plus controller is connected");
  }

  animeDescription(event) {
    if (event.currentTarget.classList.contains("project__icon-path--plus")) {
      morphToMinus(event.currentTarget);
    } else {
      morphToPlus(event.currentTarget);
    }
    animeText(event.currentTarget);
    animeWrapper(event.currentTarget);
  }
}
