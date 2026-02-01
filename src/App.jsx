import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Post from "./pages/Post";
import MusicExplore from "./sections/MusicExplore";
import ChatBot from "./components/ChatBot";

import { useLanguage } from "./context/LanguageContext";


export default function App() {

  const { toggleLanguage, text, lang } = useLanguage();

  return (
    <div className="app-root">


      <header className="topbar">

        <div className="brand">
          <Link to="/" className="brand-link">
            {text.nav.brand}
          </Link>
        </div>


        <nav className="nav">

          <Link to="/">
            {text.nav.home}
          </Link>

          <Link to="/about">
            {text.nav.about}
          </Link>

          <Link to="/featured">
            {text.nav.featured}
          </Link>


          {/* Language Toggle */}
          <button
            className="lang-btn"
            onClick={toggleLanguage}
          >
            {lang === "en" ? "ಕನ್ನಡ" : "EN"}
          </button>

        </nav>

      </header>


      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/featured" element={<MusicExplore />} />
          <Route path="/post/:slug" element={<Post />} />
        </Routes>

      </main>


      <footer className="footer">
        <p>{text.footer.text}</p>
      </footer>
<ChatBot />

    </div>
  );
}
