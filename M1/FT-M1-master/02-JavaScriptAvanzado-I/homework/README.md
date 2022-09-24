
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;  
var a = 5;
var b = 10;
var c = function(a, b, c) { //se llama la f() en 27 con los valores a=8, b=9, c=10
  var x = 10;
  console.log(x); //x = 10
  console.log(a); //a = 8
  var f = function(a, b, c) { //se llama a la f() en 24, luego de ser llamada c() en 27 con los parametros a, b, c
    b = a; 
    console.log(b); //b = 8
    b = c; //b=10
    var x = 5; //x= 5
  }
  f(a,b,c);
  console.log(b); //b=9 -> toma directamente el valor del parametro b, no continua con los valores de c()
}
c(8,9,10);
console.log(b); //10
console.log(x); //1
```

```javascript
console.log(bar); //undefined
console.log(baz); //not defined
foo(); //"hola" -> funciona gracias al hoisting
function foo() { console.log('Hola!'); }
var bar = 1;  //en el console.log aparece undefined porque está creada en LE pero aun no se le asigna valor en el entorno de ejec
baz = 2; //en el console.log aparece not defined porque es una variable sin var/let/const y por lo tanto se crea recien cuando el codigo la lee
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //franco
```

```javascript 
var instructor = "Tony";
console.log(instructor); //tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //franco
   }
})();
console.log(instructor); //tony //-> la f() se autollama pero no cambia el valor de tony porque franco corresponde al contexto de la f() -> var y f(){f(){var}}
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //the flash
    console.log(pm); //reverse flash
}
console.log(instructor); //the flash
console.log(pm); //franco


//LA VARIABLE CREADA CON 'LET' TIENE ALCANCE LOCAL (SOLO DENTRO DE LAS LLAVES{})
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"               //2
"2" * "3"             //6
4 + 5 + "px"          //9px => IZQ A DER --> 4 + 5 = 9 + PX = 9PX // NUM + NUM = NUM + STR = CONCAT
"$" + 4 + 5           //$45 => IZQ A DER --> $ + 4 = $4 + 5 = $45 // STR + NUM = CONCAT + NUM = CONCAT
"4" - 2               //2
"4px" - 2             //NaN
7 / 0                 //? > infinity
{}[0]                 //undefined => PORQUE LA PROP NO EXISTE EN EL OBJETO
parseInt("09")        //9
5 && 2                //2
2 && 5                //5
5 || 0                //5
0 || 5                //5
[3]+[3]-[10]          //concatena los 3 como string (33) y luego le resta 10 (23), porque la resta siempre es matematica
3>2>1                 // falso porque compara los primeros dos y devuelve true; luego lo compara a 1 y es false
[] == ![]             // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);        //undefined -> esta en LE pero no ha pasado aun por EC para que reciba valor
   console.log(foo());    //2 -> la f() si se carga completa

   var a = 1;
   function foo() {
      return 2;
   }
}

test();                   //^
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); //-> false, nunca se ejecuta el if y nunca cambia el nombre a Friskies
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //Aurelio de Rosa

var test = obj.prop.getFullname;

console.log(test()); //Juan Perez -> test se iguala a la f() {return this.fullname} retornara el fullname de ese this
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();// 1 3 4 2   o  1 4 3 2 ?
```
