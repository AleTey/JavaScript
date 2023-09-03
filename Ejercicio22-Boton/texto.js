// function resaltar(texto) {
//     const textoSeparado = texto.split(/\s+|[,;.]+/);

//     for (let i = 0; i < textoSeparado.length; i++) {
//         const palabra = textoSeparado[i];

//         if (palabra.length >= 8) {
//           const span = document.createElement("span");
//           span.className = palabra;
//           textoSeparado[i] = span.outerHTML;
//         }
        
//     }
    
// }



// const text = document.querySelector("#texto");

// const textoSeparado = text.textContent.split(/\s+|[,;.]+/);

//     for (let i = 0; i < textoSeparado.length; i++) {
//         const palabra = textoSeparado[i];

//         if (palabra.length >= 8) {
//           const span = document.createElement("span");
//           span.className = "resaltado";
//           textoSeparado[i] = span.outerHTML;
//         }
        
//     }
// text.innerHTML = textoSeparado.join(" ");
// console.log(text);


// Obtener una referencia al párrafo
const parrafo = document.getElementById("texto");

// Dividir el texto en palabras considerando también puntos y comas
const palabras = parrafo.textContent.split(/\s+|[,;.]+/);

// Recorrer todas las palabras
for (let i = 0; i < palabras.length; i++) {
    const palabra = palabras[i];
    
    // Verificar si la palabra tiene más de 8 caracteres
    if (palabra.length > 8) {
        // Crear un elemento span para resaltar la palabra
        const span = document.createElement("span");
        span.className = "resaltado"; // Aplicar la clase CSS para el fondo amarillo
        span.textContent = palabra;
        
        // Reemplazar la palabra original con el elemento span
        palabras[i] = span.outerHTML;
    }
}

// Actualizar el contenido del párrafo con las palabras resaltadas
parrafo.innerHTML = palabras.join(" ");