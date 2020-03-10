export class Post {

    titulo: string;
    texto: string;

    constructor({ titulo, texto }) {
        this.titulo = titulo;
        this.texto = texto;
    }
}