import { useState } from "react";

export default function InviteLinkGenerator() {
  const [role, setRole] = useState("viewer");
  const [link, setLink] = useState("");

  const generate = () => {
    const token = Math.random().toString(36).substring(2, 8);
    const url = `https://exprezzzo.app/invite?token=${token}&role=${role}`;
    setLink(url);
  };

  return (
    <div className="bg-white p-4 shadow rounded space-y-2">
      <h2 className="text-lg font-bold">Generate Invite Link</h2>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border rounded px-2 py-1"
      >
        <option value="viewer">Viewer</option>
        <option value="editor">Editor</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={generate} className="bg-green-600 text-white px-3 py-1 rounded ml-2">
        Generate
      </button>
      {link && <div className="text-sm mt-2 text-green-700">{link}</div>}
    </div>
  );
}
