import "./globals.css";
import { Inter } from "next/font/google";
import FooterNav from "@/components/FooterNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vegas Good Times",
  description: "Concierge for Vegas experiences",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <div className="pb-24">{children}</div>
        <FooterNav />
      </body>
    </html>
  );
}
