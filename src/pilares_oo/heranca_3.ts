interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha?: string;
}

interface CasoDeUso {
  executar(entrada: any): any;
}

class RegistrarUsuario implements CasoDeUso {
  executar(usuario: Usuario) {
    console.log("Executando registrar usuario");
    console.log(usuario);
  }
}

const u1: Usuario = {
  id: 123,
  nome: "Gustavo",
  email: "gustavo@beleze.com",
  senha: "Beleze#1994",
};

const NovoRegistro: CasoDeUso = new RegistrarUsuario();
NovoRegistro.executar(u1);

export {};
