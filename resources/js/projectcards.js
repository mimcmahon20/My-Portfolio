document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', e => {
      const line = link.querySelector('::after');
      line.style.width = '0'; /* Reset the width to 0 */
      line.style.display = 'block'; /* Show the line */
    });
    
    link.addEventListener('mousemove', e => {
      const line = link.querySelector('::after');
      const rect = link.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      line.style.width = mouseX + 'px'; /* Update the width based on mouse position */
      line.style.left = '0'; /* Reset the left position */
    });
    
    link.addEventListener('mouseleave', e => {
      const line = link.querySelector('::after');
      line.style.opacity = '0'; /* Hide the line */
    });
  });