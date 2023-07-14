type Usuario = { nome: string; email: string };

const usuarios: Usuario[] = [
  { nome: "Joao", email: "joao@gmail.com" },
  { nome: "pedro", email: "pedro@gmail.com" },
  { nome: "maria", email: "maria@gmail.com" },
  { nome: "Gustavo", email: "gustavo@gmail.com" },
  { nome: "Amanda", email: "amanda@gmail.com" },
  { nome: "Rafaela", email: "rafaela@gmail.com" },
];

function buscarPorEmail(email: string): Usuario | null {
  return usuarios.find((u) => u.email === email) ?? null;
}

console.log(buscarPorEmail("gustavo@gmail.com"));
console.log(buscarPorEmail("avo@gmail.com"));
