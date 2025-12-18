document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (!menuToggle || !navLinks) return;

    /* Toggle menu open / close */
    menuToggle.addEventListener("click", function (e) {
        e.stopPropagation(); // prevent outside click from firing
        navLinks.classList.toggle("show");

        // Change icon ☰ <-> ✖
        menuToggle.textContent = navLinks.classList.contains("show") ? "✖" : "☰";
    });

    /* Close menu when clicking a link */
    navLinks.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
            navLinks.classList.remove("show");
            menuToggle.textContent = "☰";
        }
    });

    /* Close menu when clicking outside */
    document.addEventListener("click", function (e) {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove("show");
            menuToggle.textContent = "☰";
        }
    });

});
