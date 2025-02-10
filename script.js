/* script.js (no new code required specifically for contact, but included for completeness) */
document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.querySelector(".dropdown-content");
    dropdown.addEventListener("mouseenter", function() {
      dropdownContent.style.display = "block";
    });
    dropdown.addEventListener("mouseleave", function() {
      dropdownContent.style.display = "none";
    });
  
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    darkModeToggle.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
    });
  });
  