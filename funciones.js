

//serie descendentes
var  inicio=10000;
var fin =100000;

function serie1 ()
{

    for (let index =fin ; index>=inicio; index=index-1000) {
        document.write (index, "--");

    }

}
//fin de descendentes


//serie ascendentes
var  inicio=10000;
var fin =100000;

function serie (){

    for (let index = inicio; index<=fin; index=index+1000) {
        document.write (index , "--");

    }

}
//fin ascendentes


//funciones repetidas


var texto ="Buenas tardes";
var k=1;

function frase ()

{
while (k<=10) //comprobando
{

document.write(texto, "<br>");

k++;//actualiza
//fin while
//fin repetida
}
}




//semanita

var dias=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

function semanita() {
for (let index = 0; index < dias.length; index++) {

document.write(dias[index], "<br>");
}

}
//fin de semanita
//llamando la funcion 
//semanita ();


