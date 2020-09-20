function calcularImc()
      {
        var peso = document.querySelector("#peso").value;
        var altura = document.querySelector("#altura").value;
        var entradaOk = true;
        if (peso == "")
        {
          alert("Peso inválido!");
          entradaOk = false;
        }
        if (altura == "")
        {
          alert("Altura inválida!");
          entradaOk = false;
        }
        if (entradaOk)
        {
          var imc = peso / (altura * altura);  // var imc = peso / Math.pow(altura, 2);
          // if (peso == "") alert(peso);
          var str = "";
          if (imc < 18.5)
            str = "Magreza!";
            else if (imc < 24.9)
                 str = "Peso normal!";
             else if (imc < 29.9)
                 str = "Sobrepeso"
             else if (imc < 39.9)
                 str = "Obesidade!"
                else
              str = "Obesidade Grave!";
          document.getElementById("resultado-imc").value = "IMC = " + parseFloat(imc.toFixed(2)) + " " + str;
          
          //document.getElementById("resultado").innerHTML = "Resultado: " + str;
          document.getElementById('resultado').value = ''
        }
    }

function limparCampoImc(){
    document.getElementById('resultado-imc').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
}
