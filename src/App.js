import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx"
import "./styles/style.css"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" />
    </Routes>
  );
}

