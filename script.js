const roles = [
  'Full Stack Developer',
  'Integration Engineer',
  'UI/UX Engineer',
  'AI & ML Explorer',
  'Problem Solver',
];

const typedText = document.getElementById('typedText');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

let charIndex = 0;
let roleIndex = 0;
let isDeleting = false;
const typingSpeed = 90;
const deletingSpeed = 45;
const delayBetweenRoles = 1400;

function typeRole() {
  const currentRole = roles[roleIndex];
  const displayedText = isDeleting
    ? currentRole.substring(0, charIndex - 1)
    : currentRole.substring(0, charIndex + 1);

  typedText.textContent = displayedText;

  if (!isDeleting && charIndex < currentRole.length) {
    charIndex++;
    setTimeout(typeRole, typingSpeed);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeRole, deletingSpeed);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeRole, delayBetweenRoles);
    } else {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, typingSpeed);
    }
  }
}

typeRole();

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
  observer.observe(element);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 780) {
    navLinks.classList.remove('open');
  }
});
