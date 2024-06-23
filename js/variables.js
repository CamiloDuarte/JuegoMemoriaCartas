var movimientos = 0;
var grupoCartas = [["A", "B"], ["C", "D"], ["E", "F"], ["G", "H"]];
var nivelActual = 0;
var niveles = [
  {
    cartas: grupoCartas[0],
    maxMovimientos: 3,
  },
  {
    cartas: grupoCartas[0].concat(grupoCartas[1]),
    maxMovimientos: 8,
  },
  {
    cartas: grupoCartas[0].concat(grupoCartas[1], grupoCartas[2]),
    maxMovimientos: 12,
  },
  {
    cartas: grupoCartas[0].concat(grupoCartas[1], grupoCartas[2], grupoCartas[3]),
    maxMovimientos: 20,
  }
];
var nivelMaximo = niveles.length;
