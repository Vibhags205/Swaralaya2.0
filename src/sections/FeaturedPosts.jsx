import React from "react";
import { Link } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";


export default function FeaturedPosts() {

  const { text } = useLanguage();

  return (
    <section className="section-dark">

      <h2 className="section-title">
        {text.featured.title}
      </h2>


      <div className="grid">

        {text.featured.posts.map((f, i) => (

          <article key={i} className="post-card">

            <h3>{f.title}</h3>

            <p className="teaser">
              {text.featured.teaser}
            </p>

            <Link
              to={`/post/${f.slug}`}
              className="read-more"
            >
              {text.featured.read}
            </Link>

          </article>

        ))}

      </div>

    </section>
  );
}
