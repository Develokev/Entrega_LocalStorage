//Un listado de productos:
// 1.2. Cada producto tendrá un botón de añadir dicho producto en el localStorage. 1.3. Un botón de eliminar el producto de la lista existente(Se eliminará del localStorage)
// Todo producto que se añada o se elimine del localStorage se verá reflejado automaticamente en otra lista en el propio navegador.
// Tendremos un botón para vaciar la lista completa del localStorage

const botonA = document.querySelector("#ap");
console.log(botonA);

const botonB = document.querySelector("#bp");
console.log(botonB);

const botonC = document.querySelector("#bt");
console.log(botonC);

const lista = document.querySelector("#lista");
console.log(lista);

const productos = ["manzana", "kiwi", "pera", "naranja"];
console.log(productos);

const cosasAPintar = [
  {
      id: 1,
      producto: "pera",
  }
]

const arrayProductos = [
  {
      id: 1,
      producto: "pera",
  }
]

// EVENTOS +++++++++++++++++++++++++++++++++++++++++++++++++++

botonC.addEventListener('click', borrarLocal()); /*Evento click que acciona la función "borrarLocal", que hace un 'clear' al Local Storage*/

// document.addEventListener('click',(ev)) => {

//   if (ev.target.matches('add')) {
//       const elemento = ev.target.parentElement.parentElement.children[0].id
//       anadirAlLocal(elemento);
//   }
// }

//   const anadirAlLocal () => {
//       localStorage.setItem("anadir",JSON.stringify(anadir));
//       localStorage.push(anadir);
//   }


//FUNCIONES ++++++++++++++++++++++++++++++++++++++++++++++++++
function borrarLocal() {
    localStorage.clear();
}

// const borrarTodo => () {

// }