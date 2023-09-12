const header = document.querySelector('header');

window.addEventListener('scroll', stickNavbar);

function stickNavbar() {
    header.classList.toggle('scrolled', window.pageYOffset > 0);
}


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});