import { Controller } from "@hotwired/stimulus";

function hideArrow(arrow) {
  arrow.classList.add("presentation__arrow--hidden");
}

function showArrow(arrow) {
  console.log("event fired");
  arrow.classList.remove("presentation__arrow--hidden");
}
let scrollDebouncing = null;

export default class extends Controller {
  connect() {
    console.log("arrow controller is connected");
  }

  toggleArrow(event) {
    const documentHeight = document.body.scrollHeight;
    const currentScroll = window.scrollY + window.innerHeight;
    const modifier = 100;
    if (!scrollDebouncing) {
      setTimeout(() => {
        if (currentScroll + modifier > documentHeight) {
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
