// server.js

const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const Parser = require('rss-parser');
require('dotenv').config();

// --- CONFIGURATION ---
const PORT = process.env.PORT || 3000;  // Render uses process.env.PORT
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';
const CLIENT_URLS = process.env.CLIENT_URLS || '';
const ALLOWED_ORIGINS = [
    CLIENT_URL,
    ...CLIENT_URLS.split(',').map(s => s.trim()).filter(Boolean),
    'http://localhost:5173',
    'http://localhost:5174',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:5174'
];
const NEWS_CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes
const NEWS_FEEDS = [
    'https://www.thehindu.com/entertainment/music/feeder/default.rss',
    'https://indianexpress.com/section/lifestyle/art-and-culture/feed/',
    'http://srutimag.blogspot.com/feeds/posts/default?alt=rss'
];

const rssParser = new Parser({
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
});
let newsCache = { items: [], expiresAt: 0 };

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
app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true); // allow tools without origin
        if (ALLOWED_ORIGINS.includes(origin)) return callback(null, true);
        return callback(new Error('Not allowed by CORS'));
    }
}));
app.use(express.json());

// Fetch and cache news items from RSS feeds
async function loadNewsItems() {
    const now = Date.now();
    if (newsCache.items.length && newsCache.expiresAt > now) {
        return newsCache.items;
    }

    try {
        const feeds = await Promise.all(
            NEWS_FEEDS.map(url => rssParser.parseURL(url))
        );

        const combined = feeds
            .flatMap(feed => feed.items || [])
            .map(item => ({
                title: item.title || 'Untitled',
                link: item.link,
                pubDate: item.pubDate || item.isoDate || null,
                contentSnippet: item.contentSnippet || '',
            }))
            .sort((a, b) => new Date(b.pubDate || 0) - new Date(a.pubDate || 0))
            .slice(0, 6);

        newsCache = { items: combined, expiresAt: now + NEWS_CACHE_TTL_MS };
        return combined;
    } catch (err) {
        console.error('Error fetching RSS feeds:', err.message);
        if (newsCache.items.length) {
            return newsCache.items; // serve stale cache on error
        }
        return [];
    }
}

// --- SUBSCRIBE ENDPOINT ---
// --- SUBSCRIBE ENDPOINT ---
app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    console.log("🔔 /api/subscribe called with body:", req.body);

    if (!email || !email.includes('@')) {
        console.log("⚠️ Invalid email:", email);
        return res.status(400).json({ message: "A valid email is required." });
    }

    try {
        const newSubscriber = {
            email: email,
            subscribedAt: admin.firestore.FieldValue.serverTimestamp()
        };

        await db.collection('subscribers').doc(email).set(newSubscriber);

        console.log(`🎉 FIREBASE WRITE SUCCESS for: ${email}`);
        return res
            .status(200)
            .json({ message: "Subscribed Successfully! Thanks for joining." });

    } catch (error) {
        console.error("🔥 FIREBASE WRITE ERROR:", error);
        return res
            .status(500)
            .json({ message: "Subscription failed due to server error (check Firebase logs)." });
    }
});
// --- DEBUG: LIST ALL SUBSCRIBERS ---
app.get('/api/debug-subscribers', async (_req, res) => {
    try {
        const snapshot = await db.collection('subscribers').get();
        const subs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log("📋 DEBUG subscribers:", subs);
        res.json({ subscribers: subs });
    } catch (err) {
        console.error("🔥 ERROR READING SUBSCRIBERS:", err);
        res.status(500).json({ message: "Failed to read subscribers" });
    }
});


// --- START THE SERVER ---
app.listen(PORT, () => {
    console.log(`\n🚀 Backend Server running on port ${PORT}`);
    console.log(`🌐 Allowing CORS from: ${CLIENT_URL}`);
});
