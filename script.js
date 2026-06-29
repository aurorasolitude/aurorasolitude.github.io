(function () {
  const siteData = window.siteData || {};
  const languages = siteData.languages || {};
  const supportedLanguages = Object.keys(languages);
  const savedLanguage = localStorage.getItem("preferred-language");
  let currentLanguage = supportedLanguages.includes(savedLanguage)
    ? savedLanguage
    : siteData.defaultLanguage || "zh";

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = value || "";
    });
  }

  function localizedLabel(label) {
    if (typeof label === "string") {
      return label;
    }
    return label?.[currentLanguage] || label?.en || label?.zh || "";
  }

  function createLink(item, className) {
    const link = document.createElement("a");
    link.className = className;
    link.href = item.url;
    link.textContent = localizedLabel(item.label);
    if (!item.url.startsWith("mailto:") && !item.url.startsWith("#")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
    return link;
  }

  function renderAuthors(node, authors) {
    if (!Array.isArray(authors)) {
      node.textContent = authors || "";
      return;
    }

    const fragments = authors.map((author) => {
      const tagName = author.me ? "strong" : author.italic ? "em" : "span";
      const span = document.createElement(tagName);
      span.textContent = author.text || "";
      return span;
    });
    node.replaceChildren(...fragments);
  }

  function renderLabels(ui) {
    document.querySelectorAll("[data-label]").forEach((node) => {
      const key = node.dataset.label;
      node.textContent = ui[key] || "";
    });

    const toggle = document.getElementById("language-toggle");
    toggle.textContent = ui.languageToggle || "EN";
    toggle.setAttribute("aria-label", currentLanguage === "zh" ? "Switch to English" : "切换到中文");
  }

  function renderProfile(pageData, ui) {
    const profile = pageData.profile || {};
    const shared = siteData.shared || {};
    document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
    document.title = `${profile.name || "Academic Homepage"} | Academic Homepage`;

    setText('[data-field="name"]', profile.name);
    setText('[data-field="shortName"]', profile.shortName || profile.name);
    setText('[data-field="footerName"]', profile.name);
    setText('[data-field="title"]', profile.title);
    setText('[data-field="affiliation"]', profile.affiliation);
    setText('[data-field="bio"]', profile.bio);
    setText('[data-field="contactNote"]', profile.contactNote);

    const photo = document.getElementById("profile-photo");
    if (photo) {
      photo.src = shared.photo || "assets/avatar-placeholder.svg";
      photo.alt = `${profile.name || ""}${ui.photoAltSuffix || ""}`;
    }

    const interests = document.getElementById("research-interests");
    interests.replaceChildren(...(profile.interests || []).map((interest) => {
      const item = document.createElement("span");
      item.className = "tag";
      item.textContent = interest;
      return item;
    }));

    const profileLinks = (shared.links || []).map((link) => {
      const className = link.style === "primary" ? "button-link" : "button-link secondary";
      return createLink(link, className);
    });
    document.getElementById("profile-links").replaceChildren(...profileLinks);

    const contactLinks = (shared.links || []).map((link) => createLink(link, "button-link secondary"));
    document.getElementById("contact-links").replaceChildren(...contactLinks);
  }

  function renderTimeline(targetId, items) {
    const nodes = (items || []).map((item) => {
      const wrapper = document.createElement("article");
      wrapper.className = "timeline-item";
      const date = document.createElement("div");
      date.className = "item-date";
      date.textContent = item.date || "";

      const content = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = item.title || "";

      const metaText = [item.organization, item.location].filter(Boolean).join(" · ");
      const contentChildren = [title];
      if (metaText) {
        const meta = document.createElement("p");
        meta.className = "item-meta";
        meta.textContent = metaText;
        contentChildren.push(meta);
      }
      if (item.description) {
        const description = document.createElement("p");
        description.className = "item-description";
        description.textContent = item.description;
        contentChildren.push(description);
      }
      content.replaceChildren(...contentChildren);
      wrapper.replaceChildren(date, content);
      return wrapper;
    });
    document.getElementById(targetId).replaceChildren(...nodes);
  }

  function renderPublications(targetId, publications) {
    const nodes = (publications || []).map((publication) => {
      const article = document.createElement("article");
      article.className = "publication-item";

      const title = document.createElement("h3");
      title.textContent = publication.title || "";

      const authors = document.createElement("p");
      authors.className = "publication-authors";
      renderAuthors(authors, publication.authors);

      const meta = document.createElement("p");
      meta.className = "publication-meta";
      meta.textContent = [publication.venue, publication.status].filter(Boolean).join(" · ");

      const links = document.createElement("div");
      links.className = "publication-links";
      links.replaceChildren(...(publication.links || []).map((link) => createLink(link, "text-link")));

      const children = [title, authors, meta];
      if (publication.abstract) {
        const abstract = document.createElement("p");
        abstract.className = "publication-abstract";
        abstract.textContent = publication.abstract;
        children.push(abstract);
      }
      children.push(links);
      article.replaceChildren(...children);
      return article;
    });
    document.getElementById(targetId).replaceChildren(...nodes);
  }

  function renderAwards(awards) {
    const nodes = (awards || []).map((award) => {
      const article = document.createElement("article");
      article.className = "award-item";
      const year = document.createElement("div");
      year.className = "award-year";
      year.textContent = award.year || "";

      const title = document.createElement("h3");
      title.textContent = award.title || "";

      const meta = document.createElement("p");
      meta.className = "item-meta";
      meta.textContent = award.organization || "";

      const children = [year, title, meta];
      if (award.description) {
        const description = document.createElement("p");
        description.className = "item-description";
        description.textContent = award.description;
        children.push(description);
      }
      article.replaceChildren(...children);
      return article;
    });
    document.getElementById("award-list").replaceChildren(...nodes);
  }

  function renderPage() {
    const pageData = languages[currentLanguage] || languages.zh || {};
    const ui = siteData.ui?.[currentLanguage] || {};

    renderLabels(ui);
    renderProfile(pageData, ui);
    renderTimeline("news-list", pageData.news);
    renderTimeline("education-list", pageData.education);
    renderTimeline("experience-list", pageData.experience);
    renderPublications("conference-paper-list", pageData.conferencePapers);
    renderPublications("technical-report-list", pageData.technicalReports);
    renderAwards(pageData.awards);
    document.getElementById("last-updated").textContent = siteData.lastUpdated || new Date().toISOString().slice(0, 10);
  }

  document.getElementById("language-toggle").addEventListener("click", () => {
    currentLanguage = currentLanguage === "zh" ? "en" : "zh";
    localStorage.setItem("preferred-language", currentLanguage);
    renderPage();
  });

  renderPage();
})();
