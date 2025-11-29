import React from 'react'


const items = [
  { text: '1. Ragas — decoded, not complicated' },
  { text: '2. Sing smarter, not harder' },
  { text: '3. Theory that finally makes sense' },
  { text: '4. The story behind the music' },
  { text: '5. Practice that transforms' },
  { text: '6. My musical journey — raw & real' }
];



export default function WhatOffers(){
return (
<section className="what-offers card">
<h2>ON THIS BLOG YOU WILL FIND: </h2>
<ul>
{items.map((i,idx)=> (
<li key={idx}><span className="emoji">{i.emoji}</span>{i.text}</li>
))}
</ul>
</section>
)
}