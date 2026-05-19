// swiper
var swiper = new Swiper(".home", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }

    let aboutToggle = document.querySelector('#about-toggle');
    let aboutDetails = document.querySelector('.about-details');

    aboutToggle.onclick = () => {
        let isOpen = aboutDetails.classList.toggle('active');
        aboutToggle.classList.toggle('active', isOpen);
        aboutToggle.setAttribute('aria-expanded', isOpen);
    }
