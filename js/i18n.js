/**
 * Internationalization (i18n) Engine for Edwin López's Portfolio
 * Loads translations dynamically from js/translations.json
 */
(function () {
  let currentLang = "es";
  let translations = null;

  async function loadTranslations() {
    try {
      const response = await fetch("js/translations.json");
      if (!response.ok) throw new Error("Could not load translations file");
      translations = await response.json();
      initLanguage();
    } catch (err) {
      console.warn("i18n fallback to embedded data or DOM content:", err);
    }
  }

  function getPreferredLanguage() {
    // 1. URL parameter (?lang=en or ?lang=es)
    const urlParams = new URLSearchParams(window.location.search);
    const paramLang = urlParams.get("lang");
    if (paramLang && (paramLang === "es" || paramLang === "en")) {
      return paramLang;
    }
    // 2. Local storage
    const saved = localStorage.getItem("portfolio_lang");
    if (saved && (saved === "es" || saved === "en")) {
      return saved;
    }
    // 3. Browser language
    if (navigator.language && navigator.language.startsWith("en")) {
      return "en";
    }
    return "es";
  }

  function applyLanguage(lang) {
    if (!translations || !translations[lang]) return;
    currentLang = lang;
    localStorage.setItem("portfolio_lang", lang);
    document.documentElement.lang = lang;

    const data = translations[lang];

    // Update text / innerHTML for elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (data[key] !== undefined) {
        el.innerHTML = data[key];
      }
    });

    // Update placeholders
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      if (data[key] !== undefined) {
        el.setAttribute("placeholder", data[key]);
      }
    });

    // Update titles / tooltips
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (data[key] !== undefined) {
        el.setAttribute("title", data[key]);
      }
    });

    // Update Toggle Buttons
    document.querySelectorAll(".lang-toggle-btn").forEach((btn) => {
      const targetLang = lang === "es" ? "EN" : "ES";
      const targetTitle = lang === "es" ? "Switch to English" : "Cambiar a Español";
      btn.innerHTML = `<i class="fas fa-globe me-1"></i> <span>${targetLang}</span>`;
      btn.setAttribute("title", targetTitle);
      btn.setAttribute("aria-label", targetTitle);
    });
  }

  function toggleLanguage() {
    const nextLang = currentLang === "es" ? "en" : "es";
    applyLanguage(nextLang);
  }

  function initLanguage() {
    currentLang = getPreferredLanguage();
    applyLanguage(currentLang);

    // Attach listeners to language toggle triggers
    document.querySelectorAll(".lang-toggle-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        toggleLanguage();
      });
    });
  }

  // Expose toggle globally if needed
  window.portfolioToggleLang = toggleLanguage;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadTranslations);
  } else {
    loadTranslations();
  }
})();
