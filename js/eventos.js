document.querySelector("#serio").addEventListener("click", juegoNormal)
document.querySelector("#relax").addEventListener("click", juegoRelax)
document.querySelector("#siguiente-nivel").addEventListener("click", cargaNivel)
document.querySelectorAll(".reiniciar").forEach((elemento) => {
  elemento.addEventListener("click", iniciar);
})
document.querySelector("#reiniciar-juego").addEventListener("click", reiniciarJuego)
