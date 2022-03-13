function button() {
    var aleatoria = parseInt(Math.random() * 11);
    var resultado = document.getElementById("aparecerNaTela")
    console.log (aleatoria)
    if(aleatoria <6) {
      resultado.innerHTML = "CARA"
      console.log("CARA!")
    } else if (aleatoria > 5) {
      resultado.innerHTML = "COROA"
      console.log("COROA!")
    }
  }