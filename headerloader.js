// header-loader.js
document.addEventListener("DOMContentLoaded", function () {
  const placeholder = document.getElementById("header-placeholder");
  if (placeholder) {
    fetch("header.html")
      .then((res) => res.text())
      .then((data) => {
        placeholder.innerHTML = data;

        // Menu toggle functionality
        const toggle = document.getElementById("menu-toggle");
        const navLinks = document.getElementById("nav-links");
        if (toggle && navLinks) {
          toggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
          });
        }
      });
  }
});
