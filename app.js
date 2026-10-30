document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".newsletter-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector("input");

      if (!input) return;

      input.value = "";
      input.placeholder = "Obrigado! Você está na lista.";
    });
  }

  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => observer.observe(element));
});
