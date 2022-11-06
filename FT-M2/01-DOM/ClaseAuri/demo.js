// alert("bienvenidos, saludo desde el archivo js");
// const saludo = alert("bienvenidos, saludo desde el archivo js");
// const button = document.querySelector("h1");
// button.addEventListener("click", eventClick);

// function eventClick(evento) {
//   console.log(evento);
//   console.log(evento.target);
//   console.log(evento.type);
//   console.log(evento.target.value);
// }
// document.getElementById("titulo").innerHTML = "Hola mundo";
// const divs = document.getElementsByTagName("div")[1].innerHTML;

// const estilo = document.getElementById("cohorte");

// estilo.style.color = "red";

// console.log(divs);
const utiles = ["lapiz", "cuadernos", "borrador"];

const lista = document.getElementById("lista");

utiles.forEach((util) => {
  const elemento = document.createElement("li");
  elemento.innerText = util;
  lista.appendChild(elemento);
});
