
  // Theme toggle
  const toggleBtn = document.getElementById("themeToggle");
  const iconMoon = document.getElementById("icon-moon");
  const iconSun = document.getElementById("icon-sun");

  toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    iconMoon.classList.toggle("hidden", isDark);
    iconSun.classList.toggle("hidden", !isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Load saved theme
  window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    iconMoon.classList.toggle("hidden", isDark);
    iconSun.classList.toggle("hidden", !isDark);
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });





