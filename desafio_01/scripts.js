function calcular() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);

  document.getElementById("resultado-soma").innerHTML = num1 + num2;
  document.getElementById("resultado-subtracao").innerHTML = num1 - num2;
  document.getElementById("resultado-multiplica").innerHTML = num1 * num2;

  if (num2 === 0) {
    document.getElementById("resultado-divisao").innerHTML = "Divisao por 0!";
  } else {
    document.getElementById("resultado-divisao").innerHTML = num1 / num2;
  }
}
