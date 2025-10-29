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
// hero part
// Scroll animation for job cards
const jobCards = document.querySelectorAll(".job-card");

window.addEventListener("scroll", () => {
  jobCards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.transition = "all 0.6s ease-out";
    }
  });
});

// Button animation on click
const buttons = document.querySelectorAll(".job-btn, .apply-btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 300);
  });
});
