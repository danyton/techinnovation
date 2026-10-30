document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".newsletter-form");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("input");

    if (!input) return;

    input.value = "";
    input.placeholder = "Obrigado! Você está na lista.";
  });
});
