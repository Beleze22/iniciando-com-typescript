interface Flexivel {
  nome: string;
  [chave: string]: number | string;
}

const teste: Flexivel = {
  nome: "Gustavo",
  idade: 29,
  // casado: true,
  estadoCivil: "Casado",
};

export {};
