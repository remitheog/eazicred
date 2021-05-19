// MENU TOGGLE IN THE DASHBOARD
const menuToggleDb = document.querySelector('.main__menu');
const sidebar = document.querySelector('.sidebar');
const sidebarLinks = document.querySelectorAll('.sidebar li a');

menuToggleDb.addEventListener('click', menuSlideIn);

function menuSlideIn () {
    sidebar.classList.toggle('active');
}

sidebarLinks.forEach(link => {
    link.addEventListener('click', function () {
        sidebar.classList.remove('active');
    });
});