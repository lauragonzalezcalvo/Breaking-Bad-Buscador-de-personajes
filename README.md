# MODULO 2. EVALUACIÓN LAURA GONZÁLEZ CALVO

Evaluación final.Modulo 2 .Adalab

## Enunciado
El ejercicio consiste en desarrollar una aplicación web de Breaking Bad, que nos permite des/marcar los
personajes como favoritas y guardarlas en local storage.
El ejercicio también tiene una parte de maquetación con HTML y Sass, os recomendamos dedicar esfuerzo
a la maquetación una vez terminada la parte de JavaScript, ya que los criterios de evaluación están
relacionados con esta última.

Vamos de definir los distintos hitos del ejercicio:

## 1. Estructura básica
En primer lugar hay que realizar una estructura básica sobre este modelo. No hay que preocuparse por las
medidas, colores ni tipografía hasta un hito posterior.

La aplicación de búsqueda de serie consta de dos partes:

* Un campo de texto y un botón para buscar personajes por su título.
* Un listado donde aparece la foto del personaje, el nombre del personaje y si está vivo o muerto.

## 2. Inicio
Al levantar la página debe mostrar todos los resultados de los personajes de la serie, la aplicación
debe conectarse a The Breaking Bad API. Os recomendamos echar un vistazo al JSON que devuelve
una petición de búsqueda de todos los personajes para ver qué datos son los que necesitamos:

https://breakingbadapi.com/api/characters.

Por cada personaje obtenido en el resultado de la búsqueda hay que pintar una tarjeta donde
mostramos la foto del personaje, el nombre del personaje y si está vivo o muerto.
Para pintar la información en la página se puede elegir entre hacerlo de forma básica con innerHTML
o manipulando de forma avanzada el DOM.

## 3. Búsqueda
La usuaria tiene la opción de buscar personajes por su nombre, al hacer clic sobre el botón de Buscar, la
aplicación solo debe mostrar aquellos personajes que coinciden con la búsqueda realizada por la usuaria:
Puedes hacer un filtro por nombre sobre el listado de personajes obtenido anteriormente.
Puedes utilizarla siguiente url con el parámetro name para obtener del API solo los usuarios que
coincidan con el nombre especificado por la usuaria: 

https://breakingbadapi.com/api/characters?

name=Walter

## 4. Favoritos
La usuaria puede indicar cuáles son sus personajes favoritos. Para ello, al hacer clic sobre un personaje
debe pasar lo siguiente:

* Cambiar los estilos de la tarjeta del personaje para indicar que es una personaje favorito.

* Mostrar un listado con los personajes favoritos. Os recomendamos crear un variable o constante de
tipo array en JS para almacenar las personajes favoritos.

* Los personajes favoritos deben seguir apareciendo en la página aunque la usuaria realice otra
búsqueda.

## 5. Almacenamiento local
Hay que almacenar el listado de favoritos en el localStorage. De esta forma, al recargar la página el listado
de favoritos debe mostrarse.

## 6. BONUS: Borrar favoritos
Como bonus, os proponemos la opción de borrar favoritos. Al hacer clic sobre el icono de una 'x' al lado de
cada favorito, hay que borrar el favorito clicado de la lista y del localStorage.

Para terminar de rematar nuestra aplicación de BreakingBad, nos gustaría poder añadir/quitar como favorito
al hacer click sobre un personaje. Y que, si realizamos una nueva búsqueda y sale un personaje que ya es
favorito, aparezca resaltado en los resultados de búsqueda (con algún estilo de CSS).

Y ya sería fantástico si al final de la lista de favoritos hay un botón para borrar todos los favoritos a la vez.

## 7. BONUS: Afinar la maquetación

Una vez terminada la parte de interacción, podemos centrarnos en la parte de maquetación donde tenéis
libertad para decidir los estilo.





