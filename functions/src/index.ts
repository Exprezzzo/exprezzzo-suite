import { onRequest } from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';
import { Request, Response } from 'express';

admin.initializeApp();

export { llamaRespond } from './aiHandler';

export const healthCheck = onRequest(
  { cors: true },
  (req: Request, res: Response) => {
    res.status(200).json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'exprezzzo-functions',
      region: process.env.FUNCTION_REGION || 'us-central1'
    });
  }
);
