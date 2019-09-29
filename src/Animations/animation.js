import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin } from "gsap/TweenMax";

const NavAnimation = function () {
  TweenMax.to(".nav-font", 3, { rotationX: 350, borderBottom: '2px solid blue' })
  TweenMax.from(".nav-links", 2, { x: 300});
  TweenMax.to(".nav-links a", 5, {color: "blue"});
  console.log(document.querySelectorAll('.nav-links a'))
}

export { NavAnimation }  