/* Shared banner + footer. Edit the nav in ONE place here and it
   updates on every page. Pages set <body data-page="about"> etc.
   so the correct link is highlighted. */
(function () {
  var page = document.body.getAttribute("data-page") || "";
  // Depth prefix so links work from /posts/ subfolder too.
  var base = document.body.getAttribute("data-base") || "";

  var links = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "about.html", label: "About", key: "about" },
    { href: "blog.html", label: "Blog", key: "blog" },
    { href: "projects.html", label: "Projects", key: "projects" }
  ];

  var nav = links.map(function (l) {
    var active = l.key === page ? " class=\"active\"" : "";
    return '<a href="' + base + l.href + '"' + active + ">" + l.label + "</a>";
  }).join("");

  var header =
    '<a class="skip-link" href="#main-content">Skip to main content</a>' +
    '<header class="site-header"><nav class="nav">' +
      '<a class="brand" href="' + base + 'index.html">' +
        '<span class="dot"></span>Rachel Kaur' +
      "</a>" +
      '<div class="nav-links">' + nav + "</div>" +
    "</nav></header>";

  // Visit count lives in this browser only — no server, nothing sent
  // anywhere. One count per browsing session, so clicking around the
  // site doesn't inflate it. Storage throws in some private modes;
  // then we just leave the counter out.
  function visitCount() {
    try {
      var n = parseInt(localStorage.getItem("rk-visits"), 10);
      if (!(n >= 0)) n = 0;
      if (!sessionStorage.getItem("rk-visit-counted")) {
        n += 1;
        localStorage.setItem("rk-visits", String(n));
        sessionStorage.setItem("rk-visit-counted", "1");
      }
      return n;
    } catch (e) {
      return 0;
    }
  }

  var visits = visitCount();
  var counter = "";
  if (visits > 0) {
    var padded = String(Math.min(visits, 999999));
    while (padded.length < 6) padded = "0" + padded;
    var digits = padded.split("").map(function (d) {
      return '<span class="digit">' + d + "</span>";
    }).join("");
    counter =
      '<span class="visit-counter" title="Counted in your browser only.">' +
        '<span class="visit-label">Your visit</span>' +
        '<span class="odometer">' + digits + "</span>" +
      "</span>";
  }

  var year = new Date().getFullYear();
  var footer =
    '<footer class="site-footer"><div class="wrap">' +
      "<span>© " + year + " Rachel Kaur · Made in Upstate New York</span>" +
      counter +
      '<span class="footer-dots"><span class="t"></span>' +
        '<span class="l"></span><span class="f"></span></span>' +
    "</div></footer>";

  var h = document.getElementById("site-header");
  var f = document.getElementById("site-footer");
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = footer;

  // Give the skip link a target. tabindex -1 lets it receive focus
  // without becoming a tab stop itself.
  var main = document.querySelector("main");
  if (main && !main.id) {
    main.id = "main-content";
    main.setAttribute("tabindex", "-1");
  }

  // Move focus into main explicitly on activation. Fragment navigation
  // alone doesn't reliably move keyboard focus across browsers, so the
  // skip link would scroll but leave focus in the header without this.
  var skip = document.querySelector(".skip-link");
  if (skip && main) {
    skip.addEventListener("click", function (e) {
      e.preventDefault();
      main.focus();
      main.scrollIntoView();
      history.replaceState(null, "", "#main-content");
    });
  }
})();
