document.addEventListener("DOMContentLoaded", function () {
  const bodyId = document.body.id;
  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href").split(".")[0];
    if (bodyId === `${linkPage}-page`) {
      link.classList.add("active");
    }
  });

  // Burger Menu Toggle
  const hamburgerBtn = document.querySelector(".hamburger-menu");
  const mainNav = document.querySelector(".main-nav");

  if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener("click", function () {
      mainNav.classList.toggle("active");

      // Accessibility
      const expanded = mainNav.classList.contains("active");
      hamburgerBtn.setAttribute("aria-expanded", expanded);

      // Icon Toggle
      const icon = hamburgerBtn.querySelector("i");
      if (icon) {
        if (expanded) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-xmark");
        } else {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }
    });
  }
});
