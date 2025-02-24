import React, { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

const ChatApp = React.lazy(() => import("chat/ChatApp"));
const EmailApp = React.lazy(() => import("email/EmailApp"));

const HomePage = () => <h1>Welcome to the Micro-Frontend App</h1>;

const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/chat">Chat</Link> | <Link to="/email">Email</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat/*" element={<ChatApp />} />
          <Route path="/email/*" element={<EmailApp />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
