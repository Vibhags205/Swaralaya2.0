import React, { useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

import "./InstrumentsSection.css";

/* ================= IMAGES ================= */

import veena from "../assets/instruments/veena.jpg";
import violin from "../assets/instruments/violin.jpg";
import tambura from "../assets/instruments/tambura.jpg";
import chitravina from "../assets/instruments/chitravina.jpg";
import flute from "../assets/instruments/flute.jpg";
import nadaswaram from "../assets/instruments/nadaswaram.jpg";
import mridangam from "../assets/instruments/mridangam.jpg";
import ghatam from "../assets/instruments/ghatam.jpg";
import kanjira from "../assets/instruments/kanjira.jpg";
import morsing from "../assets/instruments/morsing.jpg";

/* ================= AUDIO ================= */

import veenaAudio from "../assets/audio/veena.mp3";
import violinAudio from "../assets/audio/violin.mp3";
import tamburaAudio from "../assets/audio/tambura.mp3";
import chitravinaAudio from "../assets/audio/chitravina.mp3";
import fluteAudio from "../assets/audio/flute.mp3";
import nadaswaramAudio from "../assets/audio/nadaswaram.mp3";
import mridangamAudio from "../assets/audio/mridangam.mp3";
import ghatamAudio from "../assets/audio/ghatam.mp3";
import kanjiraAudio from "../assets/audio/kanjira.mp3";
import morsingAudio from "../assets/audio/morsing.mp3";

/* ================= IMAGE MAP ================= */

const images = [
  veena,
  violin,
  tambura,
  chitravina,
  flute,
  nadaswaram,
  mridangam,
  ghatam,
  kanjira,
  morsing,
];

/* ================= AUDIO MAP ================= */

const audioMap = {
  veena: veenaAudio,
  violin: violinAudio,
  tambura: tamburaAudio,
  chitravina: chitravinaAudio,
  flute: fluteAudio,
  nadaswaram: nadaswaramAudio,
  mridangam: mridangamAudio,
  ghatam: ghatamAudio,
  kanjira: kanjiraAudio,
  morsing: morsingAudio,
};

/* ================= COMPONENT ================= */

export default function InstrumentsSection() {

  const { text } = useLanguage();

  // Shared audio controller
  const audioRef = useRef(null);

  // Which instrument is playing
  const [activeInstrument, setActiveInstrument] = useState(null);

  /* Safety */
  if (
    !text ||
    !text.musicExplore ||
    !text.musicExplore.instruments ||
    !Array.isArray(text.musicExplore.instruments)
  ) {
    return null;
  }

  const instruments = text.musicExplore.instruments;

  /* ================= PLAY FUNCTION ================= */

  const playAudio = (key) => {

    if (!audioMap[key]) return;

    // Same instrument → toggle
    if (activeInstrument === key && audioRef.current) {

      if (!audioRef.current.paused) {
        audioRef.current.pause();
        setActiveInstrument(null);
        return;
      }

      audioRef.current.play();
      return;
    }

    // Stop previous
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Play new
    const sound = new Audio(audioMap[key]);
    sound.play();

    audioRef.current = sound;
    setActiveInstrument(key);

    // Reset when finished
    sound.onended = () => {
      setActiveInstrument(null);
    };
  };

  /* ================= UI ================= */

  return (
    <section className="instruments-section">

      <h2 className="section-title">
        {text.musicExplore.instrumentsTitle}
      </h2>

      <div className="instrument-grid">

        {instruments.map((item, index) => (

          <div
            key={index}
            className="instrument-card"
            style={{
              backgroundImage: `url(${images[index]})`,
            }}
          >

            <div className="overlay">

              <h3>{item.name}</h3>

              <p>{item.desc}</p>

              <button
                className="play-btn"
                onClick={() => playAudio(item.id)}
              >
                {activeInstrument === item.id ? "⏸ Pause" : "▶ Play"}
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
