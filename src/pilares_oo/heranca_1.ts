interface Entidade {
  id: string;
}

interface Vendavel {
  preco: number;
  desconto: number;
}

// Utiliza externds quando a herança é de Classe-Classe ou Inter-Inter

interface EntidadeComDatas extends Entidade {
  criadoEm: Date; // createdAt
  atualizadoEm: Date; // updatedAt
  excluidoEm?: Date; // deletedAt
}

interface Usuario extends EntidadeComDatas {
  nome: string;
  email: string;
  senha?: string;
}

const u1: Usuario = {
  id: "0001",
  nome: "Gustavo",
  email: "gustavp@zmail.com",
  criadoEm: new Date(),
  atualizadoEm: new Date(),
};

console.log(u1);

interface Produto extends EntidadeComDatas, Vendavel {
  nome: string;
}

const p1: Produto = {
  id: "cde-456",
  nome: "iPad",
  preco: 1000,
  desconto: 0.05,
  criadoEm: new Date(),
  atualizadoEm: new Date(),
};

console.log(p1);

export {};
