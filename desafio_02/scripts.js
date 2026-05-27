function calcular() {
  const peso = Number(document.getElementById("peso").value);
  const altura = Number(document.getElementById("altura").value);

  document.getElementById("resultado-imc").innerHTML = (
    peso /
    altura ** 2
  ).toFixed(2);
}
