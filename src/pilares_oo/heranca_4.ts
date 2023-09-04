class Carro {
  private _velocidade: number = 0;

  constructor(readonly velocidadeMaxima: number = 200) {}

  get velocidade() {
    return this._velocidade;
  }

  public acelecar() {
    this.alterarVelocidade(5);
  }

  public frear() {
    this.alterarVelocidade(-5);
  }

  protected alterarVelocidade(delta: number) {
    const novaVelocidade = this._velocidade + delta;

    if (novaVelocidade <= this.velocidadeMaxima) {
      this._velocidade = novaVelocidade;
    } else if (novaVelocidade > this.velocidadeMaxima) {
      this._velocidade = this.velocidadeMaxima;
    } else {
      this._velocidade = 0;
    }
  }
}

class Fusca extends Carro {
  constructor() {
    super(165);
  }
}

class Ferrari extends Carro {
  constructor() {
    super(355);
  }

  public acelecar(): void {
    this.alterarVelocidade(35);
  }
}

let c1: Carro = new Fusca();

c1.acelecar();
c1.acelecar();
c1.acelecar();

console.log(c1.velocidade);
console.log(c1.velocidadeMaxima);

c1 = new Ferrari();

c1.acelecar();
c1.acelecar();
c1.acelecar();

console.log(c1.velocidade);
console.log(c1.velocidadeMaxima);

export {};
