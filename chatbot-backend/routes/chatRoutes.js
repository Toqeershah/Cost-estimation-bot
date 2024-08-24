const express = require('express');
const router = express.Router();
const { Configuration, OpenAIApi } = require('openai');
const Message = require('../models/Chat'); // Ensure you have the Message model created

require('dotenv').config();

// const configuration = new Configuration({
//   apiKey: process.env.your_api_key_here,
// });
// const openai = new OpenAIApi(configuration);

// router.post('/', async (req, res) => {
//   const { message } = req.body;
//   try {
//     const response = await openai.createChatCompletion({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: message }],
//     });
//     const reply = response.data.choices[0].message.content;
//     const newMessage = new Message({ text: reply, sender: 'ChatGPT' });
//     await newMessage.save();
//     res.status(200).json(newMessage);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

module.exports = router;
