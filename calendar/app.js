//Fechas
const fechaHoy = new Date();
const diaActual = fechaHoy.getDate();
const mesActual = fechaHoy.getMonth();
const anioActual = fechaHoy.getFullYear();
var dia = fechaHoy.getDate();
const diaS = fechaHoy.getDay();
var mes = fechaHoy.getMonth();
var anio = fechaHoy.getFullYear();
var mesPosActual = mes;
var anioPosActual = anio;
const anioC = document.querySelector('.anio-actual');
const mesC = document.querySelector('.mes-actual');
const arrayFechas = document.querySelectorAll('.fecha-container');

// Botones
const mesAnterior = document.querySelector('#back');
const mesSiguiente = document.querySelector('#foward');
const anioAnterior = document.querySelector('#back-anio');
const anioSiguiente = document.querySelector('#foward-anio');
const tareasClose = document.querySelector('.tareas-close');
const nuevaTareaB = document.querySelector('.add');
const nuevaTareaBack = document.querySelector('.nueva-tarea-back');
const addTarea = document.querySelector('#agregar-tarea-boton');

// Inputs
const tituloNuevoEvento = document.querySelector('#titulo--titulo-nuevo-evento');
const hrNuevoEvento = document.querySelector('#hora--hora-nuevo-evento');
const minNuevoEvento = document.querySelector('#min--hora-nuevo-evento');
const direNuevoEvento = document.querySelector('#direccion--direccion-nuevo-evento');
const detallesNuevoEvento = document.querySelector('#detalles-detalles-nuevo-evento');

//Tareas
const tareasContainer = document.querySelector('.tareas-container');
var tareasFecha = document.querySelector('.tareas-fecha');
var listaTareas = document.querySelector('.tareas-lista');
var nuevaTareaFecha = document.querySelector('.nueva-tarea-fecha');
const tareas = document.querySelector('.tareas');
const nuevaTarea = document.querySelector('.tarea-nueva-container');
const msjError = document.querySelector('.msj-error');

var objetoDesestructurado = [];
var arrayEventos = [];
var eventosDelDia = [];
var arrayTareas = [];

function selectorDeMes(mes) {
  switch (mes) {
    case 0:
      return "Enero";
      break;
    case 1:
      return "Febrero";
      break;
    case 2:
      return "Marzo";
      break;
    case 3:
      return "Abril";
      break;
    case 4:
      return "Mayo";
      break;
    case 5:
      return "Junio";
      break;
    case 6:
      return "Julio";
      break;
    case 7:
      return "Agosto";
      break;
    case 8:
      return "Septiembre";
      break;
    case 9:
      return "Octubre";
      break;
    case 10:
      return "Noviembre";
      break;
    case 11:
      return "Diciembre";
      break;
  }
}

function actualizarCalendario() {
  anioC.textContent = anio;
  mesC.textContent = selectorDeMes(mes);
  let primerDia = calcularPrimerDiaDelMes().getDay();
  if (primerDia !== 0) {
    primerDia--;
  } else {
    primerDia = 6;
  }
  asignarNumerosAlCalendario(primerDia, calcularUltimoDiaDelMes().getDate());

}
actualizarCalendario();

// PRUEBA MANIPULACION DOM
// console.log(containerFechas);
// const containerF = containerFechas[1].firstElementChild;
// console.log(containerF);
// console.log(containerF.firstElementChild.innerText);
// containerF.firstElementChild.textContent = '2';

function calcularPrimerDiaDelMes() {
  const primerDia = new Date(anio, mes, 1);

  return primerDia;
}

function calcularUltimoDiaDelMes() {
  let mesInterno = mes;
  if (mes === 11) {
    mesInterno = 0;
  }
  const f = new Date(anio, mesInterno + 1, 1);
  f.setDate(f.getDate() - 1);
  return f;
}

