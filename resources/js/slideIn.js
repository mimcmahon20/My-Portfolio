// Get all elements with class "info-text-right"
const infoTextRight = document.querySelectorAll('.info-text-right');

// Get all elements with class "info-svg-right"
const infoSvgRight = document.querySelectorAll('.info-svg-right');

// Get all elements with class "info-text-right"
const infoTextLeft = document.querySelectorAll('.info-text-left');

// Get all elements with class "info-svg-right"
const infoSvgLeft = document.querySelectorAll('.info-svg-left');

// Function to check if an element is in the viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight-100 || document.documentElement.clientHeight-100) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function handleScroll() {
  // Loop through each element with class "info-text-right"
  infoTextRight.forEach((el) => {
    // Check if the element is in the viewport
    if (isInViewport(el)) {
      // Add the "slide-in-right" class to animate the element
      el.classList.add('slide-in-right');
    }
  });

  // Loop through each element with class "info-svg-right"
  infoSvgRight.forEach((el) => {
    // Check if the element is in the viewport
    if (isInViewport(el)) {
      // Add the "slide-in-right" class to animate the element
      el.classList.add('slide-in-right');
    }
  });

    // Loop through each element with class "info-text-left"
    infoTextLeft.forEach((el) => {
        // Check if the element is in the viewport
        if (isInViewport(el)) {
            // Add the "slide-in-right" class to animate the element
            el.classList.add('slide-in-left');
        }
    });

    // Loop through each element with class "info-svg-left"
    infoSvgLeft.forEach((el) => {
        // Check if the element is in the viewport
        if (isInViewport(el)) {
            // Add the "slide-in-right" class to animate the element
            el.classList.add('slide-in-left');
        }
        }
    );
}

// Add the handleScroll function as a scroll event listener
window.addEventListener('scroll', handleScroll);
