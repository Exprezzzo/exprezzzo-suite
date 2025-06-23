import express from "express";
const app = express();
const PORT = process.env.PORT || 8080;

// --- NEW: root route so health-checks succeed ---
app.get("/", (_req, res) => {
  res.send("Hello from Expresszzzo 🎉");
});

// any other API / static routes go here …

app.listen(PORT, () => console.log(`Server on ${PORT}`));
