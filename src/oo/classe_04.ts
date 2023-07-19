// Produto
// id
// nome (2 - 250)
// preco (>0)
// desc (0 - 0.8)
// precoFinal

class Produto {
  id: number | undefined;
  nome: string | undefined;
  preco: number | undefined;
  desc: number | undefined;

  constructor(id: number, nome?: string, preco?: number, desc?: number) {
    this.id = id;
    if ((nome?.length ?? 0) >= 2 && (nome?.length ?? 0) <= 250) {
      this.nome = nome;
    }
    if ((preco ?? 0) > 0) {
      this.preco = preco;
    }
    if ((desc ?? 0) >= 0 && (desc ?? 0) <= 0.8) {
      this.desc = desc;
    }
  }

  precoFinal = function (this: Produto) {
    if (this.preco && this.desc) {
      return this.preco * (1 - this.desc);
    }
  };
}

const p1 = new Produto(123, "C", 2.5, 0.1);

console.log(p1.nome);
console.log(p1.preco);
console.log(p1.precoFinal());

export {};
