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

    let profileTrigger = document.querySelector('#profile-trigger');
    let authModal = document.querySelector('#auth-modal');
    let authClose = document.querySelector('#auth-close');
    let authTabs = document.querySelectorAll('.auth-tab');
    let authForms = document.querySelectorAll('.auth-form');

    let openAuthModal = () => {
        authModal.classList.add('active');
        authModal.setAttribute('aria-hidden', 'false');
    }

    let closeAuthModal = () => {
        authModal.classList.remove('active');
        authModal.setAttribute('aria-hidden', 'true');
    }

    profileTrigger.onclick = openAuthModal;

    profileTrigger.onkeydown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openAuthModal();
        }
    }

    authClose.onclick = closeAuthModal;

    authModal.onclick = (event) => {
        if (event.target === authModal) {
            closeAuthModal();
        }
    }

    document.onkeydown = (event) => {
        if (event.key === 'Escape') {
            closeAuthModal();
        }
    }

    authTabs.forEach((tab) => {
        tab.onclick = () => {
            authTabs.forEach((item) => item.classList.remove('active'));
            authForms.forEach((form) => form.classList.remove('active'));
            tab.classList.add('active');
            document.querySelector(`#${tab.dataset.authTab}-form`).classList.add('active');
        }
    });
