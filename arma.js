export class Arma {
    #nombre;
    #daño;
    #tipo;

    constructor(nombre = "", tipo = "", daño = 0){
        this.#nombre = nombre;
        this.#tipo = tipo;
        this.#daño = daño;
    }

    set nombre(valor){
        this.#nombre = valor;
    }

    set tipo(valor){
        this.#tipo = valor;
    }

    set daño(valor){
        this.#daño = valor;     
    }

    get nombre(){
        return this.#nombre;
    }

    get daño(){
        return this.#daño;
    }

    get tipo(){
        return this.#tipo;
    }
    
    descripcion() {
        return `${this.#nombre} (${this.#tipo || "sin tipo"}) causa ${this.#daño} de daño.`;
    }

}
