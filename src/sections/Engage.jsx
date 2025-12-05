// Engage.jsx (located at MUSIC/src/sections/Engage.jsx)

import React, { useState } from 'react';
// ... other imports

export default function Engage() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email.trim()) {
      alert("Please enter an email.");
      return;
    }
    
    // Use VITE_API_URL for production (Vercel), or relative /api for local dev proxy
    const apiBase = import.meta.env.VITE_API_URL || '';
    const apiUrl = apiBase ? `${apiBase}/api/subscribe` : '/api/subscribe';
    
    try {
      const res = await fetch(apiUrl, { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        alert(data.message || "Subscribed Successfully!");
        setEmail("");
      } else {
        alert(data.message || "Subscription failed");
      }
    } catch (error) {
      alert("Network Error: Ensure your Node.js server is running.");
      console.error(error);
    }
  };

  return (
    // ... (rest of your component is the same)
    <section className="engage card">
      {/* ... */}
      <div className="engage-actions">
        <input
          placeholder="Your email"
          aria-label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn" onClick={handleSubscribe}>Subscribe</button>
      </div>
    </section>
  );
}