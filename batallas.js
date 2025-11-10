export class Batalla {
    #muertos = [];

    iniciarBatalla(casaA, casaB) {
        console.log(`\nBatalla entre ${casaA.nombre} y ${casaB.nombre}\n`);

        // Obtenemos los guerreros disponibles de cada casa
        const ejercitoA = casaA.guerrerosDisponibles();
        const ejercitoB = casaB.guerrerosDisponibles();

        // Mientras ambos tengan guerreros vivos
        while (ejercitoA.length > 0 && ejercitoB.length > 0) {
            const guerreroA = ejercitoA[0];
            const guerreroB = ejercitoB[0];

            // Ataca primero el guerrero A
            guerreroA.atacar(guerreroB);

            if (guerreroB.vida <= 0) {
                console.log(`${guerreroB.nombre} de la Casa ${casaB.nombre} ha muerto.`);
                this.#muertos.push(guerreroB);
                ejercitoB.shift(); // elimina al muerto
                continue; // pasa al siguiente turno
            }

            // Luego ataca el guerrero B
            guerreroB.atacar(guerreroA);

            if (guerreroA.vida <= 0) {
                console.log(`${guerreroA.nombre} de la Casa ${casaA.nombre} ha muerto.`);
                this.#muertos.push(guerreroA);
                ejercitoA.shift(); // elimina al muerto
            }
        }

        // Resultado final
        if (ejercitoA.length > 0) {
            console.log(`\nLa Casa ${casaA.nombre} gana la batalla.`);
        } else if (ejercitoB.length > 0) {
            console.log(`\nLa Casa ${casaB.nombre} gana la batalla.`);
        } else {
            console.log("\nAmbas casas han caído en combate.");
        }
    }

    mostrarGuerrerosMuertosEnBatalla() {
        console.log("\nGuerreros caídos en combate:");
        this.#muertos.forEach(g => console.log(`- ${g.nombre} (${g.casa.nombre})`));
    }
}