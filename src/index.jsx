import React, { useMemo, useContext } from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./context/ApolloClient";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import AuthProvider from "./context/AuthProvider";
// pages ----->
import "./index.css";
import IndexPage from "./pages/indexpage/indexpage";
import RegisterPage from "./pages/registerpage/registerpage";
import ProfilePage from "./pages/profilepage/profilepage";
import ContentPage from "./pages/contentpage/contentpage";
import LoginPage from "./pages/loginpage/loginpage";
import App from "./App";
import OverviewPage from "./pages/adminpages/overviewpage";
import ManageUsersPage from "./pages/adminpages/manageuserspage";
import ManageContentPage from "./pages/adminpages/managecontentpage";
import EditUserPage from "./pages/edituserpage";
// pages ----->
const rootElement = document.getElementById("root");
const token = Cookies.get("token");
const data = jwt_decode(token);

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <AuthProvider userData={data}>
        <AnimatePresence>
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
              <Route path="/updateinfo:id" element={<EditUserPage />} />{" "}
            </Routes>{" "}
          </App>
        </AnimatePresence>
      </AuthProvider>
    </ApolloProvider>
  </BrowserRouter>,

  rootElement
);
