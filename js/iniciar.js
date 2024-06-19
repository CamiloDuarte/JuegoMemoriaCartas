
reparteCartas();

document.querySelectorAll(".carta").forEach(function (elemento) {
  elemento.addEventListener("click", descubrir);
});
