
function lightMode() {

  var darkmode =   document.querySelector(".servicos");
  darkmode.classList.toggle("dark-mode");

  document.querySelector("body").classList.toggle("dark-mode-body");
  document.querySelector(".medirImc").classList.toggle("dark-mode-imc");
  document.querySelector("#limpar-imc").classList.toggle("btn-light");
  document.querySelector("#limpar-imc").classList.toggle("btn-dark");
  document.querySelector("#calcular-imc").classList.toggle("btn-light");
  document.querySelector("#calcular-imc").classList.toggle("btn-dark");
 
  
}