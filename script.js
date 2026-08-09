
// ==============================
// MOBILE NAVIGATION
// ==============================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// ==============================
// CURRENT YEAR
// ==============================

document.getElementById("year").textContent =
    new Date().getFullYear();

