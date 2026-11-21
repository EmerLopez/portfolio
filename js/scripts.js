/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Active navigation highlight on scroll (ScrollSpy)
    const navLinks = Array.from(document.querySelectorAll('#navbarResponsive .nav-link'));
    const navSections = [];

    navLinks.forEach(link => {
        const hash = link.getAttribute('href');
        if (hash && hash.startsWith('#')) {
            const section = document.querySelector(hash);
            if (section) {
                navSections.push({ link, section });
            }
        }
    });

    const updateActiveNav = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const navbarHeight = 85;

        // 1. En la parte superior de la página (Hero / Inicio)
        if (scrollPosition < 150 && navSections.length > 0) {
            navSections.forEach((item, index) => {
                if (index === 0) {
                    item.link.classList.add('active');
                } else {
                    item.link.classList.remove('active');
                }
            });
            return;
        }

        // 2. Al final de la página (Contacto / Footer)
        if (scrollPosition + windowHeight >= documentHeight - 60 && navSections.length > 0) {
            navSections.forEach((item, index) => {
                if (index === navSections.length - 1) {
                    item.link.classList.add('active');
                } else {
                    item.link.classList.remove('active');
                }
            });
            return;
        }

        // 3. Secciones intermedias: determinar cuál se encuentra en la zona activa de lectura
        let activeItem = null;
        for (let i = 0; i < navSections.length; i++) {
            const rect = navSections[i].section.getBoundingClientRect();
            if (rect.top <= navbarHeight + 80 && rect.bottom > navbarHeight + 80) {
                activeItem = navSections[i];
                break;
            }
        }

        // Si no se detectó por cruce directo, tomar la última que haya rebasado el navbar
        if (!activeItem) {
            for (let i = navSections.length - 1; i >= 0; i--) {
                const rect = navSections[i].section.getBoundingClientRect();
                if (rect.top <= navbarHeight + 120) {
                    activeItem = navSections[i];
                    break;
                }
            }
        }

        if (activeItem) {
            navSections.forEach(item => {
                if (item === activeItem) {
                    item.link.classList.add('active');
                } else {
                    item.link.classList.remove('active');
                }
            });
        }
    };

    // Ejecutar al cargar la página
    updateActiveNav();
    window.addEventListener('load', updateActiveNav);

    // Escucha de scroll con requestAnimationFrame para 60fps fluido
    let isScrollTicking = false;
    window.addEventListener('scroll', () => {
        if (!isScrollTicking) {
            window.requestAnimationFrame(() => {
                updateActiveNav();
                isScrollTicking = false;
            });
            isScrollTicking = true;
        }
    }, { passive: true });

    // Retroalimentación visual inmediata al hacer clic en un enlace del navbar
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
