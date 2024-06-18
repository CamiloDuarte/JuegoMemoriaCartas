var grupoCartas = ["A", "B", "C", "D", "E", "F", "G", "H"];

var totalCartas = grupoCartas.concat(grupoCartas);

function barajaCartas() {
  var resultado;
  resultado = totalCartas.sort(
    function () {
      return 0.5 - Math.random();
    }
  )
  return resultado;
}

function reparteCartas() {

  var mesa = document.querySelector("#mesa");
  var cartasBarajadas = barajaCartas();

  mesa.innerHTML = "";

  cartasBarajadas.forEach(function (elemento) {

    var carta = document.createElement("div");

    carta.innerHTML = '<div class="carta" data-valor="' + elemento + '">' +
      '<div class="contenido-carta">' + elemento + '</div></div>';

    mesa.appendChild(carta);
  })

}

function descubrir() {
  var descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  var dosDescubiertas;

  if (descubiertas.length > 1) {
    return
  };

  this.classList.add("descubierta");

  dosDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

  if (dosDescubiertas.length < 2) {
    return
  }
  comparar(dosDescubiertas);
}

function comparar(dosDescubiertas) {

  if (dosDescubiertas[0].dataset.valor === dosDescubiertas[1].dataset.valor) {
    acertada(dosDescubiertas)
  } else {
    error(dosDescubiertas);
  };
}

function acertada(dosDescubiertas) {
  dosDescubiertas.forEach(function(elemento){
    elemento.classList.add("acertada");
  })
}

function error(dosDescubiertas) {
  dosDescubiertas.forEach(function(elemento){
    elemento.classList.remove("descubierta");
});
}

reparteCartas();

document.querySelectorAll(".carta").forEach(function (elemento) {
  elemento.addEventListener("click", descubrir);
});
