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
