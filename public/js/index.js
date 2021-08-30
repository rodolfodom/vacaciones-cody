import headerStyles from "./modules/headerStyles.js";
import toggleMenu from "./modules/menu.js";
import postitStyles from "./modules/postitStyles.js";

const D = document,
  menuBtn = D.getElementById("menu-btn");

D.addEventListener("click", (e) => {
  if (e.target === menuBtn) toggleMenu();
});

D.addEventListener("DOMContentLoaded", (e) => {
  headerStyles();
  postitStyles();
});
