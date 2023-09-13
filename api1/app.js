"use strict";
// ======================
//      DRAG and DROP
// =========================

//  Eventos del objeto
// -----------------------

// - dragstart (cuando se le hace click)
// - drag (durante el arrastre)
// - dragend (cuando se suelta)


// eventos de zona (zona por la que se esta arrastrando otro objeto)
// ---------------------------------------------------------------------

// dragenter (cuando entra en la zona)
// dragover (mientras se mueva por la zona)
// drop (cuando se suelta)
// dragleave (cuando sale de la zona)

// propiedades de transfer
// -------------------------------

// - getData()
// - setData()

const circulo = document.querySelector('.circulo');
const rectangulo = document.querySelector('.container');

circulo.addEventListener('dragstart', (e) => {
    console.log('1');
    // console.log(e.dataTransfer);
    e.dataTransfer.setData("text-plane", e.target.id);
    e.dataTransfer.setData("event", e.target);
    console.log(e.dataTransfer.getData("text-plane"));
    console.log(e.dataTransfer.getData("event"));
});

// circulo.addEventListener('drag', () => {
//     console.log('2');
// });

circulo.addEventListener('dragend', () => {
    console.log('3')
});

rectangulo.addEventListener('dragenter', () => {
    console.log('entrando');
});

rectangulo.addEventListener('dragover', (e) => {
    e.preventDefault();
    // console.log('over');
});

rectangulo.addEventListener('dragleave', () => {
    console.log('saliendo');
});

rectangulo.addEventListener('drop', (e) => {
    // e.preventDefault();
    console.log(e.dataTransfer.getData("text-plane"));
    console.log(e.dataTransfer.getData("event"));
    console.log('drop');
});

// ===================================================
// PRUEBA 2
// ===================================================

const zona = document.querySelector('#zona');
zona.addEventListener('dragover', (e) => {
    e.preventDefault();
})
zona.addEventListener("drop", (e) => {
    let n = e.dataTransfer.getData("color")
    zona.className = `color${n}`;
})

for (let i = 1; i < document.querySelector('#container-colores').children.length + 1; i++) {
    document.querySelector(`.color${i}`).addEventListener('dragstart', (e) => transferirColor(i, e));
}

const transferirColor = (n, e) => {
    e.dataTransfer.setData("color", n);
}

//==========================================
//            PRUEBA 3 - CHESS
//==========================================

const king = document.querySelector('.king');

const cuadrados = document.querySelectorAll('.cuadrado');

let arrastrando;

king.addEventListener('dragstart', (e) => {
    arrastrando = e.target;
    // arrastrando.style.transform = 'translate(-20px, -20px)';
});

cuadrados.forEach(cuadrado =>{
    cuadrado.addEventListener('dragover', (e)=>e.preventDefault());
    cuadrado.addEventListener('drop',(e) =>{
        // console.log(arrastrando);
        console.log(e.target);
        e.target.append(arrastrando);
        king.style.trasition = 'ransition: transform 3s';
        // arrastrando.style.transform = 'translate(0, 0)';
    })
});


// pruebaChess[1].addEventListener('dragover', (e) => {
//     e.preventDefault();
// });

// pruebaChess.addEventListener('drop', (e) => {
//     console.log(e.target);
// });




console.log(cuadrados);