    var salario=new Array(5);
    var aumento=new Array(5);
    var aumento2=new Array(5);
    var x=0;//inicializado
    
    

//llenar el vector
    while(x<salario.length) //devuelve el tamaño del arreglo   comprobado
    {
    salario[x]=parseFloat(prompt("Ingrese el salario:   "));
    aumento[x]=salario[x]*1.20;
    aumento2[x]=salario[x]*1.35;
   x++;
    }//fin while

   
    //mostrando el cont de los arreglos
    var j=0; //inicializar
    


    document.write("___________________<br>");
    document.write("SALARIO------------------AUMENTO------------------AUMENTO35%<br>");
    document.write("____________________<br>");

    while(j<salario.length)  //comprobando
    {
    document.write(salario[j]+"---------------------------------"+aumento)
    var inicio = parseInt(prompt("Ingrese el valor inicial de la tabla"));
    var fin = parseInt(prompt("Ingrese el valor final de la tabla"));

function tablita(inicio,fin){
    
    var valor = parseInt(prompt("Ingrese que tabla de multiplicar quiere obtener"))

    if(inicio<=fin){
        document.write("Mostrando el contenido en forma ascendente <br>")
        for (let f = inicio; f <= fin; f++) {
            var tabla= f * valor;
            document.write(f + " * " + valor + "=" + tabla + '<br>')  
              
          }
    }

    else{
        document.write("Mostrando el contenido en forma descendente <br>")
    for (let f = inicio; f >= fin; f--) {
        var tabla= f * valor;
        document.write(f + " * "+ valor + " = " + tabla + '<br>')  
          
      }
}


}

    }