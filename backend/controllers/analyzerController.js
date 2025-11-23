// // backend/controllers/analyzerController.js
const pdfParse = require("pdf-parse-fixed");
const fs = require("fs");

const SKILLS = require("../utils/skills.js");

async function analyzePDF(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No resume uploaded" });
    }

    const jobText = (req.body.jobText || "").toLowerCase();

    // Read PDF from uploads folder
    const pdfBuffer = fs.readFileSync(req.file.path);

    // Extract text using pdf-parse
    const result = await pdfParse(pdfBuffer);
    const resumeText = (result.text || "").toLowerCase();

    // Match skills
    const matchedSkills = SKILLS.filter(
      skill => resumeText.includes(skill) && jobText.includes(skill)
    );

    const missingSkills = SKILLS.filter(
      skill => jobText.includes(skill) && !resumeText.includes(skill)
    );

    const total = matchedSkills.length + missingSkills.length;
    const score = total === 0 ? 0 : Math.round((matchedSkills.length / total) * 100);

    return res.json({
      score,
      matchedSkills,
      missingSkills,
      extractedSample: resumeText.slice(0, 150)
    });

  } catch (err) {
    console.error("❌ analyzePDF Error:", err);
    return res.status(500).json({ error: "Failed to analyze resume" });
  }
}

module.exports = { analyzePDF };
