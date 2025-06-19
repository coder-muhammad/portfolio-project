// Smooth scroll effect for all navbar links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    // Prevent default anchor behavior
    e.preventDefault();

    // Get target section from href attribute
    const section = document.querySelector(this.getAttribute("href"));

    // Scroll to the section smoothly
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000, // Animation duration in ms
  once: true, // Animate only once on scroll
});

// Hide preloader after page is fully loaded
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.style.display = "none";
  }
});
