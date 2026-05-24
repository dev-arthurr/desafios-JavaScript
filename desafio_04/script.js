listaNotas = [100, 50, 20, 10, 5];

function calcular() {
  let valor = Number(document.getElementById("saque").value);
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("sobra").innerHTML = "";

  for (let nota of listaNotas) {
    const quantidadeNota = Math.floor(valor / nota);
    valor %= nota;

    if (quantidadeNota > 0) {
      document.getElementById("resultado").innerHTML +=
        `${quantidadeNota} nota(s) de  R$ ${nota} <br>`;
      document.getElementById("resultado").style.display = "block";
    }
  }

  if (valor > 0) {
    document.getElementById("sobra").innerHTML = `Sobrou R$ ${valor}`;
    document.getElementById("sobra").style.display = "block";
  }
}

function limpar() {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("sobra").innerHTML = "";
}
