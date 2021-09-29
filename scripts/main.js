import "../styles/main.scss"
import "@lottiefiles/lottie-player"
import anime from "animejs"
import splitting from "splitting"
import starryNight from "./starryNight"
import initMeteorPaint from "./meteorPaint"
import LocomotiveScroll from 'locomotive-scroll'

const scroll = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
	smooth: true,
	repeat: true
})

if (scroll) {
	const navLinkElements = document.querySelectorAll('.nav-main a')

	navLinkElements.forEach(linkEl => {
		linkEl.addEventListener('click', () => {
			console.log(linkEl.dataset.link)
			scroll.scrollTo(document.querySelector(linkEl.dataset.link))
		})
	})

}

// splitting()


// anime({
// 	targets: '.header-dates > span > .char',
// 	translateX: 270,
// 	delay: anime.stagger(100) // increase delay by 100ms for each elements.
// })


starryNight()
initMeteorPaint()