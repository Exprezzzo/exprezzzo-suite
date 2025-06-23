// app/layout.tsx
import "./globals.css";           // will work even if the file is empty

export const metadata = {
  title: "LVGT PWA",
  description: "Las Vegas Good Times Progressive Web App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
