
for (var j = 1; j <= 10; j++) {
    document.write( "<br> " +"<br>" + "Multiplication table: " + j);
    for (var i = 1; i <= 10; i++) {
        document.write("<br>" + j + "*" + i + "=" + (i * j));
    }
}

// Aceasi chestie doar ca am folosit while

/*var i = 2;
var j = 1;
var max = 10;

while(j <= max){
    //String cu concatenare 
     var message =j+ "*" + i + "=" + i*j + "<br>"
    // STRING CU INTERPOLARE
    message ="${i} * ${j} = ${j*i}'

}*/