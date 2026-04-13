document.addEventListener("DOMContentLoaded", () => {
  console.log("Aaryan portfolio template is ready.");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isExpanded));
      navLinks.classList.toggle("nav-open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("nav-open");
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        navToggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("nav-open");
      }
    });
  }

  const contactForm = document.querySelector("#contact-form");
  const successMessage = document.querySelector("#form-success-message");

  if (contactForm && successMessage) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      successMessage.classList.add("show");
      contactForm.reset();
    });
  }
});
