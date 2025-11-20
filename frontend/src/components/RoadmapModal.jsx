import React from "react";

export default function RoadmapModal({ roadmap, onClose }) {
  if (!roadmap) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl w-full max-w-lg relative animate-fade-in">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white bg-red-500 hover:bg-red-600 px-2 py-1 text-sm rounded"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-indigo-300">
          {roadmap.title}
        </h2>

        {/* Steps */}
        <ul className="space-y-2 mb-4">
          {roadmap.steps.map((step, index) => (
            <li
              key={index}
              className="bg-white/10 p-3 rounded-lg border border-white/10 text-sm"
            >
              • {step}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="space-y-2">
          <a
            href={roadmap.youtube}
            target="_blank"
            className="block text-indigo-400 underline"
          >
            <i className="fa-brands fa-youtube mr-2 text-red-500"></i>
            Watch YouTube Tutorial
          </a>

          <a
            href={roadmap.website}
            target="_blank"
            className="block text-indigo-400 underline"
          >
            <i className="fa-solid fa-scroll mr-2 text-yellow-400"></i>
            Detailed Website Guide
          </a>
        </div>
      </div>
    </div>
  );
}
