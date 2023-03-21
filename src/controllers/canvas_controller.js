import { Controller } from "@hotwired/stimulus";
import { gsap } from "gsap";

const dots = [];
const mouse = { x: 0, y: 0 };
const gridLength = 15;
let mouseMoved = false;
let mouseOver = false;
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
let mouseMoveDebouncing = null;

function registerCursorMove(event) {
  if (!mouseMoveDebouncing) {
    setTimeout(() => {
      if (event.targetTouches && event.targetTouches[0]) {
        event = event.targetTouches[0];
      }
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouseMoved = true;
      mouseMoveDebouncing = null;
    }, 10);
  }
  mouseMoveDebouncing = event;
}

export default class extends Controller {
  connect() {
    class Dot {
      constructor() {
        this.x = 0;
        this.y = 0;

        this.left = 0;
        this.top = 0;

        this.width = 1;
        this.height = 1;

        this.scale = 1;
      }
    }

    Dot.prototype.draw = function drawing() {
      context.save();
      context.beginPath();
      context.setTransform(
        this.scale,
        0,
        0,
        this.scale,
        this.left + this.x,
        this.top + this.y
      );
      context.lineWidth = 2;

      context.moveTo(0, -1);
      context.lineTo(0, 1);

      context.stroke();
      context.closePath();
      context.restore();
    };

    for (let i = 0; i < gridLength; i += 1) {
      dots[i] = [];
      for (let j = 0; j < gridLength; j += 1) {
        dots[i][j] = new Dot();
        dots[i][j].left = canvas.width / (gridLength + 1) * (i + 1);
        dots[i][j].top = canvas.height / (gridLength + 1) * (j + 1);
      }
    }

    function dist([x1, y1], [x2, y2]) {
      const dx = x1 - x2;
      const dy = y1 - y2;
      return Math.sqrt(dx * dx + dy * dy) || 1;
    }

    function calculateIconPosition() {
      for (let i = 0; i < gridLength; i += 1) {
        for (let j = 0; j < gridLength; j += 1) {
          const dot = dots[i][j];
          let hyp = Math.min(canvas.width, canvas.height) / (gridLength + 1) / 2;
          const d = dist([dot.left, dot.top], [mouse.x, mouse.y]);
          const ax = mouse.x - dot.left;
          const ay = mouse.y - dot.top;
          const angle = Math.atan2(ay, ax);
          if (d < hyp + dot.width) {
            hyp = d;
            gsap.to(dot, { duration: 0.3, scale: 2 });
          } else {
            gsap.to(dot, { duration: 0.3, scale: 1 });
          }

          gsap.to(dot, {
            duration: 0.3,
            x: Math.cos(angle) * hyp,
            y: Math.sin(angle) * hyp
          });
        }
      }
    }

    function draw() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.strokeStyle = "#BAB196";

      if (mouseOver && mouseMoved) {
        calculateIconPosition();
        mouseMoved = false;
      }

      for (let i = 0; i < gridLength; i += 1) {
        for (let j = 0; j < gridLength; j += 1) {
          const dot = dots[i][j];
          dot.draw(context);
        }
      }
    }
    gsap.ticker.add(draw);
  }

  mouseOverTrue() {
    mouseOver = true;
  }

  mouseMove(event) {
    registerCursorMove(event);
  }

  touchStart(event) {
    mouseOver = true;
    registerCursorMove(event);
  }

  mouseOverFalse() {
    mouseOver = false;
    for (let i = 0; i < gridLength; i += 1) {
      for (let j = 0; j < gridLength; j += 1) {
        const dot = dots[i][j];
        if (!mouseOver) {
          gsap.to(dot, {
            duration: 0.3,
            x: 0,
            y: 0,
            scale: 1
          });
        }
      }
    }
  }
}
