

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuIcon.classList.toggle('close-icon');
      closeIcon.classList.toggle('close-icon');

  
    });
  }
});


const images = [
  "./images/img3.jpg",
  "./images/img2.jpg",
  "./images/img1.jpg",
];
let currentIndex = 0;

function updateBackground() {
  document.querySelector('.home').style.backgroundImage = `url(${images[currentIndex]})`;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateBackground();
}

function previousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateBackground();
}

// Automatically switch images every 4 seconds
setInterval(nextImage, 4000);

// Initialize with the first image
updateBackground();





document.addEventListener('DOMContentLoaded', () => {
  const sr = ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 1500,
    delay: 100
  });

  sr.reveal('.toporigin', { origin: 'top' });
  sr.reveal('.bottomorigin', { origin: 'bottom' });
  sr.reveal('.leftorigin', { origin: 'left' });
  sr.reveal('.rightorigin', { origin: 'right' });
});







