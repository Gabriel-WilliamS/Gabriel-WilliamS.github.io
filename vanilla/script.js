function lavagem() {
  const acima500 = document.getElementById("acima500").checked;
  const abaixo500 = document.getElementById("abaixo500").checked;
  const dinheiroLavado = parseInt(
    document.getElementById("dinheiro-lavado").value
  );
  const dinheiroCliente = document.getElementById("dinheiro-cliente");
  const seuLucro = document.getElementById("seu-lucro");
  const lucroVanilla = document.getElementById("lucro-vanilla");
  const lucroTotal = document.getElementById("lucro-total");

  let lucro = 0;
  if (acima500) {
    dinheiroCliente.value = (dinheiroLavado * 75) / 100;
    lucroTotal.value = (dinheiroLavado * 25) / 100;
    lucro = (dinheiroLavado * 25) / 100;
    seuLucro.value = (lucro * 40) / 100;
    lucroVanilla.value = (lucro * 60) / 100;
  }
  if (abaixo500) {
    dinheiroCliente.value = (dinheiroLavado * 70) / 100;
    lucroTotal.value = (dinheiroLavado * 30) / 100;
    lucro = (dinheiroLavado * 30) / 100;
    seuLucro.value = (lucro * 40) / 100;
    lucroVanilla.value = (lucro * 60) / 100;
  }
}
