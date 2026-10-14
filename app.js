const routeConfig = {
  "/": { page: "home", title: "SAON | Ley 21.719" },
  "/metodologia": { page: "metodologia", title: "Metodología | SAON" },
  "/entregables": { page: "entregables", title: "Entregables | SAON" },
  "/recursos": { page: "recursos", title: "Recursos | SAON" },
  "/politicas": { page: "politicas", title: "Políticas | SAON" },
  "/politicas.html": { page: "politicas", title: "Políticas | SAON" },
};

const contactSubjects = {
  home: "Sesi%C3%B3n%20ejecutiva%20Ley%2021.719",
  metodologia: "Metodolog%C3%ADa%20SAON%20Ley%2021.719",
  entregables: "Entregables%20Modelo%20de%20Prevenci%C3%B3n",
  recursos: "Recursos%20y%20preparaci%C3%B3n%20Ley%2021.719",
  politicas: "Consulta%20sobre%20pol%C3%ADticas%20SAON",
};

const closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 256 256"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path></svg>';
const pageCache = new Map();
const app = document.querySelector("#app");

function currentRoute() {
  const hashRoute = window.location.hash.startsWith("#/")
    ? window.location.hash.slice(1)
    : "";
  const route = hashRoute || window.location.pathname;
  return route.replace(/\/$/, "") || "/";
}

async function loadPage(page) {
  if (!pageCache.has(page)) {
    const response = await fetch(`/pages/${page}.html`);
    if (!response.ok) throw new Error(`No se pudo cargar la vista ${page}.`);
    pageCache.set(page, await response.text());
  }
  return pageCache.get(page);
}

function setMenuState(open) {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".mobile-menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  if (!header || !toggle || !menu) return;

  const menuIcon = toggle.dataset.menuIcon || toggle.innerHTML;
  toggle.dataset.menuIcon = menuIcon;
  header.classList.toggle("is-menu-open", open);
  menu.classList.toggle("is-open", open);
  menu.setAttribute("aria-hidden", String(!open));
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  toggle.innerHTML = open ? closeIcon : menuIcon;
}

function scrollToContact() {
  setMenuState(false);
  document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
}

function wirePage(page) {
  const toggle = document.querySelector(".mobile-menu-toggle");
  toggle?.addEventListener("click", () => {
    setMenuState(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.querySelector(".wordmark")?.addEventListener("click", () => setMenuState(false));
  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });
  document.querySelector(".desktop-contact")?.addEventListener("click", scrollToContact);
  document.querySelector(".mobile-contact")?.addEventListener("click", scrollToContact);

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      setMenuState(false);
    });
  });

  const primaryContact = document.querySelector(".hero .button-primary");
  primaryContact?.addEventListener("click", scrollToContact);

  const mailButton = document.querySelector("#contacto .button-light");
  mailButton?.addEventListener("click", () => {
    const email = page === "politicas" ? "cruminaus@saon.cl" : "contacto@saon.cl";
    window.location.href = `mailto:${email}?subject=${contactSubjects[page]}`;
  });
}

async function render() {
  const config = routeConfig[currentRoute()] || routeConfig["/"];
  document.title = config.title;

  try {
    app.innerHTML = await loadPage(config.page);
    wirePage(config.page);
  } catch (error) {
    console.error(error);
    app.innerHTML = '<main class="section-shell"><p>No fue posible cargar el contenido.</p></main>';
  }
}

window.addEventListener("hashchange", render);
window.addEventListener("popstate", render);
render();
