const menuBtn = document.querySelector(".burger-block");
const menuMobile = document.querySelector(".nav__burger-menu");

menuBtn.onclick = function() {
    menuMobile.classList.add("nav__burger-open");
}
menuBtn.onclick = function() {
    menuMobile.classList.toggle("nav__burger-open");
}
