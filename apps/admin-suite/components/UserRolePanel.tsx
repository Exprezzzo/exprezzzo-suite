import { useState } from "react";

const UserRolePanel = () => {
  const [users, setUsers] = useState([
    { email: "admin@example.com", isAdmin: true },
    { email: "viewer@example.com", isAdmin: false }
  ]);

  const toggleAdmin = (index: number) => {
    const updated = [...users];
    updated[index].isAdmin = !updated[index].isAdmin;
    setUsers(updated);
  };

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-lg font-bold mb-2">User Roles</h2>
      {users.map((user, i) => (
        <div key={i} className="flex justify-between items-center py-1">
          <span>{user.email}</span>
          <button
            onClick={() => toggleAdmin(i)}
            className={`px-3 py-1 rounded text-white ${
              user.isAdmin ? "bg-red-500" : "bg-blue-500"
            }`}
          >
            {user.isAdmin ? "Revoke Admin" : "Make Admin"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserRolePanel;
