let menuActive = false;

function toggleMenu() {
  const elemento = document.getElementById("header");

  if (menuActive) {
    elemento.style.maxHeight = "60px";
  } else {
    elemento.style.maxHeight = elemento.scrollHeight + "px";
  }

  menuActive = !menuActive;
}