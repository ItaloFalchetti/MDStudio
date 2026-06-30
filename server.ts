import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT ?? 3001;

const IG_TOKEN = process.env.INSTAGRAM_TOKEN;
const IG_FIELDS = "id,media_type,media_url,thumbnail_url,permalink,caption";
const IG_LIMIT = 4;

app.get("/api/instagram", async (_req, res) => {
  if (!IG_TOKEN) {
    return res.status(503).json({ error: "INSTAGRAM_TOKEN not configured" });
  }

  try {
    const url = `https://graph.instagram.com/me/media?fields=${IG_FIELDS}&limit=${IG_LIMIT}&access_token=${IG_TOKEN}`;
    const response = await fetch(url);

    if (!response.ok) {
      const body = await response.text();
      return res.status(response.status).json({ error: body });
    }

    const data = await response.json();
    return res.json(data);
  } catch (err) {
    return res.status(500).json({ error: String(err) });
  }
});

// Servir el build de producción
app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
