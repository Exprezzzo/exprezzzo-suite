const functions = require("firebase-functions/v2/https");
const { onRequest } = functions;
const { Configuration, OpenAIApi } = require("openai");

exports.chat = onRequest({ cors: true }, async (req, res) => {
  const userMsg = req.body?.message || "Hello!";
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: userMsg }],
    });
    res.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).send("OpenAI error");
  }
});