import { useState } from "react";

const apps = [
  { name: "Global", url: "https://exprezzzo-sandbox-admin.web.app/" },
  { name: "LVGT", url: "https://lvgt-web-mobile.web.app/" },
  { name: "EIS Intel", url: "https://eis-intel-web.web.app/" }
];

export default function ProjectSwitcher() {
  const [selected, setSelected] = useState(apps[0].url);

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold mb-2">Switch Project</h2>
      <div className="space-x-2 mb-2">
        {apps.map((app, i) => (
          <button
            key={i}
            onClick={() => setSelected(app.url)}
            className="bg-gray-700 text-white px-3 py-1 rounded"
          >
            {app.name}
          </button>
        ))}
      </div>
      <iframe
        src={selected}
        className="w-full border h-[600px] rounded"
        title="Project Preview"
      ></iframe>
    </div>
  );
}
