import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "20mb" })); // increased limit for large images

app.post("/api/nyckel-diagnosis", async (req, res) => {
  try {
    const { imageBase64 } = req.body;
    if (!imageBase64) return res.status(400).json({ error: "No image provided" });

    const nyckelResponse = await fetch(
      "https://www.nyckel.com/v1/functions/dog-health-status/invoke",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.NYCKEL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: `data:image/jpeg;base64,${imageBase64}` }),
      }
    );

    const data = await nyckelResponse.json();
    res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to call Nyckel API" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
