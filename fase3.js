// =======================
// IMPORTACIÓN DE CLASES
// =======================

// Armas, Casas y Batallas
import { Arma } from "./clases/arma.js";
import { Casa } from "./clases/casa.js";
import { Batalla } from "./clases/batallas.js";

// Personajes y personajes especiales
import { Guerrero } from "./clases/personajes/especiales/guerrero.js";
import { Rey } from "./clases/personajes/especiales/rey.js";
import { Consejero } from "./clases/personajes/especiales/consejero.js";

console.log("========== FASE 3 INICIADA ==========\n");

// =======================
// CREACIÓN DE CASAS
// =======================

console.log("🏰 Creando casas...");
const casaStark = new Casa("Stark", "El invierno se acerca");
const casaLannister = new Casa("Lannister", "Un Lannister siempre paga sus deudas");

// =======================
// CREACIÓN DE ARMAS
// =======================

console.log("\n⚒️ Creando armas...");
const garra = new Arma("Garra", "Espada", 90);
const aguja = new Arma("Aguja", "Estilete", 70);
const hacha = new Arma("Hacha del norte", "Hacha", 80);
const espadaLarga = new Arma("Espada Larga", "Espada", 85);
const ballesta = new Arma("Ballesta", "Proyectil", 75);
const filoRojo = new Arma("Filo Rojo", "Espada", 88);
const lanzaDeCaza = new Arma("Lanza de Caza", "Lanza", 60);

// =======================
// GUERREROS DE LA CASA STARK
// =======================

console.log("\n🛡️ Creando guerreros Stark...");
const jon = new Guerrero("Jon Snow", 25, true, "Stark", garra);
const arya = new Guerrero("Arya Stark", 18, true, "Stark", aguja);
const robb = new Guerrero("Robb Stark", 22, true, "Stark", espadaLarga);
const brienne = new Guerrero("Brienne de Tarth", 30, true, "Stark", hacha);

// =======================
// GUERREROS DE LA CASA LANNISTER
// =======================

console.log("\n🛡️ Creando guerreros Lannister...");
const jaime = new Guerrero("Jaime Lannister", 32, true, "Lannister", filoRojo);
const cersei = new Guerrero("Cersei Lannister", 34, true, "Lannister", lanzaDeCaza);
const tyrion = new Guerrero("Tyrion Lannister", 30, true, "Lannister", ballesta);
const gregor = new Guerrero("Gregor Clegane", 38, true, "Lannister", hacha);

// =======================
// REGISTRO DE GUERREROS EN SUS CASAS
// =======================

console.log("\n📜 Añadiendo guerreros a sus casas...");
casaStark.agregarMiembro(jon);
casaStark.agregarMiembro(arya);
casaStark.agregarMiembro(robb);
casaStark.agregarMiembro(brienne);

casaLannister.agregarMiembro(jaime);
casaLannister.agregarMiembro(cersei);
casaLannister.agregarMiembro(tyrion);
casaLannister.agregarMiembro(gregor);

// =======================
// VISUALIZAR MIEMBROS DE CADA CASA
// =======================

console.log("\n👁️‍🗨️ Mostrando miembros de la Casa Stark:");
casaStark.visualizarMiembros();

console.log("\n👁️‍🗨️ Mostrando miembros de la Casa Lannister:");
casaLannister.visualizarMiembros();

// =======================
// INICIO DE LA BATALLA
// =======================

console.log("\n⚔️ INICIANDO BATALLA DE LOS BASTARDOS ⚔️\n");

const batallaBastardos = new Batalla();

// Ejecuta la batalla entre ambas casas
batallaBastardos.iniciarBatalla(casaStark, casaLannister);

// =======================
// RESULTADOS DE LA BATALLA
// =======================

console.log("\n💀 Mostrando guerreros muertos en combate...\n");
batallaBastardos.mostrarGuerrerosMuertosEnCombate();

console.log("\n========== FIN DE LA FASE 3 ==========\n");
