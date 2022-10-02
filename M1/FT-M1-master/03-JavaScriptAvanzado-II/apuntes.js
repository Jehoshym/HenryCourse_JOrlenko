//------------CLASE 3: CLOUSURES----------//
/*
concepto: se genera cuando la fx() interna invoca una variable que no se encuentra en su CE y la obtiene en la fx() padre
*/
function mascotas(especie) {
    return function(nombre){
        return console.log('Mi mascota es un '+especie+' y se llama '+nombre)
    }
}

let mascota = mascotas('gato')
mascota('Laska')
/*
en este ejemplo, en 'let = mascota' se guarda el return de mascotas(): func(){}
pero al guardarse se almacena con el el argumento 'gato'
al llamar a mascota (que contiene una funcion) esta se ejecuta y usa el argumento donde ella lo requiere (nombre)
pero que pasa con la especie?? js almacena esa variable en memoria para utilizarla cuando la fx() hija lo requiera

*/
mascotas('perro')('Locky') //colocarlo asi hace que ejecute la fx() del return
//sin embargo, este sistema f()() no se aplica para conteos o sin argumentos?

function tablas (base) {
    return function(numero) {
        return base*numero
    }
}

let tabla6 = tablas(6)
console.log(tabla6(2))


//---------------BIND, CALL & APLLY----------//
/*        A) BIND 
Vincula o ancla el this a un objeto-
*/
