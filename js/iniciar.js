function iniciar() {
  movimientos = 0;
  var cartasNivelActual = niveles[nivelActual].cartas
  var totalCartas = cartasNivelActual.concat(cartasNivelActual)
  reparteCartas(totalCartas);

  document.querySelector("#mov").innerText = "00";
  document.querySelector("#feedback").classList.remove("visible")

  document.querySelectorAll(".carta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });

  iniciarCronometro();
}

iniciar();

document.querySelector("#siguiente-nivel").addEventListener("click", cargaNivel)
document.querySelector(".reiniciar").addEventListener("click", iniciar)
