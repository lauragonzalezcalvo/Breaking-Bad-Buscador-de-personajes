
'use strict';
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */


// QUERYS SELECTOR LISTA CHARACTERS
const characterList = document.querySelector('.js-characterList');

// VARIABLES GLOBALES, la lista de personajes y la lista de personajes favoritos.

//dejamos el array vacía para rellenarlo con el fetch

let allCharacters = [];

// FUNCIONES

//Esta función me permite pasarle los parámetros, y al final tenemos que llamar a la función. la llamamos en el bucle
function renderOneCharacter (character){
  return `
  <li class="characters___Articles" >
  <article class="characters___Articles___Item">
      <img src="${character.img}" alt="" class="characters___Articles___Item--img">
      <h3 class="characters___Articles___Item--h3">${character.name}</h3>
      <p class="characters___Articles___Item--p">${character.status}</p>
  </article>
  </li>`;
}

// BUCLE .Nos permite recorrer el array para pintarlo .Primero pasa por renderCharacters() entra en el bucle y coge el 0, entra en renderOneCharacter y al final lo pinta. Lo mismo con todo.

characterList.innerHTML = '';
function renderCharacters (){ 
  for (let i= 0; i < allCharacters.length; i++) {
    // const element = array[index];
    characterList.innerHTML += renderOneCharacter (allCharacters[i]); 
  }
}


// EVENTOS

// CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA

// hago un console.log(data) para ver que me ha devuelto la promesa.
// el .json(es un método) que le ponemos hace que nos lo devuelva en formato objeto para utilizarlo.

fetch('https://breakingbadapi.com/api/characters')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    allCharacters = data;
    renderCharacters ();
  });