function Converter() {
    //conversão
    var valorElemento = parseFloat(document.getElementById("valor").value)
    var valorEmEuros = valorElemento * 6
    var aparecerNaTela = document.getElementById("valorConvertido").innerHTML = "valor em Reais: " + valorEmEuros + "£"
    
    //console.log
  console.log("valor em reais: " + valorElemento)
  console.log("valor em euros: " + valorEmEuros)  
  }
  
  function Converter2() {
    //conversão
    var valorElemento2 = parseFloat(document.getElementById("valor2").value)
    var valorEmDolares = valorElemento2 * 5
    var aparecerNaTela = document.getElementById("valorConvertido2").innerHTML = "valor em Reais: " + valorEmDolares + "$"
    
    //console.log
  console.log("valor em reais: " + valorElemento2)
  console.log("valor em euros: " + valorEmDolares)  
  }
  
  function Converter3() {
    //conversão
    var valorElemento2 = parseFloat(document.getElementById("valor3").value)
    var valorEmIenes = valorElemento2 * 23
    var aparecerNaTela = document.getElementById("valorConvertido3").innerHTML = "valor em Reais: " + valorEmIenes + "¥"
    
    //console.log
  console.log("valor em reais: " + valorElemento2)
  console.log("valor em euros: " + valorEmIenes)  
  }