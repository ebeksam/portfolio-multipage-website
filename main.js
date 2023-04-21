const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu .close-icon");
const mobileMenu = document.querySelector(".mobile-menu");

menuIcon.addEventListener("click", () => {
    mobileMenu.classList.add("active")
});

closeIcon.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
});