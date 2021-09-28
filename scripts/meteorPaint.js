const initMeteorPaint = () => {

	const canvas = document.getElementById('meteors')
	let context = canvas.getContext('2d')

	let draw_color = "white"
	let draw_width = "4"
	let is_drawing = false
	let mouseX
	let mouseY

	const start = (event) => {
		event.preventDefault()
		is_drawing = true

		context.beginPath()
		context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)


	}

	const draw = (event) => {
		if (is_drawing) {
			context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)
			mouseX = e.pageX;
			mouseY = e.pageY;
			context.strokeStyle = draw_color
			context.lineWidth = draw_width
			context.lineCap = "round"
			context.lineJoin = "round"
			context.stroke()
		}
		event.preventDefault()

	}

	const stop = (event) => {
		if (is_drawing) {
			context.stroke()
			context.closePath()
			is_drawing = false
		}
		event.preventDefault()
	}

	const loop = function () {
		const size = 100, halfSize = size / 2;
		context.fillStyle = 'white';
		context.fillRect(mouseX - halfSize, mouseY - halfSize, size, size);
		requestAnimationFrame(loop);
	};

	loop()

	canvas.addEventListener('touchstart', start, false)
	canvas.addEventListener('touchmove', draw, false)
	canvas.addEventListener('touchend', stop, false)
	canvas.addEventListener('mousedown', start, false)
	canvas.addEventListener('mousemove', draw, false)
	canvas.addEventListener('mouseup', stop, false)
	canvas.addEventListener('mouseout', stop, false)



}

export default initMeteorPaint