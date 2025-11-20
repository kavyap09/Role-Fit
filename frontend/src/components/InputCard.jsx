import React from "react";

export default function InputCard({ title, placeholder, value, onChange }) {
  return (
    <div className="bg-white/10 p-6 rounded-xl border border-white/10 shadow-md backdrop-blur">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-48 p-4 bg-black/20 rounded-lg border border-white/20 text-white focus:outline-none focus:border-indigo-500"
      ></textarea>
    </div>
  );
}
