// Array = ["Ale", 24, "Mar del Plata"];

// let persona1 = {
//     nombre: "Ale",
//     edad: "35",
//     ciudad: "Mar del Plata"
// };

// document.write(Array[0]);
// document.write("Nombre: " + persona1["nombre"] + "<br>");

// document.write("edad: " + persona1["edad"]);
// let num = 10;

// for (let index = 0; index < num; index++) {
//     document.write(num - 1 + "<br>");

// }

// EJERCICIO 1

// let dia = prompt("Como está el día de hoy? \n soleado, numbado, lloviendo");
// console.log("El dia de hoy se encuentra: " + dia);

// EJERCICIO 2

// const pi = Math.PI;
// let radio = prompt("Ingrese el radio de la circunferencia");
// let area = pi * Math.pow(radio, 2);
// let perimetro = 2 * pi * radio;
// console.log("Area: " + area + "\n Perimetro: " + perimetro);

// EJERCICIO 3

// let edad = prompt("Ingrese su edad");
// if (edad >= 18) {
//     console.log("MAYOR DE EDAD")
// } else {
//     console.log("MENOR DE EDAD");
// }

// EJERCICIO 4 

// let srt = prompt("Ingrese S/N");
// srt = srt.toLowerCase(srt);
// console.log(srt);
// if (srt === "s" || srt === "n") {
//     console.log("CORRECTO")
// } else {
//     console.log("INCORRECTO");
// }

// EJERCICIO 5

// let operacion;
// let num1;
// let num2;
// let rta = true;

// do {
//     rta = true;
//     operacion = prompt(
//         `Que operacion desea realizar:
//      \n S: Sumar
//      \n R: Restar
//      \n M: Multiplicar
//      \n D: Dividir`);
//     operacion = operacion.toLowerCase(operacion);
//     // console.log(operacion);
//     // let rta = true;
//     if (operacion != "s" && operacion != "r" && operacion != "m" && operacion != "d") {
//         console.log("ingrese un dato valido");
//         rta = false;
//     }
//     console.log(rta);
// } while (rta == false);


// let num = false;
// do {
//     num = false;
//     num1;
//     num1 = prompt("Ingrese el primer numero");
//     num1 = parseInt(num1);
//     console.log(typeof num1);
//     if (!isNaN(num1)) {
//         num = true;
//     }
//     // console.log(num);
// } while (num == false);

// num = false;
// do {
//     num2 = prompt("Ingrese el segundo numero");
//     num2 = parseInt(num2);
//     if (!isNaN(num2)) {
//         num = true;
//     }
// } while (num == false);

// if (operacion == "s") {
//     console.log(num1 + num2);
// }
// if (operacion == "r") {
//     console.log(num1 - num2) 
// }else if (operacion == "m") {
//     console.log(num1 * num2);
// }else if (operacion == "d") {
//     console.log(num1 / num2);
// }

//------------- EJERCICIO 6 ------------------

// let num;
// do {
//     num = prompt("Ingrese un numero");
// } while (isNaN(num));

// if (num == 0) {
//     console.log("El numero es 0");
// }else if (num % 2 == 0) {
//     console.log("El numero es par");
// } else if (num % 2 != 0) {
//     console.log("el numero es impar");
// }

// --------------- EJERCICIO 7 -----------

// let limite;
// limite = prompt("Ingrese valor límite");
// let valor = 0;
// let num;
// while (valor < limite) {
//     do {
//         num = prompt("Ingrese numero");
//         // num = parseInt(num);
//         console.log(num,
//             typeof num);

//     } while (isNaN(num));
//     valor = valor + num;
//     console.log(valor);
// }

// ------------EJERCICIO 8 -------------

// let num;
// let suma = 0;
// let cont = -1;
// let maxNum = Number.NEGATIVE_INFINITY;
// let minNum = Number.POSITIVE_INFINITY;

// while (num != 0) {

//     do {
//         pedirNumero();
//     } while (isNaN(num));

//     calculos(num);
//     cont ++;
//     // console.log(suma);
//     console.log(`suma: ${suma}
//                 maxNum: ${maxNum}
//                 minNum: ${minNum}`)

// }

// calculoFinal();

// function pedirNumero() {
//     num = prompt("Ingrese un numero o 0 para terminar");
//     num = parseInt(num)
//     return num;
// }

// function calculos(num) {
//     suma += num;

//     if (num > maxNum && num != 0) {
//         maxNum = num;
//     }

//     if (num < minNum && num != 0) {
//         minNum = num;
//     }
// }

