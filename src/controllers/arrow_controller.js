import { Controller } from "@hotwired/stimulus";

function hideArrow(arrow) {
  arrow.classList.add("presentation__arrow--hidden");
}

function showArrow(arrow) {
  arrow.classList.remove("presentation__arrow--hidden");
}

let scrollDebouncing = null;

export default class extends Controller {
  toggleArrow(event) {
    const documentHeight = document.body.scrollHeight;
    const currentScroll = window.scrollY + window.innerHeight;
    const bottomNoArrowZone = 100;
    if (!scrollDebouncing) {
      setTimeout(() => {
        if (currentScroll + bottomNoArrowZone > documentHeight) {
          hideArrow(this.element);
        } else {
          showArrow(this.element);
        }
        scrollDebouncing = null;
      }, 100);
    }
    scrollDebouncing = event;
  }
}
