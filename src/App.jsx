import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar selalu tampil */}
      <Navbar />

      {/* Auto scroll ke atas setiap pindah halaman */}
      <ScrollToTop />

      {/* AnimatePresence agar ada animasi Exit saat berpindah halaman */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer selalu tampil */}
      <Footer />
    </div>
  );
}
