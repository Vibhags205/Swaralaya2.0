import React from 'react';
// Import the new sections we just created
import NewsFeed from '../sections/NewsFeed';
import SocialWall from '../sections/SocialWall';

// Keep your existing imports if any (like Navbar or Footer)
// import Navbar from '../sections/Navbar'; 

const FeaturedPage = () => {
  return (
    <div className="min-h-screen bg-[#1a0f0a] text-white"> 
      {/* Keep your existing Header or Navbar here.
         I'm assuming you might have a wrapper or existing code here.
      */}
      
      <div className="pt-24 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-amber-500 mb-4">
          Swaralaya Featured Posts
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Stay updated with the latest happenings, exams, and concerts in the world of Indian Classical Music.
        </p>
      </div>

      {/* --- NEW SECTIONS ADDED BELOW --- */}
      
      {/* 1. The News Feed (White/Light section) */}
      <section className="bg-gray-100 text-gray-900 rounded-t-3xl mt-8">
        <NewsFeed />
      </section>

      {/* 2. The Social Wall (Slightly darker light section) */}
      <section className="bg-amber-50 text-gray-900 pb-16">
        <SocialWall />
      </section>

    </div>
  );
};

export default FeaturedPage;