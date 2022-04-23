import React, { useState, useContext, useEffect, createContext } from "react";
import cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export default function AuthProvider({ children, userData }) {
  const navagate = useNavigate();
  const [user, setUser] = useState(userData);

  useEffect(() => {
    const syncLogout = (e) => {
      if (e.key === "logout") {
        setUser(null);
        navagate("/");
      }
    };
    window.addEventListener("storage", syncLogout);
    return () => {
      window.removeEventListener("storage", syncLogout);
      window.localStorage.removeItem("logout");
    };
  }, []);

  const setAuthUser = (userInfo) => setUser(userInfo);

  const signout = () => {
    cookies.remove("token");
    cookies.remove("isAdmin");
    setUser(null);
    localStorage.setItem("logout", Date.now());
    navagate("/");
  };
  return (
    <AuthContext.Provider value={{ user, setAuthUser, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
