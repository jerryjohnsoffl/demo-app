const header = document.querySelector('header');

window.addEventListener('scroll', stickNavbar);

function stickNavbar() {
    header.classList.toggle('scrolled', window.pageYOffset > 0);
}


document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('nav');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });
});