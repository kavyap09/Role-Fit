import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AnalyzeButton from "../components/AnalyzeButton";
import ScoreCard from "../components/ScoreCard";
import SkillList from "../components/SkillList";
import Footer from "../components/Footer";
import RoadmapModal from "../components/RoadmapModal";  // ⭐ MODAL IMPORT
import { getToken } from "../utils/auth";
import roadmaps from "../utils/roadmaps.js";



export default function Analyzer() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobText, setJobText] = useState("");
  const [score, setScore] = useState(null);
  const [matchedSkills, setMatchedSkills] = useState([]);
  const [missingSkills, setMissingSkills] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  // ⭐ Roadmap Modal State
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);

  // ⭐ Function to open roadmap modal
  const openRoadmap = (skill) => {
    const key = skill.toLowerCase();
    const roadmap = roadmaps[key];

    if (!roadmap) {
      alert(`No roadmap available for ${skill}`);
      return;
    }

    setSelectedRoadmap(roadmap);
  };

  const analyzeNow = async () => {
    setErrorMsg("");

    if (!resumeFile) {
      alert("Please upload a PDF resume");
      return;
    }

    if (!jobText.trim()) {
      alert("Please paste job description");
      return;
    }

    // Reset old results
    setScore(null);
    setMatchedSkills([]);
    setMissingSkills([]);

    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("jobText", jobText);

    try {
      const res = await fetch("http://localhost:5000/api/analyze-pdf", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${getToken() || ""}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Failed to analyze resume");
        return;
      }

      setScore(data.score || 0);
      setMatchedSkills(data.matchedSkills || []);
      setMissingSkills(data.missingSkills || []);
    } catch (err) {
      console.error("Error analyzing PDF:", err);
      setErrorMsg("Unexpected error occurred while analyzing.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center mb-4">RoleFit Analyzer</h1>

        <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          Upload your resume PDF and paste the job description to calculate your match score
          and identify missing skills.
        </p>

        {/* Upload + Job Description Inputs */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Resume Upload */}
          <div className="bg-white/10 p-6 rounded-xl border border-white/10 shadow-md">
            <h3 className="text-xl font-semibold mb-3">Upload Resume (PDF)</h3>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setResumeFile(e.target.files[0])}
              className="w-full bg-black/20 p-3 rounded-lg border border-white/20 text-white"
            />
          </div>

          {/* Job Description */}
          <div className="bg-white/10 p-6 rounded-xl border border-white/10 shadow-md">
            <h3 className="text-xl font-semibold mb-3">Job Description</h3>
            <textarea
              value={jobText}
              onChange={(e) => setJobText(e.target.value)}
              placeholder="Paste job description here..."
              className="w-full h-48 p-4 bg-black/20 rounded-lg border border-white/20 text-white"
            />
          </div>
        </div>

        {/* Analyze Button */}
        <div className="mt-6">
          <AnalyzeButton onClick={analyzeNow} />
        </div>

        {/* Error Message */}
        {errorMsg && (
          <p className="text-red-400 text-sm mt-3 text-center">{errorMsg}</p>
        )}

        {/* Results Section */}
     {score !== null && (
  <div className="mt-10 space-y-6">

    {/* FULL-WIDTH SCORE CARD */}
    <div>
      <ScoreCard score={score} fullWidth />
    </div>

    {/* TWO BOXES BELOW */}
    <div className="grid md:grid-cols-2 gap-6">
      <SkillList
        title="Matched Skills"
        skills={matchedSkills}
        color="border-green-400 text-green-300"
        showRoadmap={false}
      />

      <SkillList
        title="Missing Skills"
        skills={missingSkills}
        color="border-red-400 text-red-300 "
        onRoadmap={openRoadmap}
        showRoadmap={true}
      />
    </div>

  </div>
)}


        {/* ⭐ ROADMAP MODAL */}
        {selectedRoadmap && (
          <RoadmapModal
            roadmap={selectedRoadmap}
            onClose={() => setSelectedRoadmap(null)}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
