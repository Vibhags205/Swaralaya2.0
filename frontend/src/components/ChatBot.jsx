import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ChatBot() {
  const { lang } = useLanguage();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Initial greeting when language changes
  
  useEffect(() => {
    setMessages([
      {
        from: "bot",
        text:
          lang === "kn"
            ? "ನಮಸ್ಕಾರ! ಸಂಗೀತದ ಬಗ್ಗೆ ಏನು ಬೇಕಾದರೂ ಕೇಳಿ 🙂"
            : "Hi there! Ask me anything about music 🙂",
      },
    ]);
  }, [lang]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
        }),
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();

      const botMsg = {
        from: "bot",
        text: data.reply || "No response from AI.",
      };

      setMessages((prev) => [...prev, botMsg]);

    } catch (err) {
      console.error("Chat Error:", err);

      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Error talking to AI." },
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="chat-btn"
        onClick={() => setOpen(!open)}
      >
        💬
      </button>

      {/* Chat Box */}
      {open && (
        <div className="chat-box">

          {/* Header */}
          <div className="chat-header">
            🎵 Swaralaya Assistant
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          {/* Body */}
          <div className="chat-body">
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.from === "user" ? "chat-user" : "chat-bot"}
              >
                {m.text}
              </div>
            ))}

            {loading && (
              <div className="chat-bot">Typing...</div>
            )}
          </div>

          {/* Input */}
          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                lang === "kn"
                  ? "ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಬರೆಿರಿ..."
                  : "Type your question..."
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />

            <button onClick={sendMessage}>
              Send
            </button>
          </div>

        </div>
      )}
    </>
  );
}
