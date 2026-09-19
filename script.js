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
      'Im Frühjahr 2026 habe ich meine Matura abgeschlossen und hätte danach eigentlich vor gehabt, meinen Zivildienst zu beginnen. Da ich aber kurzfristig für untauglich (Knieprobleme) erklärt wurde, bin ich in eine Art "Gap Year" gezwungen worden. Im Moment nutze ich die gewonnene Zeit, um mein IT Skillset auszubauen. Ich komme von einem stark naturwissenschaftlich orientierten Hintergrund und möchte mich langfristig auf die Schnittstelle zwischen moderner Technologie und Naturwissenschaften konzentrieren (Stichwort: KI bei der Proteinmodellierung). Ab nächstem Jahr werde ich dafür auch mit einem Studium beginnen (CSE an der ETH oder Bioinformatik an der TUM). Bis dahin würde ich mich sehr über Möglichkeiten für (unbezahlte) Praktika freuen, die ich dann gegebenenfalls auch während des Studiums weiterführen kann (nutzen Sie gerne das Kontaktformular am Ende der Seite!!)',
    'achievements.heading': 'Aktuelle Erfolge',
    'achievements.matura.title': 'Matura mit 1,0',
    'achievements.matura.text': 'Abschluss der Matura mit ausgezeichnetem Erfolg (Note 1,0).',
    'achievements.hansriegel.title': 'Hans Riegel Fachpreis',
    'achievements.hansriegel.text':
      'Auszeichnung für meine Abschlussarbeit mit dem Hans Riegel Fachpreis.',
    'achievements.hansriegel.download': 'Abschlussarbeit als PDF herunterladen',
    'achievements.youngscience.title': '3. Platz Young Science - Jugend innovativ',
    'achievements.youngscience.text':
      'Die steigende Antibiotikaresistenz von Bakterien ist eine der größten Herausforderungen der aktuellen Medizin. In einem Wahlpflichtfach hat unser Team mit alternativen Mitteln (zB. Pechsalbe) und naturwissenschaftlichen Methoden (zB. Agardiffusionstest) nach Lösungen gesucht.',
    'cv.heading': 'Lebenslauf',
    'cv.item1': 'Frühjahr 2026 – heute: "Gap Year"',
    'cv.item2': '2018 – 2026: BRG Schloss Wagrain Vöcklabruck',
    'projects.heading': 'Projekte',
    'projects.item1.title': 'Coding Grundlagen',
    'projects.item1.text':
      'Auch wenn ich kein reiner Softwareentwickler sein möchte, halte ich gewisse Grundlagen für essenziell. Im Moment nutze ich die Harvard online Kurse CS50P und CS50x um einen Überblick für Python bzw. generell Computer Science zu bekommen.',
    'projects.item2.title': 'Künstliche Intelligenz in der Entwicklung',
    'projects.item2.text':
      'Um ein fundamentales Verständnis für die Funktionsweise von KI aufzubauen, besuche ich ab 1. Oktober Vorlesungen des Bachelors Artificial Intelligence an der JKU.',
    'projects.item3.title': 'Künstliche Intelligenz als Anwender',
    'projects.item3.text':
      'Künstliche Intelligenz zu verstehen ist die eine Sache, sie effektiv anzuwenden die andere. Im Moment nutze ich einen Hostinger Server, um mit einem Hermes Agenten zu experimentieren. In naher Zukunft will ich mir auch Openclaw und n8n nochmal genauer ansehen.',
    'skills.heading': 'Fähigkeiten',
    'skills.item1': 'Public Speaking',
    'skills.item2': 'Naturwissenschaften (fundiertes Wissen aufgrund Schwerpunkt in der Schule)',
    'skills.item3': 'Hoffentlich bald: Naturwissenschaften x KI',
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
      'In spring 2026 I finished secondary school (Matura) and had actually planned to start my civilian service afterwards. Since I was unexpectedly declared unfit for it (knee problems), I ended up in a kind of "gap year" instead. Right now I\'m using this time to build up my IT skillset. I come from a strongly science-oriented background and want to focus long-term on the intersection of modern technology and the natural sciences (keyword: AI in protein modeling). Starting next year I\'ll begin a degree in this direction (CSE at ETH or Bioinformatics at TUM). Until then, I\'d be very happy about opportunities for (unpaid) internships that I could potentially continue alongside my studies (feel free to use the contact form at the bottom of the page!!)',
    'achievements.heading': 'Recent Achievements',
    'achievements.matura.title': 'Graduated with a perfect 1.0',
    'achievements.matura.text':
      'Graduated from secondary school (Matura) with distinction, achieving the top grade of 1.0.',
    'achievements.hansriegel.title': 'Hans Riegel Fachpreis',
    'achievements.hansriegel.text': 'Awarded the Hans Riegel Fachpreis for my final thesis.',
    'achievements.hansriegel.download': 'Download thesis (PDF)',
    'achievements.youngscience.title': '3rd place Young Science - Jugend innovativ',
    'achievements.youngscience.text':
      "Rising antibiotic resistance in bacteria is one of the biggest challenges facing modern medicine. In an elective course, our team searched for solutions using alternative remedies (e.g. pitch ointment) and scientific methods (e.g. agar diffusion tests).",
    'cv.heading': 'CV',
    'cv.item1': 'Spring 2026 – present: "Gap Year"',
    'cv.item2': '2018 – 2026: BRG Schloss Wagrain Vöcklabruck',
    'projects.heading': 'Projects',
    'projects.item1.title': 'Coding fundamentals',
    'projects.item1.text':
      "Even though I don't want to become a pure software developer, I consider certain fundamentals essential. Right now I'm using Harvard's online courses CS50P and CS50x to get an overview of Python and computer science in general.",
    'projects.item2.title': 'AI in development',
    'projects.item2.text':
      "To build a fundamental understanding of how AI works, I'll be attending lectures from the Artificial Intelligence bachelor's program at JKU starting October 1st.",
    'projects.item3.title': 'AI as a user',
    'projects.item3.text':
      "Understanding artificial intelligence is one thing, using it effectively is another. Right now I'm using a Hostinger server to experiment with a Hermes agent. In the near future I also want to take a closer look at Openclaw and n8n.",
    'skills.heading': 'Skills',
    'skills.item1': 'Public speaking',
    'skills.item2': 'Natural sciences (solid knowledge from my school specialization)',
    'skills.item3': 'Hopefully soon: natural sciences x AI',
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