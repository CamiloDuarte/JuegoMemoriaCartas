function barajaCartas(lasCartas) {
  var resultado;
  var totalCartas = lasCartas
  resultado = totalCartas.sort(
    function () {
      return 0.5 - Math.random();
    }
  )
  return resultado;
}

function reparteCartas(lasCartas) {

  var mesa = document.querySelector("#mesa");
  var cartasBarajadas = barajaCartas(lasCartas);

  mesa.innerHTML = "";

  cartasBarajadas.forEach(function (elemento) {

    var carta = document.createElement("div");

    carta.innerHTML = '<div class="carta" data-valor="' + elemento + '">' +
      '<div class="contenido-carta">' + elemento + '</div></div>';

    mesa.appendChild(carta);
  })

}


