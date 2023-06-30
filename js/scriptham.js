const hamburger = document.querySelector(".hamburger");
const naveMenu = document.querySelector(".nave-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    naveMenu.classList.toggle("active");
})