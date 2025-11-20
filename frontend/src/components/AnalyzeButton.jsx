import React from "react";

export default function AnalyzeButton({ onClick }) {
  return (
    <div className="flex justify-end">
      <button
        onClick={onClick}
        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-lg rounded-xl font-medium shadow-lg transition"
      >
        Analyze Fit
      </button>
    </div>
  );
}
