import { Routes, Route } from "react-router-dom";

const ChatApp = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Chat App</h1>} />
    </Routes>
  );
};

export default ChatApp;
