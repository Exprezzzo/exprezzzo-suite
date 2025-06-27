export default function VendorDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="p-4 text-xl font-bold">
      Vendor Details for ID: {params.id}
    </div>
  );
}