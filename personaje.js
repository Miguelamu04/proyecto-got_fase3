export class Personaje {
constructor(nombre, edad, casa) {
this.nombre = nombre;
this.edad = edad;
this.vivo = true;
this.casa = casa;
this.arma = null;
}

presentarse() {
console.log(`Soy ${this.nombre} de la Casa ${this.casa.nombre}`);
}

morir() {
this.vivo = false;
console.log(`${this.nombre} ha muerto`);
}

equiparArma(arma) {
this.arma = arma;
console.log(`${this.nombre} ha equipado el arma ${arma.nombre}`);
}
}