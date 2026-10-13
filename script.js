document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (!menuToggle || !navMenu) return;

    function closeMobileMenu() {
        menuToggle.checked = false;
    }

    // Close the menu when any navigation link is clicked
    navMenu.addEventListener("click", function (event) {
        const link = event.target.closest("a");

        if (link) {
            closeMobileMenu();
        }
    });

    // Also close the menu after navigating to a page section
    window.addEventListener("hashchange", closeMobileMenu);
});
if (window.location.pathname === "/index.html") {
        window.location.replace("/");
    }