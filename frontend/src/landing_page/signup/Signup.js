// frontend/src/Signup.jsx
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/api/signup", form);
      localStorage.setItem("token", res.data.token);

      // Redirect to dashboard
      window.location.href = "http://localhost:3001"; // dashboard URL
    } catch (err) {
      setMsg(err.response?.data?.msg || "Error signing up");
    }
  };

  return (
    
     <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Sign up</h2>
        {msg && <p style={styles.error}>{msg}</p>}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
          <input
            style={styles.input}
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            required
          />
          <input
            style={styles.input}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            type="password"
            required
          />
          <button type="submit" style={styles.button}>Sign up</button>
        </form>
      </div>
      <p>{msg}</p>
    </div>
  );
}

// Inline styles (Zerodha-like clean style)
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    backgroundColor: "#f8f9fa",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px 30px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "700px",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    color: "#1c1c1c",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px 15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#f05a28", // Zerodha-orange color
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  },
  error: {
    color: "red",
    marginBottom: "10px",
    fontSize: "14px",
  },
};
