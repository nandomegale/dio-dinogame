const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 90;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}


function jump() {
    isJumping = true;
    let upInterval = setInterval(() => {
        if (position >= 240) {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if (position <= 90) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            position += 20;
            dino.style.bottom = position + 'px';
        }

    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 900;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 900 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -10) {
            clearInterval(leftInterval);
            background.removeChild(cactus);

        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 150) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="gameover">Fim de jogo</h1>';
        } else {

            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);

}
createCactus();
document.addEventListener('keydown', handleKeyUp);