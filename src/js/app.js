/* show menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

        if (navToggle && navClose) {
            navToggle.addEventListener('click', () => navMenu.classList.toggle('show-menu'));
            navClose.addEventListener('click', () => navMenu.classList.toggle('show-menu'));
          }; //
          
/* remove menu mobile */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = ( ) => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));