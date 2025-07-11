// @ai-reasoning: Firebase Functions v2 with clean cache, logging, and smart fallback
import { onRequest } from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';
import { Request, Response } from 'express';

interface AIRequest {
  prompt: string;
  context?: string;
  maxTokens?: number;
}

interface AIResponse {
  response: string;
  model: string;
  timestamp: string;
  cached?: boolean;
}

const responseCache = new Map<string, AIResponse>();
const CACHE_TTL = 3600000;

export const llamaRespond = onRequest(
  {
    minInstances: 1,
    maxInstances: 10,
    timeoutSeconds: 60,
    memory: '1GiB',
    cors: true
  },
  async (req: Request, res: Response) => {
    if (req.method === 'OPTIONS') return res.status(204).send('');
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    try {
      const { prompt, context, maxTokens = 256 }: AIRequest = req.body;
      if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

      const cacheKey = `${prompt}-${context || ''}`;
      const cached = responseCache.get(cacheKey);

      if (cached && Date.now() - new Date(cached.timestamp).getTime() < CACHE_TTL) {
        return res.status(200).json({ ...cached, cached: true });
      }

      const response = await generateResponse(prompt, context);
      const aiResponse: AIResponse = {
        response,
        model: 'exprezzzo-vegas-1.0',
        timestamp: new Date().toISOString()
      };

      responseCache.set(cacheKey, aiResponse);
      await logInteraction(prompt, response);
      res.status(200).json(aiResponse);
    } catch (error) {
      console.error('AI Handler error:', error);
      res.status(500).json({ error: 'Internal error', fallback: 'Call 702-555-XPRZ' });
    }
  }
);

async function generateResponse(prompt: string, context?: string): Promise<string> {
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

async function logInteraction(prompt: string, response: string): Promise<void> {
  try {
    await admin.firestore().collection('ai_interactions').add({
      prompt,
      response,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      source: 'llamaRespond'
    });
  } catch (e) {
    console.error('Log error:', e);
  }
}
