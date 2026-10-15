const siteNavigation = document.querySelector("#site-navigation");
const navigationLinks = [...document.querySelectorAll('.site-nav .nav-link[href^="#"]')];
const sections = [...document.querySelectorAll("main section[id]")];
const year = document.querySelector("#current-year");
const themeToggle = document.querySelector(".theme-toggle");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (themeToggle) {
  const updateTheme = (theme) => {
    const isLight = theme === "light";
    const nextTheme = isLight ? "dark" : "light";

    document.documentElement.dataset.theme = theme;
    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
    themeToggle.setAttribute("title", `Switch to ${nextTheme} mode`);

    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", isLight ? "#f8f6fc" : "#100d1b");
    }
  };

  updateTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    updateTheme(nextTheme);
  });
}

if (siteNavigation && window.bootstrap?.Collapse) {
  siteNavigation.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      window.bootstrap.Collapse.getInstance(siteNavigation)?.hide();
    });
  });
}

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .timeline-item, .education-card, .learning-card, .skill-group, .more-card, .contact-content",
  );

  document.documentElement.classList.add("reveal-ready");
  revealElements.forEach((element) => element.classList.add("reveal"));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
}

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navigationLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });

  sections.forEach((section) => sectionObserver.observe(section));
}
