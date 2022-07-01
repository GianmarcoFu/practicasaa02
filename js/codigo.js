// let numero1;
// let numero2;
// let numero3;

// numero1=parseFloat(prompt("Ingrese la primera nota"));
// numero2=parseFloat(prompt("Ingrese la segundanota"));
// numero3=parseFloat(prompt("Ingrese la tercera nota"));

// let prom=(numero1+numero2+numero3)/3

// if(prom>=17 && prom<=20){
//     document.write(`El promedio es ${prom} y ud esta aprobado `);
// }else if(prom>=13 && prom<=16){
//     document.write(`El promedio es ${prom} y ud esta regular `);
// }else if(prom<13){
//     document.write(`El promedio es ${prom} y ud esta desaprobado `);
// }else{
//     document.write(`Ingreso datos incorrecto `);
// }

// for(let i=1;i<=6;i++){
//     /* document.write("<h"+i+">Hola etiqueta</h"+i+">"); */
//     document.write(`<h${i}>hola etiqueta</h${i}>`);
// }
///////////////////////////////////////////////////////////
// for(let i=2;i<=20;i++){
//     document.write(i++);
// }PRIMERA FORMA

// for(let i=2;i<=20;i+=2){
//     document.write(i+"<br>")
// }SEGUNDA FORMA

// for(let i=1;i<=20;i++){
//     document.write(i+"<br>");
//     if(i==15){
//         break;
//     }
// }iteracion con break
///////////////////////////////////////////////////////
// for(let i=1;i<=20;i++){
        
//         if(i==15){
//              continue;
//          }
//          document.write(i+"<br>");
//     }   ITERACION CONTINUE(SIN CONTAR 15)  

// let k=0;
// while(k<=30){
//     document.write(k);
//     k+=3;
// } SACAR MULTIPLO DE 3 

// let k=0;
// let acum=0;
// do{
//     acum=acum+k;
//     k++;
//     document.write(acum+"<br>");
// }while(k<20); POR DEBAJO DE WHILE PARA OBTENER SOLO EL RESULTADO DE LA SUMA DE LOS 20 PRIMEROS NUMEROS
///////////////////////////////////////////////////////////////////////
//Funcion sin argumentos
// function saludar(){
//     alert("Bienvenido a las funciones");
// }


// saludar();


// //Funcion con argumentos
// function saludar2(nombre){
//     alert("Bienvenido a las funciones "+nombre);
// }

// let nom=prompt("Ingresa tu nombre");

// saludar2(nom)
///////////////////////////////////////////////////////////
////FUNCION PARA MULTIPLICAR DOS NUMEROS

let multiplica = function multiplica(numero1,numero2){///funcion ANONIMA
    let n1=numero1;
    let n2=numero2;

    let multi=n1*n2;
    return multi;
}

function sumar(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let sum=num1+num2;
    document.getElementById("resp").innerHTML= sum;
}
function restar(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let sum=num1-num2;
    document.getElementById("resp").innerHTML= sum;
}
function multiplicar(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let sum=num1*num2;
    document.getElementById("resp").innerHTML= sum;
}
function dividir(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let sum=num1/num2;
    document.getElementById("resp").innerHTML= sum;
}
function potenciar(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let sum=num1**num2;
    document.getElementById("resp").innerHTML= sum;
}
function limpiar(){
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("resp").innerHTML="";
}
function muestraFecha(){
    let fecha;
    fecha=new Date();
    let cadena= fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
    return cadena;
}
document.getElementById("fecha").innerHTML=muestraFecha();

function muestraHora(){
    let hora;
    hora=new Date();
    let cadena=hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
    return cadena;

}
document.getElementById("hora").innerHTML=muestraHora();


