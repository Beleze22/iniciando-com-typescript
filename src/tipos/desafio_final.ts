type Cliente = {
  nome: string;
  email: string;
  contas: ContaCorrente[];
};

type ContaCorrente = {
  numero: number;
  saldo: number;
  movimentar: (valor: number) => void;
};

function movimentar(this: ContaCorrente, valor: number) {
  this.saldo += valor;
}

let clientes: Cliente[] = [
  {
    nome: "Gustavo",
    email: "gustavo@gmail.com",
    contas: [
      { numero: 1234, saldo: 500, movimentar },
      { numero: 5678, saldo: 650, movimentar },
    ],
  },
  {
    nome: "Claudia",
    email: "claudia@gmail.com",
    contas: [
      { numero: 2194, saldo: 1500, movimentar },
      { numero: 2205, saldo: 320, movimentar },
    ],
  },
];

function movimentarConta(numConta: number, valor: number) {
  const conta = clientes
    .map((cli) => {
      return cli.contas.find((cc) => cc.numero === numConta);
    })
    .filter((c) => c)[0];
  return conta?.movimentar(valor);
}

function mostrarSaldo(numConta: number) {
  const conta = clientes
    .map((cli) => {
      return cli.contas.find((cc) => cc.numero === numConta);
    })
    .filter((c) => c)[0];
  return conta?.saldo ?? null;
}

console.log(mostrarSaldo(2194));
movimentarConta(2194, 50);
console.log(mostrarSaldo(2194));

console.log(mostrarSaldo(2205));
movimentarConta(2205, 156);
console.log(mostrarSaldo(2205));
