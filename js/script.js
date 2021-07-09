//archivo de pruebas

function name() {
    console.log("hola mundo cochino");
};


//ingresar un numero y decirme si soy mayo o menor
function comparar(edad) {
    if (edad >= 18) {
        console.log("mayor de edad");
    } else if (edad > 0) {
        console.log("menor de edad");
    } else {
        console.log("ingresar un valor valido");
    }
}

function suma(a, b) {
    var resultado = a + b;
    console.log("resultado: " + resultado);
    return resultado
}

function multiplicar(a, b) {
    var resultado = a * b;
    console.log("rmulti: " + resultado);
    return resultado
}

function resta (a,b){
    var resultado = a-b;
    console.log("Resta: " + resultado);
    return resultado
}

function dividir(a,b){
    var resultado= a/b;
    console.log("Division: " + resultado);
    return resultado
}


function llamado (llamada, llamada2, llamada3){
    var resultado1 = multiplicar(llamada, llamada2)
   // console.log("rllamado: " + resultado1);
    var final = resultado1 / llamada3;
    console.log("Rfinal: " + final);
}

//llamado(3,5,6);

function calculadora (calculo1, calculo2, calculo3, calculo4, calculo5){
    var resultado = parseInt (suma(calculo1, calculo2));
    var resultado1 = parseInt (resta(resultado,calculo3));
    var resultado2 = parseInt (multiplicar(resultado1,calculo4));
    var resultado3 = parseInt (dividir(resultado2, calculo5));
    console.log("El resultado final es: " + resultado3);
}

function calculadora2 (operacion, a, b){
    var resultado;
    if (operacion == "suma"){
        resultado = a+b;
    }else if(operacion == "resta"){
        resultado = a-b;  
    }else if (operacion == "multiplicar"){
        resultado = a*b;  
    }else if (operacion == "dividir"){
        resultado = a/b;  
    }
    console.log("El resultado es: " + resultado);
}


function calc (operator, a, b){
    var result;
    switch(operator){
        case "suma": result = a+b; break;
        case "resta": result = a-b; break;
        case "multi": result = a*b; break;
        case "divi": result = a/b; break;
        default: break;
    }
    console.log("El resultado: " + result);
}

//calc("divi", 55, 16);
//calculadora2 ("dividir",30,20);

function contar(a){
    for (var i=0; i<=a; i++){
        console.log("el numero es: " + i);
    }
}

//contar(5);

function cualquiercosa(a){
    var n=0;
    while(n<=a){
        console.log("el numero: " + n);
        n++;
    }
}

//cualquiercosa(10);

function imprimir(){
    var ar = ["Michelle","Lara","Libra","A+","MD"];
    for (var i=0; i<ar.length; i++){
        console.log("valor: " + ar[i]);
    }
}
imprimir();