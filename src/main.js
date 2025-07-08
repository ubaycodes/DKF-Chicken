document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar-toggle");
  const navbarNav = document.querySelector(".navbar-nav");
  const navbarOverlay = document.getElementById("navbarOverlay");

  toggleButton.addEventListener("click", function () {
    navbarNav.classList.toggle("active");
    navbarOverlay.classList.toggle("active");
    toggleButton.classList.toggle("active");
  });

  navbarOverlay.addEventListener("click", function () {
    navbarNav.classList.remove("active");
    navbarOverlay.classList.remove("active");
    toggleButton.classList.remove("active");
  });
});
