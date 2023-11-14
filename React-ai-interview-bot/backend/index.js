import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post("/", async (request, response) => {
  const { chats } = request.body;

  const result = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          " I want you to act as an expert frontend software developer. You are asked to take my technical interview for the position of a frontend software developer and share your feedback. Ask me one question about React at a time, and wait for my response before moving on to the next question ",
      },
      ...chats,
    ],
  });

  response.json({
    output: result.data.choices[0].message,
  });
});

app.post("/node", async (request, response) => {
  const { chats } = request.body;

  const result = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          " I want you to act as an expert Nodejs software developer. You are asked to take my technical interview for the position of a frontend software developer and share your feedback. Ask me one question about React at a time, and wait for my response before moving on to the next question ",
      },
      ...chats,
    ],
  });

  response.json({
    output: result.data.choices[0].message,
  });
});

app.post("/java", async (request, response) => {
  const { chats } = request.body;

  const result = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          " I want you to act as an expert Java software developer. You are asked to take my technical interview for the position of a frontend software developer and share your feedback. Ask me one question about React at a time, and wait for my response before moving on to the next question ",
      },
      ...chats,
    ],
  });

  response.json({
    output: result.data.choices[0].message,
  });
});

app.listen(process.env.port, () => {
  console.log(`listening on port ${process.env.port}`);
});
