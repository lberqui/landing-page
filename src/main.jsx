import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AppNavigador } from "./routes/AppNavigador";
import Footer from './routes/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppNavigador />
      </BrowserRouter>
  </React.StrictMode>
);
