const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const fadeElements = document.querySelectorAll('.fade-up');
const revealElements = document.querySelectorAll('.reveal-on-scroll');
const cursorDot = document.querySelector('.cursor-dot');
const blobs = document.querySelectorAll('.page-bg .blob');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

window.addEventListener('load', () => {
  fadeElements.forEach((element) => element.classList.add('visible'));
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouchDevice = window.matchMedia('(hover: none)').matches || 'ontouchstart' in window;

if (!prefersReducedMotion && !isTouchDevice) {
  document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    if (cursorDot) {
      cursorDot.style.opacity = '1';
      cursorDot.style.left = `${x}px`;
      cursorDot.style.top = `${y}px`;
    }

    blobs.forEach((blob) => {
      const speed = Number(blob.dataset.speed) || 0.08;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (centerX - x) * speed;
      const offsetY = (centerY - y) * speed;
      const rect = blob.getBoundingClientRect();
      const blobCenterX = rect.left + rect.width / 2;
      const blobCenterY = rect.top + rect.height / 2;
      const distance = Math.hypot(blobCenterX - x, blobCenterY - y);
      const hoverIntensity = Math.max(0, 1 - distance / 260);
      const hoverScale = 1 + hoverIntensity * 0.08;
      const extraX = (x - blobCenterX) * hoverIntensity * 0.02;
      const extraY = (y - blobCenterY) * hoverIntensity * 0.02;
      blob.style.transform = `translate(${offsetX + extraX}px, ${offsetY + extraY}px) scale(${hoverScale})`;
      blob.style.opacity = `${0.55 + hoverIntensity * 0.18}`;
    });
  });

  document.addEventListener('mouseleave', () => {
    if (cursorDot) cursorDot.style.opacity = '0';
  });

  document.querySelectorAll('a, button').forEach((element) => {
    element.addEventListener('mouseenter', () => {
      if (cursorDot) cursorDot.classList.add('cursor-hover');
    });
    element.addEventListener('mouseleave', () => {
      if (cursorDot) cursorDot.classList.remove('cursor-hover');
    });
  });
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 780) {
    navLinks.classList.remove('open');
  }
});
