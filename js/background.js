const images = ["nasa_1.jpg", "nasa_2.jpg", "nasa_3.jpg"];

const choosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `imgs/${choosenImage}`;

// console.log(bgImage)

document.body.appendChild(bgImage);
