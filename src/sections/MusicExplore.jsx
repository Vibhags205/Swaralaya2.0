import React from "react";
import InstrumentsSection from "./InstrumentsSection";
import { useLanguage } from "../context/LanguageContext";

export default function MusicExplore() {
  const { text } = useLanguage();

  // Safety guard
  if (!text || !text.musicExplore) {
    return <div style={{ color: "white", padding: "40px" }}>Loading...</div>;
  }

  const m = text.musicExplore;

  return (
    <section id="music-explore">

      {/* INTRO */}
      <div className="section-dark">

        <h1 className="section-title">
          {m.title}
        </h1>

        <p className="section-text">
          {m.intro}
        </p>

      </div>


      {/* CARNATIC vs HINDUSTANI */}
      <div className="section-dark compact-section">

        <h2 className="section-title">
          {m.traditionsTitle}
        </h2>

        <div className="tradition-layout">


          {/* VIDEOS */}
          <div className="tradition-videos">

            <iframe
              src="https://www.youtube.com/embed/1Lc0ZPaKIL8"
              title="Carnatic Music"
              allowFullScreen
            />

            <iframe
              src="https://www.youtube.com/embed/EFPZF_DT7WY"
              title="Hindustani Music"
              allowFullScreen
            />

          </div>


          {/* TEXT */}
          <div className="tradition-text">

            {/* Similarities */}
            <h3>{m.similaritiesTitle}</h3>

            <ul>
              {m.similarities?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>


            {/* Differences */}
            <h3>{m.differencesTitle}</h3>

            <ul>
              {m.differences?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

          </div>

        </div>

      </div>


      {/* RAGAS */}
      <div className="section-dark">

        <h2 className="section-title">
          {m.ragasTitle}
        </h2>

        <div className="card-grid">

          {m.ragas?.map((raga, i) => (
            <Raga
              key={i}
              name={raga.name}
              aro={raga.aro}       // ✅ FIX
              ava={raga.ava}       // ✅ FIX
              impact={raga.impact}
            />
          ))}

        </div>

      </div>


      {/* INSTRUMENTS */}
      <InstrumentsSection />

    </section>
  );
}



/* RAGA CARD */
function Raga({ name, aro, ava, impact, audio }) {
  return (
    <div className="info-card raga-card">

      {/* Play Overlay */}
      <div className="play-overlay">
        <div className="play-circle">▶</div>
      </div>

      <h3>{name}</h3>

      {aro && (
        <p><b>Arohana:</b> {aro}</p>
      )}

      {ava && (
        <p><b>Avarohana:</b> {ava}</p>
      )}

      <p className="impact">{impact}</p>

      {audio && <audio src={audio} />}

    </div>
  );
}

