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

const dailyClick = document.querySelector('.daily-click')
const frequentlyClick = document.querySelector('.frequently-click')
const dailyBasis = document.querySelector('.show-daily');
const frequentlyBasis = document.querySelector('.show-frequently');

// hidebasis
dailyClick.addEventListener('click', () => {
  console.log(dailyBasi);
  dailyBasis.classList.add('hidebasis')
})