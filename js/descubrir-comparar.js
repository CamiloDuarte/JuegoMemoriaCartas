function descubrir() {
  var descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  var dosDescubiertas;
  var totalDescubiertas;

  if (descubiertas.length > 1) {
    return
  };

  this.classList.add("descubierta");

  dosDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

  if (dosDescubiertas.length < 2) {
    return
  }

  comparar(dosDescubiertas);
  actualizarContador();
  totalDescubiertas = document.querySelectorAll(".acertada")
  if (totalDescubiertas.length === totalCartas.length) {
    finalizar();
  }
}

function comparar(dosDescubiertas) {

  if (dosDescubiertas[0].dataset.valor === dosDescubiertas[1].dataset.valor) {
    acertada(dosDescubiertas)
  } else {
    error(dosDescubiertas);
  };
}

