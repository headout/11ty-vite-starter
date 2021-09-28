import "../styles/main.scss";
import starryNight from "./starryNight";
import initMeteorPaint from "./meteorPaint";
import "@lottiefiles/lottie-player";
import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
// 	el: document.querySelector('[data-scroll-container]'),
// 	smooth: true
// });

// const navLinkElements = document.querySelectorAll('.nav-main a')

// navLinkElements.forEach(linkEl => {
// 	linkEl.addEventListener('click', () => {
// 		console.log(linkEl.dataset.link)
// 		scroll.scrollTo(document.querySelector(linkEl.dataset.link))
// 	})
// })


starryNight()
initMeteorPaint()