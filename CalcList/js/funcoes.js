function lightMode() {

  var darkmode =   document.querySelector(".servicos");
  darkmode.classList.toggle("dark-mode");

  document.querySelector("body").classList.toggle("dark-mode-body");
  document.querySelector("#limpar-imc").classList.toggle("btn-light");
  document.querySelector("#limpar-imc").classList.toggle("btn-dark");
  document.querySelector("#calcular-imc").classList.toggle("btn-light");
  document.querySelector("#calcular-imc").classList.toggle("btn-dark");
  document.querySelector(".entradas0").classList.toggle("bg-dark");
  document.querySelector(".entradas1").classList.toggle("bg-dark");
  document.querySelector(".entradas2").classList.toggle("bg-dark");
  document.querySelector(".entradas0").classList.toggle("text-white");
  document.querySelector(".entradas1").classList.toggle("text-white");
  document.querySelector(".entradas2").classList.toggle("text-white");
  document.querySelector(".links").classList.toggle("dark-mode-letras");



}