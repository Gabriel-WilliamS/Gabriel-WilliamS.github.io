function lavagem() {
  const taxa25 = document.getElementById("taxa25").checked;
  const taxa30 = document.getElementById("taxa30").checked;
  const taxa35 = document.getElementById("taxa35").checked;
  const dinheiroLavado = parseInt(
    document.getElementById("dinheiro-lavado").value
  );
  const dinheiroCliente = document.getElementById("dinheiro-cliente");
  const seuLucro = document.getElementById("seu-lucro");
  const lucroVanilla = document.getElementById("lucro-vanilla");
  const lucroTotal = document.getElementById("lucro-total");

  let lucro = 0;
  const taxacity = (dinheiroLavado * 90) / 100;

  if (taxa25) {
    dinheiroCliente.value = (taxacity * 85) / 100;
    lucroTotal.value = (taxacity * 15) / 100;
    lucro = (taxacity * 15) / 100;
    seuLucro.value = (lucro * 40) / 100;
    lucroVanilla.value = (lucro * 60) / 100;
  }
  if (taxa30) {
    dinheiroCliente.value = (taxacity * 80) / 100;
    lucroTotal.value = (taxacity * 20) / 100;
    lucro = (taxacity * 20) / 100;
    seuLucro.value = (lucro * 40) / 100;
    lucroVanilla.value = (lucro * 60) / 100;
  }
  if (taxa35) {
    dinheiroCliente.value = (taxacity * 75) / 100;
    lucroTotal.value = (taxacity * 25) / 100;
    lucro = (taxacity * 25) / 100;
    seuLucro.value = (lucro * 40) / 100;
    lucroVanilla.value = (lucro * 60) / 100;
  }
}
