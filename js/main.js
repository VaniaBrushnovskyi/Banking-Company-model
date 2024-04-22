/*  */
const menuBtn = document.querySelector(".burger-block");
const menuMobile = document.querySelector(".nav__burger-menu");

menuBtn.onclick = function() {
    menuMobile.classList.add("nav__burger-open");
}
menuBtn.onclick = function() {
    menuMobile.classList.toggle("nav__burger-open");
}


/*  */
const menuBtn1 = document.getElementById("burger-btn");
const menuMobile1 = document.querySelector(".burger-btn");

menuBtn1.onclick = function() {
    menuMobile1.classList.add("active");
}
menuBtn1.onclick = function() {
    menuMobile1.classList.toggle("active");
}


/*  */
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

/*  */
const eleInd = document.querySelector(".forindividuals");
const eleBusiness = document.querySelector(".forbusinesses");

document.querySelector(".s1__top_buttons-block2").addEventListener('click', function() {
  
    if (eleBusiness.classList.contains("s1__bottom-off")) {
        eleBusiness.classList.remove("s1__bottom-off");
        eleInd.classList.add("s1__bottom-off");
    }/*  else {
        eleInd.classList.remove("s1__bottom-off");
        eleBusiness.classList.add("s1__bottom-off");
    } */
  })
  
document.querySelector(".s1__top_buttons-block1").addEventListener('click', function() {
  
    if (eleInd.classList.contains("s1__bottom-off")) {
        eleInd.classList.remove("s1__bottom-off");
        eleBusiness.classList.add("s1__bottom-off");
    }/*  else {
        eleInd.classList.remove("s1__bottom-off");
        eleBusiness.classList.add("s1__bottom-off");
    } */
  })


/*  */
const btnIndividuals = document.querySelector(".s1__top_buttons-block1");
const btnBusinesses = document.querySelector(".s1__top_buttons-block2");

btnBusinesses.onclick = function() {
    btnIndividuals.classList.remove("forindividuals-businesses");
}

btnIndividuals.onclick = function() {
    btnBusinesses.classList.remove("forindividuals-businesses");
}
/*  */
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


/* s2 LEARN MORE */
const learnInd = document.querySelector(".forindividuals");
const learnrBusiness = document.querySelector(".forbusinesses");

document.querySelector(".buss_link-learn").addEventListener('click', function() {
  
    if (learnrBusiness.classList.contains("s1__bottom-off")) {
        learnrBusiness.classList.remove("s1__bottom-off");
        learnInd.classList.add("s1__bottom-off");
    }/*  else {
        learnInd.classList.remove("s1__bottom-off");
        learnrBusiness.classList.add("s1__bottom-off");
    } */
  })
  
document.querySelector(".ind_link-learn").addEventListener('click', function() {
  
    if (learnInd.classList.contains("s1__bottom-off")) {
        learnInd.classList.remove("s1__bottom-off");
        learnrBusiness.classList.add("s1__bottom-off");
    }/*  else {
        learnrBusiness.classList.remove("s1__bottom-off");
        learnInd.classList.add("s1__bottom-off");
    } */
  })

const forInd = document.querySelector(".for-ind_learn-more");
const forBuss = document.querySelector(".for-buss_learn-more");
const linkInd = document.querySelector(".ind_link-learn");
const linkBuss = document.querySelector(".buss_link-learn");

linkBuss.onclick = function() {
    btnBus.classList.add("forindividuals-businesses") || btnInd.classList.remove("forindividuals-businesses");
}

linkInd.onclick = function() {
    btnInd.classList.add("forindividuals-businesses") || btnBus.classList.remove("forindividuals-businesses");
}

/*  */
