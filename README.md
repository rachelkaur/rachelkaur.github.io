# rachelkaur.com

My personal website — a plain, static HTML/CSS site hosted on GitHub Pages.
No build step, no frameworks. Just edit the files and push.

Live at **https://www.rachelkaur.com**

## Structure

```
index.html        Landing page
about.html        About me + photo
blog.html         Blog index (auto-generated from js/posts.js)
projects.html     "Coming soon"
404.html          Not-found page
css/style.css     All styling + the color palette
js/site.js        The shared banner + footer + visit counter (edit nav in ONE place)
js/posts.js       The list of blog posts  <-- add posts here
js/blog.js        Renders the blog index
posts/            One HTML file per blog post
  _template.html  Copy this to start a new post
images/           Photos and artwork
CNAME             Custom domain (www.rachelkaur.com)
```

## ✍️ How to add a blog post

1. **Copy the template:**
   `posts/_template.html` → `posts/my-post-name.html`
2. **Edit the new file** — fill in the `<title>`, the date, the heading,
   and write your post in the body (look for the `▼▼▼ EDIT ▼▼▼` markers).
3. **Add it to the list** in `js/posts.js` — copy the commented example
   at the top of the array:
   ```js
   {
     title: "My post name",
     date: "2026-08-01",              // YYYY-MM-DD, controls the order
     file: "posts/my-post-name.html",
     excerpt: "One or two sentences shown on the blog list."
   }
   ```
4. **Commit and push.** The blog page updates itself — newest post first.

## 🎨 Changing colors or fonts

All colors live at the top of `css/style.css` under `:root`
(terracotta, lime green, fuchsia). Change them there once.

## 🔢 The visit counter

The little odometer in the footer counts visits **in each visitor's own
browser** (localStorage) — one count per browsing session, so clicking
around the site doesn't run it up. There's no server and no third-party
service involved, which means nothing is sent anywhere and nothing can
break from the outside. The flip side: it's not a site-wide total, so a
first-time visitor always sees `000001`. It's a personal hello, not a
stat. The digits and the counting live in `js/site.js`; the odometer
styling is under "Visitor counter" in `css/style.css`.

## Nav / footer

The banner and footer are defined once in `js/site.js`, so changing a
nav link updates every page at the same time.
