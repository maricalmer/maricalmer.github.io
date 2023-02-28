import { Controller } from "@hotwired/stimulus";
// import { gsap } from "gsap";

export default class extends Controller {

  connect() {
    console.log("canvas controller connected");
  }
}
    // let Plus = function () {
    //   this.x = 0;
    //   this.y = 0;

    //   this.left = 0;
    //   this.top = 0;

    //   this.width = 0;
    //   this.height = 0;

    //   this.scale = 1;
    // }

    // Plus.prototype.draw = function (context) {
    //   context.setTransform(this.scale, 0, 0, this.scale, this.left + this.x, this.top + this.y);

    //   context.moveTo(0, -this.height / 2);
    //   context.lineTo(0, this.height / 2);

    //   context.moveTo(-this.width / 2, 0);
    //   context.lineTo(this.width / 2, 0);
    // }

    // let c = document.getElementById("c");
    // let context = c.getContext("2d");

    // let signs = [];
    // let mouse = { x: 0, y: 0 };
    // let gridLength = 9;

    // let mouseMoved = false;
    // let mouseOver = false;

    // for (let i = 0; i < gridLength; i++) {
    //   signs[i] = [];

    //   for (let j = 0; j < gridLength; j++) {
    //     let sign = new Plus();

    //     sign.left = c.width / (gridLength + 1) * (i + 1);
    //     sign.top = c.height / (gridLength + 1) * (j + 1);

    //     sign.width = 10;
    //     sign.height = 10;

    //     signs[i][j] = sign;
    //   }
    // }

    // gsap.ticker.addEventListener("tick", draw);

    // function draw() {
    //   if (mouseOver && mouseMoved) {
    //     calculateIconPosition();
    //     mouseMoved = false;
    //   }
    //   calculateIconPosition();
    //   context.clearRect(0, 0, c.width, c.height);
    //   context.save();
    //   context.beginPath();
    //   for (let i = 0; i < gridLength; i++) {
    //     for (let j = 0; j < gridLength; j++) {
    //       let sign = signs[i][j];

    //       sign.draw(context);
    //     }
    //   }
    //   context.closePath();
    //   context.restore();
    //   context.stroke();
    // }

    // function calculateIconPosition() {
    //   for (let i = 0; i < gridLength; i++) {
    //     for (let j = 0; j < gridLength; j++) {
    //       let sign = signs[i][j];
    //       let radius = 20;
    //       let dx = mouse.x - sign.left;
    //       let dy = mouse.y - sign.top;
    //       let dist = Math.sqrt(dx * dx + dy * dy) || 1;

    //       let angle = Math.atan2(dy, dx);

    //       if (dist < radius) {
    //         radius = dist;
    //         gsap.to(sign, { duration: 0.3, scale: 2 });
    //       } else {
    //         gsap.to(sign, { duration: 0.3, scale: 1 });
    //       }

    //       gsap.to(sign, {
    //         duration: 0.3,
    //         x: Math.cos(angle) * radius,
    //         y: Math.sin(angle) * radius
    //       })
    //     }
    //   }
    // }

    // c.addEventListener("mousemove", mouseMove);

    // function mouseMove() {
    //   let rect = c.getBoundingClientRect();
    //   mouse.x = e.clientX - rect.left;
    //   mouse.y = e.clientY - rect.top;

    //   mouseMoved = true;
    // }

    // c.addEventListener("mouseenter", function () {
    //   mouseOver = true;
    // })

    // c.addEventListener("mouseleave", function () {
    //   mouseOver = false;
    //   for (let i = 0; i < gridLength; i++) {
    //     for (let j = 0; j < gridLength; j++) {
    //       let sign = signs[i][j];
    //       gsap.to(sign, { duration: 0.3, x: 0, y: 0, scale: 1 });
    //     }
    //   }
    // })
