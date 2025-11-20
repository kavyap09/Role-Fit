import React from "react";

export default function HowItWorks() {
  return (
    <section className="mt-28 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

      <div className="grid md:grid-cols-4 gap-8">

        {/* Step 1 */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-sm hover:shadow-xl transition flex flex-col items-center text-center">
  <i className="fa-solid fa-file-arrow-up text-3xl mb-4 text-indigo-400"></i>
          <h3 className="text-xl font-semibold mb-3">1. Upload Resume</h3>
          <p className="text-slate-300">Upload your resume to begin analysis.</p>
        </div>

        {/* Step 2 */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-sm hover:shadow-xl transition flex flex-col items-center text-center">
  <i className="fa-solid fa-clipboard-list text-3xl mb-4 text-indigo-400"></i>
          <h3 className="text-xl font-semibold mb-3">2. Add Job Description</h3>
          <p className="text-slate-300">Paste the job details for comparison.</p>
        </div>

        {/* Step 3 */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-sm hover:shadow-xl transition flex flex-col items-center text-center">
   <i className="fa-solid fa-chart-simple text-3xl mb-4 text-indigo-400"></i>
          <h3 className="text-xl font-semibold mb-3">3. Get Skill Gap</h3>
          <p className="text-slate-300">See your match score & missing skills.</p>
        </div>

        {/* ⭐ NEW STEP: ROADMAPS */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-sm hover:shadow-xl transition flex flex-col items-center text-center">
 <i className="fa-solid  fa-chalkboard-user text-3xl mb-4 text-indigo-400"></i>
         <h3 className="text-xl font-semibold mb-3">4. Get Roadmaps</h3>
          <p className="text-slate-300">
            Click any missing skill to view its learning roadmap.
          </p>
        </div>

      </div>
    </section>
  );
}
