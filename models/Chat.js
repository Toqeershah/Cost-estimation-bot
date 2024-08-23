const mongoose = require('mongoose');

// const messageSchema = new mongoose.Schema({
//   text: String,
//   sender: String,
//   timestamp: { type: Date, default: Date.now },
// });

// const Message = mongoose.model('Message', messageSchema);

// module.exports = Message;


// models/Chat.js
const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  userMessage: {
    type: String,
    required: true,
  },
  botResponse: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Chat', ChatSchema);