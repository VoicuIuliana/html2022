var date = new Date();
var hour = date.getHours();

var startOfNight = 22;
var statOfMorning =12;


// Daca este dimineata atunci scriu'Buna dimineata!'
// Daca este pranz atunci scriu'Pofta buna!'
// Daca este dupa-amiaza atunci scriu'Buna ziua!'
// Daca este seara atunci scriu'Buna seara!'
// Daca este noapte atunci scriu'Noapte buna!'


if (hour < 4) {
    document.write("Noapte buna!");
} else if (hour < statOfMorning) {
    document.write("Buna dimineata");
} else if (hour == 12) {
    document.write("Pofta buna!");
} else if (hour < 17) {
    document.write("Buna seara!");
} else if (hour < startOfNight) {
    document.write("Buna seara!");
} else {
    ("Noapte buna!");
}



