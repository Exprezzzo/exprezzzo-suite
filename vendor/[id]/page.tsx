interface PageProps {
  params: { id: string };
}

export default async function VendorDetailPage({ params }: PageProps) {
  return (
    <div className="p-4 text-xl font-bold">
      Vendor Details for ID: {params.id}
    </div>
  );
}
