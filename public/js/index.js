import toggleMenu from "./modules/menu.js";

const D = document,
  menuBtn = D.getElementById("menu-btn");

D.addEventListener("click", (e) => {
  if (e.target === menuBtn) toggleMenu();
});
