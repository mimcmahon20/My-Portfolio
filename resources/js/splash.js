const scrollItems = document.querySelectorAll('.scroll');
const scrollContainer = document.querySelector('.scroll-container')
const legend = document.querySelector('.legend');
const arrow = document.querySelector('.arrow');


if(window.innerWidth < window.innerHeight) {
   scrollContainer.style = 'scroll-snap-type: none';
   arrow.style.position = 'sticky';
   arrow.style.float = 'bottom';
} else {
  let hasScrolled = false;
setTimeout(() => {
  scrollContainer.addEventListener('scroll', function() {
    if (!hasScrolled) {
      setTimeout(() => {
          scrollItems[0].classList.remove('scroll');  
          scrollItems[1].classList.remove('scroll');
          legend.style.display = 'none';
      }, 250)
      console.log('User has scrolled for the first time.');
      hasScrolled = true;
    }
  });
}, 250);
}


