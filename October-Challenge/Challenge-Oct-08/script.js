const main = document.querySelector(".main");
const img = document.querySelector(".img-1");
const main2 = document.querySelector(".main-2");
const img2 = document.querySelector(".img-2");
console.log(main, img);

img.addEventListener("mouseover", () => {
  main.style.visibility = "visible";
});

img.addEventListener("mouseout", () => {
  main.style.visibility = "hidden";
});

img2.addEventListener("mouseover", () => {
  main2.style.visibility = "visible";
});

img2.addEventListener("mouseout", () => {
  main2.style.visibility = "hidden";
});
