'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Lazy-load the LoginForm component without SSR
const LoginForm = dynamic(() => import('@/components/LoginForm'), {
  ssr: false,
  loading: () => <p className="text-center mt-10 text-white">Loading login...</p>,
});

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md p-6 space-y-4 rounded-xl border border-gray-700 shadow-md">
        <h1 className="text-3xl font-bold text-center">Sign in to Exprezzzo</h1>
        <Suspense fallback={<p>Loading form…</p>}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}