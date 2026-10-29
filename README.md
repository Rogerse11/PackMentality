# Pack Mentality Music website

Static site with no build step. Upload this whole folder to any host (Cloudflare Pages, Netlify, GitHub Pages, cPanel) and it runs.

```
index.html   the whole site (Home, PM Music, PM Artists views + footer)
news.js      PM News feed + mailing-list setting  <- the only file the owner edits
assets/      optimized images, sprites and video loops
```

## Views
The menu in the top-left switches between three views:
- `#home`: spotlight logo, label intro, contact links, PM News, footer
- `#music`: Phenomenal cover, release copy, HyperFollow link, Instagram follows
- `#artists`: 8 Ton Grams name plate, bio, parallax quote slides, Night Beach loops

## Posting to PM News (no developer needed)
1. Open `news.js` in any text editor.
2. Copy one `{ ... },` block and paste it at the **top** of the list. The newest post goes first.
3. Change the text. Put any new image or video in `assets/news/` and point to it, e.g. `image: "assets/news/show-flyer.jpg"`.
4. Save and re-upload `news.js` (plus any new media).

Card types: `video`, `press`, `release`, `post`. A `link` with `href: "#music"` or `"#artists"` jumps inside the site.

## Before launch
- **Video entry**: the placeholder uses a Night Beach clip. Swap in the owner's video (`video:` mp4 or `youtube:` link).
- **Press release**: drafted from the label's own copy. Replace `body` with the official text, or add `file: "assets/news/press-release.pdf"`.
- **Follow The Pack signup**: paste a form endpoint (Formspree, Mailchimp, ConvertKit) into `PM_CONFIG.signupEndpoint` in `news.js`. Until then, the form asks visitors to email contact@packmentalitymusic.com.
- The beach GIFs were converted to MP4 loops (about 25 MB down to 0.6 MB). They look the same and load far faster. The original GIFs are untouched in `8TG Band Art`.
