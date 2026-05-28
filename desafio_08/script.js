function analisar() {
  let frase = document.getElementById("frase").value;

  let quantidadeCaracteres = frase.length;

  let palavras = frase.split(" ");
  let quantidadePalavras = palavras.length;

  let fraseInvertida = frase.split("").reverse().join("");

  let fraseNormal = frase.toLowerCase().split(" ").join("");
  let fraseNormalInvertida = fraseNormal.split("").reverse().join("");

  let ehPalindromo = fraseNormal === fraseNormalInvertida;

  document.getElementById("caracteres").innerText =
    "Quantidade de caracteres: " + quantidadeCaracteres;

  document.getElementById("palavras").innerText =
    "Quantidade de palavras: " + quantidadePalavras;

  document.getElementById("invertida").innerText =
    "Frase invertida: " + fraseInvertida;

  document.getElementById("palindromo").innerText =
    "É palíndromo? " + (ehPalindromo ? "Sim" : "Não");
}
