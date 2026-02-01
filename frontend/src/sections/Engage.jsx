// Engage.jsx

import React, { useState } from 'react';

export default function Engage() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email.trim()) {
      alert("Please enter an email.");
      return;
    }

    const baseUrl = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");
    const apiUrl = `${baseUrl}/api/subscribe`;

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
      alert("Network Error. Try again later.");
      console.error(error);
    }
  };

  return (
    <section className="engage card">
      <div className="engage-actions">
        <input
          placeholder="Your email"
          aria-label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn" onClick={handleSubscribe}>
          Subscribe
        </button>
      </div>
    </section>
  );
}
