export class Guerrero {
    #nombre;
    #edad;
    #vivo;
    #vida;
    casa;
    arma;

    constructor(nombre, edad, vivo, casa, arma) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#vivo = vivo;
        this.#vida = 100;
        this.casa = casa;
        this.arma = arma;
    }

    get nombre() {
        return this.#nombre;
    }

    get edad() {
        return this.#edad;
    }

    get vivo() {
        return this.#vivo;
    }

    get vida() {
        return this.#vida;
    }

    presentarse() {
        console.log(`Soy ${this.#nombre} de la Casa ${this.casa.nombre}`);
    }

    equiparArma(arma) {
        this.arma = arma;
        console.log(`${this.#nombre} ha equipado el arma ${arma.nombre}`);
    }

    atacar(objetivo) {
        if (this.#vida <= 0) {
            console.log(`${this.#nombre} está muerto y no puede atacar.`);
            return;
        }

        if (objetivo.vida <= 0) {
            console.log(`${objetivo.nombre} ya está muerto.`);
            return;
        }

        const danio = this.arma ? this.arma.danio : 10;
        console.log(`${this.#nombre} ataca a ${objetivo.nombre} con ${this.arma ? this.arma.nombre : 'sus puños'} causando ${danio} de daño.`);
        objetivo.recibirDaño(danio);
    }

    recibirDaño(puntos) {
        this.#vida -= puntos;
        
        if (this.#vida <= 0) {
            this.#vida = 0;
            this.#vivo = false;
        } else {
            console.log(`${this.#nombre} ahora tiene ${this.#vida} puntos de vida.`);
        }
    }
}