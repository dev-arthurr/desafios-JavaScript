const opcoes = ["pedra", "papel", "tesoura"];

let pontosJogador = 0;
let pontosMaquina = 0;

function jogar(escolhaJogador) {
  const indiceAleatorio = Math.floor(Math.random() * opcoes.length);
  const escolhaMaquina = opcoes[indiceAleatorio];

  let mensagem = "";

  if (escolhaJogador === escolhaMaquina) {
    mensagem = "Empate!";
  } else if (
    (escolhaJogador === "pedra" && escolhaMaquina === "tesoura") ||
    (escolhaJogador === "papel" && escolhaMaquina === "pedra") ||
    (escolhaJogador === "tesoura" && escolhaMaquina === "papel")
  ) {
    mensagem = "Você venceu!";
    pontosJogador++;
  } else {
    mensagem = "A máquina venceu!";
    pontosMaquina++;
  }

  document.getElementById("resultado").innerHTML = `
        Você escolheu: <strong>${escolhaJogador}</strong><br>
        Máquina escolheu: <strong>${escolhaMaquina}</strong><br><br>
        ${mensagem}
      `;

  document.getElementById("placar").innerHTML = `
        Jogador: ${pontosJogador} | Máquina: ${pontosMaquina}
      `;
}
