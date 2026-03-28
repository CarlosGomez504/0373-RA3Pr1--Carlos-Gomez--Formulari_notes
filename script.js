// Aquí guardo todo el formulario en una variable para poder usarlo después
const formulari = document.getElementById("formulariAlumne");

// Guardo cada campo del formulario por separado para poder leer sus valores y validar si están bien
const inputNom = document.getElementById("nom");
const inputExamen = document.getElementById("examen");
const inputPractiques = document.getElementById("practiques");
const inputActitud = document.getElementById("actitud");

// Este div lo voy a usar para mostrar mensajes de error o de éxito cuando el usuario agregue un alumno
const missatge = document.getElementById("missatge");

// Aquí guardo el cuerpo de la tabla donde voy a ir insertando los alumnos que agregue
const cosTaula = document.getElementById("cosTaula");

// Creo un array vacío para ir guardando los alumnos como objetos
let alumnes = [];

// Esta función sirve para validar los datos que el usuario escribe
function validarFormulario(event) {
    event.preventDefault(); // Aqui evito que la página se recargue al enviar

    // Limpio mensajes previos
    missatge.innerHTML = "";
    missatge.className = "";

    // aqui Leo los datos de los inputs para poder calcular la nota final
    const nom = inputNom.value.trim();
    const examen = parseFloat(inputExamen.value);
    const practiques = parseFloat(inputPractiques.value);
    const actitud = parseFloat(inputActitud.value);

    // Aui Reviso que el nombre no esté vacío
    if (nom === "") {
        missatge.innerHTML = "Pon el nombre del alumno.";
        missatge.className = "error";
        return false; // si el nombre esta vacio paro la funcion aquí porque hay error
    }

    // Aqui Reviso que las notas sean números entre 0 y 10
    if (isNaN(examen) || examen < 0 || examen > 10) {
        missatge.innerHTML = "La nota del examen debe ser de 0 a 10.";
        missatge.className = "error";
        return false;
    }

    // Aqui Reviso que las practicas sean números entre 0 y 10
    if (isNaN(practiques) || practiques < 0 || practiques > 10) {
        missatge.innerHTML = "La nota de prácticas debe ser de 0 a 10.";
        missatge.className = "error";
        return false;
    }

    // Aqui Reviso que la actitud sean números entre 0 y 10
    if (isNaN(actitud) || actitud < 0 || actitud > 10) {
        missatge.innerHTML = "La nota de actitud debe ser de 0 a 10.";
        missatge.className = "error";
        return false;
    }

    // Si todo está bien, devolvemos true
    return true;
}

// Conecto la función al enviar el formulario
formulari.addEventListener("submit", validarFormulario);

//Creo una nueva funcion llamada calcularNotaFinal
function calcularNotaFinal(examen, practiques, actitud) {

    // Aqui aplico la formula donde aqui vamos a utilizar los datos que el usuario a digitado y estan almacenados en los inputs
    const nota = examen * 0.6 + practiques * 0.3 + actitud * 0.1;
    /* 
       Creo una nueva varuable llamada notaRedondeada para que cuando salga el resultado (nota) vamos a redondeamos el resultado para que 
       el que nos muestre un resultado final pero solo con (2 decimales)
    */
    const notaRedondeada = parseFloat(nota.toFixed(2));

    // aqui creo la variable estado y aqui verificamos si el alumno esta aprovado o suspenso
    const estado = notaRedondeada >= 5 ? "Aprovado" : "Suspenso";

    // aqui devuelvo la nota final ya redondeada y el estado como un objeto 
    return { notaFinal: notaRedondeada, estado: estado };
}
