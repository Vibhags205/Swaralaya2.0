import React from 'react'
import { Link } from 'react-router-dom'


const featured = [
{ title: '10 Easy Warm-ups Every Classical Singer Should Practice Daily', slug: '10-easy-warm-ups' },
{ title: 'What Exactly Is a Raga? Explained in Simple Words', slug: 'what-is-a-raga' },
{ title: 'Difference Between Alankars & Sargam — Beginners Often Confuse This', slug: 'alankars-vs-sargam' },
{ title: 'How to Improve Breath Control — Real Techniques That Work', slug: 'improve-breath-control' },
{ title: 'Common Mistakes Students Make During Riyaz', slug: 'common-mistakes-riyaz' }
]


export default function Featured(){
return (
<section id="featured" className="featured card">
<h2>Features</h2>   
<div className="grid">
{featured.map((f, idx) => (
<article key={idx} className="post-card">
<h3>{f.title}</h3>
<p className="teaser">Short preview — click to read more.</p>
<Link to={`/post/${f.slug}`} className="read-more">Read →</Link>
</article>
))}
</div>
</section>
)
}

