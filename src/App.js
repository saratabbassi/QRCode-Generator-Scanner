
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Scanner from "./Components/Scanner";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./pages/Home";


function App() {
  return (
    <>
     
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QRScanner" element={<Scanner />} />
        
      </Routes>
      <Footer />
    
    </>
  );
}

export default App;
