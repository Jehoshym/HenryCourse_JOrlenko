//************************************		TEMA DURO DE CHECKPOINT		************************************

//-------------------------		THIS	----------------------
/*Siempre referencia al objeto (contexto) donde se encuentra
Ejemplo 1: this en global, es decir, como cualquier variable o funcion, va a referenciar al 'objeto' global
this

Ejemplo 2: this como propiedad de un objeto, referencia al objeto o propiedad del objeto.
const obj = {
	prop = 2
	function loguea(){
	return this.prop; (retorna 2, el valor de 'prop')
	return this; (retorna el objeto completo obj, porque referencia al objeto en sí)
	}
}

PERO!
si This esta en una f() que está en una f() dentro del obj, referencia al global
solucion a esto es guardar la referencia al objeto dentro de una var llamada that; y luego en vez de usar this, usamos that.prop
*/

//------------------------		CLOSURES  ----------------------
/*

*/

