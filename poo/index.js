/*
 Permitir a los usuarios crear encuestas con opciones de respuesta OK
 Permitir a los usuarios votar en las encuestas OK
 Mostrar los resultados de las encuestas
 Almacenar los datos de las encuestas y los votos en una variable OK
 Almacenar los datos de las encuestas y los votos en una estructura de datos OK
 Las encuestas deben contener al menos 8 preguntas con opciones de respuesta. ....
 */
class Opcion {

    constructor(nombre) {
        this.nombre = nombre; // representa la opción como tal.
        this.votos = 0; // representa la cantidad de votos que tiene esta opción
    }
}

class Pregunta {

    constructor(enunciado, opciones) {
        this.enunciado = enunciado; // ej: ¿Que color le gusta? o seleccione un color
        this.opciones = opciones;
    }
}

class Encuesta {

    constructor(nombre, preguntas) {
        this.nombre = nombre;
        this.preguntas = preguntas;
    }

    votar(indicePregunta, indiceRespuesta) {
        let pregunta = this.preguntas[indicePregunta];
        let opcion = pregunta.opciones[indiceRespuesta];
        opcion.votos = opcion.votos + 1;
    }

    mostrarResultados() {
        console.log("Estos son los resultados de la encuesta...");

        this.preguntas.forEach(pregunta => {
            console.log(pregunta.enunciado);
            pregunta.opciones.forEach(opcion => {
                let mensaje = "- " + opcion.nombre +  ": " + opcion.votos; // "- Comedia: 5"
                console.log(mensaje )
            });
        });

    }
}


// Ejecución del programa.

let opcion1A = new Opcion("Comedia");
let opcion1B = new Opcion("Drama");
let opcion1C = new Opcion("Acción");
let pregunta1 = new Pregunta("¿Cuál es tu género de película favorito?", [opcion1A, opcion1B, opcion1C]);

let opcion2A = new Opcion("Aventura");
let opcion2B = new Opcion("Terror");
let opcion2C = new Opcion("Romance");
let pregunta2 = new Pregunta("Qué tipo de película prefieres para ver en el cine?", [opcion2A, opcion2B, opcion2C]);

let opcion3A = new Opcion("Marvel");
let opcion3B = new Opcion("Star Wars");
let opcion3C = new Opcion("Harry Potter");
let pregunta3 = new Pregunta("Cuál es tu franquicia cinematográfica preferida?", [opcion3A, opcion3B, opcion3C]);

let opcion4A = new Opcion("Leonardo Di Caprio");
let opcion4B = new Opcion("Angeline Jolie");
let opcion4C = new Opcion("Brad Pitt");
let pregunta4 = new Pregunta("Qué actor/actriz admiras más?", [opcion4A, opcion4B, opcion4C]);

let opcion5A = new Opcion("Lo que el viento se llevó");
let opcion5B = new Opcion("Dirty dancing");
let opcion5C = new Opcion("Casablanca");
let pregunta5 = new Pregunta("Cuál es tu película clásica favorita?", [opcion5A, opcion5B, opcion5C]);

let opcion6A = new Opcion("Toy Story");
let opcion6B = new Opcion("El Rey León");
let opcion6C = new Opcion("Shrek");
let pregunta6 = new Pregunta("Qué película de animación disfrutas más?", [opcion6A, opcion6B, opcion6C]);

let opcion7A = new Opcion("Christopher Nolan");
let opcion7B = new Opcion("Quentin Tarantino");
let opcion7C = new Opcion("Steven Spielberg");
let pregunta7 = new Pregunta("Cuál es tu director de cine preferido?", [opcion7A, opcion7B, opcion7C]);

let opcion8A = new Opcion("En el cine");
let opcion8B = new Opcion("En casa");
let opcion8C = new Opcion("En streaming");
let pregunta8 = new Pregunta("Prefieres ver películas en el cine, en la casa o streaming?", [opcion8A, opcion8B, opcion8C]);


let miPrimeraEncuesta = new Encuesta("Mi primera encuesta", [pregunta1,pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,pregunta7,pregunta8]);
miPrimeraEncuesta.votar(0, 0);
miPrimeraEncuesta.votar(1, 2);
miPrimeraEncuesta.votar(3, 1);
miPrimeraEncuesta.votar(2, 2);
miPrimeraEncuesta.votar(4, 0);
miPrimeraEncuesta.votar(5, 0);
miPrimeraEncuesta.votar(6, 1);
miPrimeraEncuesta.votar(7, 0);
miPrimeraEncuesta.votar(7, 0);
console.log(miPrimeraEncuesta)

miPrimeraEncuesta.mostrarResultados();




