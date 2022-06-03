
let fijo=0.2;
let claro=0.4;
let movistar=0.6;
let entel=1;



let telefono=prompt("Ingrese linea de su llamada");
let numero=parseFloat(prompt("Ingrese el tiempo de llamada"));



let costo1= numero*fijo;
let costo2= numero*claro;
let costo3= numero*movistar;
let costo4= numero*entel;




if (telefono== "Fijo"){
    document.write(`En la linea fija se uso un tiempo de ${numero} min con un costo de ${costo1} sol`);
}
else if (telefono== "Claro"){
    document.write(`En la linea Claro se uso un tiempo de ${numero} min con un costo de ${costo2} sol`);
}
else if (telefono== "Movistar"){
    document.write(`En la linea Movistar se uso un tiempo de ${numero} min con un costo de ${costo3} sol`);    
}
else if (telefono== "Entel"){
    document.write(`En la linea Entel se uso un tiempo de ${numero} min con un costo de ${costo4} sol`);
}





