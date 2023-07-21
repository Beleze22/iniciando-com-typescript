import Validador from "./validador";

class Produto {
  constructor(
    readonly id: number,
    readonly nome: string,
    readonly preco: number,
    readonly desc: number = 0
  ) {
    Validador.maiorQueZero(id, "ID inválido");
    Validador.tamanhoEntre(nome, 2, 250, "Nome inválido");
    Validador.maiorQueZero(preco, "Preço inválido");
    Validador.entre(desc, 0, 0.8, "Desconto inválido");
  }

  get precoFinal() {
    return this.preco * (1 - this.desc);
  }
}

const produto1 = new Produto(1, "Caneta", 10, 0.3);
console.log(produto1.nome, produto1.preco, produto1.precoFinal);

export {};
