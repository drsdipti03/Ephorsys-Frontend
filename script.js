// 1. Function to toggle the main navigation menu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// 2. Function to handle the Services dropdown click on mobile
document.addEventListener("DOMContentLoaded", () => {
  const dropdownItem = document.querySelector(".dropdown");

  // Select the link (which is the Services text)
  const dropdownToggle = dropdownItem ? dropdownItem.querySelector("a") : null;

  if (dropdownToggle) {
    dropdownToggle.addEventListener("click", (e) => {
      // Check if the main mobile menu is currently open
      const isMenuOpen = document
        .getElementById("navLinks")
        .classList.contains("active");

      // Only handle the click logic if the main mobile menu is open
      if (isMenuOpen) {
        e.preventDefault();

        // Toggle the 'open' class on the parent list item (.dropdown)
        // This class is checked by the CSS to display the sub-menu.
        dropdownItem.classList.toggle("open");
      }
    });
  }
});

// hero section
// Add a little scroll reveal animation
window.addEventListener("scroll", () => {
  const heroText = document.querySelector(".hero-content");
  const position = heroText.getBoundingClientRect().top;
  const screenHeight = window.innerHeight / 1.3;

  if (position < screenHeight) {
    heroText.classList.add("visible");
  }
});

// Smooth scroll when clicking the button
document.getElementById("exploreBtn").addEventListener("click", () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
});
