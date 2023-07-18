// Custom slow smooth scrolling animation for Service
function slowScrollTo(targetY) {
  const scrollY = window.scrollY || window.pageYOffset;
  const difference = targetY - scrollY;
  const duration = 600; // You can adjust this value to control the animation speed
  const perTick = (difference / duration) * 10;

  function scrollToTarget() {
    window.scrollBy(0, perTick);

    if (Math.abs(scrollY - window.scrollY) < Math.abs(difference)) {
      requestAnimationFrame(scrollToTarget);
    } else {
      window.scrollTo(0, targetY);
    }
  }

  requestAnimationFrame(scrollToTarget);
}

window.addEventListener("load", function () {
  const targetID = "#nail-service"; // Get the target ID from the URL hash
  if (targetID) {
    const targetElement = document.querySelector(targetID);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "auto",
      });
    }
  }
});

// Slow scroll to the specific section when the page is loaded from another page
// Scroll to the specific section when the page is loaded from another page
// Function to perform smooth scrolling animation
// Function to perform smooth scrolling animation
function smoothScroll(targetY, duration) {
  const startY = window.pageYOffset;
  const startTime = performance.now();

  function scrollStep(timestamp) {
    const currentTime = timestamp || performance.now();
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easeInOutCubic =
      progress < 0.5
        ? 4 * progress * progress * progress
        : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;
    const scrollTop = startY + (targetY - startY) * easeInOutCubic;
    window.scrollTo(0, scrollTop);

    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}

// Scroll to the specific section when the page is loaded from another page
window.addEventListener("DOMContentLoaded", function () {
  const currentURL = window.location.href;
  const targetIDIndex = currentURL.indexOf("#");

  if (targetIDIndex !== -1) {
    const targetID = currentURL.substring(targetIDIndex);
    const targetElement = document.querySelector(targetID);

    if (targetElement) {
      const targetY =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const duration = 800; // Set the duration of the animation in milliseconds

      setTimeout(function () {
        smoothScroll(targetY, duration);
      }, 100);
    }
  }
});

// Scroll to the specific section when the page is loaded from another page or refreshed
