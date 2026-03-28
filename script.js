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