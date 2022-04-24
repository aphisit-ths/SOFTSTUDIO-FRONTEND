import React, { useMemo,   } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, useParams,Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// pages ----->
import IndexPage from "./pages/indexpage/indexpage";
import RegisterPage from "./pages/registerpage/registerpage";
import ProfilePage from "./pages/profilepage/profilepage";
import ContentPage from "./pages/contentpage/contentpage";
import LoginPage from "./pages/loginpage/loginpage";
import OverviewPage from "./pages/adminpages/overviewpage";
import ManageUsersPage from "./pages/adminpages/manageuserspage";
import ManageContentPage from "./pages/adminpages/managecontentpage";
import AddContentPage from "./pages/adminpages/addcontentpage";
import EditContentPage from "./pages/adminpages/editcontentpage";



import NavBar from "./components/navbar";
// pages ----->
const rootElement = document.getElementById("root");



ReactDOM.render(
  <BrowserRouter>
    <AnimatePresence>
      <NavBar />
      <Routes>
        <Route path="/" element={<IndexPage />} />{" "}
        <Route path="/editcontent/:id" element={<EditContentPage />} />{" "}
        <Route path="/register" element={<RegisterPage />} />{" "}
        <Route path="/login" element={<LoginPage />} />{" "}
        <Route path="/content" element={<ContentPage />} />{" "}
        <Route path="/profile" element={<ProfilePage />} />{" "}
        <Route path="/overview" element={<OverviewPage />} />{" "}
        <Route path="/manageusers" element={<ManageUsersPage />} />{" "}
        <Route path="/managecontent" element={<ManageContentPage />} />{" "}
        <Route path="/addcontent" element={<AddContentPage />} />{" "}
        
      </Routes>{" "}
    </AnimatePresence>
  </BrowserRouter>,

  rootElement
);
