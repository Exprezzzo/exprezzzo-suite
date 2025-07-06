#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const requiredEnvVars = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID'
];

const envFile = path.join(process.cwd(), '.env.local');

if (!fs.existsSync(envFile)) {
  console.error('❌ .env.local file not found!');
  const exampleFile = path.join(process.cwd(), '.env.local.example');
  if (fs.existsSync(exampleFile)) {
    fs.copyFileSync(exampleFile, envFile);
    console.error('⚠️  Please fill in the values in .env.local');
    process.exit(1);
  } else {
    console.error('❌ .env.local.example not found either!');
    process.exit(1);
  }
}

require('dotenv').config({ path: envFile });

const missing = requiredEnvVars.filter(v => !process.env[v]);
if (missing.length > 0) {
  console.error('❌ Missing required environment variables:');
  missing.forEach(v => console.error(`   - ${v}`));
  process.exit(1);
}

console.log('✅ All required environment variables are set!');
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
if (!/^[a-z0-9-]+$/.test(projectId)) {
  console.error('❌ Invalid Firebase project ID format');
  process.exit(1);
}
console.log(`📦 Project ID: ${projectId}\n🚀 Ready for deployment!`);
