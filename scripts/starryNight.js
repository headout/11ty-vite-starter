const getProbability = (percent) => ((Math.floor(Math.random() * 1000) + 1) < percent * 10)

const getRandInterval = (min, max) => (Math.random() * (max - min) + min)

const starryNight = () => {

	let width
	let height
	let starCount
	let circleRadius
	let circleCenter
	let first = true
	let stars = []

	const starDensity = .216
	const speedCoeff = .05

	const giantColor = '180,184,240'
	const starColor = '226,225,142'
	const cometColor = '226,225,224'


	const canvas = document.getElementById('sky')
	const ctx = canvas.getContext('2d')



	const initCanvas = () => {
		width = window.innerWidth
		height = window.innerHeight
		starCount = width * starDensity
		circleRadius = (width > height ? height / 2 : width / 2)
		circleCenter = {
			x: width / 2,
			y: height / 2
		}

		canvas.setAttribute('width', width)
		canvas.setAttribute('height', height)
	}

	initCanvas()
	window.addEventListener('resize', initCanvas)


	for (let i = 0; i < starCount; i++) {
		stars[i] = new Star()
		stars[i].reset()
	}

	draw()

	function draw() {
		ctx.clearRect(0, 0, width, height)

		let starsLength = stars.length

		for (let i = 0; i < starsLength; i++) {
			let star = stars[i]
			star.move()
			star.fadeIn()
			star.fadeOut()
			star.draw()
		}

		window.requestAnimationFrame(draw)
	}

	function Star() {

		this.reset = function () {
			this.giant = getProbability(3)
			this.comet = this.giant || first ? false : getProbability(10)
			this.x = getRandInterval(0, width - 10)
			this.y = getRandInterval(0, height)
			this.r = getRandInterval(1.1, 2.6)
			this.dx = getRandInterval(speedCoeff, 6 * speedCoeff) + (this.comet + 1 - 1) * speedCoeff * getRandInterval(50, 120) + speedCoeff * 2
			this.dy = -getRandInterval(speedCoeff, 6 * speedCoeff) - (this.comet + 1 - 1) * speedCoeff * getRandInterval(50, 120)
			this.fadingOut = null
			this.fadingIn = true
			this.opacity = 0
			this.opacityTresh = getRandInterval(.2, 1 - (this.comet + 1 - 1) * .4)
			this.do = getRandInterval(0.0005, 0.002) + (this.comet + 1 - 1) * .001
		}

		this.fadeIn = function () {
			if (this.fadingIn) {
				this.fadingIn = this.opacity > this.opacityTresh ? false : true
				this.opacity += this.do
			}
		}

		this.fadeOut = function () {
			if (this.fadingOut) {
				this.fadingOut = this.opacity < 0 ? false : true
				this.opacity -= this.do / 2
				if (this.x > width || this.y < 0) {
					this.fadingOut = false
					this.reset()
				}
			}
		}

		this.draw = function () {
			ctx.beginPath()

			if (this.giant) {
				ctx.fillStyle = 'rgba(' + giantColor + ',' + this.opacity + ')'
				ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI, false)
			} else if (this.comet) {
				ctx.fillStyle = 'rgba(' + cometColor + ',' + this.opacity + ')'
				ctx.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, false)

				//comet tail
				for (let i = 0; i < 30; i++) {
					ctx.fillStyle = 'rgba(' + cometColor + ',' + (this.opacity - (this.opacity / 20) * i) + ')'
					ctx.rect(this.x - this.dx / 4 * i, this.y - this.dy / 4 * i - 2, 2, 2)
					ctx.fill()
				}
			} else {
				ctx.fillStyle = 'rgba(' + starColor + ',' + this.opacity + ')'
				ctx.rect(this.x, this.y, this.r, this.r)
			}

			ctx.closePath()
			ctx.fill()
		}

		this.move = function () {
			this.x += this.dx
			this.y += this.dy
			if (this.fadingOut === false) this.reset()
			if (this.x > width - (width / 4) || this.y < 0) this.fadingOut = true
		};

		(function () {
			setTimeout(function () {
				first = false;
			}, 50)
		})()
	}

}

export default starryNight