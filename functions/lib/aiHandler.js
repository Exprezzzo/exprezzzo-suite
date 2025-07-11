"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.llamaRespond = void 0;
// @ai-reasoning: Firebase Functions v2 with clean cache, logging, and smart fallback
const https_1 = require("firebase-functions/v2/https");
const admin = __importStar(require("firebase-admin"));
const responseCache = new Map();
const CACHE_TTL = 3600000;
exports.llamaRespond = (0, https_1.onRequest)({
    minInstances: 1,
    maxInstances: 10,
    timeoutSeconds: 60,
    memory: '1GiB',
    cors: true
}, async (req, res) => {
    if (req.method === 'OPTIONS')
        return res.status(204).send('');
    if (req.method !== 'POST')
        return res.status(405).json({ error: 'Method not allowed' });
    try {
        const { prompt, context, maxTokens = 256 } = req.body;
        if (!prompt)
            return res.status(400).json({ error: 'Prompt is required' });
        const cacheKey = `${prompt}-${context || ''}`;
        const cached = responseCache.get(cacheKey);
        if (cached && Date.now() - new Date(cached.timestamp).getTime() < CACHE_TTL) {
            return res.status(200).json(Object.assign(Object.assign({}, cached), { cached: true }));
        }
        const response = await generateResponse(prompt, context);
        const aiResponse = {
            response,
            model: 'exprezzzo-vegas-1.0',
            timestamp: new Date().toISOString()
        };
        responseCache.set(cacheKey, aiResponse);
        await logInteraction(prompt, response);
        res.status(200).json(aiResponse);
    }
    catch (error) {
        console.error('AI Handler error:', error);
        res.status(500).json({ error: 'Internal error', fallback: 'Call 702-555-XPRZ' });
    }
});
async function generateResponse(prompt, context) {
    const lower = prompt.toLowerCase();
    if (lower.includes('steak') || lower.includes('eat')) {
        return "Steak? SW at Wynn, Golden Steer (Sinatra's booth), or Bazaar Meat at Sahara.";
    }
    if (lower.includes('show')) {
        return "'O' at Bellagio or Absinthe at Caesars. For something new: Awakening at Wynn.";
    }
    if (lower.includes('club')) {
        return "Omnia: Calvin Harris tonight. XS: Chainsmokers. Jewel has Tuesday industry nights.";
    }
    return "Vegas moves fast. Call concierge at 702-555-XPRZ or use the Exprezzzo app for real-time bookings.";
}
async function logInteraction(prompt, response) {
    try {
        await admin.firestore().collection('ai_interactions').add({
            prompt,
            response,
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
            source: 'llamaRespond'
        });
    }
    catch (e) {
        console.error('Log error:', e);
    }
}
