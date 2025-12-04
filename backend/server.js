// server.js (located at MUSIC/server.js)

const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
require('dotenv').config(); // Load environment variables from .env

// --- CONFIGURATION ---
const PORT = process.env.BACKEND_PORT || 3000; 
const SERVICE_ACCOUNT_PATH = process.env.SERVICE_ACCOUNT_PATH;
const CLIENT_URL = 'http://localhost:5173'; // 🚨 IMPORTANT: Change if your React app uses a different port

// 🚨 Load your service account key file
const serviceAccount = require(SERVICE_ACCOUNT_PATH); 

// --- 1. INITIALIZE FIREBASE ---
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();

// --- 2. MIDDLEWARES ---
// Enable CORS for your frontend URL
app.use(cors({ origin: CLIENT_URL }));
// Enable express to read JSON bodies
app.use(express.json());

// --- 3. THE /api/subscribe ENDPOINT ---
app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body; 

    if (!email || !email.includes('@')) {
        return res.status(400).json({ message: "A valid email is required." });
    }

    try {
        const newSubscriber = {
            email: email,
            subscribedAt: admin.firestore.FieldValue.serverTimestamp() 
        };

        // Save to Firestore, using the email as the document ID
        await db.collection('subscribers').doc(email).set(newSubscriber);

        console.log(`New subscriber saved: ${email}`);

        // Success response
        res.status(200).json({ message: "Subscribed Successfully!" });

    } catch (error) {
        console.error("FIREBASE WRITE ERROR:", error);
        res.status(500).json({ message: "Server error: Could not process subscription." });
    }
});


// --- 4. START THE SERVER ---
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Listening for calls from ${CLIENT_URL}`);
});