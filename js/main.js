// shrink

window.addEventListener("scroll", function () {
    shrink();
});

let navbar = document.getElementById("header");

function shrink() {
    if (scrollY > 750) {
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
    }
}

//hamburger

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-list');

    menuToggle.addEventListener('click', (width = 769) => {
        navLinks.classList.toggle('active');
    });
});




// 

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-contact');

    menuToggle.addEventListener('click', (width = 769) => {
        navLinks.classList.toggle('active');
    });
});

//backtop 

window.addEventListener("scroll", function () {
    toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
    if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
    ) {
        backtop.classList.add('backtop-show')
    } else {
        backtop.classList.remove('backtop-show')
    }
}