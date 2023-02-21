//Un listado de productos:
// 1.2. Cada producto tendrá un botón de añadir dicho producto en el localStorage. 1.3. Un botón de eliminar el producto de la lista existente(Se eliminará del localStorage)
// Todo producto que se añada o se elimine del localStorage se verá reflejado automaticamente en otra lista en el propio navegador.
// Tendremos un botón para vaciar la lista completa del localStorage

const botonA = document.querySelector(".ap");     /*atacando los nodo (button) del DOM que va a agregar productos */
console.log(botonA);

const botonB = document.querySelector(".bp");     /*atacando los nodo (button) del DOM que va a borrar productos */
console.log(botonB);

const botonC = document.querySelector("#bt");     /*atacando los nodo (button) del DOM que va a borrar todo el LocalStorage */
console.log(botonC);

const lista = document.querySelector("#lista");   /*atacando los nodo (button) del DOM en donde se encuentra la lista de productos original */
console.log(lista);

const productos = ["Mango", "Manzana", "Melocoton", "Melon"];
console.log(productos);

// creando OBJETOS (JSON format)

const cosasAPintar = [
  {
      id: 1,
      producto: "Mango",
  }
]

const arrayMango = [
  {
      id: 1,
      producto: "Mango",
  }
]

const arrayManzana = [
  {
      id: 1,
      producto: "Manzana",
  }
]

const arrayMelocoton = [
  {
      id: 1,
      producto: "Melocoton",
  }
]

const arrayMelon = [
  {
      id: 1,
      producto: "Melon",
  }
]

// EVENTOS +++++++++++++++++++++++++++++++++++++++++++++++++++

botonC.addEventListener('click', borrarLocal()); /*Evento click que acciona la función "borrarLocal", que hace un 'clear' al Local Storage*/

// document.addEventListener('click',(anadirPro())) => {            /*Evento click que acciona la función "anadirPro", que agrega un producto a la lista */

//   if (ev.target.matches('add')) {
//       const elemento = ev.target.parentElement.parentElement.children[0].id
//       anadirPro(elemento);
//   }
// }

// document.addEventListener('click',(borrarPro())) => {            /*Evento click que acciona la función "borrarPro", que borra un producto de la lista */

//   if (ev.target.matches('add')) {
//       const elemento = ev.target.parentElement.parentElement.children[0].id
//       borrarPro(elemento);
//   }
// }

//FUNCIONES ++++++++++++++++++++++++++++++++++++++++++++++++++

function borrarLocal() {           /*He querido hacer funciones flecha para todas y no he logrado la sintaxis correcta */
    localStorage.clear();
}

function anadirPro () {
    localStorage.setItem("anadir",JSON.stringify(anadir)); /* Se puede usar también toString(anadir) */
    localStorage.push(anadir);
}

function borrarPro () {
  localStorage.getItem("borrar",JSON.stringify(borrar));
  localStorage.pop(borrar);
}
