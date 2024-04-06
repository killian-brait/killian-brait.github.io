// js/scripts.js

// event listener for adjusting background gradient based on mouse position
document.addEventListener('mousemove', function(e) {
    const x = e.clientX; // mouse position on x-axis in pixels
    const y = e.clientY; // mouse position on y-axis in pixels
    document.body.style.backgroundPosition = `${x}px ${y}px`;
  });
  