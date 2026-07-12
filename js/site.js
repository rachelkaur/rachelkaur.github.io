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
    '<header class="site-header"><nav class="nav">' +
      '<a class="brand" href="' + base + 'index.html">' +
        '<span class="dot"></span>Rachel Kaur' +
      "</a>" +
      '<div class="nav-links">' + nav + "</div>" +
    "</nav></header>";

  var year = new Date().getFullYear();
  var footer =
    '<footer class="site-footer"><div class="wrap">' +
      "<span>© " + year + " Rachel Kaur · Made in Upstate New York</span>" +
      '<span class="footer-dots"><span class="t"></span>' +
        '<span class="l"></span><span class="f"></span></span>' +
    "</div></footer>";

  var h = document.getElementById("site-header");
  var f = document.getElementById("site-footer");
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = footer;
})();
