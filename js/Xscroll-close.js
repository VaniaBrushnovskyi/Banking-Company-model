let lastScroll = 0;
const defaultOffset = 150;
const burgerMenu = document.querySelector(".nav__burger-menu");


const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => burgerMenu.classList.contains("nav__burger-open");


window.addEventListener("scroll", () => {

    if(scrollPosition() > lastScroll && containHide() && scrollPosition() > defaultOffset) {
        burgerMenu.classList.remove("nav__burger-open");
        console.log("down");
    } else if(scrollPosition() < lastScroll && containHide()) {
        burgerMenu.classList.add("nav__burger-open");
        console.log("up");
    }
    lastScroll = scrollPosition();
})

const burgerBtn = document.querySelector(".burger-btn");

window.addEventListener("scroll", () => {
    if(window.scrollY > 150) {
        burgerBtn.classList.add("active");
    } else {
        burgerBtn.classList.remove("active");
    }
})