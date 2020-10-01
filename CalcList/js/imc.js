function calcularImc()
      {
        document.querySelector(".tr-0")
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

          var imc = 1.3 * peso / Math.pow(altura, 2.5) ;  // var imc = peso / Math.pow(altura, 2);
          // if (peso == "") alert(peso);
          var str = "";
          if (imc < 18.5){
            str = "Magreza!"; 
            document.querySelector(".tr-0").classList.add("imc-table");
            document.querySelector(".tr-1").classList.remove("imc-table");
            document.querySelector(".tr-2").classList.remove("imc-table");
            document.querySelector(".tr-3").classList.remove("imc-table");
            document.querySelector(".tr-4").classList.remove("imc-table");

          }
            else if (imc < 24.9){
                 str = "Peso normal!";
                 document.querySelector(".tr-1").classList.add("imc-table");
                 document.querySelector(".tr-0").classList.remove("imc-table");
                 document.querySelector(".tr-2").classList.remove("imc-table");
                 document.querySelector(".tr-3").classList.remove("imc-table");
                 document.querySelector(".tr-4").classList.remove("imc-table");
            }
             else if (imc < 29.9){
                 str = "Sobrepeso"
                 document.querySelector(".tr-2").classList.add("imc-table");
                 document.querySelector(".tr-1").classList.remove("imc-table");
                 document.querySelector(".tr-0").classList.remove("imc-table");
                 document.querySelector(".tr-3").classList.remove("imc-table");
                 document.querySelector(".tr-4").classList.remove("imc-table");
             }
             else if (imc < 39.9){
                 str = "Obesidade!"
                 document.querySelector(".tr-3").classList.add("imc-table");
                 document.querySelector(".tr-1").classList.remove("imc-table");
                 document.querySelector(".tr-2").classList.remove("imc-table");
                 document.querySelector(".tr-0").classList.remove("imc-table");
                 document.querySelector(".tr-4").classList.remove("imc-table");
             }
                else{
              str = "Obesidade Grave!";
              document.querySelector(".tr-4").classList.add("imc-table");
              document.querySelector(".tr-1").classList.remove("imc-table");
              document.querySelector(".tr-2").classList.remove("imc-table");
              document.querySelector(".tr-3").classList.remove("imc-table");
              document.querySelector(".tr-0").classList.remove("imc-table");
                }
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

