import React, { useMemo, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { client } from "./context/ApolloClient";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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

const rootElement = createRoot(document.getElementById("root"));

//felt user data
rootElement.render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <AuthProvider>
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
                <Route path="/updateinfo/{id}" element={<EditUserPage />} />{" "}
              </Routes>{" "}
            </App>
          </AnimatePresence>
        </AuthProvider>
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>
);
