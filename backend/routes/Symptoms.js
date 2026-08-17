import express from "express";
import fs from "fs";
import path from "path";
import csv from "csv-parser";

const router = express.Router();

// --- CSV file path ---
const csvFilePath = path.join(process.cwd(), "data", "cleaned_animal_diseases_prediction.csv");

// --- POST route: Get disease by symptoms ---
router.post("/get-disease-by-symptoms", (req, res) => {
  const { symptoms } = req.body;

  if (!symptoms || !symptoms.trim()) {
    return res.status(400).json({ error: "Symptoms are required" });
  }

  const userSymptoms = symptoms
    .toLowerCase()
    .split(",")
    .map((s) => s.trim());

  const results = [];

  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on("data", (row) => {
      // Assuming CSV has these columns:
      // disease, petType, age, gender, weight, symptoms
      const rowSymptoms = row.symptoms.toLowerCase();

      // Match all user symptoms
      const isMatch = userSymptoms.every((sym) => rowSymptoms.includes(sym));

      if (isMatch) {
        results.push(row);
      }
    })
    .on("end", () => {
      if (results.length === 0) {
        return res.json([{ message: "No diseases found for given symptoms" }]);
      }
      res.json(results);
    })
    .on("error", (err) => {
      console.error("Error reading CSV:", err);
      res.status(500).json({ error: "Internal server error" });
    });
});

export default router;
