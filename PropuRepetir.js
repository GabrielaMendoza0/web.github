var dolar;
var x=0;
var aux;
var aux1=1000;
dolar=parseInt(prompt("ingrese la cantidad de dolares 1000-100000 "));
while(dolar<1000 || dolar>1000000)
{
    dolar=parseInt(prompt("ingrese la cantidad de dolares "));
  
}
aux= dolar-1000;//tamaño
alert("el valor de aux es "+aux);
//var Dolares=new Array(5000);
var BTC=new Array(aux);
var ETH=new Array(aux);
var otra;
while(x<aux)
{
     
 otra=((aux1/57.810.toFixed(5)))/aux1;
 

BTC[x]=otra;

ETH[x]=(aux1/3.062);

aux1++;
x++;


   

}//fin llenar 



var j=0;
var otra=1000;
document.write("Dolares___________________BTC__________________________ETH <br>");
//imprimir el vector 
while(j<BTC.length)
{
    document.write(otra+"-------------------"+BTC[j]+"---------------"+ETH[j]+"<br>");
    document.write("<br><br>");

    j++;
    otra++;
    aux1++;

}




  