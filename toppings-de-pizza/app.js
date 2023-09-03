// const topping = document.querySelectorAll(".topping");
// console.log(topping[0]);

// const topping2 = document.getElementsByClassName("topping");
// console.log(topping2[0].id);

// const topping3 = document.querySelectorAll("li");
// console.log(topping3);

// const topping4 = document.querySelectorAll(".fondo-marron");
// console.log(topping4);

// const aceitunas = document.querySelector("#aceitunas");
// console.log(aceitunas);

// const aceitunasHover = document.querySelectorAll(".topping:hover");
// console.log(typeof aceitunasHover);

// const primerNaranja = document. querySelector(".topping.fondo-naranja");
// console.log(primerNaranja.textContent);

// const ultEjem = document.querySelectorAll("ul li.fondo-naranja");
// console.log(ultEjem);

// // EJEMPLO DE NOT EN QUERY
// const primerToppingNoMarron = document.querySelector("ul li:not(.fondo-marron)");
// console.log(primerToppingNoMarron);



// =====================================================
// =============== MODIFICAR ESTILOS ===================
//======================================================

// const primerTopping = document.querySelector(".topping");
// primerTopping.style.backgroundColor = "blue";

// =============================================================


// =============================================
// ============== ACCESO A TEXTO ====================
// ================================================

// const listaDeToppings = document.querySelector("#lista-toppings");
// // console.log(listaDeToppings);


// console.log('> innerText');
// console.log(listaDeToppings.innerText);

// console.log("> textContent"); // Incluye espacios de identacion
// console.log(listaDeToppings.textContent);

// console.log("> innerHTML"); // Incluye todo el html de la parte elegida
// console.log(listaDeToppings.innerHTML);

// =============================================
// ============== MODIFICAR TEXTO ====================
// ================================================

// const titulo = document.querySelector("#titulo");

// // console.log(titulo);

// titulo.innerText = "Mis Toppings Favoritos";

// titulo.textContent = "toppings favoritaso";


// ===================================================================
// ============== MODIFICAR ATRIBUTOS DE UN ELEMENTO ====================
// ==================================================================


// const vinculo = document.getElementsByTagName("a");

// //-----------ACCEDER A ATRIBUTO-------------
// // console.log(vinculo[0].getAttribute("href"));

// //------ELIMINAR ATRIBUTO----------
// // console.log(vinculo[0].removeAttribute('href'));

// //---------MODIFICAR ATRIBUTO--------------- setAtribute()
// vinculo[0].setAttribute("href", "https://www.google.com");
// // vinculo[0].setAttribute("target", "_blank");
// // console.log(vinculo[0].getAttribute("href", "https://www.google.com"));


// ============================================
//==================  CLASES  =========================
// ===================================================

// const primerTopping = document.querySelector(".topping");

// //---------- AGREGAR CLASE---------- classList.add
// // primerTopping.classList.add("texto-verde");

// console.log(primerTopping.classList);

// //--------- VERIFICAR si una clase existe en un elemento-------- classList.contain(" ")
// console.log(primerTopping.classList.contains('fondo-marron'));

// //---------- ELIMINAR una CLASE ------ classList.remove(" ")
// console.log(primerTopping.classList.remove("topping"));
// console.log(primerTopping.classList);

// =========================================================
//==================  CREAR UN ELEMENTO =====================
// ==========================================================

// Lugar donde lo queremos agregar
// const listaDeToppings = document.getElementById ('lista-toppings');

// // Creacion del nuevo elemento
// const elementoNuevo = document.createElement('li');

// // ----------- AGREGAR un ELEMENTO -------------- .append() y appendChild()
// // Agregar Clases
// elementoNuevo.classList.add("topping", "fondo-marron");
// listaDeToppings.append(elementoNuevo);

// // Agregar texto cont textContent o innerText
// elementoNuevo.textContent = "Palmitos";


// ---------- REMOVER un ELEMENTO ---------- .remove()
// elementoNuevo.remove();
// console.log(listaDeToppings);
// listaDeToppings.appendChild(elementoNuevo);
// listaDeToppings.remove();

// =========================================================
//==================  RECORRER EL DOM =====================
// ==========================================================


// listaDeToppings = document.getElementById('lista-toppings');

// -----Padres y Abuelos ----------

//-------- Para realizar alguna operacion en el elemento o nodo padre---- 2 maneras
// ---- parentElement solo incluye los elementos HTML
// console.log(listaDeToppings.parentElement);

//-----parentNode es mas amplio e incluye textos y comentarios
// console.log(listaDeToppings.parentNode);

//------- Para acceder al abuelo se puede hacer lo siguiente

// console.log(listaDeToppings.parentNode.parentNode);
// console.log(listaDeToppings.parentElement.parentElement);

//--------Hijos y Nietos
//  .children  .children[i]
//  .firstChild
//  .lastChild
//  .firstElementChild
//  .lastElementChild

// console.log(listaDeToppings.children);

//firstChild trabaja con nodos, por lo que va a mostrar texto en lugar de elementos
//Lo mismo pasa con lastChild (se puede utilizar firstElementChild y lastElementChild)
// console.log(listaDeToppings.firstChild);

//Para trabajar con elementos
// console.log(listaDeToppings.firstElementChild);

// console.log(listaDeToppings.lastElementChild);

// --------- siblings--------
//  .previousElementSibling
//  .nextElementSibling
//  .previousSibling
//  .nextSibling

//----- para trabajar con Elementos
// console.log(listaDeToppings.previousElementSibling);
// console.log(listaDeToppings.nextElementSibling);

// // ----- para trabajar con nodos
// console.log(listaDeToppings.previousSibling);
// console.log(listaDeToppings.nextSibling);


// =========================================================
//==================  EVENTOS DEL DOM =====================
// ==========================================================

// ========= Conceptos importantes========================== |
//                                                           |       
//    * Target:                                              |
//    * Trigger                                              |
//    * Event Handler                                        |
//    * Event Listener                                       |
//                                                           |
//========================================================== |

//Agregando el evento onclick en HTML y llamando a una funcion como la de abajo
//aunque no es muy recomendable.

// function msjClick() {
//     console.log('click');
// }

//---------- .addEventListener() ---------------
//            -----------------

const toppings = document.querySelectorAll('.topping');

// function mostrarClick(e) {
//     console.log(e.target);
//     console.log(e.target.innerText);
// }
// for (const topping of toppings) {
//     topping.addEventListener('click', mostrarClick);
// }


//-- Mismo ejemplo pero con funcion flecha----

for(const topping of toppings) {
    topping.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    });
}