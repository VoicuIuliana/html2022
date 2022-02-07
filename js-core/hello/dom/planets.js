
var p = document.getElementById('greenplanet');
p.innerText = 'An alien appeared';
p.innerHTML = '<br>An alien appeared </br>';
// p.style.color = 'red';
// p.style.backgroundColor = 'rgb(230, 210, 200)'

//putem seta stylul direct din js 
//dar recomandat este sa folosim css +clase
//NU SE PASTREAZA DACA AVEM MAI MULTE CLASE - SE STERG
//p.className = 'warning'

//ADAUGA O CLASA ELEMENTULUI
p.classList.add("warning");

//pentru a sterge o clasa folosim remove in loc de add
//p.classList.remove('warning');


//pt a crea un element nou - p este dee la paragraf
var newElement = document.createElement('p');
newElement.innerText = 'hello there!';
//punem elementul in body la sfarsit
//document.querySelector('body').appendChild(newElement);
//punem elementul inaintea elementului p in body:
p.append(newElement);

//sterge un element:
document.querySelector('#blueplanet').remove();

// executa functia changeMessage cand se da clic pe input:  
document.querySelector('input').addEventListener('click', changeMessage);

function changeMessage() {
    document.querySelector('#redplanet').classList.add('worning');
}


// e.append(elem) - adauga la sfarsitul elementului e
// e.prepend(elem0) - adauga la inceputul elementului e
// e.before(elem) - adauga inainte de elementul e
// e.after(elem) - adauga dupa elementul e
