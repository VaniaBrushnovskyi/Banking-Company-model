const divIndividuals = document.querySelector(".s1__top_btn-ind");
const divBusiness = document.querySelector(".s1__top_btn-bus");
const btnInd = document.querySelector(".s1__top_buttons-block1");
const btnBus = document.querySelector(".s1__top_buttons-block2");

divBusiness.onclick = function() {
    btnBus.classList.add("forindividuals-businesses");
}
divIndividuals.onclick = function() {
    btnInd.classList.add("forindividuals-businesses");
}

