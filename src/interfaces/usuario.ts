interface Usuario {
  id?: number;
  nome: string;
  email: string;
  senha?: string;
}

const usuarioLogado: Usuario = {
  id: 123,
  nome: "Gustavo",
  email: "gustavo@gmai.com",
};

console.log(usuarioLogado.id);
console.log(usuarioLogado.nome);
console.log(usuarioLogado.email);

const usuarioParcial: Partial<Usuario> = {
  nome: "Gustavo",
  senha: "12345",
};

console.log(usuarioParcial.nome);
console.log(usuarioParcial.senha);

const usuarioCompleto: Required<Usuario> = {
  id: 456,
  nome: "Claudia",
  email: "claudia@gmail.com",
  senha: "hdsuahds",
};

console.log(usuarioCompleto.id);
console.log(usuarioCompleto.nome);
console.log(usuarioCompleto.email);
console.log(usuarioCompleto.senha);

export {};
