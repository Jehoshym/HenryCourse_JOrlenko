"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

//insert
BinarySearchTree.prototype.insert = function(value) {
  if(this.value < value){
    if(this.value !== null) {
      this.right.insert(value);
    }else{
      this.right = new BinarySearchTree(value);
    }
  }
  if(this.value > value){
    if(this.value !== null) {
      this.left.insert(value);
    }else{
      this.left = new BinarySearchTree(value);
    }
  }
}

//contains
BinarySearchTree.prototype.contains = function(value){
  if(this.value === value) {
    return true;
  } else if(this.value > value) {
    this.right.contains(value);
  } else{
    this.left.contains(value)
  } return false;
}

//size
BinarySearchTree.prototype.size = function () {
  let contar = 0;
  

}

//DepthFirstForEach
BinarySearchTree.prototype.depthFirstForEach = function (order) {
  let orden = [];
  let actualRoot = this.value;
  if(order="pre-order"){
    orden.push(actualRoot)
    if(this.left!==null && actualRoot===order[(order.length-1)]){
      this.left.breadthFirstForEach(order);
    }
    if(this.right!==null && actualRoot===order[(order.length-1)]){
      this.right.breadthFirstForEach(order);
    }
  
  }

}


//breadthFirstForEach
BinarySearchTree.prototype.breadthFirstForEach = function () {
  
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
