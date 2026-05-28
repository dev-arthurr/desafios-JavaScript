let minutos = 0;
let segundos = 0;
let intervalo = null;

function atualizarTela() {
  let min = minutos < 10 ? "0" + minutos : minutos;
  let seg = segundos < 10 ? "0" + segundos : segundos;

  document.getElementById("cronometro").innerText = `${min}:${seg}`;
}

function iniciar() {
  if (intervalo !== null) return;

  intervalo = setInterval(() => {
    segundos++;

    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }

    atualizarTela();
  }, 1000);
}

function pausar() {
  clearInterval(intervalo);
  intervalo = null;
}

function resetar() {
  pausar();
  minutos = 0;
  segundos = 0;
  atualizarTela();
}

atualizarTela();
