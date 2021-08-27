const D = document,
  headers = D.querySelectorAll(".header"),
  colors = [
    "var(--color-postit-yellow)",
    "var(--color-postit-green)",
    "var(--color-postit-blue)",
    "var(--color-postit-rose)",
  ];

export default function headerStyles() {
  let index = 0;
  headers.forEach((header) => {
    const colorID = Math.round(Math.random() * (colors.length - 1));
    header.style.backgroundColor = colors[colorID];
    console.log(index);
    if (index % 2 != 0) header.style.marginLeft = "15%";
    index = index + 1;
  });
}
