const express = require("express");
const multer = require("multer");
const { analyzePDF } = require("../controllers/analyzerController");
const auth = require("../middleware/authMiddleware"); // ⬅ new

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// 🔒 now only logged-in users can hit this
router.post("/analyze-pdf", auth, upload.single("resume"), analyzePDF);

module.exports = router;
