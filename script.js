let menuActive = false;

function toggleMenu() {
  const element = document.getElementById("header");

  if (menuActive) {
    element.style.maxHeight = "60px";
  } else {
    element.style.maxHeight = elemento.scrollHeight + "px";
  }

  menuActive = !menuActive;
}

let isOpen = [null, false];
const respostas = document.querySelectorAll(".response");

function toggleQuestion(num) {
  const div = respostas.item(num);

  if (isOpen[1]) {

    if (isOpen[0] === num) {
      close();
      return;
    }

    close();
  }

  div.style.height = "auto";
  div.style.padding = "5px";
  trocarImagem(num + 1, "-");
  isOpen[0] = num;
  isOpen[1] = true;
}

function close() {
  const div = respostas.item(isOpen[0]);
  div.style.height = "0px";
  div.style.padding = "0px";
  trocarImagem(isOpen[0] + 1, "+");
  isOpen[1] = false;
}

function trocarImagem(num, param) {
  document.getElementById(`q${num}img`).src = `assets/button ${param}.svg`;
}