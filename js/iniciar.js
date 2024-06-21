function iniciar() {
  movimientos = 0;
  reparteCartas();

  document.querySelector("#mov").innerText = "00";
  document.querySelector("#feedback").classList.remove("visible")

  document.querySelectorAll(".carta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });

  iniciarCronometro();
}

iniciar();

document.querySelector("#reiniciar").addEventListener("click", iniciar)
