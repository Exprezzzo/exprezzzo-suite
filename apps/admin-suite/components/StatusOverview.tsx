const services = [
  { name: "Firebase Hosting", status: "online" },
  { name: "Firestore", status: "online" },
  { name: "OpenAI", status: "online" }
];

const StatusTile = ({ name, status }: { name: string; status: string }) => (
  <div className="bg-white p-4 shadow rounded text-center">
    <p className="text-sm font-medium">{name}</p>
    <p className={`font-bold ${status === "online" ? "text-green-600" : "text-red-500"}`}>
      {status}
    </p>
  </div>
);

export default function StatusOverview() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {services.map((s, i) => (
        <StatusTile key={i} name={s.name} status={s.status} />
      ))}
    </div>
  );
}
