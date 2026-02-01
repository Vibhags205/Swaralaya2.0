import React from "react";
import { useParams } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";


export default function Post() {

  const { slug } = useParams();

  const { text } = useLanguage();

  const post = text.posts?.[slug];


  if (!post) {
    return <h2 style={{ padding: "20px" }}>Post not found</h2>;
  }


  return (
    <section className="post-center">

      <h1 className="post-title">
        {post.title}
      </h1>


      {/* Content */}
      <div className="post-content">

        {post.content
          .trim()
          .split("\n\n")
          .map((para, i) => (
            <p key={i}>{para}</p>
          ))}

      </div>


      {/* Table */}
      {post.table && (
        <div
          className="post-table"
          dangerouslySetInnerHTML={{
            __html: post.table,
          }}
        />
      )}


      {/* Video */}
      {post.video && (
        <div className="video-container">

          <iframe
            src={post.video}
            title={post.title}
            allowFullScreen
          ></iframe>

        </div>
      )}

    </section>
  );
}
