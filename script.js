const btnContainer = document.querySelector('.btn-container');
const container = document.querySelector('.container');
const loveContainer = document.querySelector('.love-container')

function desviar(t) {
    const nao = t
    btnContainer.style.position = 'initial'
    nao.style.position = 'absolute'
    nao.style.bottom = randNum(10,90);
    nao.style.left = randNum(10,90);

    console.log('desviei')
}

function sim() {
    container.classList.toggle('hidden')
    loveContainer.classList.toggle('hidden')
}

function randNum(min, max) {
    return (Math.random() * (max-min) + min) + '%';
}