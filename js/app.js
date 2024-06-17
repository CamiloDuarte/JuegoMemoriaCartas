var grupoCartas = ["A", "B", "C", "D", "E", "F", "G", "H"];

var totalCartas = grupoCartas.concat(grupoCartas);

function reparteCartas() {

  var mesa = document.querySelector("#mesa");

  mesa.innerHTML = "";

  totalCartas.forEach(function (elemento) {

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
