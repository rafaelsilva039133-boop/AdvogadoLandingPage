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

const respostas = document.querySelectorAll(".response");

function toggleQuestion(num) {
  const div = respostas.item(num);

  div.style.height = "auto";
  div.style.padding = "5px";
}