import "./App.scss";
import NavBar from "./components/navbar/index";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AdminLayout from "./components/admin/layout";
function App({ children }) {
  return (
    <div className="App">
      <NavBar />
      {children}
    </div>
  );
}

export default App;
