let servicio, forma, costo, descuento;
alert ("servicio disponible")
servicio= parseInt (prompt ("Ingrese \n 1.alisado \n 2.uñas  \n 3.tintes \n 4.skincare \n 5.spa"));

while (servicio <1 || servicio >5) 
{
    servicio= parseInt (prompt ("Ingrese correctamente \n 1.alisado \n 2.uñas  \n 3.tintes \n 4.skincare \n 5.spa"));
}

descuento=costo*0.25;
forma=parseInt(prompt("ingrese la forma de pago \n 1-credito \n 2-efectivo"))


while (forma<1 || forma>2)
    {
        forma=parseInt(prompt("ingrese la forma de pago correctamente \n 1-credito \n 2-efectivo"))    
    }

  
    //procesos
    switch (servicio)
    {
        case 1:
        {  
            costo=50;
            break;
        }
     case 2:
     {
        costo = 25;
        brak;
     } 
     case 3:
    {
        costo=35;
        break;
      }
        case 4:
      {
      
        costo=50;
        break;
      }
        case 5:
    {
            costo=80;
            break;
    }
    

//fin sw
    }
      //impresion

   if (forma==1 && servicio==1)
      {
        document.write ("Usted se hizo su alisado <br>");
        document.write ("Usted ha cancelado con con tarjeta de credito <br>");
        document.write ("El costo inicial del servicio es de: "+costo+" <br>");
        document.write ("se le hara un recargo del 10%" +(costo*0.10)+"<br>");
        document.write ("El pago total sera de:  " +(costo *1.10));
      document.write("el descuento es del 25% : "+(costo-descuento))


      }
        document.write ("Usted se hizo su alisado <br>");
        document.write ("Usted ha cancelado con con tarjeta de credito <br>");
        document.write ("El costo inicial del servicio es de: "+costo+" <br>");
        document.write ("se le hara un recargo del 10%" +(costo*0.10)+"<br>");
        document.write ("El pago total sera de:  " +(costo *1.10));
      document.write("el descuento es del 25% : "+(costo-descuento))


      
      if(descuento=0.25)
{

}

     else if(forma==1 && servicio==2)
     {
        document.write ("Usted se hizo su uñas <br>");
        document.write ("Usted ha cancelado con con tarjeta de credito <br>");
        document.write ("El costo inicial del servicio es de: "+costo+" <br>");
        document.write ("se le hara un recargo del 10%" +(costo*0.10)+"<br>");
        document.write ("El pago total sera de:  " +(costo *1.10),"<br>");
        
     }
    else if (forma==1 && servicio==3)
{
    document.write ("Usted se hizo su tinte <br>");
        document.write ("Usted ha cancelado con con tarjeta de credito <br>");
        document.write ("El costo inicial del servicio es de: "+costo+" <br>");
        document.write ("se le hara un recargo del 10%" +(costo*0.10)+"<br>");
        document.write ("El pago total sera de:  " +(costo *1.10));


     }
    
     else if(forma==1 && servicio==4)
     {
        document.write ("Usted se hizo su skincare <br>");
        document.write ("Usted ha cancelado con con tarjeta de credito <br>");
        document.write ("El costo inicial del servicio es de: "+costo+" <br>");
        document.write ("se le hara un recargo del 10%" +(costo*0.10)+"<br>");
        document.write ("El pago total sera de:  " +(costo *1.10));

     }

     else  if(forma==1 && servicio==5)
     {
        document.write ("Usted se hizo su spa <br>");
        document.write ("Usted ha cancelado con con tarjeta de credito <br>");
        document.write ("El costo inicial del servicio es de: "+costo+" <br>");
        document.write ("se le hara un recargo del 10%" +(costo*0.10)+"<br>");
        document.write ("El pago total sera de:  " +(costo *1.10));

     }
     else if (forma==2 && servicio==1)
     {
      document.write("usted se hizo un alisado");
      document.write("el pago total sera de :"+(costo*0.10)+"<br>")
     }
     else if (forma==2 && servicio==2)
     {
      document.write("usted se hizo un alisado");
      document.write("el pago total sera de :"+(costo*0.10)+"<br>")
     }
     else if (forma==2 && servicio==3)
     {
      document.write("usted se hizo un alisado");
      document.write("el pago total sera de :"+(costo*0.10)+"<br>")
     }
     else if (forma==2 && servicio==4)
     {
      document.write("usted se hizo un alisado");
      document.write("el pago total sera de :"+(costo*0.10)+"<br>")
     }
     else  (forma==2 && servicio==5)
     {
      document.write("usted se hizo un alisado");
      document.write("el pago total sera de :"+(costo*0.10)+"<br>")
     }