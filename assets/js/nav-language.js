(() => {
  const storageKey = "al-folio-nav-language";
  const navbar = document.getElementById("navbar");

  if (!navbar) {
    return;
  }

  const normalizeLanguage = (language) => (language === "zh-CN" ? "zh-CN" : "en");
  const rememberLanguage = (language) => {
    try {
      window.localStorage.setItem(storageKey, language);
    } catch (_) {
      // Language switching still works when storage is unavailable.
    }
  };
  const rememberedLanguage = () => {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (_) {
      return null;
    }
  };

  const applyLanguage = (language) => {
    const normalizedLanguage = normalizeLanguage(language);
    const labelAttribute = normalizedLanguage === "zh-CN" ? "data-nav-label-zh-cn" : "data-nav-label-en";

    navbar.querySelectorAll("[data-nav-label-text]").forEach((label) => {
      const translatedLabel = label.getAttribute(labelAttribute);
      if (translatedLabel) {
        label.textContent = translatedLabel;
      }
    });

    const homeUrl = normalizedLanguage === "zh-CN" ? navbar.dataset.navHomeZhCn : navbar.dataset.navHomeEn;
    navbar.querySelectorAll("[data-nav-home-link]").forEach((link) => {
      if (homeUrl) {
        link.setAttribute("href", homeUrl);
      }
    });

    navbar.querySelectorAll("[data-nav-url-en], [data-nav-url-zh-cn]").forEach((link) => {
      const localizedUrl = normalizedLanguage === "zh-CN" ? link.getAttribute("data-nav-url-zh-cn") : link.getAttribute("data-nav-url-en");
      if (localizedUrl) {
        link.setAttribute("href", localizedUrl);
      }
    });

    navbar.querySelectorAll("[data-nav-language-option]").forEach((option) => {
      const isActive = option.dataset.navLanguageOption === normalizedLanguage;
      option.classList.toggle("active", isActive);
      if (isActive) {
        option.setAttribute("aria-current", "true");
      } else {
        option.removeAttribute("aria-current");
      }
    });

    navbar.dataset.navLanguageCurrent = normalizedLanguage;
    rememberLanguage(normalizedLanguage);
  };

  const defaultLanguage = normalizeLanguage(navbar.dataset.navLanguageDefault);
  const languageIsFixedByPage = navbar.dataset.navLanguageFixed === "true";
  const initialLanguage = languageIsFixedByPage ? defaultLanguage : normalizeLanguage(rememberedLanguage() || defaultLanguage);
  applyLanguage(initialLanguage);

  navbar.querySelectorAll("[data-nav-language-option]").forEach((option) => {
    option.addEventListener("click", (event) => {
      const selectedLanguage = normalizeLanguage(option.dataset.navLanguageOption);
      rememberLanguage(selectedLanguage);

      if (option.dataset.navLanguageRoute === "true") {
        return;
      }

      event.preventDefault();
      applyLanguage(selectedLanguage);

      const dropdown = option.closest(".dropdown");
      dropdown?.classList.remove("show");
      dropdown?.querySelector(".dropdown-menu")?.classList.remove("show");
      dropdown?.querySelector("[data-nav-dropdown-toggle]")?.setAttribute("aria-expanded", "false");
    });
  });
})();
