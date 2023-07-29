class DesafioEstatico {
  nota: number = 1000;

  static executar() {
    const instancia = new DesafioEstatico();
    console.log(instancia.nota);
    console.log("FIM executar");
  }
}

DesafioEstatico.executar();
