function Calcular() {
    //variáveis das médias
    var mediaBimestre1 = parseFloat(document.getElementById("nota1").value)
    var mediaBimestre2 = parseFloat(document.getElementById("nota2").value)
    var mediaBimestre3 = parseFloat(document.getElementById("nota3").value)
    var mediaBimestre4 = parseFloat(document.getElementById("nota4").value)
    
    //média final
    var mediaFinal = (mediaBimestre1 + mediaBimestre2 + mediaBimestre3 + mediaBimestre4) / 4
    var mediaFixed = mediaFinal.toFixed(1);
    //aparecer na tela
    var resultado = document.getElementById("resultado");
    //variável
    if (mediaFixed > 6.9) {
      resultado.innerHTML = "média final = " + mediaFixed + " você passou :D"
    } else if (mediaFixed < 7.0) {
      resultado.innerHTML = "média final = " + mediaFixed + " você reprovou ;-;"
    } else {
      resultado.innerHTML = "algo deu errado, confira as médias"
    }
    
    //console.log
    console.log(mediaBimestre1)
    console.log(mediaBimestre2)
    console.log(mediaBimestre3)
    console.log(mediaBimestre4)
    console.log("media final = " + mediaFixed)
  }
  