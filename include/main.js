document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.main-nav a');
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        if (currentUrl.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
});
