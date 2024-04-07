const eleInd = document.querySelector(".forindividuals");
const eleBusiness = document.querySelector(".forbusinesses");

document.querySelector(".s1__top_buttons-block2").addEventListener('click', function() {
  
    if (eleBusiness.classList.contains("s1__bottom-off")) {
        eleBusiness.classList.remove("s1__bottom-off");
        eleInd.classList.add("s1__bottom-off");
    } else {
        eleInd.classList.remove("s1__bottom-off");
        eleBusiness.classList.add("s1__bottom-off");
    }
  })
  
document.querySelector(".s1__top_buttons-block1").addEventListener('click', function() {
  
    if (eleBusiness.classList.contains("s1__bottom-off")) {
        eleBusiness.classList.remove("s1__bottom-off");
        eleInd.classList.add("s1__bottom-off");
    } else {
        eleInd.classList.remove("s1__bottom-off");
        eleBusiness.classList.add("s1__bottom-off");
    }
  })

  eleInd.addEventListener("load", function() {
    eleInd.style.opacity = 1;
});