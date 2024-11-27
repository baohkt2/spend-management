// app/dashboard/page.js
"use client";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [spends, setSpends] = useState([]);
  const [newSpend, setNewSpend] = useState({ category: "", amount: "", date: "" });

  useEffect(() => {
    const fetchSpends = async () => {
      const res = await fetch("/api/spends");
      const data = await res.json();
      setSpends(data || []);
    };
    fetchSpends();
  }, []);

  const addSpend = async (e) => {
    e.preventDefault();
    await fetch("/api/spends", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSpend),
    });
    setNewSpend({ category: "", amount: "", date: "" });
  };

  return (
    <div>
      <h1>My Spends</h1>
      <form onSubmit={addSpend}>
        <input
          type="text"
          placeholder="Category"
          value={newSpend.category}
          onChange={(e) => setNewSpend({ ...newSpend, category: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newSpend.amount}
          onChange={(e) => setNewSpend({ ...newSpend, amount: e.target.value })}
        />
        <input
          type="date"
          placeholder="Date"
          value={newSpend.date}
          onChange={(e) => setNewSpend({ ...newSpend, date: e.target.value })}
        />
        <button type="submit">Add Spend</button>
      </form>
      <ul>
        {spends.map((spend, idx) => (
          <li key={idx}>{spend[1]} - {spend[2]} on {spend[3]}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
