import React, { useMemo, useContext } from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./context/ApolloClient";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Switch,
} from "react-router-dom";
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
import AddContentPage from "./pages/adminpages/addcontentpage";
import UserProtectedRoute from "./utils/useProtectedRoute";
import { IsLoggedIn, IsAddminLayout } from "./utils/useProtectedRoute";
import AdminLayout from "./components/admin/layout";
// pages ----->
const rootElement = document.getElementById("root");
const token = Cookies.get("token");
const data = (token) => {
  if (!token || token === undefined) return undefined;
  const data = jwt_decode(token);
  return data;
};

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <AuthProvider userData={data(token)}>
        <AnimatePresence>
          <IsAddminLayout>
            <Routes>
              <Route path="/" element={<IndexPage />} />{" "}
              <Route path="/content/:id" element={<ContentPage />} />{" "}
              <Route element={<IsLoggedIn />}>
                <Route path="/login" element={<LoginPage />} />{" "}
                <Route path="/register" element={<RegisterPage />} />{" "}
              </Route>
              <Route element={<UserProtectedRoute />}>
                <Route path="/updateinfo/:id" element={<EditUserPage />} />{" "}
                <Route path="/admin/overview" element={<OverviewPage />} />{" "}
                <Route
                  path="/admin/manageusers"
                  element={<ManageUsersPage />}
                />{" "}
                <Route
                  path="/admin/managecontent"
                  element={<ManageContentPage />}
                />{" "}
                <Route path="/admin/addcontent" element={<AddContentPage />} />{" "}
              </Route>
            </Routes>{" "}
          </IsAddminLayout>
        </AnimatePresence>
      </AuthProvider>
    </ApolloProvider>
  </BrowserRouter>,

  rootElement
);
