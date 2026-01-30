const chatbotEN = {
  welcome: "Hi 👋 I am your Classical Music Assistant. Ask me anything!",

  placeholder: "Type your question...",

  default: "Sorry 😅 I didn’t understand. Try asking about ragas, practice, or music.",

  questions: [

    {
      keys: ["raga", "raag"],
      answer:
        "A Raga is a melodic framework that creates a specific mood in Indian classical music.",
    },

    {
      keys: ["practice", "riyaaz", "riyaz"],
      answer:
        "Daily practice (Riyaz) should include breathing, scales, and singing with tanpura.",
    },

    {
      keys: ["beginner", "start", "learn"],
      answer:
        "Start with basic swaras, simple ragas like Mayamalavagowla, and daily humming.",
    },

    {
      keys: ["carnatic", "hindustani"],
      answer:
        "Carnatic is from South India, Hindustani from North India. Both are classical styles.",
    },

    {
      keys: ["voice", "breath"],
      answer:
        "Good singing needs diaphragmatic breathing and relaxed throat control.",
    },

    {
      keys: ["mood", "happy", "sad"],
      answer:
        "Different ragas express moods. Mohanam is joyful, Bhairavi is emotional.",
    },

  ],
};

export default chatbotEN;
