import { validateHeaderName } from "http";

let nome: string = "Gustavo";
console.log(nome);

let estaChovendo: boolean; //declarou a variável, porém não pode ser usada até inicializar
estaChovendo = true;
console.log(estaChovendo);

let idade = 27; //Não declarou o tipo, porém iniciou com valor, infere o tipo.
idade = 29;
console.log(idade);

let variavel: any = 4; //pode assumir qualquer tipo
variavel = "Gustavo";
variavel = { nome: "Gustavo" };
console.log(variavel);

let misterio; //como foi iniciada sem tipar ou atribuir valor, assume tipo "any"
misterio = 4;
misterio = "texto";
console.log(misterio);
