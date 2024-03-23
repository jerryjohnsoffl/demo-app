const header = document.querySelector('header');
const body = document.querySelector('body');

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
        navbar.style.transitionDelay = '.5s';
    });

    if (window.screen.width <= 768) {
        header.classList.add('small');
    } else {
        header.classList.remove('small');
    }
});

window.addEventListener('resize', ()=> {
    if (window.screen.width <= 768) {
        header.classList.add('small');
    } else {
        header.classList.remove('small');
    }
})