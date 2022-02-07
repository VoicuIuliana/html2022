//Data curenta in variabila date
var date = new Date();

var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var isRaining = false;
// Am adaugat la un sir o variabila (concatenare)
var message = "Hell! Este ora" + hour + ":" + minutes + ":" + seconds;

// o variabila fara valoare (undefiend)
var city

// alert(message);

console.log(message);

document.write('<h1>' + message + '</h1>');