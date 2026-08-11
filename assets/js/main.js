/*=============== SHOW MOBILE MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");


// Show menu
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}


// Hide menu
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}


/*=============== REMOVE MENU ON LINK CLICK ===============*/
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
});


/*=============== CHANGE HEADER BACKGROUND ON SCROLL ===============*/
const header = document.getElementById("header");

function scrollHeader() {
    if (window.scrollY >= 50) {
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.15)";
    } else {
        header.style.boxShadow = "none";
    }
}

window.addEventListener("scroll", scrollHeader);


/*=============== SCROLL UP ===============*/
const scrollUp = document.getElementById("scroll-up");

function showScrollUp() {
    if (window.scrollY >= 350) {
        scrollUp.classList.add("show-scroll");
    } else {
        scrollUp.classList.remove("show-scroll");
    }
}

window.addEventListener("scroll", showScrollUp);


/*=============== ACTIVE LINK ON SCROLL ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute("id");

        const sectionLink = document.querySelector(
            `.nav__link[href*="${sectionId}"]`
        );

        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            sectionLink?.classList.add("active-link");
        } else {
            sectionLink?.classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/
if (typeof ScrollReveal !== "undefined") {

    const sr = ScrollReveal({
        origin: "top",
        distance: "40px",
        duration: 1000,
        delay: 200,
        reset: false
    });


    /* Home */
    sr.reveal(".home__subtitle");
    sr.reveal(".home__title", { delay: 300 });
    sr.reveal(".home__education", { delay: 400 });
    sr.reveal(".home__description", { delay: 500 });
    sr.reveal(".home .button", { delay: 600 });
    sr.reveal(".home__img", {
        origin: "right",
        delay: 500
    });


    /* About */
    sr.reveal(".about__data", {
        origin: "left"
    });


    /* Skills */
    sr.reveal(".skills__content", {
        interval: 150
    });


    /* Education */
    sr.reveal(".services__card", {
        interval: 150
    });


    /* Projects */
    sr.reveal(".projects__card", {
        interval: 150
    });


    /* Contact */
    sr.reveal(".contact__content", {
        interval: 150
    });


    /* Footer */
    sr.reveal(".footer__container", {
        origin: "bottom"
    });
}


/*=============== CURRENT YEAR ===============*/
const footerYear = document.querySelector(".footer__copy");

if (footerYear) {
    footerYear.innerHTML =
        `&#169; ${new Date().getFullYear()} Akhil Pandit. All rights reserved.`;
}
