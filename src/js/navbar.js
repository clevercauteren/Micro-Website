const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar a'); // Select all <a> tags inside navbar
const navlinks = document.querySelectorAll('.navbar nav a'); // Select all <a> tags inside navbar's <nav> element

navbar.addEventListener('mouseenter', () => {
  // Loop through all links and change their color
  links.forEach(link => {
    link.style.color = 'black'; // Change color
  });

  navlinks.forEach(navlink => {
    navlink.style.color = 'black'; // Change color
  });
});

navbar.addEventListener('mouseleave', () => {
  // Loop through all links and reset their color
  links.forEach(link => {
    link.style.color = 'white'; // Reset color
  });

  navlinks.forEach(navlink => {
    navlink.style.color = 'white'; // Reset color
  });
});