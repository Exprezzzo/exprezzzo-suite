export default function VendorSkeleton() {
  return (
    <div className="animate-pulse bg-[#2c2c2c] rounded-2xl overflow-hidden">
      <div className="h-40 bg-[#3a3a3a]" />
      <div className="p-4 space-y-2">
        <div className="h-4 w-3/4 bg-[#444] rounded" />
        <div className="h-3 w-full bg-[#444] rounded" />
        <div className="h-3 w-1/2 bg-[#444] rounded" />
      </div>
    </div>
  );
}
