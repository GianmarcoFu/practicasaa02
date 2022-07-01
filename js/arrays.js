// let ciudad=["Lima","Arequipa","Trujillo"];
// console.log(ciudad);
// document.write(ciudad+ "<br>");
// document.write(ciudad.length+ "<br>");
// document.write(ciudad[1]+ "<br>");

// // cuidad.push("Cusco","Puno");
// // document.write(cuidad.push());

// // ciudad.pop();
// // ciudad.unshift("Piura");
// ciudad.shift([1]);
// document.write(ciudad);

// ciudad.sort();
// document.write(ciudad+"<br>")

// let numeros=[];

// numeros[0]=8;
// numeros[1]=2;
// numeros[2]=45;
// numeros[3]=1;
// numeros[4]=9;
// let num=prompt("Cuantos valores desea ingresar al Array?");
// //for(valor_inicial; valor_final;incremento)
// for(let i=0;i<6;i++){
//     numeros[i]=prompt("Ingrese numeros:");
// }

// document.write(numeros+"<br>");
// //Funciones de comparacion
// const fc=function(a,b){
//     return a-b;
// }

// numeros.sort(fc);

// document.write(numeros);
function cargarEjemplo(){
    document.getElementById("numerosEjem").value="6,99,56,15,68,100";
}
function reiniciar(){
    location.reload();
}
function calcular(){
    let valores_array=document.getElementById("numerosEjem").value.split(/,/);
    let mayor= -Infinity;
    let menor= +Infinity;
    let suma=0;
    let promediar=0;
//Sumar
    for(let i=0;i<valores_array.length;i++){
        suma=parseInt(valores_array[i])+suma;
    }
//Obtener el mayor
    for(let i=0;i<valores_array.length;i++){
        if(parseInt(valores_array[i])>mayor) mayor=valores_array[i];
    }    
//Obtener el menor    
    for(let i=0;i<valores_array.length;i++){
        if(parseInt(valores_array[i])<menor) menor=valores_array[i];
    }
    document.getElementById("Resultado").innerHTML="La suma es: "+suma+"<br>"+
                                                    "El mayor numero es: "+ mayor+"<br>"+
                                                    "El menor numero es: "+ menor;
    
}
//====================================================================================
setInterval(muestraFrase,2000);

let frases=["Solo sé que nada sé","El que la persigue la consigue","Dime con quien andes y te dire quien eres","El que estudia triunfa"];
let indice=0;
function muestraFrase(){
    indice++;
    if(indice>=frases.length){
        indice=0;
    }
    document.getElementById("frases").innerHTML=frases[indice];
}

//==============================================================================

let colores=[];

function agregaColor(evt){
    evt.preventDefault();

    let nom=document.getElementById("colores").value;

    if(nom==""){
        alert("El campo no puede estar vacio");
    }else if(!existeNombre(nom)){
        let opcion ="<li>"+nom+"</li>";
        let lista=document.getElementById("listaC");

        lista.innerHTML+=opcion;
        colores.push(nom);
    }else{
        alert("El color exite");
    }
    //document.getElementById("listaC").innerHTML="<li>"+nom+"</li>";
}

function existeNombre(nombre){
    //busca el nombre
    
    for(let i=0;i<colores.length;i++){
        const elemento=colores[i];
        if(elemento.trim().toLowerCase()===nombre.trim().toLowerCase()){
            return true;
        }
    }
    return false;
}