const D = document,
  menu = D.getElementById("menu");

export default function toggleMenu() {
  menu.classList.toggle("hidden");
}
