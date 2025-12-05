import React from "react";
import profilePic from "../assets/vibha1.jpg"; // <-- replace with your filename

export default function About() {
  return (
    <section className="about-wrapper card">
      {/* Profile Picture */}
      <div className="about-image-container">
        <img src={profilePic} alt="Vibha GS" className="about-image" />
      </div>

      {/* Title */}
      <h1 className="about-title">About Me</h1>

      {/* Content */}
      <p className="about-text">
        I am a classical music student and performer who loves exploring ragas, voice
        culture, and traditional compositions. I started this blog to share what I learn,
        simplify concepts, and help others enjoy classical music without confusion.
      </p>

      <h2 className="about-subtitle">Why this blog exists</h2>

      <p className="about-text">
        Classical music is often seen as intimidating, overly complex, and disconnected
        from real-world singing. This blog exists to break that barrier. I want to make
        learning classical music simple, engaging, and practical — a place where beginners
        and enthusiasts can truly understand ragas, connect theory with practice, and 
        build confidence in their own singing.
        <br /><br />
        But this is more than just music. Classical singing is a discipline that cultivates 
        patience, focus, emotional expression, and a deeper connection with yourself and 
        the world around you. It trains the mind, enriches the soul, and enhances 
        creativity, communication, and emotional intelligence in everyday life.
        <br /><br />
        By making classical music accessible and enjoyable, this blog aims to help you not 
        only sing better but also live better — bringing harmony and joy into every aspect 
        of your life.
      </p>

      
    </section>
  );
}
