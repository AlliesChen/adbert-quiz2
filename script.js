const circle = document.querySelector("img[data-rotate]");
document.addEventListener("scroll", () => {
  const scrollYRange = window.pageYOffset;
  circle.setAttribute("style", `transform: rotate(${scrollYRange * 0.1}deg);`);
});
