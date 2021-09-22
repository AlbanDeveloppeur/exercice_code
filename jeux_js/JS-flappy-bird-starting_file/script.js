const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d') // context - pour animer dans un univers 2D
const img = new Image()

img.src = './media/flappy-bird-set.png'

// General settings

let gamePlaying = false; // toggle pour afficher l'écran d'accueil ou non
const gravity = .5
const speed = 6.2
const size = [51, 36]
const jump = -11.5
const cTenth = (canvas.width / 10)

let index = 0
let bestScore = 0
let currentScore = 0
let pipes = []
let flight
let flyHeight

const render = () => {
    index++

    ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1], ...size, ((canvas.width / 2) - size[0] / 2), flyHeight, ...size)

    flyHeight = (canvas.height / 2) - (size[1] / 2)

    window.requestAnimationFrame(render)
}

img.onload = render
