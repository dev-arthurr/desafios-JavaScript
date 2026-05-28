function ordenar() {
  let entrada = document.getElementById("numeros").value;
  let numeros = entrada.split(",");

  for (let i = 0; i < numeros.length; i++) {
    numeros[i] = Number(numeros[i]);
  }

  let crescente = [...numeros].sort((a, b) => a - b);
  let decrescente = [...numeros].sort((a, b) => b - a);

  document.getElementById("crescente").innerText =
    "Ordem crescente: " + crescente;

  document.getElementById("decrescente").innerText =
    "Ordem decrescente: " + decrescente;
}
