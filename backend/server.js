import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import admin from "firebase-admin";
import fs from "fs";
import path from "path";

dotenv.config();

const app = express();
const port = process.env.PORT || process.env.BACKEND_PORT || 5000;

// Middleware
app.use(cors());
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});
app.use(express.json());

// Firebase Admin setup
let firebaseReady = false;
try {
  if (!admin.apps.length) {
    const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT;
    const serviceAccountPath = process.env.SERVICE_ACCOUNT_PATH;

    let serviceAccount;
    if (serviceAccountJson) {
      serviceAccount = JSON.parse(serviceAccountJson);
    } else if (serviceAccountPath) {
      const resolvedPath = path.isAbsolute(serviceAccountPath)
        ? serviceAccountPath
        : path.resolve(process.cwd(), serviceAccountPath);
      const raw = fs.readFileSync(resolvedPath, "utf8");
      serviceAccount = JSON.parse(raw);
    }

    if (serviceAccount) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      firebaseReady = true;
      console.log("Firebase Admin initialized");
    } else {
      console.warn("Firebase service account not configured");
    }
  } else {
    firebaseReady = true;
  }
} catch (err) {
  console.error("Firebase init error:", err.message);
}

// Groq setup (using OpenAI SDK with Groq base URL)
console.log("API_KEY loaded:", process.env.OPENAI_API_KEY ? "Yes" : "No");
let client;
try {
  client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
  });
  console.log("Groq client initialized successfully");
} catch (err) {
  console.error("Error initializing client:", err.message);
}

// Test route
app.get("/", (req, res) => {
  res.send("AI Server Running");
});

// Test API
app.get("/api/test", (req, res) => {
  res.json({ status: "Server is working" });
});

// Subscribe route (Firebase)
app.post("/api/subscribe", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || typeof email !== "string") {
      return res.status(400).json({ message: "Email is required" });
    }

    const normalized = email.trim().toLowerCase();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
    if (!isValid) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    if (!firebaseReady) {
      return res.status(500).json({ message: "Server is not configured" });
    }

    const db = admin.firestore();
    await db
      .collection("subscribers")
      .doc(normalized)
      .set(
        {
          email: normalized,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );

    return res.json({ message: "Subscribed successfully" });
  } catch (error) {
    console.error("Subscribe error:", error.message);
    return res.status(500).json({ message: "Subscription failed" });
  }
});

// Chat route
app.post("/api/chat", async (req, res) => {
  try {
    console.log("Chat request received:", req.body);
    const { message } = req.body;

    if (!message) {
      console.log("No message in request");
      return res.status(400).json({ reply: "No message sent" });
    }

    if (!client) {
      console.error("OpenAI client not initialized");
      return res.status(500).json({ reply: "Server configuration error" });
    }

    console.log("Sending to Groq:", message);
    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are an expert Indian classical music teacher. Answer clearly and simply.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    console.log("Groq response received");
    const reply = response.choices[0].message.content;

    res.json({ reply });
  } catch (error) {
    console.error("AI Error:", error.message);
    console.error("Full error:", error);
    res.status(500).json({ reply: "AI Error" });
  }
});

// Global error handler for unhandled rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

// Global error handler for uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});

// Start server
const server = app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log("Server is listening...");
});

// Handle server errors
server.on("error", (err) => {
  console.error("Server error:", err);
});
