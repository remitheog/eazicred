// MENU TOGGLE
const menuToggle = document.querySelector('.nav__menu');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__link');
const navBtns = document.querySelectorAll('.nav__btns--mobile a');

menuToggle.addEventListener('click', menuSlideIn);

function menuSlideIn () {
    navList.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

navLinks.forEach(navlink => {
    navlink.addEventListener('click', function () {
        navList.classList.remove('active');
        menuToggle.classList.toggle('active');
    })
});

navBtns.forEach(navbtn => {
    navbtn.addEventListener('click', function () {
        navList.classList.remove('active');
        menuToggle.classList.toggle('active');
    })
});