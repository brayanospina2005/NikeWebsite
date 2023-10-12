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

/* swiper */
let swiperShoes = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
      prev: {
        translate: [-100, 0, -500],
        opacity: [0]
      },
      next: {
        translate: [100, 0, -500],
        opacity: [0]
      }
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });

/* shadow header */

const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                        : header.classList.remove('shadow-header');

}
window.addEventListener('scroll', shadowHeader);