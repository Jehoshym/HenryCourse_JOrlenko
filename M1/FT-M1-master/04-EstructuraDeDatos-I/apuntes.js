/*      --- ESTRUCTURAS DE DATOS I ---

***RECURSION***
Es cuando una funcion se llama y ejecuta a si misma. Esto sucede hasta que se cumpla una condición.
*/
function countdown(n) {
    for(let i = n; i >= 0; i--) {
        console.log(i)
    }
}
countdown(10);
/*este sería un tipico countdown de un numero  */

function countdownRecursiva(n){
    console.log(n);
    countdownRecursiva(n - 1);
}
/* Acá estamos creando una secuencia recursiva que crea una nueva funcion en la pila de ejecución, llenando la pila de ejecución. -> es una funcion sin condicion de finalizacion
*/
function factorial(n){
    if(n === 0 || n === 1) return 1;
    else if (n < 0) return 0;
    return n * factorial(n-1);
    
}
console.log(factorial(n));

//esto es un ejemplo de recursión, factorial se llama a si misma, siempre que sea mayor a 1
