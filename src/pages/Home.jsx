import React from "react";

import Hero from "../sections/Hero";
import WhatOffers from "../sections/WhatOffers";
import FeaturedPosts from "../sections/FeaturedPosts";
import Engage from "../sections/Engage";



export default function Home() {
  return (
    <div className="page-home">

      <Hero />

      <div className="container">

        <WhatOffers />

        <FeaturedPosts />

        
        <Engage />

      </div>

    </div>
  );
}
