/**
 * Variables
 */
const listadoPosiblesSoluciones = ['lampara', 'pizarra', 'monitor', 'capitalismo', 'bondad'];
const solucion = listadoPosiblesSoluciones[Math.floor(Math.random() * listadoPosiblesSoluciones.length)];
let visualUsuario = Array(solucion.length).fill('_');
let intentos = 6;
let letrasIntroducidas = [];
const visualJugador = document.querySelector("#visual-jugador")
const nuevaLetra = document.querySelector("#nueva-letra")
const letrasJugador = document.querySelector("#letras-jugador")

/**
 * Funciones
 */

/**
 * Eventos
 */

/**
 * Inicio
 */
