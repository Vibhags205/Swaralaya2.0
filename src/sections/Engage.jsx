import React, { useState } from 'react';

export default function Engage() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email.trim()) {
      alert("Please enter an email.");
      return;
    }
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

      const res = await fetch(`${API_URL}/api/subscribe`, {
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
      alert("Server error: could not reach API");
      console.error(error);
    }
  };

  return (
    <section className="engage card">
      <h2>Engage With Me</h2>
      <p>
        If you love classical music or want to learn singing, you’re in the right place.
        Subscribe, comment, and follow — let’s learn together step by step.
      </p>
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
