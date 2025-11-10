export class Casa {
    #nombre;
    #lema;
    #miembros = [];

    constructor(nombre, lema) {
        this.#nombre = nombre;
        this.#lema = lema;
    }

    get nombre() {
        return this.#nombre;
    }

    get lema() {
        return this.#lema;
    }

    agregarMiembro(personaje) {
        this.#miembros.push(personaje);
    }

    guerrerosDisponibles() {
        const guerreros = [];
        this.#miembros.forEach(miembro => {
            if (typeof miembro.atacar === 'function' && miembro.vida > 0) {
                guerreros.push(miembro);
            }
        });
        return guerreros;
    }

    mostrarMiembros() {
        console.log(`\nMiembros de la Casa ${this.#nombre}:`);
        this.#miembros.forEach(m => {
            const arma = m.arma ? ` - Arma: ${m.arma.nombre}` : '';
            console.log(`- ${m.nombre} (${m.constructor.name})${arma}`);
        });
    }
}