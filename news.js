/* =====================================================================
   PM NEWS FEED  —  edit this file to post news. No other code changes.
   ---------------------------------------------------------------------
   • Entries show left → right in the order listed. Put the NEWEST FIRST.
     The first entry is shown as the larger lead card.
   • Copy one { ... } block, paste it at the top, change the text, save.
   • Images / videos go in assets/news/ (or any assets folder) and are
     referenced with a relative path like "assets/news/my-photo.jpg".

   Fields (only type, title and text are required):
     type    "video" | "press" | "release" | "post"   (sets the label)
     date    any text, e.g. "Feb 14, 2024"
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
    type: "video",
    date: "Mar 18, 2024",
    title: "Phenomenal: the official music video",
    text: "8 Ton Grams bring Phenomenal to life. Press play, then go save the single.",
    youtube: "https://www.youtube.com/watch?v=7n5GSWEJHmY",
    image: "assets/img/phenomenal-cover.jpg",
    link: { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=7n5GSWEJHmY" }
  },
  {
    type: "release",
    date: "Feb 14, 2024",
    title: "Phenomenal is out now",
    text: "The first single from 8 Ton Grams' debut EP Running Phenomenal. Save it, stream it, buy it.",
    image: "assets/img/phenomenal-cover.jpg",
    link: { label: "Go to PM Music", href: "#music" }
  },
  {
    type: "post",
    date: "Jul 31, 2021",
    title: "Pack Mentality Music joins Instagram",
    text: "The Pack is on Instagram. Follow @pack_mentality_music for new music, vinyl drops and everything the label is up to.",
    image: "assets/img/pm-spotlight-poster.jpg",
    link: { label: "Follow on Instagram", href: "https://www.instagram.com/pack_mentality_music" }
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
  instagramCount: 6,

  /* Playable record on PM Music. Put the song (or a preview clip) at this
     path and the record plays it, pitch-shifting and scratching as people
     spin it. Until the file exists, the record still spins with vinyl
     crackle and scratch sounds. MP3 or M4A both work. */
  recordAudio: "assets/audio/phenomenal.mp3"
};
