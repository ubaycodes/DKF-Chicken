document.addEventListener("DOMContentLoaded", () => {
  // Select elements
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const toggleBtn = document.getElementById("dark-mode-toggle");
  const navbar = document.querySelector(".navbar"); // Moved inside DOMContentLoaded
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle Menu
  hamburger.addEventListener("click", () => {
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", String(!isExpanded)); // Fixed boolean conversion
  });

  // Close menu when clicking links (optimized)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu on ESC key (improved)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });

  // Dark Mode Toggle (with localStorage)
  toggleBtn.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark-mode");
    document.body.classList.toggle("dark-mode", isDark);

    // Update UI
    toggleBtn.textContent = isDark ? "🌒" : "🌕";
    toggleBtn.setAttribute("aria-pressed", isDark);

    // Save preference
    localStorage.setItem("darkMode", isDark);
  });

  // Initialize dark mode from storage
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "🌒";
    toggleBtn.setAttribute("aria-pressed", "true");
  }

  // Scroll effect (now properly scoped)
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
});
