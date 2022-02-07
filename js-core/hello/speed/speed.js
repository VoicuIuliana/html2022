function randomNumber(max) {
    return Math.round(Math.random() * max);

}
function randomLetter() {
    let letters = "ABCDEFGIJKLMNOPQRSTUVWXYZ"
    let i = randomNumber(letters.length-1)
    return letters[i]
}

function randomColor() {
    let red = randomNumber(255)
    let green = randomNumber(255)
    let blue = randomNumber(255)
    return `rgb(${red}, ${green}, ${blue})`
}

function randomLetterElement() {
    let div = document.createElement('div')
    div.innerText = randomLetter()
    div.style.backgroundColor = randomColor()
    div.style.top = randomNumber(99) + 'vh'
    div.style.left = randomNumber(99) + 'vw'
    div.classList.add('letter')
    document.querySelector('body').append(div)
}
async function run() {
    var gameOver = false
    while (!gameOver) {
        randomLetterElement()
        await new Promise(r => setTimeout(r, 1000))
    }
}   

function hideStart(){
    document.querySelector('input').style.display = 'none'
}

document.querySelector('input').addEventListener('click', run)

document.addEventListener('keydown', function(event) {
    var elements = document.getElementsByClassName("letter");
    for(var i = 0; i < elements.length; i ++){
        if(elements[i].innerHTML == event.key.toUpperCase()){
            elements[i].remove();
        }
    }

    console.log(event.key);