// function calculoFinal() {
//     if (cont == 0) {
//         console.log("No se ingreso ningun numero")
//         return;
//     }
//     console.log(`
//         Suma = ${suma}
//         Numero maximo = ${maxNum}
//         Numero minimo = ${minNum}
//         Promedio = ${suma / cont}`)
// }

// ---------- EJERCICIO 9 -------------

// let string1;
// let string2 = "";
// string1 = prompt("Ingrese una cadena de texto");

// for (let i = 0; i < string1.length; i++) {
//     string2 = string2 + string1.substring(i, i + 1) + " ";

// }
// console.log(string2);


// --------- EJERCICIO 10 -----------

// let string1;
// let string2 = "";
// string1 = prompt("Ingrese una cadena de texto");

// for (let i = string1.length; i >= 0; i--) {
//     string2 = string2 + string1.substring(i, i - 1);
// }
// console.log(string2);

// ---------- EJERCICIO 11 ---------------

// let string;
// let largerWord = "";
// let word = "";
// let contLetters = 0;

// string = prompt("Ingrese una oracion para saber cual es la palabra mas larga");

// for (let i = 0; i < string.length; i++) {
//     const currentChar = string.substring(i, i + 1);
//     // if (string.substring(i, i + 1) != " ") {
//     //     word = word + string.substring(i, i + 1);
//     if (!/[ ,.;:!?]/.test(currentChar)) {
//         word = word + string.substring(i, i + 1);
//     }else if (/[ ,.;:!?]/.test(currentChar)) {
//         if (word.length > largerWord.length) {
//             largerWord = word;
//         }
//         word = "";
//     }
//     console.log(word);
//     if (word.length > largerWord.length) {
//         largerWord = word;
//     }
// }
// console.log(largerWord);

// EJERCICIO 12

// let func = (dato) => tipoDato = console.log(typeof dato);
// let dato = prompt("Ingrese dato");
// // console.log(tipoDato);
// func(dato);

// ------------------------------------
// -        EJERCICO 13            ----
// ------------------------------------

// var persona1 = new Object();
// persona1.nombre = 'Ale';
// persona1.edad = 35;
// persona1.sexo = 'M';
// persona1.altura = 1.82;
// persona1.peso = 85;

// var persona2 = {
//     nombre: 'Juan',
//     edad: 35,
//     sexo : 'M',
//     altura: 1.85,
//     peso : 85
// }

// class Persona {
//     constructor(nombre, edad, sexo, altura, peso) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.sexo = sexo;
//         this.altura = altura;
//         this.peso = peso;
//     }
// }

// var persona3 = new Persona('Martin', 34, 'm', 1.64, 78);
// console.log("---Persona1---");
// toStringPersona(persona1);
// console.log("---Persona2---");
// toStringPersona(persona2);
// console.log("---Persona3---");
// toStringPersona(persona3);


// function toStringPersona(objeto) {
//     console.log(`
//     nombre: ${objeto.nombre} \n
//     edad: ${objeto.edad} \n
//     sexo: ${objeto.sexo} \n
//     altura: ${objeto.altura} \n
//     peso: ${objeto.peso}`)
// }

// EJERCICIO 14

// var listaLibros = [];

// function Libro(isbn, titulo, autor, numeroDePaginas) {
//     this.isbn = isbn;
//     this.titulo = titulo;
//     this.autor = autor;
//     this.numeroDePaginas = numeroDePaginas;
//     // this.crearLibro = crearLibro;
//     // this.guardarLibro = this.guardarLibro;
// }

// Libro.crearLibro = function() {
//     let isbn = prompt("Ingrese isbn del libro");
//     let titulo = prompt("Ingrese titulo del libro");
//     let autor = prompt("Ingrese autor del libro");
//     let nroPaginas = prompt("Ingrese cantidad de paginas del libro");
//     return new Libro(isbn, titulo, autor, nroPaginas);
// }

// Libro.guardarLibro = function(libro) {
//     listaLibros.push(libro);
// }

// function toStringLibro(libro) {
//     console.log(`
//     isbn: ${libro.isbn} \n
//     titulo: ${libro.titulo} \n
//     autor: ${libro.autor} \n
//     nro de paginas: ${libro.numeroDePaginas}`)
// }

// Libro.guardarLibro(Libro.crearLibro());

// listaLibros.forEach(libro => {
//     toStringLibro(libro);
// });




// ----------EJERCICIO 15----------

// class Circulo {
//     constructor(radio) {
//         this.radio = radio;
//     }
// }

// class circuloService {
//     crearCirculo() {
//         let radio = prompt("Ingrese radio del circulo")
//         return new Circulo(radio);
//     }
//     calcularArea(circulo) {
//         return Math.pow(circulo.radio, 2) * Math.PI;
//     }
//     calcularPerimetro(circulo) {
//         return 2 * Math.PI * circulo.radio;
//     }
// }

