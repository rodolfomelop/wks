export default class Lancamento{

    constructor (titulo, descricao, data) {
            this.id = Math.random().toString(36).substr(2,5);
            this.titulo = titulo;
            this.descricao = descricao;
            this.data = data;
    }
}