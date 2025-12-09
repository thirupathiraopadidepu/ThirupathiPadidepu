import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServicesPage from "./pages/ServicesPage.tsx";
import ChatPage from "./pages/ChatPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  </BrowserRouter>
);
