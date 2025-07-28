import React, { useEffect, useState } from "react";
import axios from "axios";

const Billing = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.error("Error fetching users:", err);
        setError("Unable to connect to the backend.");
      });
  }, []);

  return (
    <div style={{ padding: "30px", background: "#f4f7fa", minHeight: "100vh" }}>
      <h2 style={{ marginBottom: "20px", fontWeight: "bold" }}>Billing Dashboard</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {users.map((user, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                background: "#fff",
                padding: "20px",
                width: "300px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h4 style={{ marginBottom: "10px" }}>{user.name}</h4>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Plan:</strong> Pro</p>
              <p><strong>Billing Date:</strong> 27 July 2025</p>
              <p><strong>Status:</strong> <span style={{ color: "green", fontWeight: "bold" }}>Paid</span></p>
              <button style={{ marginTop: "10px", padding: "5px 10px" }}>Download Invoice</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Billing;
