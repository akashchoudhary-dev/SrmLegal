// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Sticky nav shadow on scroll
const navWrap = document.getElementById('navWrap');
window.addEventListener('scroll', () => {
  navWrap.style.boxShadow = window.scrollY > 10 ? '0 8px 24px rgba(0,0,0,.25)' : 'none';
});

// Scroll reveal animations
const revealTargets = document.querySelectorAll(
  '.service-card, .expertise-card, .about-copy, .about-panel, .contact-info, .contact-form, .industry-card, .process-step, .faq-item'
);
revealTargets.forEach(el => el.setAttribute('data-reveal', ''));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));

// Contact form — submits to Formspree
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
const submitBtn = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  formNote.textContent = '';

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' }
    });

    if (response.ok) {
      formNote.textContent = `Thank you, ${name || 'there'}! Your message has been sent. Our team will get back to you within one business day.`;
      formNote.style.color = '#1b7a43';
      contactForm.reset();
    } else {
      const data = await response.json().catch(() => null);
      const errorMsg = data?.errors?.map(err => err.message).join(', ');
      formNote.textContent = errorMsg || 'Something went wrong. Please try again or email us directly at info@srmlegal.in.';
      formNote.style.color = '#c0392b';
    }
  } catch (err) {
    formNote.textContent = 'Network error. Please try again or email us directly at info@srmlegal.in.';
    formNote.style.color = '#c0392b';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  }
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
