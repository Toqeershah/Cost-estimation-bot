
const Chat = require('../models/chatSchema');

const getChatHistory = async (req, res) => {
  try {
    const chatHistory = await Chat.find().sort({ timestamp: -1 });
    res.json(chatHistory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createChatMessage = async (req, res) => {
  const { userMessage, botResponse } = req.body;

  const newChat = new Chat({
    userMessage,
    botResponse,
  });

  try {
    const savedChat = await newChat.save();
    res.status(201).json(savedChat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getChatHistory,
  createChatMessage,
};
