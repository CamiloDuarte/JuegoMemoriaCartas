function actualizarContador() {
  var movimientosTexto;

  movimientos++;
  movimientosTexto = movimientos;
  if (movimientos < 10) {
    movimientosTexto = "0" + movimientos;
  }
  document.querySelector("#mov").innerText = movimientosTexto;
}
