import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import reactDOM from 'react-dom';
import "./index.css";
import { BrowserRouter, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
   
    </BrowserRouter>
);
