function calculateAge() {
    var age = document.getElementById("varsta").value;;
    var minor = 18;
    var adult = 66;
    var retired = 110;


    // Daca este minor atuni scriu "Esti minor!"
    // Daca este adult aunci scriu "Esti adult!"
    // Daca este pensionar atunci scriu "Esti pensionar!"

    if (age < minor) {
        document.getElementById("result").innerHTML = "Esti minor!";
    } else if (age < adult) {
        document.getElementById("result").innerHTML = "Esti adult!";
    } else if (age < retired) {
        document.getElementById("result").innerHTML = "Esti pensionar!";
    } else {
        document.getElementById("result").innerHTML = "Nu te incadrezi la nici-o generatie!";
    }
}