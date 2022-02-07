var scores = [50, 65, 40, 67, 87, 98, 34, 54, 60, 90]

document.write('Al doilea scor este:' + '' + scores[1] + '<br>')
document.write('Ultimul scor este:' + '' + scores[9] + '<br>')

var max = 0;
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > max) {
        max = scores[i]
    }

}
document.write('Scorul maxim este:' + '' + max + '<br>')

// sort sorteaza un array doar in ordine ascendenta
scores.sort()
document.write(scores + '<br>')

var fruits = ['orange', 'kiwi', 'apple', 'banana']

fruits[0] = 'wasabi'

// push adauga la sfarsitul array-ului - pop scoate de la sfarsitul arrayului
fruits.push('pear')
// unshift adauga la inceputul array-ului- shift scoate de la inceput
fruits.unshift('strawberry')
//splice sterge sau inlocuieste elemente din array 1 este pozitia si 2 -sterge 2 elemente
fruits.splice(1, 2)

fruits.sort()
document.write(fruits + '<br>')

var words = ['hello', 'Java Script', 'Visual Studio', 'if', 'Object']

var upperWords = []
for (let word of words) {
    //word[0] este prima litera, verificam ca se afla intre A-Z
    // O alta  varianta word[0].toUpperCase() == word[0]
    if (word[0] >= 'A' && word[0] <= 'Z') {
        upperWords.push(word)
    }
}
upperWords.sort()
document.write(upperWords)