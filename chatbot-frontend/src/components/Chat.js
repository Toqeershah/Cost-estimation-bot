
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser, FaRobot } from 'react-icons/fa';
import Helpers from '../Config/Helpers'

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  //   useEffect(() => {
  //     // Fetch chat history on component mount
  //     const fetchChatHistory = async () => {
  //       try {
  //         const response = await axios.get('http://localhost:5000/chat');
  //         setMessages(response.data);
  //       } catch (error) {
  //         console.error('Error fetching chat history:', error);
  //       }
  //     };
  //     fetchChatHistory();
  //   }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userInput.trim()) {
      Helpers.toast("error", "Please type a message before sending");
      return;
    }

    const userMessage = {
      // userMessage: userInput,
      // botResponse: "Processing your request...",
    };

    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post('http://localhost:5000/chat', {
        userMessage: userInput,
        botResponse: "Your actual bot response goes here...",
      });
      Helpers.toast("success", "Message Sent")
      setMessages((prevMessages) => [...prevMessages, response.data]);
    } catch (error) {
      console.error('Error sending message:', error);
      Helpers.toast("error", "Error sending message")
    }

    setUserInput('');
  };

  return (
    <div className="min-h-screen bg-gray-500 flex flex-col items-center justify-center p-4">
      <div className="bg-gray-600 shadow-lg rounded-lg p-6 max-w-2xl w-full flex flex-col min-h-48">
        <h1 className="text-2xl font-bold mb-4 text-center">Chatbot</h1>
        <div className="flex-1 space-y-4 overflow-auto mb-4">
          {messages.map((message, index) => (
            <div key={index} className="space-y-2">
              {message.userMessage && (
                <div className="flex items-center space-x-2">
                  <FaUser className="text-blue-500" />
                  <div className="bg-blue-200 p-2 rounded-lg">
                    <p>{message.userMessage}</p>
                  </div>
                </div>
              )}
              {message.botResponse && (
                <div className="flex items-center space-x-2">
                  <FaRobot className="text-green-500" />
                  <div className="bg-green-200 p-2 rounded-lg px-4 py-4">
                    <p style={{ whiteSpace: 'break-spaces' }} >{message.botResponse}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-1 p-2 border rounded-lg"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg hover:"
          >
            Send
          </button>
        </form>
      </div>
      {/* <div>
        <button className='flex items-center gap-2 font-medium py-1 px-3 border border-solid border-black hover:shadow-[-7px_7px_0px_#000000]'>
          Get Started
        </button>
      </div> */}
    </div>

  );
};

export default Chat;
