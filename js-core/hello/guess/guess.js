document.querySelector('input[type = "button"]').addEventListener('click', check);
var result = document.querySelector('#result')

// Genereaza un nr aleatoru intre 0 si 100:
var choseNumber = randomNumber(100);

// functia aceasta se numeste querry
// un querry returneaza o valoare (folosind return)
function randomNumber(max) {
    return Math.round(Math.random() * max);
}
// functia aceasta se numeste comanda
//comanda nu returneaza nimic
function check() {
    // value-reprezinta valoarea data in input
    let checkedNumber = document.querySelector('#number').value

    if (choseNumber == checkedNumber) {
        result.innerText = 'Ai ghicit!';
    } else if (choseNumber > checkedNumber) {
        result.innerText = 'Prea mic!';
    } else {
        result.innerText = 'Prea mare!';
    }
}
