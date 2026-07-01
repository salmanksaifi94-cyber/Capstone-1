const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const backTop = document.querySelector('.back-top');
const faqButtons = document.querySelectorAll('.faq-question');
const revealElements = document.querySelectorAll('.reveal');
const contactForm = document.getElementById('contactForm');

navToggle?.addEventListener('click', () => {
  navMenu?.classList.toggle('show');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backTop.classList.add('show');
  } else {
    backTop.classList.remove('show');
  }
});

backTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const open = answer.classList.toggle('open');
    if (open) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = '0';
    }
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

revealElements.forEach((el) => revealObserver.observe(el));

const sections = document.querySelectorAll('a[href^="#"]');
sections.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navMenu.classList.remove('show');
    }
  });
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Thank you! Your inquiry has been received.');
  contactForm.reset();
});