// let exit = false;
// const circleList = [];
// const cs = new circuloService();
// while (!exit) {
//     let option = prompt(`
//     1. Crear nuevo circulo \n
//     2. Calcular area de un circulo \n
//     3. Calcular perimetro de un circulo \n
//     4. Salir`);


//     switch (option) {
//         case "1":
//             circleList.push(cs.crearCirculo());
//             break;

//         case "2":
//             // alert("hola");
//             for (let i = 0; i < circleList.length; i++) {
//                 console.log(`${i + 1}.Circulo \n
//                             Radio: ${circleList[i].radio}`);
//             }
//             let rta = prompt("Ingrese el circulo deseado");
//             // alert("hola");
//             alert("El Area del circulo es: " + cs.calcularArea(circleList[rta - 1]));
//             break;

//         case "3":
//             for (let i = 0; i < circleList.length; i++) {
//                 console.log(`${i + 1}.Circulo \n
//                             Radio: ${circleList[i].radio}`);
//             }
//             let rtaP = prompt("Ingrese el circulo deseado");
//             // alert("hola");
//             alert("El Perimetro del circulo es: " + cs.calcularPerimetro(circleList[rtaP - 1]));
//             break;
            
//         case "4":
//             exit = true;
//             break;
//     }
// }


// --------- EJERCICIO 16------------------]


// function numeroAleatorio() {
//     return Math.floor(Math.random() * (100 - 0 + 1)) + 0;
// }

// let vector1 = [];
// let vector2 = [];

// for (let i = 0; i < 5; i++) {
//     vector1.push(numeroAleatorio());
//     vector2.push(numeroAleatorio());
// }

// console.log("vector 1: " + vector1);
// console.log("vector 2: ", vector2);

// // for (let i = 0; i < vector1.length; i++) {
// //     console.log(vector1[i]);
// //     console.log(vector2[i]);
// // }


// // EJERCICIO 17 --- USA ARRAYS DE EJERCICIO 16----


// vector1.pop();
// vector1.pop();

// console.log("vector 1: ", vector1);

// ---------- EJERCICIO 19 ----------

// function numeroAleatorio() {
//     let nroAleatorio = Math.random() * (100 - 0 + 1);
//     nroAleatorio = nroAleatorio.toFixed(2);
//     return nroAleatorio = parseFloat(nroAleatorio);
// }

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (b < b) return -1;
//     if (a == b) return 0;
// }

// let vectorA = [];
// let vectorB = [];
// // llenar vector A
// for (let i = 0; i < 50; i++) {
//     vectorA[i] = numeroAleatorio();
// }

// console.log("vector  A: ", vectorA);
// for (let i = 0; i < vectorA.length; i++) {
//     vectorA.sort(compareNumeric(i, i + 1));
    
// }

// console.log("vector  A: ", vectorA);

// vectorB = vectorA.slice(0, 9);
// console.log(vectorB);

// for (let i = 0; i < 10; i++) {
//     vectorB.push(.5);
// }
// console.log(vectorB);



// ------- EJERCICIO 20 ------------

// let matriz = [[3],[6],[9],[12],[15]];

// let array = matriz.map(function(elemento){
//     return elemento * 2;
// });

// console.log(array);


// OTRA MANERA DEL 20

// function multiplicarPorDos(matriz){
//     const resultado = matriz.map(function(elemento) {
//         return elemento + 3;
//     });
//     return resultado;
// }

// let matriz = [[3],[6],[9],[12],[15]];
// // matriz = parseInt(matriz);

// const newArray = multiplicarPorDos(matriz);
// console.log(newArray);

// ---------------------------------

// function obtenerSiguienteArray(matriz) {
//     const resultado = matriz.map(function(elemento) {
//       return elemento + 3; // Sumamos 3 a cada elemento
//     });
  
//     return resultado;
//   }
  
//   // Matriz dada
//   const matriz = [3, 6, 9, 12, 15];
  
//   // Llamamos a la función para obtener el nuevo array
//   const nuevoArray = obtenerSiguienteArray(matriz);
  
//   // Mostramos el nuevo array
//   console.log(nuevoArray);

//   ----------------------------------------------\

// --------EJERCICIO 22 ------------

class Persona {
    constructor(nombre, edad, sexo, altura, peso) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.altura = altura;
        this.peso = peso;
    }
}

const persona1 = new Persona("Ale", 35, "M", 1,82, 85);

const propiedades = Object.keys(persona1);
console.log(propiedades);