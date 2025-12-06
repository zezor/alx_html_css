// Theme toggle (dark/light) with persistence
(function() {
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  function setTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      toggle.textContent = '☀️';
    } else {
      root.removeAttribute('data-theme');
      toggle.textContent = '🌙';
    }
    localStorage.setItem('theme', theme);
  }

  // Initialize
  const saved = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(saved === 'dark' ? 'dark' : 'light');

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
})();

// Smooth scroll for nav links
document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    const id = this.getAttribute('href').substring(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Simple contact form handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const msg = document.getElementById('contact-message').value.trim();
  if (!name || !email || !msg) {
    alert('Please fill all fields.');
    return;
  }
  // Simulate sending...
  alert('Thanks ' + name + '! Your message was sent.');
  this.reset();
});
