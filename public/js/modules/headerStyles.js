const D = document,
  headers = D.querySelectorAll(".header"),
  colors = [
    "--color-postit-yellow",
    "--color-postit-green",
    "--color-postit-blue",
    "--color-postit-rose",
  ];

export default function headerStyles() {
  let index = 0;
  headers.forEach((header) => {
    const colorID = Math.round(Math.random() * (colors.length - 1));
    header.style.backgroundColor = `var(${colors[colorID]})`;

    if (index % 2 != 0) header.style.marginLeft = "15vw";
    index = index + 1;
  });
}
