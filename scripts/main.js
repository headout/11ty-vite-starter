import "../styles/main.scss"
import anime from "animejs"
import splitting from "splitting"
import starryNight from "./starryNight"
import LocomotiveScroll from 'locomotive-scroll'

let scroll;

const introAnim = () => {

	anime({
		targets: '#header-year > path',
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		duration: 2000,
	})

	anime({
		targets: '#header-wordmark > svg > path',
		translateY: [50, 0],
		translateX: [10, 0],
		opacity: [0, 1],
		duration: 1200,
		delay: anime.stagger(100, { direction: 'reverse' }),
		easing: 'easeInOutQuad'
	})
}

if (window.innerWidth > 600) {
	scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true,
		repeat: true
	})

	introAnim()
}

starryNight()