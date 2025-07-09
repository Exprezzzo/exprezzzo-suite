"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateImage = void 0;
// apps/lvgt-pwa/functions/src/index.ts
const https_1 = require("firebase-functions/v2/https");
const params_1 = require("firebase-functions/params");
const node_fetch_1 = __importDefault(require("node-fetch"));
const OPENAI_API_KEY = (0, params_1.defineSecret)("OPENAI_API_KEY");
const OPENAI_IMAGE_KEY = (0, params_1.defineSecret)("OPENAI_IMAGE_KEY");
exports.generateImage = (0, https_1.onRequest)({ secrets: [OPENAI_API_KEY, OPENAI_IMAGE_KEY] }, async (req, res) => {
    const { prompt } = req.body;
    if (!prompt) {
        throw new https_1.HttpsError("invalid-argument", "Prompt is required.");
    }
    const response = await (0, node_fetch_1.default)("https://api.openai.com/v1/images/generations", {
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
    const data = (await response.json());
    res.send({ imageUrl: data.data[0].url });
});
