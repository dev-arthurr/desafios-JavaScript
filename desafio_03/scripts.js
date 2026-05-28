let win = false;
let count = 0;

function adv() {
  while (!win) {
    const selectedNumber = Number(document.getElementById("numero").value);

    if (selectedNumber === randomNum) {
      document.getElementById("resultado").innerHTML = "ACERTOU";
      count += 1;
      document.getElementById("contador").innerHTML = count;
      return;
    }

    if (selectedNumber > randomNum) {
      document.getElementById("resultado").innerHTML = "↓";
      count += 1;
      return;
    }

    if (selectedNumber < randomNum) {
      document.getElementById("resultado").innerHTML = "↑";
      count += 1;
      return;
    }
    console.log(count);
  }
}

const randomNum = Math.floor(Math.random() * 100) + 1;
