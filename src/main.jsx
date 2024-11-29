import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css"
import "./font.css";
import App from "./App.jsx";
import Menu from "./Menu.jsx";
import Cart from "./Cart.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<App />} />
        <Route path="menu" element={<Menu />} />
        <Route path="cart" element={<Cart />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
