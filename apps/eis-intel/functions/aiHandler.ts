// /functions/aiHandler.ts
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
const { spawn } = require('child_process');
admin.initializeApp();

export const llamaRespond = functions.https.onRequest(async (req, res) => {
  const prompt = req.body.prompt;
  const llama = spawn('./llama.cpp/main', ['-p', prompt]);
  let data = '';
  llama.stdout.on('data', chunk => data += chunk);
  llama.on('close', () => res.send({ response: data }));
});

// firebase.json (partial)
{
  "hosting": {
    "public": "ai/webllm",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
  },
  "functions": {
    "source": "functions"
  }
}
