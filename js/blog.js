/* Renders the blog index from window.POSTS (js/posts.js). */
(function () {
  var mount = document.getElementById("post-list");
  if (!mount) return;
  var posts = (window.POSTS || []).slice().sort(function (a, b) {
    return b.date.localeCompare(a.date); // newest first
  });

  if (!posts.length) {
    mount.outerHTML = '<p class="empty-note">No posts yet — check back soon!</p>';
    return;
  }

  function pretty(d) {
    var parts = d.split("-");
    var date = new Date(parts[0], parts[1] - 1, parts[2]);
    return date.toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric"
    });
  }

  mount.innerHTML = posts.map(function (p) {
    return '<li class="post-item">' +
      '<span class="date">' + pretty(p.date) + "</span>" +
      '<h3><a href="' + p.file + '">' + p.title + "</a></h3>" +
      "<p>" + p.excerpt + "</p>" +
    "</li>";
  }).join("");
})();
