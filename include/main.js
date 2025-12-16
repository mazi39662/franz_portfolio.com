document.addEventListener("DOMContentLoaded", function () {
  const bodyId = document.body.id;
  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href").split(".")[0];
    if (bodyId === `${linkPage}-page`) {
      link.classList.add("active");
    }
  });

  const fadeInElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, {
      threshold: 0.1
  });

  fadeInElements.forEach(element => {
      observer.observe(element);
  });
});
