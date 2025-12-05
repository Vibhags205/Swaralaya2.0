import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content container">

          <h1>SWARALAYA: A Space for Classical Music Learners & Music Lovers</h1>

          <p className="subtitle">
            Indian classical music, vocal techniques, raga basics, practice routines,
            and my musical journey — all in one place.
          </p>

          <div className="hero-cta">
            
            {/* Explore Featured Posts → opens Reddit page */}
            <Link to="/featured" className="btn">
              Explore Featured Posts
            </Link>

            {/* About Me page */}
            <Link to="/about" className="btn ghost">
              About Me
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
<button className="hero-btn">
  <Link to="/Featured">Explore Featured Posts</Link>
</button>
