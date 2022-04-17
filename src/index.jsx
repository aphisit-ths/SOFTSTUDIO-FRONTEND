import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// pages ----->
import IndexPage from "./pages/indexpage";
import RegisterPage from "./pages/registerpage";
import ProfilePage from "./pages/profilepage";
import ContentPage from "./pages/contentpage";
import LoginPage from "./pages/loginpage";
// pages ----->
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<IndexPage />} />{" "}
        <Route path="/register" element={<RegisterPage />} />{" "}
        <Route path="/login" element={<LoginPage />} />{" "}
        <Route path="/content" element={<ContentPage />} />{" "}
      </Routes>{" "}
    </AnimatePresence>
  </BrowserRouter>,
  rootElement
);
