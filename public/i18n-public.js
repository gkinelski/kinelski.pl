(() => {
  const supported = ['pl', 'en', 'de', 'cs', 'fr', 'uk', 'it'];
  const labels = { pl: 'PL', en: 'EN', de: 'DE', cs: 'CS', fr: 'FR', uk: 'UA', it: 'IT' };
  const googleLanguages = supported.join(',');

  const getStoredLanguage = () => {
    const stored = localStorage.getItem('siteLanguage');
    if (stored && supported.includes(stored)) return stored;
    const browser = String(navigator.language || 'pl').slice(0, 2).toLowerCase();
    return supported.includes(browser) ? browser : 'pl';
  };

  const cookieDomains = () => {
    const host = location.hostname;
    const result = [''];
    if (host && host !== 'localhost' && host.includes('.')) result.push(`.${host.replace(/^www\./, '')}`);
    return result;
  };

  const writeGoogleCookie = (language) => {
    const value = language === 'pl' ? '' : `/pl/${language}`;
    const expires = language === 'pl' ? ';expires=Thu, 01 Jan 1970 00:00:00 GMT' : '';
    cookieDomains().forEach((domain) => {
      const domainPart = domain ? `;domain=${domain}` : '';
      document.cookie = `googtrans=${value};path=/${domainPart};SameSite=Lax${expires}`;
    });
  };

  const updateControls = (language) => {
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
    document.querySelectorAll('[data-language-code]').forEach((node) => {
      node.textContent = labels[language] || language.toUpperCase();
    });
  };

  const loadGoogleTranslator = () => {
    if (document.querySelector('[data-google-translate-script]')) return;
    let host = document.getElementById('google_translate_element');
    if (!host) {
      host = document.createElement('div');
      host.id = 'google_translate_element';
      host.className = 'google-translate-element notranslate';
      host.setAttribute('translate', 'no');
      host.setAttribute('aria-hidden', 'true');
      document.body.appendChild(host);
    }
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;
      new window.google.translate.TranslateElement({
        pageLanguage: 'pl',
        includedLanguages: googleLanguages,
        autoDisplay: false,
        multilanguagePage: true
      }, 'google_translate_element');
    };
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.dataset.googleTranslateScript = 'true';
    document.head.appendChild(script);
  };

  const chooseLanguage = (language) => {
    if (!supported.includes(language)) language = 'pl';
    localStorage.setItem('siteLanguage', language);
    writeGoogleCookie(language);
    updateControls(language);
    location.reload();
  };

  const initSwitcher = (root) => {
    const toggle = root.querySelector('[data-language-toggle]');
    const menu = root.querySelector('[data-language-menu]');
    toggle?.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const willOpen = menu?.hidden ?? false;
      document.querySelectorAll('[data-language-menu]').forEach((other) => { other.hidden = true; });
      if (menu) menu.hidden = !willOpen;
      toggle.setAttribute('aria-expanded', String(willOpen));
    });
    root.querySelectorAll('[data-language]').forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        chooseLanguage(button.dataset.language || 'pl');
      });
    });
  };

  const boot = () => {
    const language = getStoredLanguage();
    localStorage.setItem('siteLanguage', language);
    updateControls(language);
    document.querySelectorAll('[data-language-switcher]').forEach(initSwitcher);
    document.addEventListener('click', () => {
      document.querySelectorAll('[data-language-menu]').forEach((menu) => { menu.hidden = true; });
      document.querySelectorAll('[data-language-toggle]').forEach((toggle) => toggle.setAttribute('aria-expanded', 'false'));
    });
    if (language === 'pl') {
      writeGoogleCookie('pl');
    } else {
      writeGoogleCookie(language);
      loadGoogleTranslator();
    }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
