// ===== Übersetzungen =====
const translations = {
  de: {
    'nav.about': 'Über mich',
    'nav.achievements': 'Erfolge',
    'nav.cv': 'Lebenslauf',
    'nav.projects': 'Projekte',
    'nav.skills': 'Fähigkeiten',
    'nav.contact': 'Kontakt',
    'hero.title': 'Hallo, ich bin Tobias',
    'hero.subtitle': 'Herzlich Willkommen auf meiner Website!',
    'about.heading': 'Über mich',
    'about.text':
      'Ich habe vorheriges Jahr meine Matura gemacht und befinde mich aktuell in einem Art Gap Year, in dem ich versuche, meine IT-Skillset zu erweitern.',
    'achievements.heading': 'Aktuelle Erfolge',
    'achievements.matura.title': 'Matura mit 1,0',
    'achievements.matura.text': 'Abschluss der Matura mit ausgezeichnetem Erfolg (Note 1,0).',
    'achievements.hansriegel.title': 'Hans Riegel Fachpreis',
    'achievements.hansriegel.text':
      'Auszeichnung für meine Abschlussarbeit mit dem Hans Riegel Fachpreis.',
    'achievements.hansriegel.download': 'Abschlussarbeit als PDF herunterladen',
    'cv.heading': 'Lebenslauf',
    'cv.item1': 'Frühjahr 2026 – heute: "Gap Year"',
    'cv.item2': '2018 – 2026: BRG Schloss Wagrain Vöcklabruck',
    'projects.heading': 'Projekte',
    'projects.item1.title': 'Digitales Skillset erweitern',
    'projects.item1.text':
      'Erwerbung grundlegender Fähigkeiten in den Bereichen Webentwicklung, Coding und Mathematics for AI',
    'skills.heading': 'Fähigkeiten',
    'contact.heading': 'Kontakt',
    'contact.name': 'Dein Name',
    'contact.email': 'Deine E-Mail',
    'contact.message': 'Deine Nachricht',
    'contact.send': 'Senden',
    'contact.sending': 'Wird gesendet...',
    'contact.success': 'Danke für deine Nachricht! Ich melde mich bald bei dir.',
    'contact.error':
      'Da ist leider etwas schiefgelaufen. Schreib mir gerne direkt an tobmowagner@gmail.com.',
  },
  en: {
    'nav.about': 'About',
    'nav.achievements': 'Achievements',
    'nav.cv': 'CV',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.title': "Hi, I'm Tobias",
    'hero.subtitle': 'Welcome to my website!',
    'about.heading': 'About me',
    'about.text':
      "I graduated from secondary school last year and I'm currently in a kind of gap year, using the time to build up my IT skillset.",
    'achievements.heading': 'Recent Achievements',
    'achievements.matura.title': 'Graduated with a perfect 1.0',
    'achievements.matura.text':
      'Graduated from secondary school (Matura) with distinction, achieving the top grade of 1.0.',
    'achievements.hansriegel.title': 'Hans Riegel Fachpreis',
    'achievements.hansriegel.text': 'Awarded the Hans Riegel Fachpreis for my final thesis.',
    'achievements.hansriegel.download': 'Download thesis (PDF)',
    'cv.heading': 'CV',
    'cv.item1': 'Spring 2026 – present: "Gap Year"',
    'cv.item2': '2018 – 2026: BRG Schloss Wagrain Vöcklabruck',
    'projects.heading': 'Projects',
    'projects.item1.title': 'Expanding my digital skillset',
    'projects.item1.text':
      'Building foundational skills in web development, coding, and mathematics for AI',
    'skills.heading': 'Skills',
    'contact.heading': 'Contact',
    'contact.name': 'Your name',
    'contact.email': 'Your email',
    'contact.message': 'Your message',
    'contact.send': 'Send',
    'contact.sending': 'Sending...',
    'contact.success': "Thanks for your message! I'll get back to you soon.",
    'contact.error': 'Something went wrong. Feel free to email me directly at tobmowagner@gmail.com.',
  },
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.de;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  try {
    localStorage.setItem('preferredLanguage', lang);
  } catch (e) {
    // localStorage evtl. nicht verfügbar - kein Problem, Auswahl gilt nur für diesen Besuch
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Sprache laden (gespeicherte Auswahl oder Deutsch als Standard)
  let savedLang = 'de';
  try {
    savedLang = localStorage.getItem('preferredLanguage') || 'de';
  } catch (e) {
    savedLang = 'de';
  }
  applyLanguage(savedLang);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  // Mobiles Hamburger-Menü
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

      const currentLang = document.documentElement.lang === 'en' ? 'en' : 'de';
      const t = translations[currentLang];

      const submitButton = contactForm.querySelector('button[type="submit"]');
      const formData = new FormData(contactForm);

      submitButton.disabled = true;
      submitButton.textContent = t['contact.sending'];
      formStatus.textContent = '';
      formStatus.className = 'form-status';

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });

        if (response.ok) {
          formStatus.textContent = t['contact.success'];
          formStatus.classList.add('success');
          contactForm.reset();
        } else {
          throw new Error('Formspree hat einen Fehler zurückgegeben.');
        }
      } catch (error) {
        formStatus.textContent = t['contact.error'];
        formStatus.classList.add('error');
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = t['contact.send'];
      }
    });
  }
});