function asignarNumerosAlCalendario(j, k) {

  for (let i = 0, x = j; i < k; i++, x++) {

    let containerF = arrayFechas[x].firstElementChild;
    containerF.firstElementChild.textContent = i + 1;
    let diaProv = containerF.firstElementChild.innerText;
    // Agrega clases a los dias del mes actual
    arrayFechas[x].classList.add("activo");
    // Marcar dia actual
    if (anio === anioActual && mes === mesActual && containerF.firstElementChild.innerText == diaActual) {
      arrayFechas[x].classList.add("dia-hoy");
    } else {
      arrayFechas[x].classList.remove("dia-hoy");
    }
  }
}

function limpiarCalendario() {
  for (let i = 0; i < arrayFechas.length; i++) {
    let containerF = arrayFechas[i].firstElementChild;
    containerF.firstElementChild.textContent = null;
    arrayFechas[i].classList.remove('activo');
  }
}

const filtrarTareasPorId = () => {
  let edd = [];
  edd = arrayTareas.filter(evento => evento.id === idActual);
  if (edd.length > 0) {
    console.log(edd);
    return edd;
  } else {
    return undefined;
  }
}

const obtenerIdHorario = tareasDiarias => {
  let arrayIdHorario = [];

  if (tareasDiarias !== undefined) {
    for (let i = 0; i < tareasDiarias.length; i++) {
      // arrayIdHorario = tareasDiarias[i].hr;
      arrayIdHorario.push(tareasDiarias[i].hr + tareasDiarias[i].min);
    }
    console.log(arrayIdHorario);
    return arrayIdHorario;
  } else {
    return undefined;
  }
};

const ordenarArrayPorHrMin = array => {
  array.sort((obj1, obj2) => {
    const hr1 = parseInt(obj1.hr);
    const hr2 = parseInt(obj2.hr);

    if (hr1 < hr2) return -1;
    if (hr1 > hr2) return 1;

    if (obj1.min < obj2.min) return -1;
    if (obj1.min > obj2.min) return 1;
  });

  return array;
};

//Filtra eventos del dia actual y los objetos en arrays
function FiltrarYDesestructurar() {
  objetoDesestructurado = [];
  eventosDelDia = [];
  eventosDelDia = arrayTareas.filter(evento => evento.id === idActual);
  eventosDelDia = ordenarArrayPorHrMin(eventosDelDia);
  eventosDelDia.forEach(element => {
    const tarea = [element.titulo, element.hr, element.min, element.direccion, element.detalles];
    objetoDesestructurado.push(tarea);
  });
}

// Crea e inserta los divs de los eventos
function crearDivsTareas() {
  FiltrarYDesestructurar();
  listaTareas.innerHTML = '';
  let arrayDivs = [];
  let i = 1;
  objetoDesestructurado.forEach(element => {
    let nuevoDiv = document.createElement('div');
    let divHora = document.createElement('div');
    let divTitulo = document.createElement('div');
    divHora.classList.add('horario--tareas-lista');
    divTitulo.classList.add('titulo--tareas-lista');
    nuevoDiv.classList.add('item-tarea');
    if (i % 2 == 0) {
      nuevoDiv.classList.add('a');
    } else {
      nuevoDiv.classList.add('b');
    }
    i++;
    divHora.textContent = `${element[1]}:${element[2]}`;
    divTitulo.textContent = `${element[0]}`;
    nuevoDiv.appendChild(divHora);
    nuevoDiv.appendChild(divTitulo);
    listaTareas.appendChild(nuevoDiv);
  });
}

function crearVarDeTareas() {

}

// Day Picker
const consultaDiaContainer = document.querySelector('.consulta-fecha-container');

let diaPikeado = 0;
let mesPickeado = 0;
let anioPickeado = 0;

function datePickerHTML() {
  let dias = [];
  let meses = [];
  let anios = [];
  for (let i = 1; i < 32; i++) {
    dias.push(`<option value="${i}">${i}</option>`);
  }
  for (let i = 1; i < 13; i++) {
    meses.push(`<option value="${i}">${i}</option>`);
  }
  for (let i = 1988; i < 2051; i++) {
    anios.push(`<option value="${i}">${i}</option>`);
  }
  const pickFecha =
    `<div class="fecha-consulta">
    <label for="fecha">Selecciona una fecha:</label>
    <select title="seleccionar fecha" name="dia" class="pick-dia" id="id-pick-dia">
      ${dias}
    </select>
    <select title="seleccionar mes" name="mes" class="pick-mes">
      ${meses}
    </select>
    <select title="seleccionar anio" name="anio" class="pick-anio">
      ${anios}
    </select>
    <button class="consultar-boton">Consultar</button>
  </div>`

  consultaDiaContainer.innerHTML = '';
  consultaDiaContainer.innerHTML += pickFecha;
}
datePickerHTML();

