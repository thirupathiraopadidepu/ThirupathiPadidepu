import "dotenv/config";
import express from "express";
import cors from "cors";
import Groq from "groq-sdk";

const app = express();

app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

/* ================= CHAT API ================= */
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ error: "Message required" });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `
You are TP Freelance Assistant for Thirupathi Padidepu.

Services:
- Logo & Branding
- Web Development (React, .NET)
- SPA & SaaS Apps
- Posters & Graphic Design
- Custom AI Tools

Contact: +91 7036499748
`,
        },
        { role: "user", content: message },
      ],
      max_tokens: 300,
    });

    res.json({
      reply: completion.choices[0].message.content,
    });
  } catch (err) {
    console.error("Chat Error:", err);
    res.status(500).json({
      error: "Server error",
      details: err.message,
    });
  }
});

/* ================= HEALTH CHECK ================= */
app.get("/", (req, res) => {
  res.send("TP Chat Backend is running ✅");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
