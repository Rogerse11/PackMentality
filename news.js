/* =====================================================================
   PM NEWS FEED  —  edit this file to post news. No other code changes.
   ---------------------------------------------------------------------
   • Entries show left → right in the order listed. Put the NEWEST FIRST.
   • Copy one { ... } block, paste it at the top, change the text, save.
   • Images / videos go in assets/news/ (or any assets folder) and are
     referenced with a relative path like "assets/news/my-photo.jpg".

   Fields (only type, title and text are required):
     type    "video" | "press" | "release" | "post"   (sets the label)
     date    any text, e.g. "Feb 9, 2024"
     title   headline
     text    1–3 sentence teaser shown on the card
     image   picture for the card
     video   .mp4 file to play on the card (muted, loops). Use "poster"
             for its still frame.
     youtube a full YouTube link. The card shows the video's thumbnail and
             plays it right on the card when clicked.
     link    { label: "Button text", href: "#music" or "https://..." }
             "#music" and "#artists" jump to those sections of the site.
     body    press release only: an array of paragraphs, shown in a
             reader window when "Read the release" is clicked
     file    press release only: optional PDF/DOC to link, e.g.
             "assets/news/press-release.pdf"
   ===================================================================== */

window.PM_NEWS = [
  {
    type: "release",
    date: "Feb 9, 2024",
    title: "Phenomenal is out now",
    text: "The first single from 8 Ton Grams' debut EP Running Phenomenal. Save it, stream it, buy it.",
    image: "assets/img/phenomenal-cover.jpg",
    link: { label: "Go to PM Music", href: "#music" }
  },
  {
    type: "video",
    date: "2024",
    title: "Phenomenal: the official music video",
    text: "8 Ton Grams bring Phenomenal to life. Press play, then go save the single.",
    youtube: "https://www.youtube.com/watch?v=7n5GSWEJHmY",
    image: "assets/img/phenomenal-cover.jpg",
    link: { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=7n5GSWEJHmY" }
  },
  {
    // DRAFT press release written from the label's own copy.
    // Replace "body" with the official text, or add "file" to link the PDF.
    type: "press",
    date: "Feb 2024",
    title: "Pack Mentality Music signs 8 Ton Grams as its first act",
    text: "The Flint and Detroit rap duo lead off the label's first release, the EP Running Phenomenal.",
    image: "assets/img/phenomenal-promocard.jpg",
    body: [
      "FOR IMMEDIATE RELEASE",
      "Pack Mentality Music, an independent record label committed to physical releases on vinyl as well as streaming, announces its first signing: the rap duo 8 Ton Grams. The duo's debut single \"Phenomenal\" arrives February 9, 2024 on all major streaming services, the first look at their debut EP \"Running Phenomenal.\"",
      "8 Ton Grams are 8tahn and GRAEME. Both embody the grit, grind and creativity that make indie hip hop so affecting, along with the light, magic and heart that come from a real life organ donation and a life saving friendship. Their story has been told in pieces across the duo's solo work (8tahn, GRAEME, No1s Ethan). As 8 Ton Grams, they are sharing it with their broadest audience yet.",
      "\"It sounds like they are on those hoverboards from Back To The Future, just passing out these big colorful balloons to everybody as they go,\" said KP, Creative Director of Pack Mentality Music. \"We said we wanted to make magic with PM. This is real life magic.\"",
      "Flint and Detroit still got something to say, and this is just a prelude. Fans can follow 8 Ton Grams and Pack Mentality Music on Instagram for limited edition EP pre-order updates, performance news and merchandise drops.",
      "Listen: distrokid.com/hyperfollow/8tongrams/phenomenal",
      "Press and artist inquiries: contact@packmentalitymusic.com"
    ]
  }
];

/* Mailing list. Paste a form endpoint (Formspree, Mailchimp, ConvertKit,
   etc.) between the quotes to turn on "Follow The Pack" signups. While it
   is empty, the form tells visitors to email the label instead. */
window.PM_CONFIG = {
  signupEndpoint: "",

  /* Instagram auto-feed. Paste a Behold JSON feed URL (behold.so, free
     for up to 6 posts) to add the latest @pack_mentality_music posts to
     PM News automatically, after the entries above. Leave it empty to
     show only the entries above. */
  instagramFeed: "",
  instagramCount: 6
};
