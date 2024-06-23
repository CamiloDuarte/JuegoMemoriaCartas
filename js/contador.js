function actualizarContador() {
  var movimientosTexto;

  movimientos++;
  movimientosTexto = movimientos;
  if (movimientos < 10) {
    movimientosTexto = "0" + movimientos;
  }

  document.querySelector("#mov").innerText = movimientosTexto;
}

function maxContador() {
  var maxMov = niveles[nivelActual].maxMovimientos;
  var maxMovText;
  if (maxMov < 10) {
    maxMovText = "0" + maxMov
  }
  document.querySelector("#mov-total").innerText = maxMovText
}
