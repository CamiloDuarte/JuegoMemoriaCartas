function acertada(dosDescubiertas) {
  dosDescubiertas.forEach(function (elemento) {
    elemento.classList.add("acertada");
  })
}

function error(dosDescubiertas) {

  dosDescubiertas.forEach(function (elemento) {
    elemento.classList.add("error");
  });

  setTimeout(function () {

    dosDescubiertas.forEach(function (elemento) {
      elemento.classList.remove("error");
      elemento.classList.remove("descubierta");
    })
  }, 1000);

}

