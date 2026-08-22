// Mobiles Hamburger-Menü
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('active');
      navToggle.classList.toggle('active', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navToggle.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
    });

    // Menü automatisch schließen, wenn ein Link angeklickt wird
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Menü öffnen');
      });
    });
  }

  // Kontaktformular
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitButton = contactForm.querySelector('button[type="submit"]');
      const formData = new FormData(contactForm);

      submitButton.disabled = true;
      submitButton.textContent = 'Wird gesendet...';
      formStatus.textContent = '';
      formStatus.className = 'form-status';

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });

        if (response.ok) {
          formStatus.textContent = 'Danke für deine Nachricht! Ich melde mich bald bei dir.';
          formStatus.classList.add('success');
          contactForm.reset();
        } else {
          throw new Error('Formspree hat einen Fehler zurückgegeben.');
        }
      } catch (error) {
        formStatus.textContent =
          'Da ist leider etwas schiefgelaufen. Schreib mir gerne direkt an tobmowagner@gmail.com.';
        formStatus.classList.add('error');
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Senden';
      }
    });
  }
});