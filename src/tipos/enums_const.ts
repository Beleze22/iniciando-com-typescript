const Erros = {
  URL_INVALIDA: "url invalida",
  EMAIL_NAO_CADASTRADO: "email não cadastrado",
  ID_NAO_ENCONTRADO: "id não encontrado",
} as const;

let erro: string;

erro = Erros.EMAIL_NAO_CADASTRADO;
erro = "cpf fora de padrão";

console.log(erro);
