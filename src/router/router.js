import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";

import Thankyou from "../pages/Thankyou";
const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/thank-you" element={<Thankyou />} />
      <Route path="/register" element={<Register />} />

      <Route path="/tours/search" element={<SearchResultList />} />
    </Routes>
  );
};

export default router;
