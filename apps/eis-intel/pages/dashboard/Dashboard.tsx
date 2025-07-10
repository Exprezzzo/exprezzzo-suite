// apps/eis-intel/pages/dashboard/Dashboard.tsx
import { useEffect, useState } from "react";
import { getActiveEvents } from "../../lib/eventBOM";

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getActiveEvents().then(setEvents);
  }, []);
  return (
    <div>
      <h2>Event BOM Dashboard</h2>
      {events.length === 0 && <p>No active events yet.</p>}
      <ul>
        {events.map(ev => (
          <li key={ev.id}>
            {ev.name} ({ev.status}) — {ev.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
