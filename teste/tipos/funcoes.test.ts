import { multiplicar, saudacao } from "../../src/tipos/funcoes";

test("Deve retornar uma saudação baseada na hora atual", () => {
  const s = saudacao("Gustavo");
  expect(s).toBe("Ola Gustavo! Passar bem!");
});

test("Deve multiplicar dois numeros", () => {
  const resultato = multiplicar(4, 5);
  expect(resultato).toBe(20);
});
