// $(document).ready(function(){

//     $('.fa-bars').click(function(){
//        $(this).toggleClass('fa-times');
//        $('.navbar').toggleClass('nav-toggle');
//    });

//    $(window).on('load scroll',function(){
//        $('.fa-bars').removeClass('fa-times');
//        $('.navbar').removeClass('nav-toggle');

//        if($(window).scrollTop()>35)
//        {
//            $('.header').css({'background':'#002e5f','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
//        }
//        else
//        {
//            $('.header').css({'background':'none','box-shadow':'none'});
//        }
//    });

//    const counters = document.querySelectorAll('.counter');
//    const speed = 120;
//    counters.forEach(counter => {
//    const updateCount = () => {
//        const target = +counter.getAttribute('data-target');
//        const count = +counter.innerText;
//        const inc = target / speed;
//        if (count < target) {
//            counter.innerText = count + inc;
//            setTimeout(updateCount, 1);
//        } else {
//            counter.innerText = target;
//        }
//    };
//      updateCount();
//   });

//   (function ($) {
//    "use strict";
   
//    $(".clients-carousel").owlCarousel({
//        autoplay: true,
//        dots: true,
//        loop: true,
//        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
//    });

//    $(".testimonials-carousel").owlCarousel({
//        autoplay: true,
//        dots: true,
//        loop: true,
//        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
//    });
   
// })(jQuery);

// $(window).scroll(function () {
//    if ($(this).scrollTop() > 100) {
//        $('.back-to-top').fadeIn('slow');
//    } else {
//        $('.back-to-top').fadeOut('slow');
//    }
// });
// $('.back-to-top').click(function () {
//    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
//    return false;
// });

// $('.accordion-header').click(function(){
//    $('.accordion .accordion-body').slideUp(500);
//    $(this).next('.accordion-body').slideDown(500);
//    $('.accordion .accordion-header span').text('+');
//    $(this).children('span').text('-');
// });

// });


// window.addEventListener('scroll', function() {
//     const header = document.querySelector('.header');
//     header.classList.toggle('scrolled', window.scrollY > 0);
// });

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

      // Debugging logs
      console.log('Menu icon hidden:', menuIcon.classList.contains('hidden'));
      console.log('Close icon hidden:', closeIcon.classList.contains('hidden'));
    });
  }
});


const images = [
  "../images/img3.jpg",
  "../images/img1.jpg",
  "../images/img2.jpg",
  
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

// Automatically change background every 5 seconds
setInterval(nextImage, 4000);




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







