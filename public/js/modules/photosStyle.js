const D = document,
  photos = D.querySelectorAll(".photos > *");

export default function rotatePhotos() {
  photos.forEach((photo) => {
    const degree = Math.random() * 6 - 3;
    photo.style.transform = `rotate(${degree}deg)`;
  });
}
