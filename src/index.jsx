import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// pages ----->
import IndexPage from "./pages/indexpage/indexpage";
import RegisterPage from "./pages/registerpage/registerpage";
import ProfilePage from "./pages/profilepage/profilepage";
import ContentPage from "./pages/contentpage/contentpage";
import LoginPage from "./pages/loginpage/loginpage";
import NavBar from "./components/navbar";
// pages ----->
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <AnimatePresence>
      <NavBar />
      <Routes>
        <Route path="/" element={<IndexPage />} />{" "}
        <Route path="/register" element={<RegisterPage />} />{" "}
        <Route path="/login" element={<LoginPage />} />{" "}
        <Route path="/content" element={<ContentPage />} />{" "}
        <Route path="/profile" element={<ProfilePage />} />{" "}
      </Routes>{" "}
    </AnimatePresence>
  </BrowserRouter>,
  rootElement
);
