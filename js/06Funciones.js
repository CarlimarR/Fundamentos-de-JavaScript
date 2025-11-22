// funciones en javascript
// las definiciones son objetos
// nombre({})


// declaracion de funcion
// si esta entre {} es una funcion
function sum(a, b) {
    return a + b;
}

//invocacion de funcion
console.log(sum(1, 2)); 

//funcion flecha
// se define la variable y se le asigna una funcion
const sumArrow = (a, b) => a + b;
console.log(sumArrow(1, 2));

//funcion expresada
const sumExpresed = function(a, b) {
    return a + b;
}
console.log(sumExpresed(1, 2));