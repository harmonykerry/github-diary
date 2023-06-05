import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyRepos from "./pages/MyRepos";
import NavigationBar from "./component/NavigationBar";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-repos" element={<MyRepos />} />
      <Route />
    </Routes>
  );
}

export default AppRoutes;
