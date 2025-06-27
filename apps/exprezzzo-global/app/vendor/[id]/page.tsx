export default function VendorDetailPage({ params }: { params: { id: string } }) {
  return <div className="p-4 text-xl font-bold">Vendor ID: {params.id}</div>;
}