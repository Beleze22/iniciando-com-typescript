// Produto
// id
// nome (2 - 250)
// preco (>0)
// desc (0 - 0.8)
// precoFinal

import Validador from "./validador";

class Produto {
  constructor(
    readonly id: number,
    readonly nome: string,
    readonly preco: number,
    readonly desc: number = 0
  ) {
    // new Validador().maiorQueZero(id, "ID inválido"); mesma coisa que:
    // const validador = new Validador();
    // validador.maiorQueZero(id, "ID inválido");
    // caso o método seja "static":
    Validador.maiorQueZero(id, "ID inválido");
    // if (nome.length < 2) throw new Error("Nome muito pequeno");
    // if (nome.length > 250) throw new Error("Nome muito grande");
    Validador.tamanhoEntre(nome, 2, 250, "Nome inválido");
    // if (preco <= 0) throw new Error("Preço inválido");
    Validador.maiorQueZero(preco, "Preço inválido");
    // if (desc < 0 || desc > 0.8) throw new Error("Desconto inválido");
    Validador.entre(desc, 0, 0.8, "Desconto inválido");
  }

  get precoFinal() {
    return this.preco * (1 - this.desc);
  }
}

const p1 = new Produto(1, "Caneta", 10, 0.3);
console.log(p1.nome, p1.preco, p1.precoFinal);

const p2 = new Produto(2, "iPhone 13 mini", 4200, 0.2);
console.log(p2.nome, p2.preco, p2.precoFinal);

console.log(Validador.ERRO_DESCONHECIDO);

export {};
