function IniciarPartida() {
 
    let hola=true; 
    let jugado=0;
    let tiene=0;
   
   while(hola==true)
   {
   
   let salio;
   
   let moneda;
   
   let apuesto;
   
   
    salio=Math.ceil(Math.random()*2)
    apuesto=window.prompt('Cuanto va apostar')
    moneda=window.prompt('Cual es tu eleción cara(1) o sello(2)?');
   
    jugado=jugado+1
   
   switch (moneda==0 && salio==0) {
   
       case moneda==1 && salio==1:
       tiene=tiene+(parseInt(apuesto)*2)
        alert('Felicidades haz ganado tu saldo es '+tiene+ ' ,has jugado '+jugado+' vez');
           break;
   
           case moneda==1 && salio==2:
   tiene=tiene-parseInt(apuesto)
        alert('Lo siento haz perdido tu saldo es '+tiene+ ' ,has jugado '+jugado+' vez');
   
           break;
   
           case moneda==2 && salio==2:
           tiene=tiene+(parseInt(apuesto)*2)
        alert('Felicidades haz ganado tu saldo es '+tiene+ ' ,has jugado '+jugado+' vez');
   
           break;
   
           case moneda==2 && salio==1 :
           tiene=tiene-parseInt(apuesto)
       alert('Lo siento haz perdido tu saldo es '+tiene+ ' ,has jugado '+jugado+' vez');
   
           break;
       default:
           break;
   }
   
    
    hola=window.confirm('¿Deseas continuar?')
   }
   
    swal('Tu has jugado '+jugado+' vez y tu saldo es ' +tiene );
   
   }