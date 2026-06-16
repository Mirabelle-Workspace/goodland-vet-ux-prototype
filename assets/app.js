/* Good Land Veterinary Clinic — prototype chrome + display modes
   Renders shared header/footer/mobile bar and wires the
   dark / accessibility / low-carbon toggles. Demo only. */
(function () {
  var d = document.documentElement;
  var PHONE = "414-312-4978", TEL = "tel:+14143124978";
  var EMAIL = "goodlandvetclinic@gmail.com", MAILTO = "mailto:goodlandvetclinic@gmail.com";
  var DEST = "https://www.google.com/maps/dir/?api=1&destination=6854+N+Santa+Monica+Blvd+Fox+Point+WI+53217";

  var NAV = [
    { href: "index.html", label: "Home", page: "home" },
    { href: "our-team.html", label: "Our Team", page: "team" },
    { href: "services.html", label: "Services", page: "services" },
    { href: "prescriptions.html", label: "Prescriptions", page: "rx" },
    { href: "new-clients.html", label: "New Clients", page: "new", isNew: true },
    { href: "get-in-touch.html", label: "Contact", page: "contact" }
  ];
  var current = document.body.getAttribute("data-page") || "home";

  /* ---- Icons ---- */
  var I = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    access: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4" r="1.6"/><path d="M5 8h14M12 8v6m0 0-3 6m3-6 3 6"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-6 7-9 16-9 0 9-3 16-9 16z"/><path d="M4 20c2-4 5-7 9-9"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    note: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2 0-3 1-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14v-1.5c0-.6.4-1 1-1z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    logo: '<svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" fill="#1f2d54"/><path d="M6 20a10 9 0 0 1 20 0z" fill="#e0a32c"/><circle cx="16" cy="12" r="2.4" fill="#fff"/><circle cx="11.5" cy="13.5" r="1.7" fill="#fff"/><circle cx="20.5" cy="13.5" r="1.7" fill="#fff"/><circle cx="13.6" cy="9.6" r="1.5" fill="#fff"/><circle cx="18.4" cy="9.6" r="1.5" fill="#fff"/><path d="M6 23h20M8 25.5h16" stroke="#3d6fb0" stroke-width="1.4" stroke-linecap="round"/></svg>'
  };

  /* ---- Header ---- */
  function navLinks() {
    return NAV.map(function (n) {
      var cur = n.page === current ? ' aria-current="page"' : "";
      var tag = "";
      return '<a href="' + n.href + '"' + cur + ">" + n.label + tag + "</a>";
    }).join("");
  }

  function renderHeader(host) {
    host.innerHTML =
      '<div class="util-bar"><div class="wrap">' +
        '<span class="label">Display options (demo):</span>' +
        '<button class="toggle" id="t-notes" type="button" aria-pressed="false">' + I.note + ' Audit notes <span class="state">Off</span></button>' +
        '<button class="toggle" id="t-dark" type="button" aria-pressed="false">' + I.moon + ' Dark <span class="state">Off</span></button>' +
        '<button class="toggle" id="t-a11y" type="button" aria-pressed="false">' + I.access + ' Accessibility <span class="state">Off</span></button>' +
        '<button class="toggle" id="t-carbon" type="button" aria-pressed="false">' + I.leaf + ' Low-carbon <span class="state">Off</span></button>' +
      '</div></div>' +
      '<div class="demo-banner"><strong>Prototype</strong> with audit recommendations applied. Gold <strong>UPDATED</strong> tags mark additions. Use the toggles above for dark / accessibility / low-carbon modes.</div>' +
      '<header class="site"><div class="wrap bar">' +
        '<a class="brand" href="index.html" aria-label="Good Land Veterinary Clinic home">' +
          '<span class="logo" aria-hidden="true">' + I.logo + '</span>' +
          '<span class="name"><b>Good Land</b><span>Veterinary Clinic</span></span>' +
        '</a>' +
        '<nav class="primary" aria-label="Primary">' + navLinks() +
          '<a class="btn btn-gold nav-cta" href="get-in-touch.html#request">Request an Appointment</a>' +
        '</nav>' +
        '<button class="hamburger" id="navToggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNav">' + I.menu + '</button>' +
      '</div></header>' +
      '<nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation" hidden><div class="wrap">' + navLinks() +
        '<a class="btn btn-gold" href="get-in-touch.html#request">Request an Appointment</a>' +
      '</div></nav>';
  }

  /* ---- Footer + mobile bar ---- */
  function renderFooter(host) {
    host.innerHTML =
      '<footer class="site"><div class="wrap foot">' +
        '<div class="who"><b>Good Land Veterinary Clinic</b>' +
          '<div>6854 N Santa Monica Blvd, Fox Point, WI 53217 &middot; <a href="' + TEL + '">' + PHONE + '</a> &middot; <a href="' + MAILTO + '">' + EMAIL + '</a></div>' +
          '<div class="foot-links"><a href="faq.html">FAQ</a> &middot; <a href="new-clients.html">New Clients</a> &middot; <a href="get-in-touch.html">Contact</a></div>' +
        '</div>' +
        '<div class="social">' +
          '<a href="' + MAILTO + '" aria-label="Email the clinic">' + I.mail + '</a>' +
          '<a href="https://facebook.com/GoodLandVetClinic" target="_blank" rel="noopener" aria-label="Facebook">' + I.fb + '</a>' +
          '<a href="https://instagram.com/goodlandvet" target="_blank" rel="noopener" aria-label="Instagram">' + I.ig + '</a>' +
        '</div>' +
        '<div class="fearfree">FEAR FREE<span>Certified Professional</span></div>' +
      '</div></footer>' +
      '<div class="notes-banner"><strong>Audit notes on:</strong> highlighted items explain what changed and why. Toggle off for the clean client view.</div>' +
      '<div class="carbon-banner">Low-carbon mode on: map and heavy media are not loaded, animations are off, and a low-energy dark palette is used to reduce data and power.</div>' +
      '<div class="mobile-bar" aria-label="Quick actions"><div class="row">' +
        '<a class="mb-call" href="' + TEL + '" aria-label="Call the clinic">' + I.phone + 'Call</a>' +
        '<a class="mb-email" href="' + MAILTO + '" aria-label="Email the clinic">' + I.mail + 'Email</a>' +
        '<a class="mb-appt" href="get-in-touch.html#request" aria-label="Request an appointment">' + I.cal + 'Appointment</a>' +
      '</div></div>';
  }

  /* ---- Low-carbon: only load map iframes when carbon is off ---- */
  function applyMedia() {
    var carbon = d.dataset.carbon === "on";
    document.querySelectorAll(".heavy-media iframe[data-src]").forEach(function (f) {
      if (carbon) { f.removeAttribute("src"); }
      else if (!f.getAttribute("src")) { f.setAttribute("src", f.getAttribute("data-src")); }
    });
  }

  /* ---- Toggle wiring ---- */
  function setupToggle(id, key, attr) {
    var btn = document.getElementById(id);
    if (!btn) return;
    function paint() {
      var on = d.dataset[attr] === "on" || (attr === "theme" && d.dataset.theme === "dark");
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      var s = btn.querySelector(".state"); if (s) s.textContent = on ? "On" : "Off";
    }
    btn.addEventListener("click", function () {
      if (attr === "theme") {
        var next = d.dataset.theme === "dark" ? "light" : "dark";
        d.dataset.theme = next; try { localStorage.gl_theme = next; } catch (e) {}
      } else {
        var next2 = d.dataset[attr] === "on" ? "off" : "on";
        d.dataset[attr] = next2; try { localStorage[key] = next2; } catch (e) {}
        if (attr === "carbon") applyMedia();
        if (attr === "notes") applyNotes();
      }
      paint();
    });
    paint();
  }

  /* ---- Audit notes: inject explanation cards next to annotated elements ---- */
  function applyNotes() {
    document.querySelectorAll(".audit-note").forEach(function (c) { c.remove(); });
    if (d.dataset.notes !== "on") return;
    var n = 0;
    document.querySelectorAll("[data-note-title]").forEach(function (el) {
      n++;
      var pri = el.getAttribute("data-note-pri") || "";
      var priHtml = pri ? ' <span class="an-pri an-' + pri.toLowerCase() + '">' + pri + "</span>" : "";
      var card = document.createElement("div");
      card.className = "audit-note";
      card.innerHTML =
        '<span class="an-num" aria-hidden="true">' + n + "</span>" +
        '<div class="an-body"><p class="an-title">' + el.getAttribute("data-note-title") + priHtml + "</p>" +
        '<p class="an-why">' + el.getAttribute("data-note-why") + "</p></div>";
      el.insertAdjacentElement("afterend", card);
    });
  }

  /* ---- Mobile menu (hamburger) ---- */
  function setupMenu() {
    var ham = document.getElementById("navToggle");
    var mob = document.getElementById("mobileNav");
    if (!ham || !mob) return;
    function setOpen(open) {
      ham.setAttribute("aria-expanded", open ? "true" : "false");
      ham.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      ham.innerHTML = open ? I.close : I.menu;
      mob.hidden = !open;
    }
    ham.addEventListener("click", function () { setOpen(ham.getAttribute("aria-expanded") !== "true"); });
    mob.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setOpen(false); }); });
  }

  function init() {
    var top = document.getElementById("site-header");
    var bot = document.getElementById("site-footer");
    if (top) renderHeader(top);
    if (bot) renderFooter(bot);
    try { d.dataset.notes = localStorage.gl_notes || "off"; } catch (e) { d.dataset.notes = "off"; }
    setupToggle("t-dark", "gl_theme", "theme");
    setupToggle("t-a11y", "gl_a11y", "a11y");
    setupToggle("t-carbon", "gl_carbon", "carbon");
    setupToggle("t-notes", "gl_notes", "notes");
    setupMenu();
    applyMedia();
    applyNotes();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
