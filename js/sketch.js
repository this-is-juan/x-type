let font
let graphic


const speedInput = document.querySelector("input.speed") 
const inputOne = document.querySelector("input.inputOne") 
const sizeInput = document.querySelector("input.size")
const distortX = document.querySelector("input.distortX")
const distortY = document.querySelector("input.distortY")



function preload () {

	font = loadFont("fonts/spacegrotesk-medium.otf")

}

function setup () {

	createCanvas(windowWidth, windowHeight)

	createCopy()

}

function draw () {

	background("#FFF")

	const tileSize = sizeInput.value

	for (let x = 0; x < 150; x = x + 1) {

		for (let y = 0; y < 80; y = y + 1) {

			const speed = speedInput.value

			const waveX = sin(frameCount * speed + x * 0.5 + y * 0.3) * distortX.value
			const waveY = sin(frameCount * speed + x * 0.5 + y * 0.3) * distortY.value

			const sx = x * tileSize + waveX
			const sy = y * tileSize + waveY
			const sw = tileSize
			const sh = tileSize

			const dx = x * tileSize
			const dy = y * tileSize
			const dw = tileSize
			const dh = tileSize

			image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)

		}

	}		
		
}


function createCopy () {

	graphic = createGraphics(windowWidth, windowHeight)

	const text = inputOne.value
	graphic.fill("#000")
	graphic.textFont(font)
	graphic.textSize(200)
	graphic.textLeading(200)
	graphic.textAlign (CENTER, CENTER)
	graphic.text(text, width/2, height/2.8)

}

inputOne.addEventListener("input", function(){
	createCopy()
}) 


function saveImage(){
    save('exported.png');
}

function openNav() {
  document.getElementById("actions").style.bottom = "5%";
}

function closeNav() {
  document.getElementById("actions").style.bottom = "-30%";
}
