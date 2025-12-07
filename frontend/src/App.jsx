import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Post from './pages/Post'
import FeaturedReddit from "./pages/FeaturedReddit";


export default function App() {
return (
<div className="app-root">
<header className="topbar">
<div className="brand">
<Link to="/" className="brand-link">A Space for Classical Music</Link>
</div>
<nav className="nav">
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/featured">Featured</Link>
</nav>
</header>


<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/post/:slug" element={<Post />} />
<Route path="/featured" element={<FeaturedReddit />} />
</Routes>
</main>


<footer className="footer">
<p>Thanks for visiting. New posts every week — keep learning, keep singing.</p>
</footer>
</div>
)
}
