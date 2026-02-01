import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function WhatOffers() {

  // ✅ Hook must be INSIDE component
  const { text } = useLanguage();

  // Safety check (prevents blank screen)
  if (!text?.homeExtras) return null;

  return (
    <section className="what-offers card">

      {/* Title */}
      <h2>{text.homeExtras.blogFindTitle}</h2>

      {/* List */}
      <ul>
        {text.homeExtras.blogFindList.map((item, idx) => (
          <li key={idx}>
            {idx + 1}. {item}
          </li>
        ))}
      </ul>

    </section>
  );
}
