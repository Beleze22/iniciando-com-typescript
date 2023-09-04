abstract class Celular {
  ligar() {
    console.log("Em ligação");
  }

  abstract acessarRedeMovel(): void;
}

class iPhone23Pro extends Celular {
  acessarRedeMovel(): void {
    console.log("Usando rede 5g");
  }
}
class GalaxyS57Ultra extends Celular {
  acessarRedeMovel(): void {
    console.log("Usando rede 7g");
  }
}

let c1 = new GalaxyS57Ultra();

c1.ligar();
c1.acessarRedeMovel();

c1 = new iPhone23Pro();

c1.ligar();
c1.acessarRedeMovel();

export {};
