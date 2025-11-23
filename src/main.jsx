import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

/**
 * main.jsx
 * - BrowserRouter membungkus App sehingga routing bekerja di seluruh aplikasi
 * - React.StrictMode opsional, aman untuk development
 */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
