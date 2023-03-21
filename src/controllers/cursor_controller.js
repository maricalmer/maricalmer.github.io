import { Controller } from "@hotwired/stimulus";
import { gsap } from "gsap";

export default class extends Controller {
  static targets = ["big", "small", "hoverable"];

  onMouseMove(event) {
    gsap.to(this.bigTarget, {
      duration: 0.4,
      x: event.clientX,
      y: event.clientY
    })
    gsap.to(this.smallTarget, {
      duration: 0.1,
      x: event.clientX,
      y: event.clientY
    })
  }
  onMouseHover() {
    gsap.to(this.bigTarget, {
      duration: 0.3,
      scale: 4
    })
  }
  onMouseHoverOut() {
    gsap.to(this.bigTarget, {
      duration: 0.3,
      scale: 1
    })
  }
}
