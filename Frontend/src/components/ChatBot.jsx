import React, { useState } from "react";
import axios from "axios";
import '../styles/Chatbot.css';
import { RiWechatFill } from "react-icons/ri";

const Chatbot = () => {
    const [isChatOpen, setisChatOpen] = useState(false);

    const handelChatClick = () => {
        setisChatOpen(!isChatOpen);
    };

    const [messages, setMessages] = useState([
      { sender: "bot", text: "Hi! I'm here to help. Ask me anything!" },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleSend = async () => {
      if (!input.trim()) return;
  
      const userMessage = { sender: "user", text: input };
      setMessages((prev) => [...prev, userMessage]);
      setInput(""); // Clear input field
      setLoading(true); // Show loading indicator
  
      try {
        // Make a POST request to OpenAI API
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-3.5-turbo", // Use "gpt-4" if you have access
            messages: [
              ...messages.map((msg) => ({
                role: msg.sender === "bot" ? "assistant" : "user",
                content: msg.text,
              })),
              { role: "user", content: input },
            ],
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            },
          }
        );
  
        const botReply = response.data.choices[0].message.content;
        setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      } catch (error) {
        console.error("Error with OpenAI API:", error);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Sorry, something went wrong. Please try again later." },
        ]);
      } finally {
        setLoading(false); // Hide loading indicator
      }
    };

  return (
    <>
    <button className="Chat-button" onClick={handelChatClick}>
    <RiWechatFill />
    </button>
    {isChatOpen && <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message-bubble ${msg.sender === "bot" ? "bot-message" : "user-message"}`}
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
        <button onClick={handleSend} disabled={loading} >Send</button>
      </div>
    </div>}
    </>
  );
};

export default Chatbot;

