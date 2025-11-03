const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1080
canvas.height = 720

context.fillStyle = 'white'
context.fillRect(0, 0, canvas.width, canvas.height)

const backgroundImage = new Image()
backgroundImage.src = './img/OpalTown.png'

const playerImage = new Image()
playerImage.src = './img/Player.png'

class Sprite {
    constructor({
        position, velocity, image
    }) {
        this.position = position
        this.image = image
    }

    draw() {
        context.drawImage(this.image, this.position.x, this.position.y)
    }
}

const background = new Sprite({
    position: {
        x: -1030,
        y: -250
    },
    image: backgroundImage
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

function animate() {
    window.requestAnimationFrame(animate) //constantly calling animate
    background.draw()
    context.drawImage(
        playerImage,
        0, //crop position x
        0, //crop position y
        playerImage.width / 4, //crop position width
        playerImage.height / 4, //crop position height
        420, //player position
        420, //player position
        playerImage.width / 4,
        playerImage.height / 4,)

    //move background to make player walk around map
    if (keys.w.pressed && lastKey === 'w') {
        background.position.y += 3
    }
    else if (keys.a.pressed && lastKey === 'a') {
        background.position.x += 3
    }
    else if (keys.s.pressed && lastKey === 's') {
        background.position.y -= 3
    }
    else if (keys.d.pressed && lastKey === 'd') {
        background.position.x -= 3
    }
}
animate()

//check when key is pressed
let lastKey = ''
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            break;
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break;
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break;
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break;
    }
})

//check when key is released
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            break;
        case 'a':
            keys.a.pressed = false
            break;
        case 's':
            keys.s.pressed = false
            break;
        case 'd':
            keys.d.pressed = false
            break;
    }
})