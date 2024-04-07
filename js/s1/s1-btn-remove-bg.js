const btnIndividuals = document.querySelector(".s1__top_buttons-block1");
const btnBusinesses = document.querySelector(".s1__top_buttons-block2");

btnBusinesses.onclick = function() {
    btnIndividuals.classList.remove("forindividuals-businesses");
}

btnIndividuals.onclick = function() {
    btnBusinesses.classList.remove("forindividuals-businesses");
}


