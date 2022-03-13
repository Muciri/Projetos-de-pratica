var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  var tentativas = 3;
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "você acertou";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "você deve digitar o número de 0 a 10";
  } else if (chute > numeroSecreto) {
    tentativas = tentativas - 1;
    elementoResultado.innerHTML =
      "você errou, o número secreto era menor, você só tem mais " +
      tentativas +
      " tentativas";
  } else if (chute < numeroSecreto) {
    tentativas = tentativas - 1;
    elementoResultado.innerHTML =
      "você errou, o número secreto era maior, você só tem mais " +
      tentativas +
      " tentativas";
  }
  console.log(tentativas);
}
