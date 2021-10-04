import "../styles/main.scss"
import "@lottiefiles/lottie-player"
import anime from "animejs"
import splitting from "splitting"
import starryNight from "./starryNight"
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
// 	translateY: -10,
// 	delay: anime.stagger(100)
// })

// anime({
// 	targets: 'nav',
// 	opacity: 1,
// 	duration: 1000,
// 	delay: 5000
// })

starryNight()