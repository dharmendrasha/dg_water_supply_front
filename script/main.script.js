AOS.init();

const clickHamButton = document.querySelector('.hamburger-btn');
const showMenu = document.querySelector('.drawer');
const shadow = document.querySelector('.bg-shadow')

clickHamButton.addEventListener('click', () => {
    const isAdd = showMenu.classList.contains('show');
    if(isAdd){
        showMenu.classList.remove('show');
    }else{
        showMenu.classList.add('show');
    }
    shadow.classList.toggle('remove-shadow');
});

shadow.addEventListener('click', () => {
    showMenu.classList.remove('show');
    shadow.classList.toggle('remove-shadow');
})