// server.js  (drop in your repo root)
import express from 'express';
import path     from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app  = express();
const PORT = process.env.PORT || 8080;

/* serve static files in /public */
app.use(express.static(path.join(__dirname, 'public')));

/* answer GET / with an html page */
app.get('/', (_req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

app.listen(PORT, () => console.log(`✅  App listening on ${PORT}`));
