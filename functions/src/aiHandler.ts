// @ai-reasoning: Complete Firebase Functions v2 with all imports
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
  async (req: Request, res: Response): Promise<void> => {
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    try {
      const { prompt, context, maxTokens = 256 }: AIRequest = req.body;
      if (!prompt) {
        res.status(400).json({ error: 'Prompt is required' });
        return;
      }

      const cacheKey = `${prompt}-${context || ''}`;
      const cached = responseCache.get(cacheKey);

      if (cached && Date.now() - new Date(cached.timestamp).getTime() < CACHE_TTL) {
        res.status(200).json({ ...cached, cached: true });
        return;
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
  
  if (lower.includes('steak') || lower.includes('restaurant') || lower.includes('food') || lower.includes('eat')) {
    return "For steaks: SW Steakhouse at Wynn (get table 89 with Strip views), Golden Steer on Sahara (Sinatra's booth - ask for Mario). " +
           "Hidden gems: Lotus of Siam (best Thai in America), Raku (Japanese robatayaki). " +
           "Power lunch: Mon Ami Gabi patio facing Bellagio fountains.";
  }
  
  if (lower.includes('show') || lower.includes('cirque') || lower.includes('entertainment')) {
    return "'O' by Cirque at Bellagio (section 103 for best views), Absinthe at Caesars (raw & hilarious - first 5 rows). " +
           "New & hot: Awakening at Wynn. Magic: David Copperfield at MGM.";
  }
  
  if (lower.includes('vip') || lower.includes('club') || lower.includes('bottle') || lower.includes('table')) {
    return "Tonight: Omnia has Calvin Harris (dance floor tables $3k), XS has Chainsmokers (poolside cabanas available). " +
           "Industry secret: Tuesday nights at Jewel, half-price bottles with casino employee ID.";
  }
  
  if (lower.includes('car') || lower.includes('limo') || lower.includes('transport') || lower.includes('jet')) {
    return "Executive transport: Presidential Limo (24/7 black SUVs). " +
           "Private jets: JSX from LA $189, or Flexjet for true private. " +
           "Bell Trans provides tarmac service. Uber Black averages $30 Strip-to-Strip.";
  }
  
  if (lower.includes('hotel') || lower.includes('room') || lower.includes('suite')) {
    return "Best suites: Wynn Tower Suites (ask for corner facing north), Four Seasons (non-gaming luxury). " +
           "Value luxury: Cosmopolitan Terrace Studios. Hidden gem: NoMad inside Park MGM.";
  }
  
  return "Vegas moves fast. For real-time bookings and insider access, " +
         "text our VIP concierge at 702-555-XPRZ or mention code 'PHOENIX' for priority handling.";
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