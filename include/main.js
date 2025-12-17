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
      // Dynamic Age Calculation logic moved
    });
  }

  // Dynamic Age Calculation
  const ageElement = document.getElementById("userAge");
  if (ageElement) {
    const birthDate = new Date("2001-01-26");
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    ageElement.textContent = `${age} Years`;
  }
});
