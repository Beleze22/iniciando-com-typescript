abstract class Animal {
  abstract emitirSom(): string;
}

class Gato extends Animal {
  emitirSom(): string {
    return "miau";
  }
}

class Cachorro extends Animal {
  emitirSom(): string {
    return "auau";
  }
}

function exibir(animal: Animal) {
  console.log(animal.emitirSom());
}

let a: Animal = new Gato();
exibir(a);

a = new Cachorro();
exibir(a);

export {};
