import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);

  useEffect(() => {
    // This is a very basic UI-only lockout. In a real app, this would involve authentication.
    // For demonstration, we'll use a simple prompt or a local storage flag.
    const storedUnlock = localStorage.getItem('adminUnlocked');
    if (storedUnlock === 'true') {
      setIsAdminUnlocked(true);
    } else if (router.pathname.startsWith('/eeis/admin')) {
      const password = prompt("Enter admin password to unlock:");
      if (password === "admin123") { // Replace with a more secure mechanism in a real app
        setIsAdminUnlocked(true);
        localStorage.setItem('adminUnlocked', 'true');
      } else {
        alert("Incorrect password. Redirecting to homepage.");
        router.push('/');
      }
    }
  }, [router.pathname]);

  if (router.pathname.startsWith('/eeis/admin') && !isAdminUnlocked) {
    return null; // Or a loading spinner, or a redirect message
  }

  return <Component {...pageProps} />;
}

export default MyApp;
