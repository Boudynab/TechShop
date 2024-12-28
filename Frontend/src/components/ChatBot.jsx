import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useState } from "react";
import React from "react";
import '../styles/Chatbot.css';

const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#00ADB5",
});

//Add your Client ID here ⬇️
const clientId = "4f4e9685-2414-45a3-984d-1b9b1f70be54";

export default function ChatBot() {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
    <div className="chat-bot">

      <style>{style}</style>
      <WebchatProvider
        theme={theme}
        client={client}
      >
        <div className="fab"><Fab  onClick={toggleWebchat} /></div>
        
        <div
          style={{
            display: isWebchatOpen ? "block" : "none",
          }}
          className="webchat"
        >
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
}