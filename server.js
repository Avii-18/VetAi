import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { Resend } from "resend";
import bodyParser from "body-parser";
import symptomCheckerRoute from "./routes/Symptoms.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use the symptom route
app.use("/api", symptomCheckerRoute);
// --- Enable CORS for React frontend ---
app.use(cors({
  origin: "http://localhost:5173", // React frontend URL
  methods: ["GET", "POST"],
  credentials: true
}));

// --- Parse JSON ---
app.use(express.json());

// --- MongoDB Connection ---
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB Connection Error:", err.message));

// --- Resend Setup ---
const resend = new Resend(process.env.RESEND_API_KEY);

// --- Appointment Schema ---
const appointmentSchema = new mongoose.Schema({
  petType: { type: String, required: true },
  petName: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  ownerName: { type: String, required: true },
  ownerContact: { type: String, required: true },
  ownerEmail: { type: String, required: false },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

// --- Appointment Route ---
app.post("/api/appointments", async (req, res) => {
  try {
    const newAppt = new Appointment(req.body);
    await newAppt.save();

    if (req.body.ownerEmail) {
      await resend.emails.send({
        from: "VetAi Care <onboarding@resend.dev>",
        to: req.body.ownerEmail,
        subject: "✅ Appointment Confirmed",
        text: `Hello ${req.body.ownerName}, your appointment for ${req.body.petName} (${req.body.petType}) is confirmed on ${req.body.date} at ${req.body.time}.`,
      });
    }

    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to book appointment" });
  }
});

// --- Symptom Checker Route ---


// --- Test Email Route ---
app.get("/test-email", async (req, res) => {
  try {
    await resend.emails.send({
      from: "VetAi Care <onboarding@resend.dev>",
      to: "your-email@example.com",
      subject: "Test Email from VetAi Care",
      text: "This is a test email ✅",
    });
    res.json({ message: "Test email sent!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// --- Start Server ---
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
