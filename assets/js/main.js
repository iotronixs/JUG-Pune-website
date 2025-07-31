document.addEventListener('DOMContentLoaded', () => {

  // Sponsor tier carousel
new Swiper('.sponsor-swiper', {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 40,
  loop: true,
  autoplay: { delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true },
  pagination: {
    el: '.sponsor-swiper .swiper-pagination',
    clickable: true
  }
});

// Sponsor testimonials carousel
new Swiper('.sponsor-testimonial-swiper', {
  slidesPerView: window.innerWidth >= 992 ? 3 : 1,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  autoplay: { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true },
  pagination: {
    el: '.sponsor-testimonial-swiper .swiper-pagination',
    clickable: true
  }
});

// Contact form submission (example)
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for reaching out! We’ll be in touch soon.');
});


  // Testimonials reveal on page load
const cards = document.querySelectorAll('.testimonial-card');
cards.forEach((card, idx) => {
  setTimeout(() => card.classList.add('reveal'), idx * 300);
});

// Initialize Swiper for testimonials
new Swiper('.testimonials-swiper', {
  slidesPerView: window.innerWidth >= 992 ? 3 : 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    slideChangeTransitionStart() {
      // reveal card in center
      document.querySelectorAll('.testimonial-card').forEach(c => c.classList.remove('reveal'));
      const active = document.querySelectorAll('.swiper-slide-active .testimonial-card, .swiper-slide-next .testimonial-card, .swiper-slide-prev .testimonial-card');
      active.forEach((c, i) => setTimeout(() => c.classList.add('reveal'), i * 200));
    },
  },
});

// Student Ambassador Testimonials reveal
const ambCards = document.querySelectorAll('#student-ambassador .testimonial-card');
ambCards.forEach((card, i) => {
  setTimeout(() => card.classList.add('reveal'), i * 300);
});

// Initialize Swiper for ambassadors
new Swiper('.ambassador-swiper', {
  slidesPerView: window.innerWidth >= 992 ? 3 : 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.ambassador-swiper .swiper-pagination',
    clickable: true,
  },
  on: {
    slideChangeTransitionStart() {
      // reveal active cards
      const activeSlides = document.querySelectorAll('.ambassador-swiper .swiper-slide-active .testimonial-card');
      ambCards.forEach(c => c.classList.remove('reveal'));
      activeSlides.forEach((c, idx) => setTimeout(() => c.classList.add('reveal'), idx * 200));
    }
  }
});

  // Leaflet map
  const puneMap = L.map('puneMap', {
    center: [18.5204, 73.8567],
    zoom: 12,
    scrollWheelZoom: false
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(puneMap);

  const pulse = L.circleMarker([18.5204, 73.8567], {
    radius: 15,
    color: '#FF9933',
    fillColor: '#FF9933',
    fillOpacity: 0.5
  }).addTo(puneMap);

  let growing = true;
  setInterval(() => {
    const r = pulse.getRadius();
    pulse.setRadius(growing ? r + 1 : r - 1);
    if (r >= 25) growing = false;
    if (r <= 15) growing = true;
  }, 200);

  // AOS
  AOS.init();

  // Change fade-left/right to fade-up on mobile
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    document.querySelectorAll('[data-aos]').forEach(el => {
      const anim = el.getAttribute('data-aos');
      if (anim === 'fade-left' || anim === 'fade-right') {
        el.setAttribute('data-aos', 'fade-up');
      }
    });
  }

  // Typed text
  new Typed('#typed-text', {
    strings: ['build.code.connect', 'Join us now', 'Connect to Grow', 'Innovate Together'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
  });

  // Sticky navbar
  const navbar = document.getElementById('mainNavbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
});

window.addEventListener('load', () => {
  document.getElementById('preloader').style.display = 'none';
});
