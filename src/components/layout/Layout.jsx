import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Routers from "../../router/router";
const Layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;
