import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/HomePage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import SupportPage from "./pages/SupportPage.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const location = useLocation();
  const hide = location.pathname === "/signup";
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<AuthPage />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
        <Route path="/support" element={<SupportPage />}></Route>
      </Routes>
      {!hide && <Footer />}
    </>
  );
}
