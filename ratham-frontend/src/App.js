import './App.css';
import Chatbot from 'react-chatbot-kit';
import config from "./configs/chatbotConfig.js";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        
      />
    </div>
  );
}

export default App;
