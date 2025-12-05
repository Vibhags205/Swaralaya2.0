import React from 'react'
import Hero from '../sections/Hero'
import WhatOffers from '../sections/WhatOffers'
import Featured from '../sections/Featured'
import Engage from '../sections/Engage'


export default function Home(){
return (
<div className="page-home">
<Hero />
<div className="container">
<WhatOffers />
<Featured />
<Engage />
</div>
</div>
)
}