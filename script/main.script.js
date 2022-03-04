AOS.init();

// mobile nav
const clickHamButton = document.querySelector(".hamburger-btn");
const showMenu = document.querySelector(".drawer");
const shadow = document.querySelector(".bg-shadow");

clickHamButton.addEventListener("click", () => {
  const isAdd = showMenu.classList.contains("show");
  if (isAdd) {
    showMenu.classList.remove("show");
  } else {
    showMenu.classList.add("show");
  }
  shadow.classList.toggle("remove-shadow");
});

shadow.addEventListener("click", () => {
  showMenu.classList.remove("show");
  shadow.classList.toggle("remove-shadow");
});


// show and hide daily & frequently

const dailyBasis = document.querySelector('.show-daily');
const frequentlyBasis = document.querySelector('.show-frequently');

function showDiv(element)
{
  if(element == "daily"){
    dailyBasis.classList.add('hidebasis');
    frequentlyBasis.classList.remove('hidebasis');
  }else if(element == "frequently"){
    frequentlyBasis.classList.add('hidebasis');
    dailyBasis.classList.remove('hidebasis');
  }
}