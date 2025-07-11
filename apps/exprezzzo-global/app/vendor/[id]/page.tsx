﻿// apps/exprezzzo-global/app/vendor/[id]/page.tsx
export default async function VendorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Vendor: {id}</h1>
      <p>This is the vendor detail page.</p>
    </div>
  );
}