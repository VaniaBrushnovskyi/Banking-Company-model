const learnInd = document.querySelector(".forindividuals");
const learnrBusiness = document.querySelector(".forbusinesses");

document.querySelector(".ind_link-learn").addEventListener('click', function() {
  
    if (learnrBusiness.classList.contains("s1__bottom-off")) {
        learnrBusiness.classList.remove("s1__bottom-off");
        learnInd.classList.add("s1__bottom-off");
    } else {
        learnInd.classList.remove("s1__bottom-off");
        learnrBusiness.classList.add("s1__bottom-off");
    }
  })
  
document.querySelector(".buss_link-learn").addEventListener('click', function() {
  
    if (learnInd.classList.contains("s1__bottom-off")) {
        learnInd.classList.remove("s1__bottom-off");
        learnrBusiness.classList.add("s1__bottom-off");
    } else {
        learnrBusiness.classList.remove("s1__bottom-off");
        learnInd.classList.add("s1__bottom-off");
    }
  })

const forInd = document.querySelector(".for-ind_learn-more");
const forBuss = document.querySelector(".for-buss_learn-more");
const linkInd = document.querySelector(".ind_link-learn");
const linkBuss = document.querySelector(".buss_link-learn");
const btnInd = document.querySelector(".s1__top_buttons-block1");
const btnBus = document.querySelector(".s1__top_buttons-block2");

linkBuss.onclick = function() {
    btnBus.classList.add("forindividuals-businesses") || btnInd.classList.remove("forindividuals-businesses");
}

linkInd.onclick = function() {
    btnInd.classList.add("forindividuals-businesses") || btnBus.classList.remove("forindividuals-businesses");
}



/*  */



  

