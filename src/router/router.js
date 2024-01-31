import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Tours from "../pages/Tour";
import TourDetails from "../pages/TourDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import SignUp from "../pages/SignUp";
const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin-signup" element={<SignUp />} />
      <Route path="/tours/search" element={<SearchResultList />} />
    </Routes>
  );
};

export default router;
