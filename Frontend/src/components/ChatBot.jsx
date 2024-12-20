import React, { useState } from "react";
import "../styles/Chatbot.css";
import { RiWechatFill } from "react-icons/ri";

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm here to help. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput(""); // Clear input field
    setLoading(true); // Show typing indicator

    // Simulated bot response
    setTimeout(() => {
      const botReply = generateBotReply(input);
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      setLoading(false); // Hide typing indicator
    }, 1000);
  };

  // Simple logic for bot responses
  const generateBotReply = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();
    if (lowerCaseInput.includes("hello")) {
      return "Hello! How can I assist you today?";
    } else if (lowerCaseInput.includes("help")) {
      return "Sure! Please specify what you need help with.";
    } else if (lowerCaseInput.includes("bye")) {
      return "Goodbye! Have a great day!";
    } else {
      return "I'm not sure I understand. Could you rephrase that?";
    }
  };

  return (
    <>
      <button className="Chat-button" onClick={toggleChat}>
        <RiWechatFill />
      </button>
      {isChatOpen && (
        <div className="chat-container">
          <div className="messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message-bubble ${
                  msg.sender === "bot" ? "bot-message" : "user-message"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div style={{ textAlign: "left", margin: "10px 0" }}>
                <strong>Bot:</strong> Typing...
              </div>
            )}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message"
            />
            <button onClick={handleSend} disabled={loading}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
