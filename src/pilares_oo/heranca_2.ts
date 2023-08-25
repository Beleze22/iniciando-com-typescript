interface Entidade {
  id: number;
}

interface Vendavel {
  nome: string;
  preco: number;
  desconto: number;
}

// Utiliza implements quando a herança é de Classe-Inter
// Herança não passa Inter-Classe (a partir de classe passar para inter)
class Produto implements Entidade, Vendavel {
  constructor(
    public readonly id: number,
    readonly nome: string,
    readonly preco: number,
    readonly desconto: number
  ) {}

  get precoFinal() {
    return (1 - this.desconto) * this.preco;
  }
}

class Servico implements Entidade, Vendavel {
  constructor(
    public readonly id: number,
    readonly nome: string,
    readonly preco: number,
    readonly desconto: number
  ) {}

  get precoFinal() {
    return (1 - this.desconto) * this.preco;
  }
}

const p1 = new Produto(1, "Caneta", 9.8, 0.05);
console.log(p1);
console.log(p1.precoFinal);

let v1: Vendavel = new Produto(2, "iPad", 1000, 0.1);
console.log(v1);

v1 = new Servico(3, "Apontamento", 50, 0);
console.log(v1);

export {};
