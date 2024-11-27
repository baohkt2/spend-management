// app/admin/users/page.js
"use client";
import { useState, useEffect } from "react";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ id: "", name: "", role: "" });

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data || []);
    };
    fetchUsers();
  }, []);

  const addUser = async (e) => {
    e.preventDefault();
    await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    setNewUser({ id: "", name: "", role: "" });
  };

  return (
    <div>
      <h1>Manage Users</h1>
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="ID"
          value={newUser.id}
          onChange={(e) => setNewUser({ ...newUser, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        />
        <button type="submit">Add User</button>
      </form>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>{user[1]} - {user[2]}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminUsers;
