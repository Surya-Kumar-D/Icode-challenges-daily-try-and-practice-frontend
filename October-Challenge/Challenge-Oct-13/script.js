const closeBtn = document.querySelector(".close");
const main = document.querySelector(".main");

closeBtn.addEventListener("click", () => {
  main.classList.add("hidden opacity-0");
  setTimeout(() => {
    main.classList.remove("hidden opacity-100");
  }, 2000);
});
