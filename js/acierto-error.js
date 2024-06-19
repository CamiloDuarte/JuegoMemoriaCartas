function acertada(dosDescubiertas) {
  dosDescubiertas.forEach(function (elemento) {
    elemento.classList.add("acertada");
  })
}

function error(dosDescubiertas) {
  dosDescubiertas.forEach(function (elemento) {
    elemento.classList.remove("descubierta");
  });
}

