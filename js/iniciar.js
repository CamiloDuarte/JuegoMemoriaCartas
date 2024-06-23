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

  iniciarCronometro();
  maxContador();
}
function reiniciarJuego() {
  nivelActual = 0;
  actualizarContador();
  iniciar();
}
iniciar();

document.querySelector("#siguiente-nivel").addEventListener("click", cargaNivel)
document.querySelectorAll(".reiniciar").forEach((elemento) => {
  elemento.addEventListener("click", iniciar);
})
document.querySelector("#reiniciar-juego").addEventListener("click", reiniciarJuego)
