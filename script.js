// Simple contact form handler (no backend). Replace with your API endpoint.
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = { name: form.name.value, email: form.email.value, message: form.message.value };
  // Mock send
  status.textContent = 'Sending...';
  await new Promise(r => setTimeout(r, 900));
  status.textContent = 'Message sent — I will reply within 24 hours.';
  form.reset();
});

// Footer year
document.querySelector('.site-footer .container').innerHTML = `© ${new Date().getFullYear()} Mohamad Hamdan`;