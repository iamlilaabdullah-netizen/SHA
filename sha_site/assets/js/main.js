/*
 * Spartan Housing Alliance script
 *
 * Provides interactive behaviours for the website, including mobile menu
 * toggling and updating the copyright year. Keeping scripts small and
 * unobtrusive helps maintain a responsive and accessible experience.
 */

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      // Determine current state of menu to set ARIA appropriately
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', (!expanded).toString());
      navMenu.classList.toggle('open');
    });
  }

  // Update copyright year automatically
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }
});