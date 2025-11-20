import React, { useEffect, useState } from "react";

export default function ScoreCard({ score }) {
  const [displayScore, setDisplayScore] = useState(0);

  // Animation increases score gradually
  useEffect(() => {
    let start = 0;
    const end = score;
    const duration = 900; // ms
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setDisplayScore(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [score]);

  return (
    <div className="bg-white/10 p-8 rounded-xl border border-white/10 shadow-xl
                    w-full flex flex-col items-center justify-center 
                    backdrop-blur-md">

      <h2 className="text-2xl font-bold text-indigo-400 mb-2">
        Match Score
      </h2>

      <div className="text-6xl font-extrabold text-white tracking-wide
                      transition-all duration-300">
        {displayScore}%
      </div>

      <p className="mt-2 text-slate-300 text-sm">
        Your resume matches the job description by {displayScore}% 
      </p>
    </div>
  );
}
