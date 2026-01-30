const en = {

  hero: {
    title: "SWARALAYA: A Space for Classical Music Learners & Music Lovers",
    subtitle:
      "Indian classical music, vocal techniques, raga basics, practice routines, and my musical journey — all in one place.",
    explore: "Explore Featured Posts",
    about: "About Me",
  },

  nav: {
    home: "Home",
    about: "About",
    featured: "Featured",
    brand: "A Space for Classical Music",
  },

  footer: {
    text: "Thanks for visiting. New posts every week — keep learning, keep singing.",
  },

  featured: {
    title: "Featured Posts",
    teaser: "Short preview — click to read more.",
    read: "Read →",

    posts: [
      {
        title: "10 Easy Warm-ups Every Classical Singer Should Practice Daily",
        slug: "10-easy-warm-ups",
      },
      {
        title: "What Exactly Is a Raga? Explained in Simple Words",
        slug: "what-is-a-raga",
      },
      {
        title: "Difference Between Alankars & Sargam — Beginners Often Confuse This",
        slug: "alankars-vs-sargam",
      },
      {
        title: "How to Improve Breath Control — Real Techniques That Work",
        slug: "improve-breath-control",
      },
      {
        title: "Common Mistakes Students Make During Riyaz",
        slug: "common-mistakes-riyaz",
      },
    ],
  },

  posts: {

    "10-easy-warm-ups": {
      title: "10 Easy Warm-ups Every Classical Singer Should Practice Daily",

      content: `
A vocal warm-up prepares the muscles of the larynx, breathing mechanism, and resonators for optimal performance and prevents strain.

Below are 10 warm-ups every classical singer should practice daily:
      `,

      table: `
<table>
<tr><th>Category</th><th>Warm-up Exercise</th><th>Purpose</th></tr>
<tr><td>I. Breathing</td><td>1. Diaphragmatic Breathing</td><td>Engages the diaphragm.</td></tr>
<tr><td></td><td>2. Sustained S & Shh</td><td>Controls exhalation.</td></tr>
<tr><td></td><td>3. Breath Pulses</td><td>Strengthens core.</td></tr>
<tr><td>II. Vocal</td><td>4. Humming</td><td>Resonance.</td></tr>
<tr><td></td><td>5. Trills</td><td>Airflow.</td></tr>
<tr><td></td><td>6. Siren</td><td>Registers.</td></tr>
<tr><td>III. Pitch</td><td>7. Scales</td><td>Accuracy.</td></tr>
<tr><td></td><td>8. Arpeggios</td><td>Flexibility.</td></tr>
<tr><td></td><td>9. Vowels</td><td>Clarity.</td></tr>
<tr><td></td><td>10. Chromatic</td><td>Ear training.</td></tr>
</table>
      `,

      video: "https://www.youtube.com/embed/jLPRD7YYDT8",
    },

    "what-is-a-raga": {
      title: "What Exactly Is a Raga? Explained in Simple Words",

      content: `
A Raga is a melodic framework for improvisation in Indian Classical Music.

It evokes moods and emotions and has defined rules.
      `,

      video: "https://www.youtube.com/embed/nom-_EYjIrg",
    },

    "alankars-vs-sargam": {
      title: "Difference Between Alankars & Sargam",

      content: `
Beginners get confused because both use same notes.
      `,

      table: `
<table>
<tr><th>Feature</th><th>Sargam</th><th>Alankar</th></tr>
<tr><td>What</td><td>Solfege</td><td>Patterns</td></tr>
<tr><td>Purpose</td><td>Recognition</td><td>Agility</td></tr>
<tr><td>Example</td><td>Sa Re</td><td>Sa Re Ga</td></tr>
</table>
      `,

      video: "https://www.youtube.com/embed/JIfFMN6E9DA",
    },

    "improve-breath-control": {
      title: "How to Improve Breath Control",

      content: `
Breath control is foundation of singing.
      `,

      table: `
<table>
<tr><th>Technique</th><th>Exercise</th></tr>
<tr><td>Diaphragmatic</td><td>Deep breathing</td></tr>
<tr><td>Hissing</td><td>Sssss</td></tr>
<tr><td>Pursed Lip</td><td>4-8</td></tr>
<tr><td>Panting</td><td>Rapid</td></tr>
</table>
      `,

      video: "https://www.youtube.com/embed/KcldYMDk-I4",
    },

    "common-mistakes-riyaz": {
      title: "Common Mistakes Students Make During Riyaz",

      content: `
Riyaz means disciplined daily practice.
      `,

      table: `
<table>
<tr><th>Mistake</th><th>Correction</th></tr>
<tr><td>Warm-up</td><td>Humming</td></tr>
<tr><td>Pitch</td><td>Tanpura</td></tr>
<tr><td>Repetition</td><td>Focused</td></tr>
<tr><td>Posture</td><td>Straight</td></tr>
<tr><td>Dehydration</td><td>Water</td></tr>
</table>
      `,

      video: "https://www.youtube.com/embed/Cl4lzh_yeQ0",
    },

  },

  musicExplore: {
    title: "Explore Indian Classical Music",

    intro: `
Indian Classical Music is built on swara, raga, and tala.
The two main traditions are Carnatic and Hindustani.
It emphasizes improvisation and deep emotional expression.
Each raga is associated with specific moods and times.
Tala provides rhythmic guidance to musicians.
Together they create a spiritual musical experience.
    `,

    traditionsTitle: "Carnatic vs Hindustani",

    similaritiesTitle: "Similarities",

    similarities: [
      "Both are based on swara, raga, and tala.",
      "Roots in Sanskrit and Vedic traditions.",
      "Raga is linked with rhythmic tala.",
      "Both evolved from Hindu traditions.",
    ],

    differencesTitle: "Differences",

    differences: [
      "Hindustani influenced by Persian & Islamic culture.",
      "Carnatic developed in Bhakti movement.",
      "Carnatic focuses more on vocal technique.",
      "Hindustani allows more improvisation.",
      "Khayal, Dhrupad vs RTP, Kalpanaswaram.",
    ],

    ragasTitle: "Popular Carnatic Ragas",

   ragas: [
  {
    name: "Mayamalavagowla",
    aro: "S R1 G3 M1 P D1 N3 S",
    ava: "S N3 D1 P M1 G3 R1 S",
    impact: "Foundation for beginners",
  },
  {
    name: "Malahari",
    aro: "S R1 M1 P D1 S",
    ava: "S D1 P M1 G2 R1 S",
    impact: "First geetam raga",
  },
  {
    name: "Suddha Saveri",
    aro: "S R2 M1 P D2 S",
    ava: "S D2 P M1 R2 S",
    impact: "Pentatonic and uplifting",
  },
  {
    name: "Hamsadhwani",
    aro: "S R2 G3 P N3 S",
    ava: "S N3 P G3 R2 S",
    impact: "Concert favourite",
  },
  {
    name: "Kalyani",
    aro: "S R2 G3 M2 P D2 N3 S",
    ava: "S N3 D2 P M2 G3 R2 S",
    impact: "Emotion and grandeur",
  },
  {
    name: "Shankarabharanam",
    aro: "S R2 G3 M1 P D2 N3 S",
    ava: "S N3 D2 P M1 G3 R2 S",
    impact: "Improvisation base",
  },
  {
    name: "Kharaharapriya",
    aro: "S R2 G2 M1 P D2 N2 S",
    ava: "S N2 D2 P M1 G2 R2 S",
    impact: "Emotional depth",
  },
  {
    name: "Thodi",
    aro: "S R1 G2 M1 P D1 N2 S",
    ava: "S N2 D1 P M1 G2 R1 S",
    impact: "Gamakas mastery",
  },
  {
    name: "Bhairavi",
    aro: "S R2 G2 M1 P D2 N2 S",
    ava: "S N2 D1 P M1 G2 R2 S",
    impact: "Bhava expression",
  },
  {
    name: "Mohanam",
    aro: "S R2 G3 P D2 S",
    ava: "S D2 P G3 R2 S",
    impact: "Joyful pentatonic",
  },
],


    instrumentsTitle: "Carnatic Instruments",
      instruments: [
    { name: "Veena", desc: "Queen of Carnatic instruments" },
    { name: "Violin", desc: "Main accompaniment" },
    { name: "Tambura", desc: "Provides drone" },
    { name: "Chitravina", desc: "Fretless slide instrument" },
    { name: "Flute (Venu)", desc: "Bamboo wind instrument" },
    { name: "Nadaswaram", desc: "Temple ceremonial instrument" },
    { name: "Mridangam", desc: "Percussion backbone" },
    { name: "Ghatam", desc: "Clay pot rhythm" },
    { name: "Kanjira", desc: "Frame drum" },
    { name: "Morsing", desc: "Metal mouth harp" },
  ],

  },

  about: {
    title: "About Me",

    intro:
      "I am a classical music student and performer who loves exploring ragas, voice culture, and traditional compositions.",

    whyTitle: "Why this blog exists",

    whyText: `
Classical music is often seen as intimidating, overly complex, and disconnected
from real-world singing. This blog exists to break that barrier.But this is more than just music. Classical singing is a discipline that cultivates patience, focus, emotional expression, and a deeper connection with yourself and the world around you. It trains the mind, enriches the soul, and enhances creativity, communication, and emotional intelligence in everyday life.

I want to make learning classical music simple, engaging, and practical.

By making classical music accessible and enjoyable, this blog aims to help you
only sing better but also live better.
    `,
  },

  homeExtras: {
    blogFindTitle: "ON THIS BLOG YOU WILL FIND:",

    blogFindList: [
      "Ragas — decoded, not complicated",
      "Sing smarter, not harder",
      "Theory that finally makes sense",
      "The story behind the music",
      "Practice that transforms",
      "My musical journey — raw & real",
    ],

    subscribeTitle: "Subscribe for Updates",
    subscribeText: "Get new articles and music tips in your inbox.",
    subscribeBtn: "Subscribe",
  },

};

export default en;
