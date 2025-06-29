const StatTile = ({ label, value }: { label: string; value: string | number }) => (
  <div className="bg-white p-4 shadow rounded text-center">
    <p className="text-xs uppercase text-gray-500">{label}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default function AdminDashboardTiles() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <StatTile label="Users" value={5} />
      <StatTile label="Deploys" value={27} />
    </div>
  );
}
