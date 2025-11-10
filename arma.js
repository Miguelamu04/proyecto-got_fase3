export class Arma {
    constructor(nombre, danio) {
        this.nombre = nombre;
        this.danio = danio;
    }

    descripcion() {
        console.log(`Arma: ${this.nombre} | Daño: ${this.danio}`);
    }
}