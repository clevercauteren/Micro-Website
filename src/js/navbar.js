const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".navbar a"); // Select all <a> tags inside navbar
const navlinks = document.querySelectorAll(".navbar nav a"); // Select all <a> tags inside navbar's <nav> element
const nav = document.querySelector(".navbar nav");
const title = document.querySelector(".navbar .titel");

// Add hamburger button to the navbar if it doesn't exist
const hamburgerExists = document.querySelector(".hamburger");
if (!hamburgerExists) {
  const hamburger = document.createElement("div");
  hamburger.className = "hamburger";

  // Create the three lines
  for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    hamburger.appendChild(span);
  }

  // Insert after the title element but before the nav
  // This positions it more to the left in the navbar
  if (title && title.parentElement) {
    navbar.insertBefore(hamburger, nav);
  } else {
    // Fallback: Insert before the nav element
    navbar.insertBefore(hamburger, nav);
  }

  // Add click event to hamburger
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent event bubbling
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");

    // Toggle body scroll when menu is open
    if (nav.classList.contains("active")) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }
  });

  // Close mobile menu when a link is clicked
  navlinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
      document.body.style.overflow = ""; // Re-enable scrolling
    });
  });
}

navbar.addEventListener("mouseenter", () => {
  // Loop through all links and change their color
  links.forEach((link) => {
    link.style.color = "black"; // Change color
  });

  navlinks.forEach((navlink) => {
    navlink.style.color = "black"; // Change color
  });
});

navbar.addEventListener("mouseleave", () => {
  // Only reset colors if not in mobile view or menu is not active
  if (window.innerWidth > 768 || !nav.classList.contains("active")) {
    links.forEach((link) => {
      link.style.color = "white"; // Reset color
    });

    navlinks.forEach((navlink) => {
      navlink.style.color = "white"; // Reset color
    });
  }

  // Don't reset color for mobile menu when it's active
  if (nav.classList.contains("active")) {
    navlinks.forEach((navlink) => {
      navlink.style.color = "black";
    });
  }
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    nav.classList.contains("active") &&
    !nav.contains(e.target) &&
    !document.querySelector(".hamburger").contains(e.target)
  ) {
    nav.classList.remove("active");
    document.querySelector(".hamburger").classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scrolling
  }
});

// Make sure hamburger button shows the right state on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && nav.classList.contains("active")) {
    nav.classList.remove("active");
    document.querySelector(".hamburger").classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scrolling
  }
});
