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


