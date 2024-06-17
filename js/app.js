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

    carta.innerHTML = '<div class="carta">' +
      '<div class="contenido-carta">' + elemento + '</div></div>';

    mesa.appendChild(carta);
  })

}

function descubrir() {
  this.classList.add("descubierta")
}

reparteCartas();

document.querySelectorAll(".carta").forEach(function (elemento) {
  elemento.addEventListener("click", descubrir);
});
