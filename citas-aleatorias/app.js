const botonElement = document.getElementById('boton-cambiar-cita');
const citaElement = document.getElementById('cita');
const autorElement = document.getElementById('autor');

function citaAleatoria() {
  const numAleatorio = Math.floor(Math.random() * citas.length);
  return numAleatorio;
}

//Primer cita aleatoria
let nuevaCita = citaAleatoria();
  citaElement.textContent = citas[nuevaCita].texto;
  autorElement.innerText = citas[nuevaCita].autor;
//Cita aleatoria al precionar boton
botonElement.addEventListener('click', (e) => {
  let nuevaCita = citaAleatoria();
  citaElement.textContent = citas[nuevaCita].texto;
  autorElement.innerText = citas[nuevaCita].autor;
});