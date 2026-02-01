import React from "react";
import { useLanguage } from "../context/LanguageContext";

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

import "./InstrumentsSection.css";


// Fixed images map (never changes)
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


export default function InstrumentsSection() {

  const { text } = useLanguage();

  // Safety
  if (
    !text ||
    !text.musicExplore ||
    !text.musicExplore.instruments ||
    !Array.isArray(text.musicExplore.instruments)
  ) {
    return null;
  }

  const instruments = text.musicExplore.instruments;

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

              <button className="play-btn">
                ▶ Play
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
