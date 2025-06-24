import "./globals.css";

export const metadata = {
  title: "Exprezzzo Suite",
  description: "Global booking powered by Exprezzzo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
