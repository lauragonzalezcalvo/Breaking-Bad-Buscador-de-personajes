
'use strict';
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */


//---------------------------------------QUERYS SELECTOR ----------- LISTA CHARACTERS--------------------------------------

const characterList = document.querySelector('.js-characterList'); 
// lo quito de aquí por que sale un error ya que todavía no ha buscado esta clase por que no se ha metido en el función
// const allCharactersArticles = document.querySelectorAll('.js-character');
const btn = document.querySelector('.js-bnt');

// -----------------------------VARIABLES GLOBALES, la lista de personajes y la lista de personajes favoritos.--------------

//dejamos el array vacía para rellenarlo con el fetch
let allCharacters = [];
// creamos un array para guardas los favoritos.
let favouritesCharacters = [];

//--------------------------------------------- FUNCIONES-------------------------------------------------------------------


//Esta función me permite pasarle los parámetros, y al final tenemos que llamar a la función. la llamamos en el bucle
// ponemos el id que será nuestro atributo gancho

function renderOneCharacter (character){
  return `
  <li class="js-character characters___Articles"id="${character.char_id}">
  <article class="characters___Articles___Item">
      <img src="${character.img}" alt="" class="characters___Articles___Item--img">
      <h3 class="characters___Articles___Item--h3">${character.name}</h3>
      <p class="characters___Articles___Item--p">${character.status}</p>
  </article>
  </li>`;
}


//Nos permite recorrer el array para pintarlo .Primero  entra en el bucle y coge el 0, entra en renderOneCharacter, lo pinta y vuelve a por el siguiente i . Lo mismo con todo.

characterList.innerHTML = '';
function renderCharacters (event){ 

  for (let i= 0; i < allCharacters.length; i++) {
    // const element = array[index];
    characterList.innerHTML += renderOneCharacter (allCharacters[i]);
  }
  addCharacterListener ();
  
}

// ------Esta función addCharacterListener, nos permite hacer click y crear un bucle para que pueda clicar en cada uno de ellos-

function addCharacterListener (){
  //como es un array  no coge un elemento solo, coge varios, por eso  hay que hacer un bucle
  const allCharactersArticles = document.querySelectorAll('.js-character');
  for (const character of allCharactersArticles) {
    character.addEventListener('click', handleCharacters);
  }
  
}

//esta función la hemos llamado con el addEventListener para que nos permita marcar de momento como favoritos y añadir clase selected

function handleCharacters (event){
  console.log('has hecho click');

  // para que nos añada la clase selected y cuando le demos click nos la quite.
  event.currentTarget.classList.toggle('selected');

  console.log(event.currentTarget.id);
  //hemos añadido parseInt en el id para que me lo pase a número.
  // si probamos a hacer aquí un type of??

  //creamos una variable para meter el .find y que me traiga el objeto al que he dado click. Al cumplirse la condición.
  const SelectedCharacters = allCharacters.find ((eachCharacterObj) => eachCharacterObj.char_id === parseInt(event.currentTarget.id));
  console.log(SelectedCharacters);

  // //utilizamosFindIndex por que nos devuelve -1 sino lo encuentra y si lo encuentra me devuelve el objeto si lo ha encontrado.
  // // find me devuelve todo el objeto si lo ha encontrado y undefined sino lo ha encontrado
  const characterInFavouritesIndex = favouritesCharacters.findIndex((eachCharacterObj) => eachCharacterObj.char_id === parseInt(event.currentTarget.id));
  console.log(characterInFavouritesIndex);

  // condición que dice que sino existe ese id en la lista te la añade si ya está no la añades
  // ------------------revisar .findIndex y.find
  if (characterInFavouritesIndex === -1 ){
    favouritesCharacters.push(SelectedCharacters);
  }
  // aqui lo que hacemos esq si volvemos a clickar nos lo quite de fav por lo que tenemos que cambiar a findIndex en vez de find.ESte else es un bonus
  else {
    favouritesCharacters.splice(characterInFavouritesIndex, 1);
  }

  renderFavCharacters ();
}
// esta función puede estar en una unica funcion render ?? y pasarle como parámetro una u otra? probar
function renderFavCharacters (){
  let html ='';
  const favouritesList = document.querySelector('.favourites__List-character');
  for (let i= 0; i < favouritesCharacters.length; i++) {
    html += renderOneCharacter (favouritesCharacters[i]);
  }
  favouritesList.innerHTML = html;
}
//--------------------------------------------------------- EVENTOS------------------------------------------------

// -----------------------------------------CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA-------------------------------

fetch('https://breakingbadapi.com/api/characters')
  .then((response) => response.json())
  .then((data) => {
    allCharacters = data;
    renderCharacters ();
  });
  

