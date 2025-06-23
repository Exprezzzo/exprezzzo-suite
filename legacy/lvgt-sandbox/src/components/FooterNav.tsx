"use client";

import { Home, Search, User } from "lucide-react";
import Link from "next/link";

export default function FooterNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black to-[#1a1a1a] border-t border-[#333] text-[#FFD700] z-50">
      <div className="flex justify-around items-center py-3">
        <Link href="/" className="flex flex-col items-center text-sm">
          <Home size={22} />
          Home
        </Link>
        <Link href="/search" className="flex flex-col items-center text-sm">
          <Search size={22} />
          Search
        </Link>
        <Link href="/profile" className="flex flex-col items-center text-sm">
          <User size={22} />
          Profile
        </Link>
      </div>
    </nav>
  );
}
