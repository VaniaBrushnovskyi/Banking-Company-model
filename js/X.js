const menuBtn1 = document.getElementById("burger-btn");
const menuMobile1 = document.querySelector(".burger-btn");

menuBtn1.onclick = function() {
    menuMobile1.classList.add("active");
}
menuBtn1.onclick = function() {
    menuMobile1.classList.toggle("active");
}

