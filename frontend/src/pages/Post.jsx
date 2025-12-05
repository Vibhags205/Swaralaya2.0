import React from "react";
import { useParams } from "react-router-dom";

const postContent = {
  "10-easy-warm-ups": {
    title: "10 Easy Warm-ups Every Classical Singer Should Practice Daily",
    content: `
A vocal warm-up prepares the muscles of the larynx, breathing mechanism, and resonators for optimal performance and prevents strain.

Below are 10 warm-ups every classical singer should practice daily:
    `,
    table: `
<table>
<tr><th>Category</th><th>Warm-up Exercise</th><th>Purpose</th></tr>
<tr><td>I. Breathing</td><td>1. Diaphragmatic Breathing</td><td>Engages the diaphragm for deep breath intake.</td></tr>
<tr><td></td><td>2. Sustained "S" & "Shh"</td><td>Improves controlled exhalation and breath management.</td></tr>
<tr><td></td><td>3. Breath Pulses ("Ha, Ha, Ha")</td><td>Strengthens core muscles for breath pressure.</td></tr>
<tr><td>II. Vocal / Resonance</td><td>4. Closed-lip Humming</td><td>Promotes relaxed resonance & cord closure.</td></tr>
<tr><td></td><td>5. Lip / Tongue Trills</td><td>Relaxes throat tension & ensures steady airflow.</td></tr>
<tr><td></td><td>6. Sliding Hums (Siren)</td><td>S smooth register transitions.</td></tr>
<tr><td>III. Agility / Pitch</td><td>7. Five-note Scales (S-R-G-M-P)</td><td>Builds precision for intervals.</td></tr>
<tr><td></td><td>8. Arpeggios (1-3-5-3-1)</td><td>Improves vocal flexibility and transitions.</td></tr>
<tr><td></td><td>9. Vowels on Single Pitch</td><td>Refines vowel clarity across vocal range.</td></tr>
<tr><td></td><td>10. Chromatic Runs</td><td>Boosts pitch accuracy and ear training.</td></tr>
</table>
    `,
    video: "https://www.youtube.com/embed/jLPRD7YYDT8"
  },

  "what-is-a-raga": {
    title: "What Exactly Is a Raga? Explained in Simple Words",
    content: `
A Raga is a melodic framework for improvisation in Indian Classical Music. The Sanskrit root means "to colour" — indicating how a Raga evokes a specific mood or emotion (Rasa).

Key components of a Raga:
• Swaras — the specific notes used
• Arohana & Avarohana — ascending and descending order of notes
• Vadi & Samvadi — main and secondary important notes
• Pakad — signature phrase identifying the Raga

A Raga is not just a scale — it is a complete musical identity with rules and a personality.
    `,
    video: "https://www.youtube.com/embed/nom-_EYjIrg"
  },

  "alankars-vs-sargam": {
    title: "Difference Between Alankars & Sargam",
    content: `
Beginners get confused between Alankars and Sargam because both use the same notes — but the purpose is different.
    `,
    table: `
<table>
<tr><th>Feature</th><th>Sargam</th><th>Alankar</th></tr>
<tr><td>What it is</td><td>Indian Solfege (Sa Re Ga Ma Pa Dha Ni)</td><td>Melodic patterns/exercises</td></tr>
<tr><td>Analogy</td><td>The alphabet of music</td><td>A sentence created from the alphabet</td></tr>
<tr><td>Purpose</td><td>Note recognition and scale learning</td><td>Agility, pitch accuracy, stamina</td></tr>
<tr><td>Example</td><td>Sa Re Ga Ma Pa Dha Ni Sa</td><td>Sa Re Ga | Re Ga Ma | Ga Ma Pa</td></tr>
</table>
    `,
    video: "https://www.youtube.com/embed/JIfFMN6E9DA"
  },

  "improve-breath-control": {
    title: "How to Improve Breath Control — Real Techniques That Work",
    content: `
Effective breath control is the foundation of strain-free singing. It depends on diaphragmatic breathing and stable, controlled exhalation.
    `,
    table: `
<table>
<tr><th>Technique</th><th>Description</th><th>Exercise</th></tr>
<tr><td>Diaphragmatic Breathing</td><td>Breathing deep into lower lungs without lifting chest</td><td>Lie down & inhale to raise stomach</td></tr>
<tr><td>Controlled Hissing</td><td>Slow release of air with abdominal support</td><td>Exhale on "Sssss" for 15–30 sec</td></tr>
<tr><td>Pursed Lip Breathing</td><td>Creates back-pressure to stabilize vocal folds</td><td>Inhale 4 sec → exhale 8 sec through lips</td></tr>
<tr><td>Panting Exercise</td><td>Strengthens diaphragm speed & stamina</td><td>Rapid short breaths → hold long note</td></tr>
</table>
    `,
    video: "https://www.youtube.com/embed/KcldYMDk-I4"
  },

  "common-mistakes-riyaz": {
    title: "Common Mistakes Students Make During Riyaz",
    content: `
Riyaz means disciplined, daily practice. Some common mistakes stop singers from improving.
    `,
    table: `
<table>
<tr><th>Mistake</th><th>Impact & Correction</th></tr>
<tr><td>Skipping Warm-up</td><td>Leads to strain and poor tone. Correction: 10–15 mins of humming & breathing first.</td></tr>
<tr><td>Practicing at Wrong Pitch</td><td>Causes throat tension. Correction: Use Tanpura to set natural Sa.</td></tr>
<tr><td>Mindless Repetition</td><td>Reinforces bad habits. Correction: Short focused sessions + self-recording.</td></tr>
<tr><td>Improper Posture</td><td>Blocks breath support. Correction: Straight spine & open chest.</td></tr>
<tr><td>Dehydration & Fatigue</td><td>Harms vocal folds. Correction: Drink water & rest properly.</td></tr>
</table>
    `,
    video: "https://www.youtube.com/embed/Cl4lzh_yeQ0"
  }
};

export default function Post() {
  const { slug } = useParams();
  const post = postContent[slug];

  if (!post) return <h2 style={{ padding: "20px" }}>Post not found</h2>;

  return (
    <section className="post-center">
      <h1 className="post-title">{post.title}</h1>

      <p className="post-content">{post.content}</p>

      {post.table && (
        <div
          className="post-table"
          dangerouslySetInnerHTML={{ __html: post.table }}
        />
      )}

      {post.video && (
        <div className="video-container">
          <iframe
            src={post.video}
            title={post.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
}
