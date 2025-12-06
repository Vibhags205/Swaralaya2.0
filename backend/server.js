// server.js

const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');   // ✅ IMPORTANT: this line fixes the error
require('dotenv').config();

// --- CONFIGURATION ---
const PORT = process.env.PORT || 3000;  // Render uses process.env.PORT
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

let db;
let app = express();

// --- LOAD FIREBASE CREDENTIALS FROM ENV VAR ---
const serviceAccountJson = process.env.SERVICE_ACCOUNT_JSON;

if (!serviceAccountJson) {
    console.error("🚨 SERVICE_ACCOUNT_JSON environment variable missing!");
    process.exit(1);
}

let serviceAccount;
try {
    serviceAccount = JSON.parse(serviceAccountJson);
    console.log("✅ Loaded Firebase credentials from SERVICE_ACCOUNT_JSON");
} catch (err) {
    console.error("🚨 Failed to parse SERVICE_ACCOUNT_JSON");
    console.error(err);
    process.exit(1);
}

// --- INITIALIZE FIREBASE ---
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

db = admin.firestore();

// --- MIDDLEWARES ---
app.use(cors({ origin: CLIENT_URL }));
app.use(express.json());

// --- SUBSCRIBE ENDPOINT ---
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

        await db.collection('subscribers').doc(email).set(newSubscriber);

        console.log(`New subscriber saved: ${email}`);
        res.status(200).json({ message: "Subscribed Successfully! Thanks for joining." });

    } catch (error) {
        console.error("FIREBASE WRITE ERROR:", error.message);
        res.status(500).json({ message: "Subscription failed due to server error (check Firebase logs)." });
    }
});

// --- START THE SERVER ---
app.listen(PORT, () => {
    console.log(`\n🚀 Backend Server running on port ${PORT}`);
    console.log(`🌐 Allowing CORS from: ${CLIENT_URL}`);
});
