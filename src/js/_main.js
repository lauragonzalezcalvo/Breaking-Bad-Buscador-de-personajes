"use strict";
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

//---------------------------------------QUERYS SELECTOR ----------- LISTA CHARACTERS--------------------------------------

const characterList = document.querySelector(".js-characterList");
const btn = document.querySelector(".js-btn");
const input = document.querySelector(".js_input");
const favouritesList = document.querySelector(".js-favList");
const resetBtn = document.querySelector(".js-resetBtn");

// -----------------------------VARIABLES GLOBALES, la lista de personajes y la lista de personajes favoritos.--------------

let allCharacters = [];
let favouritesCharacters = [];

//--------------------------------------------- FUNCIONES-------------------------------------------------------------------

//Esta función me permite pasarle los parámetros, y al final tenemos que llamar a la función. la llamamos en la función renderCharacter
// ponemos el id que será nuestro atributo gancho

function renderOneCharacter(character) {
  // hacemos esta condicion para que aparezca seleccionada favourites

  const characterInFavouritesIndex = favouritesCharacters.findIndex(
    (eachCharacterObj) =>
      eachCharacterObj.char_id === parseInt(character.char_id)
  );
  let classFavourite = "";
  if (characterInFavouritesIndex === -1) {
    classFavourite = "";
  } else {
    classFavourite = "selected";
  }
  return `
  <li class="js-character characters___Articles ${classFavourite}"id="${character.char_id}">
  <article class="characters___Articles___Item">
      <img src="${character.img}" alt="" class="characters___Articles___Item--img">
      <h3 class="characters___Articles___Item--h3">${character.name}</h3>
      <p class="characters___Articles___Item--p">${character.status}</p>
  </article>
  </li>`;
}

//Nos permite recorrer el array para pintarlo .

function renderCharacters(allCharacters) {
  characterList.innerHTML = "";
  for (let i = 0; i < allCharacters.length; i++) {
    characterList.innerHTML += renderOneCharacter(allCharacters[i]);
  }
  addCharacterListener();
}

// ------Esta función addCharacterListener, nos permite hacer click y crear un bucle para que pueda clicar en cada uno de ellos-
//como es un array  no coge un elemento solo, coge varios, por eso  hay que hacer un bucle

function addCharacterListener() {
  const allCharactersArticles = document.querySelectorAll(".js-character");
  for (const character of allCharactersArticles) {
    character.addEventListener("click", handleCharacters);
  }
}

//esta función la hemos llamado con el addEventListener para que nos permita marcar de momento como favoritos y añadir clase selected

function handleCharacters(event) {
  event.currentTarget.classList.toggle("selected");

  //creamos una variable para utilizar el .find y que me traiga el objeto al que he dado click. Al cumplirse la condición.

  const SelectedCharacters = allCharacters.find(
    (eachCharacterObj) =>
      eachCharacterObj.char_id === parseInt(event.currentTarget.id)
  );

  //utilizamos finIndex. Condición: si existe ese id en la lista te la añade si ya está no te la añade

  const characterInFavouritesIndex = favouritesCharacters.findIndex(
    (eachCharacterObj) =>
      eachCharacterObj.char_id === parseInt(event.currentTarget.id)
  );

  if (characterInFavouritesIndex === -1) {
    favouritesCharacters.push(SelectedCharacters);
    localStorage.setItem("characterFav", JSON.stringify(favouritesCharacters));
  }
  // Si volvemos a clickar nos lo quite de fav por eso utilizamos el findIndex en vez de find.
  else {
    favouritesCharacters.splice(characterInFavouritesIndex, 1);
    localStorage.setItem("characterFav", JSON.stringify(favouritesCharacters));
  }
  renderFavCharacters();
}

//sirve para pintarlo en la lista de favoritos

function renderFavCharacters() {
  let html = "";
  for (const character of favouritesCharacters) {
    html += renderOneCharacter(character);
  }
  favouritesList.innerHTML = html;
}

// recoger el valor de value y cuando le demos a search compararlo con el fetch y mostrarlo
//de cada uno de mis personajes me va a filtrar que su nombre incluya lo que hemos escrito.

function searchCharacters(event) {
  event.preventDefault();
  const inputValue = input.value.toLowerCase();
  const filteredCharacters = allCharacters.filter((character) =>
    character.name.toLowerCase().includes(inputValue)
  );
  renderCharacters(filteredCharacters);
}

function resetFav(ev) {
  ev.preventDefault();
  localStorage.removeItem("characterFav");
  favouritesCharacters.length = [];
  renderCharacters(allCharacters);
  favouritesList.innerHTML = "";
  resetBtn.classList.remove("hidden");
}

//--------------------------------------------------------- EVENTOS------------------------------------------------

btn.addEventListener("click", searchCharacters);
resetBtn.addEventListener("click", resetFav);

// -----------------------------------------CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA-------------------------------

fetch("./assets/data/characters.json")
  .then((response) => response.json())
  .then((data) => {
    allCharacters = data;
    renderCharacters(allCharacters);
  });

// Pintar lo que está guardado en el localStorage

const savedLocalFAvs = JSON.parse(localStorage.getItem("characterFav"));

//puedo pasarlo como parametro o la llamo por una variable global

if (savedLocalFAvs !== null) {
  favouritesCharacters = savedLocalFAvs;
  renderFavCharacters();
}
