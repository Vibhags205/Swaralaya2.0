import React from "react";
import { Link } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { text } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content container">

          <h1 className="hero-title">
            {text.hero.title}
          </h1>

          <p className="subtitle">
            {text.hero.subtitle}
          </p>

          <div className="hero-cta">

            <Link to="/featured" className="btn">
              {text.hero.explore}
            </Link>

            <Link to="/about" className="btn ghost">
              {text.hero.about}
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
