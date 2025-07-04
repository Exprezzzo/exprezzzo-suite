// apps/lvgt-pwa/pages/404.tsx

export default function Custom404() {
  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-300 mb-6">The page you’re looking for doesn’t exist.</p>
        <a
          href="/"
          className="bg-gradient-to-r from-red-600 to-yellow-400 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Return to Home
        </a>
      </div>
    </>
  );
}

export const dynamic = "force-static";
