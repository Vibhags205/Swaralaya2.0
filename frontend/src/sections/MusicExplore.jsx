import React, { useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import InstrumentsSection from "./InstrumentsSection";

/* ================= AUDIO IMPORTS ================= */

import mohanamAudio from "../assets/audio/mohanam.mp3";
import kalyaniAudio from "../assets/audio/kalyani.mp3";
import thodiAudio from "../assets/audio/thodi.mp3";
import malahariAudio from "../assets/audio/malahari.mp3";
import shuddasaveriAudio from "../assets/audio/shuddhasaveri.mp3";
import bhairaviAudio from "../assets/audio/bhairavi.mp3";
import shankarabharanaAudio from "../assets/audio/shankarabharanam.mp3";
import mayamalavagoulaAudio from "../assets/audio/mayamalavagoula.mp3";
import hamsaAudio from "../assets/audio/hamsadhwani.mp3";
import kharaharapriyaAudio from "../assets/audio/kharaharapriya.mp3";

/* ================= AUDIO MAP ================= */

const audioMap = {
  mohanam: mohanamAudio,
  kalyani: kalyaniAudio,
  thodi: thodiAudio,
  malahari: malahariAudio,
  shuddhasaveri: shuddasaveriAudio,
  bhairavi: bhairaviAudio,
  shankarabharanam: shankarabharanaAudio,
  mayamalavagoula: mayamalavagoulaAudio,
  hamsadhwani: hamsaAudio,
  kharaharapriya: kharaharapriyaAudio,
};

/* ================= MAIN COMPONENT ================= */

export default function MusicExplore() {
  const { text } = useLanguage();

  /* Shared audio controller */
  const audioRef = useRef(null);
  const [activeRaga, setActiveRaga] = useState(null);

  if (!text || !text.musicExplore) {
    return <div style={{ color: "white", padding: "40px" }}>Loading...</div>;
  }

  const m = text.musicExplore;

  return (
    <section id="music-explore">

      {/* INTRO */}
      <div className="section-dark">
        <h1 className="section-title">{m.title}</h1>
        <p className="section-text">{m.intro}</p>
      </div>

      {/* CARNATIC vs HINDUSTANI */}
      <div className="section-dark compact-section">

        <h2 className="section-title">{m.traditionsTitle}</h2>

        <div className="tradition-layout">

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

          <div className="tradition-text">
            <h3>{m.similaritiesTitle}</h3>
            <ul>
              {m.similarities?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

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
        <h2 className="section-title">{m.ragasTitle}</h2>

        <div className="card-grid">
          {m.ragas?.map((raga, i) => (
            <Raga
              key={i}
              name={raga.name}
              aro={raga.aro}
              ava={raga.ava}
              impact={raga.impact}
              audioKey={raga.audio}
              audioRef={audioRef}
              activeRaga={activeRaga}
              setActiveRaga={setActiveRaga}
            />
          ))}
        </div>
      </div>

      {/* INSTRUMENTS */}
      <InstrumentsSection />

    </section>
  );
}

/* ================= RAGA CARD ================= */

function Raga({
  name,
  aro,
  ava,
  impact,
  audioKey,
  audioRef,
  activeRaga,
  setActiveRaga,
}) {

  const playAudio = () => {
    if (!audioKey || !audioMap[audioKey]) return;

    /* Same raga → toggle */
    if (activeRaga === audioKey && audioRef.current) {
      if (!audioRef.current.paused) {
        audioRef.current.pause();
        setActiveRaga(null);
        return;
      }
      audioRef.current.play();
      return;
    }

    /* Stop previous */
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    /* Play new */
    const sound = new Audio(audioMap[audioKey]);
    sound.play();

    audioRef.current = sound;
    setActiveRaga(audioKey);

    sound.onended = () => setActiveRaga(null);
  };

  return (
    <div className="info-card raga-card">

      <div className="play-overlay">
        <button className="play-btn" onClick={playAudio}>
          {activeRaga === audioKey ? "⏸" : "▶"}
        </button>
      </div>

      <h3>{name}</h3>

      {aro && <p><b>Arohana:</b> {aro}</p>}
      {ava && <p><b>Avarohana:</b> {ava}</p>}

      <p className="impact">{impact}</p>
    </div>
  );
}
