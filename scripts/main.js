import "../styles/main.scss";
import anime from "animejs";
// import splitting from "splitting";
// import LocomotiveScroll from "locomotive-scroll";

let scroll;

const introAnim = () => {
  anime({
    targets: "#header-year > path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 2000,
  });

  anime({
    targets: "#header-wordmark > svg > path",
    translateY: [50, 0],
    translateX: [10, 0],
    opacity: [0, 1],
    duration: 1200,
    delay: anime.stagger(100, { direction: "reverse" }),
    easing: "easeInOutQuad",
  });

  anime
    .timeline(
      {
        targets: ".header-dates > span > .char",
        translateY: [0, -10],
        easing: "easeInOutSine",
        duration: 200,
        opacity: [0, 1],
        delay: (el, i) => i * 10,
      },
      "+=400"
    )
    .add(
      {
        targets: ".header-subtitle",
        easing: "easeInOutQuad",
        translateY: [10, 0],
        opacity: [0, 1],
        duration: 400,
      },
      "+=800"
    )
    .add({
      targets: ".header-cta-wrapper",
      easing: "easeInOutQuad",
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 200,
    })
    .add({
      targets: "nav",
      easing: "easeInOutExpo",
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 1200,
    });
};

// if (window.innerWidth > 600) {
//   scroll = new LocomotiveScroll({
//     el: document.querySelector("[data-scroll-container]"),
//     smooth: true,
//     repeat: true,
//   });

//   splitting();
//   introAnim();
// }

if (scroll) {
  const navLinkElements = document.querySelectorAll(".nav-main a");

  navLinkElements.forEach((linkEl) => {
    linkEl.addEventListener("click", () => {
      scroll.scrollTo(document.querySelector(linkEl.dataset.link));
    });
  });
}

// document.querySelector("body").addEventListener('load', ()=> {
//   const frame = document.querySelector("")
// });
