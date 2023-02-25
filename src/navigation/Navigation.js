import React from "react";
import { Route, Routes } from "react-router";
import Landing from "../views/Landing/Landing";
import Search from "../views/Search/Search";

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default Navigation;
