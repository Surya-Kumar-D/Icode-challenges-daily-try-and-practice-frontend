const main = document.querySelector(".main");
const hover = document.querySelector(".hover");

hover.addEventListener("mouseover", () => {
  main.style.visibility = "visible";
});

hover.addEventListener("mouseout", () => {
  main.style.visibility = "hidden";
});
