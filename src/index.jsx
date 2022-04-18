import React, { useMemo } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// pages ----->
import IndexPage from "./pages/indexpage/indexpage";
import RegisterPage from "./pages/registerpage/registerpage";
import ProfilePage from "./pages/profilepage/profilepage";
import ContentPage from "./pages/contentpage/contentpage";
import LoginPage from "./pages/loginpage/loginpage";

import App from "./App";

import OverviewPage from "./pages/adminpages/overviewpage";
import ManageUsersPage from "./pages/adminpages/manageuserspage";
import ManageContentPage from "./pages/adminpages/managecontentpage";

import NavBar from "./components/navbar";

// pages ----->
const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <AnimatePresence>
      {/* <NavBar /> */}
      <App>
        <Routes>
          <Route path="/" element={<IndexPage />} />{" "}
          <Route path="/register" element={<RegisterPage />} />{" "}
          <Route path="/login" element={<LoginPage />} />{" "}
          <Route path="/content/:id" element={<ContentPage />} />{" "}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/overview" element={<OverviewPage />} />{" "}
          <Route path="/manageusers" element={<ManageUsersPage />} />{" "}
          <Route path="/managecontent" element={<ManageContentPage />} />{" "}
        </Routes>{" "}
      </App>
    </AnimatePresence>
  </BrowserRouter>,

  rootElement
);
