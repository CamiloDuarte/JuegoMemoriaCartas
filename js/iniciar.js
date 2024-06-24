function iniciar() {
  movimientos = 0;
  var cartasNivelActual = niveles[nivelActual].cartas
  var totalCartas = cartasNivelActual.concat(cartasNivelActual)
  reparteCartas(totalCartas);

  document.querySelector("#mov").innerText = "00";
  document.querySelector("#feedback").classList.remove("visible")
  document.querySelector("#gameover").classList.remove("visible")
  document.querySelector("#juego-completado").classList.remove("visible")
  document.querySelectorAll(".carta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });
  document.querySelector(".bienvenida").classList.add("oculto")
  document.querySelector(".cabecera").classList.add("visible")

  if (!modoRelax) {
    iniciarCronometro();
  } else {
    document.querySelector(".cronometro").classList.add("oculto")
  }
  maxContador();
}

function reiniciarJuego() {
  nivelActual = 0;
  actualizarContador();
  iniciar();
}

function juegoNormal() {
  modoRelax = false;
  iniciar();
}

function juegoRelax() {
  modoRelax = true;
  iniciar();
}
