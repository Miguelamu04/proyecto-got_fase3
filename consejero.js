import { Guerrero } from "./guerrero.js";

export class Consejero extends Guerrero {
    constructor(nombre, edad, vivo, casa, arma) {
        super(nombre, edad, vivo, casa, arma);
    }

    atacar(objetivo) {
        if (this.vida <= 0) {
            console.log(`${this.nombre} está muerto y no puede atacar.`);
            return;
        }

        if (objetivo.vida <= 0) {
            console.log(`${objetivo.nombre} ya está muerto.`);
            return;
        }

        const danio = this.arma ? this.arma.danio : 10;
        console.log(`${this.nombre} (Consejero) ataca astutamente a ${objetivo.nombre} con ${this.arma ? this.arma.nombre : 'sus puños'} causando ${danio} de daño.`);
        objetivo.recibirDaño(danio);
    }
}