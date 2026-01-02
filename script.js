document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll("section");

  /* HAMBURGER TOGGLE */
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  /* CLOSE MENU AFTER CLICK */
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  /* ACTIVE LINK + NAVBAR SHRINK */
  let lastActive = "";

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.id;
      }
    });

    if (current !== lastActive) {
      lastActive = current;
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    }

    if (window.scrollY > 50) {
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }
  }, { passive: true });

});
