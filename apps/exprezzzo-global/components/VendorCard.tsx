// File: apps/exprezzzo-global/components/VendorCard.tsx

"use client";

import Link from "next/link";

type Props = {
  id: string;
  name: string;
  category: string;
  zone: string;
  tags?: string[];
  bookable?: boolean;
};

export default function VendorCard({
  id,
  name,
  category,
  zone,
  tags = [],
  bookable,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:scale-[1.01] transition">
      <h2 className="text-lg font-bold mb-1">{name}</h2>
      <p className="text-sm text-gray-600 mb-1">{category} · {zone}</p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1 text-xs text-white mb-2">
          {tags.map((tag) => (
            <span key={tag} className="bg-black rounded-full px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="flex justify-between items-center">
        <Link
          href={`/vendor/${id}`}
          className="text-sm text-blue-600 underline"
        >
          View
        </Link>
        {bookable && (
          <Link
            href={`/vendor/${id}#book`}
            className="bg-black text-white text-sm px-3 py-1 rounded-full"
          >
            Book
          </Link>
        )}
      </div>
    </div>
  );
}