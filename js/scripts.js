// js/scripts.js

// event listener for adjusting background gradient based on mouse position
document.addEventListener('mousemove', function(e) {
    const x = (window.innerWidth - e.clientX) / window.innerWidth * 100;
    const y = (window.innerHeight - e.clientY) / window.innerHeight * 100;
    document.body.style.backgroundPosition = `${x}% ${y}%`;
  });
  
  