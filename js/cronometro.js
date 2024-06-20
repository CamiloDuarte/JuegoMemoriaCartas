function iniciarCronometro() {
  var segundos = 11;
  var minutos = 0;
  var segundosTexto;
  var minutosTexto;
  var cronometro;

  function actualizaContador() {
    segundos--;
    if (segundos < 0) {
      segundos = 59;
      minutos--;
    };
    if (minutos < 0) {
      segundos = 0;
      minutos = 0;
      clearInterval(cronometro)
    }

    segundosTexto = segundos;
    minutosTexto = minutos;

    if (segundos < 10) {
      segundosTexto = "0" + segundos;
    };
    if (minutos < 10) {
      minutosTexto = "0" + minutos;
    };
    document.querySelector("#segundos").innerText = segundosTexto;
    document.querySelector("#minutos").innerText = minutosTexto;
  }
  cronometro = setInterval(actualizaContador, 1000)
}
