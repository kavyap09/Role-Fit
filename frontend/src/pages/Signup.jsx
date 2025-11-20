import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { saveAuth } from "../utils/auth";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Signup failed");
        return;
      }

      // Save token + user and redirect
      saveAuth(data.token, data.user);
      navigate("/analyzer");
    } catch (err) {
      console.error("Signup error:", err);
      setError("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white">
      <Navbar />
      <main className="max-w-md mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Create Account</h1>

        <form onSubmit={handleSignup} className="space-y-4 bg-white/10 p-6 rounded-xl border border-white/10">
          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div>
            <label className="block mb-1 text-sm">Name</label>
            <input
              className="w-full p-3 rounded-lg bg-black/30 border border-white/20"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-black/30 border border-white/20"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-black/30 border border-white/20"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold bg-indigo-500 hover:bg-indigo-600 transition"
          >
            Sign Up
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
