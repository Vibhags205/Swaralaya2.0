import React from "react";
import profilePic from "../assets/vibha1.jpg";

import { useLanguage } from "../context/LanguageContext";


export default function About() {

  const { text } = useLanguage();

  return (
    <section className="about-wrapper card">


      {/* Profile Picture */}
      <div className="about-image-container">
        <img
          src={profilePic}
          alt="Vibha GS"
          className="about-image"
        />
      </div>


      {/* Title */}
      <h1 className="about-title">
        {text.about.title}
      </h1>


      {/* Intro */}
      <p className="about-text">
        {text.about.intro}
      </p>


      {/* Why Section */}
      <h2 className="about-subtitle">
        {text.about.whyTitle}
      </h2>


      {/* Main Text */}
      <p className="about-text">
        {text.about.whyText.split("\n\n").map((para, i) => (
          <span key={i}>
            {para}
            <br /><br />
          </span>
        ))}
      </p>


    </section>
  );
}
