const D = document,
  postits = D.querySelectorAll(".post-it"),
  colors = [
    "--color-postit-yellow",
    "--color-postit-green",
    "--color-postit-blue",
    "--color-postit-rose",
  ];

export default function postitStyles() {
  postits.forEach((postit) => {
    const degree = Math.random() * 4 - 2,
      colorID = Math.round(Math.random() * (colors.length - 1));

    postit.style.backgroundColor = `var(${colors[colorID]})`;
    postit.style.transform = `rotate(${degree}deg)`;
  });
}
