document.addEventListener("DOMContentLoaded", function () {
  const bodyId = document.body.id;
  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href").split(".")[0];
    if (bodyId === `${linkPage}-page`) {
      link.classList.add("active");
    }
  });
});
