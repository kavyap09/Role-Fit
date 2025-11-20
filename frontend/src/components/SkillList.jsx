import React from "react";

export default function SkillList({ title, skills, color, onRoadmap, showRoadmap }) {
  return (
    <div className={`p-6 rounded-xl border ${color} bg-white/5`}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      {skills.length === 0 ? (
        <p className="text-slate-400 text-sm">None 🎉</p>
      ) : (
        <ul className="space-y-3">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-white/10 px-4 py-2 rounded-lg"
            >
              <span className="capitalize">{skill}</span>

              {/* ONLY show roadmap for missing skills */}
              {showRoadmap && (
                <button
                  onClick={() => onRoadmap(skill)}
                  className="px-3 py-1 text-xs bg-indigo-600 hover:bg-indigo-700 rounded-md"
                >
                  Roadmap
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
