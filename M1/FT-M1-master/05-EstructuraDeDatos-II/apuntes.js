/* ************FUNCIONES CREADORAS****************** */

/* ------------LISTA ENLAZADA---------------- */
function LinkedList() {
  this.head: null;
  this.size: 0;
}

/* ---------------NODOS----------------------- */
function Node() {
  this.data: data;
  this.next: null;
}

LinkedList.prototype.agregar = function (value) {
  const newNode = new Node(value); //Crea un nuevo objeto Nodo
  lest current = this.head; //crea la referencia para vincular los nodos, y si no hay nodo aun vincula el primer nodo a head
  if(!current) {
    this.head = newNode;
    this.size++;
    return newNode;
  }
  while(current.next){ //mientras tenga donde moverme, me muevo
    current = current.next;
  }
  current.node = newNode;
  this.size;
}


/* *************** HASH TABLE **************************** */
//acceder a la posicion de un array es más rapido que acceder a la propiedad de un objeto
//la hash table hace que a la propiedad de un objeto se le asigne un indice, convirtiendo los hash en un array, 
