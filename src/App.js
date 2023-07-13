import React from "react";

// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Homepage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage";
import CampsiteDetailPage from "./pages/CampsiteDetailPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="directory" element={<CampsitesDirectoryPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="directory/:campsiteId" element={<CampsiteDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
