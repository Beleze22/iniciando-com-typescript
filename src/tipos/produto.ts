// nome, preço, desconto (0-1), Função precoComDesconto

type Produto = {
  nome: string;
  preco: number;
  desconto: number;
  precoComDesconto: () => number;
};

const iPad: Produto = {
  nome: "Apple iPad Pro 11 m2",
  preco: 4200,
  desconto: 0.15,
  precoComDesconto() {
    return this.preco * (1 - this.desconto);
  },
};
