import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";
import "./font.css";
import App from "./App.jsx";
import Menu from "./Menu.jsx";
import Cart from "./Cart.jsx";
import Detail from "./Detail.jsx";
import Order from "./Order.jsx";
import NotFound from "./NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<App />} />
        <Route path="menu" element={<Menu />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/cart/order" element={<Order />} />
        <Route path="detail" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
