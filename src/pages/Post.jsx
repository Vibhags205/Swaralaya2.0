import React from 'react'
import { useParams } from 'react-router-dom'


export default function Post(){
const { slug } = useParams()
// For demo, show slug. In a real app you'll fetch the post content.
return (
<section className="container card">
<h2>{slug.replace('-', ' ')}</h2>
<p>This is a demo post. Replace this with your content managed in markdown, CMS, or an API.</p>
</section>
)
}