let consultarBoton = document.querySelector('.consultar-boton');
let pickDia = document.querySelector('.pick-dia');
let pickMes = document.querySelector('.pick-mes');
let pickAnio = document.querySelector('.pick-anio');

consultarBoton.addEventListener('click', () => {
  diaPikeado = pickDia.value;
  mesPickeado = pickMes.value;
  anioPickeado = pickAnio.value;
  idABuscar = deFechaAID(diaPikeado, mesPickeado, anioPickeado);
});

function deFechaAID(dia, mes, anio) {
  return `${dia}${mes}${anio}`
}


// EventListeners

mesAnterior.addEventListener('click', () => {
  if (mes === 0) {
    anio--;
  }
  if (mes == 0) {
    mes = 11;
  } else {
    mes = mes - 1
  };
  limpiarCalendario();
  actualizarCalendario();
});

mesSiguiente.addEventListener('click', () => {
  if (mes === 11) {
    anio++;
    mes = 0;
  } else {
    mes++;
  }
  limpiarCalendario();
  actualizarCalendario();
});

anioAnterior.addEventListener('click', () => {
  anio--;
  mes = 0;
  limpiarCalendario();
  actualizarCalendario();
});

anioSiguiente.addEventListener('click', () => {
  anio++;
  mes = 0;
  limpiarCalendario();
  actualizarCalendario();
});

//EventListeners / cerrar tarea

tareasClose.addEventListener('click', () => {
  tareasContainer.style.display = 'none';
});

//EventListeners / abrir tareas
//var fechaTarea se usa en abrir tareas y nueva tarea
var fechaTarea;
var diaTarea;
var idActual;
for (let i = 0; i < arrayFechas.length; i++) {
  arrayFechas[i].addEventListener('click', () => {
    if (arrayFechas[i].classList.contains("activo")) {
      tareasContainer.style.display = 'flex';
      diaTarea = arrayFechas[i].firstElementChild.firstElementChild.textContent;
      fechaTarea = new Date(anio, mes, diaTarea);
      idActual = `${anio}${mes}${diaTarea}`;
      tareasFecha.textContent = `${fechaTarea.getDate()} de ${selectorDeMes(mes)} de ${fechaTarea.getFullYear()}`;
      crearDivsTareas();
    }
  });
}

//EventListeners / nueva tarea
nuevaTareaB.addEventListener('click', () => {
  tareas.style.display = 'none';
  nuevaTarea.style.display = 'flex';
  nuevaTareaFecha.textContent = `${fechaTarea.getDate()} de ${selectorDeMes(mes)} de ${fechaTarea.getFullYear()}`;
});

//EventListener / nueva tarea back
nuevaTareaBack.addEventListener('click', () => {
  nuevaTarea.style.display = 'none';
  tareas.style.display = 'flex';
  msjError.textContent = "";
});


//EventListeners / add tarea nueva
addTarea.addEventListener('click', () => {
  const id = `${anio}${mes}${diaTarea}`;
  const newEvent = new Evento(id, tituloNuevoEvento.value, hrNuevoEvento.value, minNuevoEvento.value, direNuevoEvento.value, detallesNuevoEvento.value);
  let idXHorario = [];
  idXHorario = obtenerIdHorario(filtrarTareasPorId());
  let idHrActual = hrNuevoEvento.value + minNuevoEvento.value;
  if (idXHorario === undefined || !idXHorario.includes(idHrActual)) {
    arrayTareas.push(newEvent);
    nuevaTarea.style.display = 'none';
    tareas.style.display = 'flex';
    crearDivsTareas();
    msjError.textContent = "";
  } else {
    msjError.textContent = 'El horario se encuentra ocupado con otro evento';
  }
});

