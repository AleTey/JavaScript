const input = document.getElementById('input');
const button = document.querySelector('button');
const cuenta = document.querySelector('#n');
const sugerencia = document.querySelector('.sugerencia');
const historial = document.querySelector('.historial');
let items = document.getElementsByClassName('item');

var conteo = 0;

function calcular() {
  if (input.value) {
    // const valor = parseInt(input.value);
    // if (valor < 7) {
    //   conteo += 1;
    // } else if (valor > 10) {
    //   conteo -=1;
    // }
    const valorInput = input.value;
    valor = valorInput.toLowerCase();

    switch (valor) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
        conteo++;
        cuenta.textContent = conteo;
        analizarCuenta();
        controlDeHistorial();
        agragarAHistorial(valor);
        break;

      case '10':
      case 'j':
      case 'q':
      case 'k':
        conteo--;
        cuenta.textContent = conteo;
        analizarCuenta();
        controlDeHistorial();
        agragarAHistorial(valor);
        break;
    }
  }
  input.value = "";
  input.focus();
  // console.log(conteo);
  // cuenta.textContent = conteo;
  // analizarCuenta();
  // controlDeHistorial();
  // agragarAHistorial(valor);
}

function analizarCuenta() {
  if (conteo > 0) {
    sugerencia.classList.remove("esperar");
    sugerencia.classList.add("positivo");
    sugerencia.textContent = ("Apostar");
    // console.log('apostar');
  } else {
    sugerencia.classList.remove("positivo");
    sugerencia.classList.add('esperar');
  }
}

function agragarAHistorial(valor) {
  const nuevoDiv = document.createElement('div');
  // historial.createElement('div');
  nuevoDiv.classList.add('item');
  nuevoDiv.textContent = valor;
  historial.appendChild(nuevoDiv);
}

function controlDeHistorial() {
  console.log(items.length);
  console.log(items);
  if (items.length > 13) {
    items[0].remove();
  }
}
input.focus();

button.addEventListener('click', calcular);
input.addEventListener('keydown', (e) => {
  e.key === 'Enter' ? calcular() : null;
});
