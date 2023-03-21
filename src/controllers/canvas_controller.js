import { Controller } from "@hotwired/stimulus";
import { gsap } from "gsap";

const signs = [];
const mouse = { x: 0, y: 0 };
const gridLength = 15;
let mouseMoved = false;
let mouseOver = false;
const c = document.getElementById("canvas");
const context = c.getContext("2d");
let windowResizeDebouncing = null;
let mouseMoveDebouncing = null;

function registerCursorMove(event) {
  if (!mouseMoveDebouncing) {
    setTimeout(() => {
      if (event.targetTouches && event.targetTouches[0]) {
        event = event.targetTouches[0];
      }
      const rect = c.getBoundingClientRect();
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
    class Plus {
      constructor() {
        this.x = 0;
        this.y = 0;

        this.left = 0;
        this.top = 0;

        this.width = 0;
        this.height = 0;

        this.scale = 1;
      }
    }

    Plus.prototype.draw = function drawing() {
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
      signs[i] = [];
      for (let j = 0; j < gridLength; j += 1) {
        const min = Math.min(c.width, c.height);
        signs[i][j] = new Plus();
        signs[i][j].left = c.width / (gridLength + 1) * (i + 1);
        signs[i][j].top = c.height / (gridLength + 1) * (j + 1);
        signs[i][j].width = 1;
        signs[i][j].height = 1;
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
          const sign = signs[i][j];
          let hyp = Math.min(c.width, c.height) / (gridLength + 1) / 2;
          const d = dist([sign.left, sign.top], [mouse.x, mouse.y]);
          const ax = mouse.x - sign.left;
          const ay = mouse.y - sign.top;
          const angle = Math.atan2(ay, ax);
          if (d < hyp + sign.width) {
            hyp = d;
            gsap.to(sign, { duration: 0.3, scale: 2 });
          } else {
            gsap.to(sign, { duration: 0.3, scale: 1 });
          }

          gsap.to(sign, {
            duration: 0.3,
            x: Math.cos(angle) * hyp,
            y: Math.sin(angle) * hyp
          });
        }
      }
    }

    function draw() {
      context.clearRect(0, 0, c.width, c.height);
      context.strokeStyle = "#BAB196";

      if (mouseOver && mouseMoved) {
        calculateIconPosition();
        mouseMoved = false;
      }

      for (let i = 0; i < gridLength; i += 1) {
        for (let j = 0; j < gridLength; j += 1) {
          const sign = signs[i][j];
          sign.draw(context);
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
        const sign = signs[i][j];
        if (!mouseOver) {
          gsap.to(sign, {
            duration: 0.3,
            x: 0,
            y: 0,
            scale: 1
          });
        }
      }
    }
  }

  resizeCanvas(event) {
    if (!windowResizeDebouncing) {
      setTimeout(() => {
        for (let i = 0; i < gridLength; i += 1) {
          for (let j = 0; j < gridLength; j += 1) {
            const min = Math.min(c.width, c.height);
            const sign = signs[i][j];
            sign.left = c.width / (gridLength + 1) * (i + 1);
            sign.top = c.height / (gridLength + 1) * (j + 1);
            sign.width = min / 100;
            sign.height = min / 100;
          }
        }
        windowResizeDebouncing = null;
      }, 250);
    }
    windowResizeDebouncing = event;
  }
}
