// apps/lvgt-pwa/functions/src/index.ts
import { onRequest, HttpsError } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import fetch from "node-fetch";

const OPENAI_API_KEY = defineSecret("OPENAI_API_KEY");
const OPENAI_IMAGE_KEY = defineSecret("OPENAI_IMAGE_KEY");

export const generateImage = onRequest(
  { secrets: [OPENAI_API_KEY, OPENAI_IMAGE_KEY] },
  async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
      throw new HttpsError("invalid-argument", "Prompt is required.");
    }

    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_IMAGE_KEY.value()}`
      },
      body: JSON.stringify({
        prompt,
        n: 1,
        size: "512x512"
      })
    });

    const data = (await response.json()) as { data: { url: string }[] };
    res.send({ imageUrl: data.data[0].url });
  }
);
