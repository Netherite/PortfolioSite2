document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("change", function () {
        if (this.checked) {
            mobileMenu.style.transform = "translateX(0)";
        } else {
            mobileMenu.style.transform = "translateX(100%)";
        }
    });
});