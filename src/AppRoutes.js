import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MyRepos from "./pages/MyRepos";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-repos" element={<MyRepos />} />
    </Routes>
  );
}

export default AppRoutes;
