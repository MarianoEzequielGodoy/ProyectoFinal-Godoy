import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './Components/Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import AboutUs from './Components/About/AboutUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/about" element={<AboutUs />} />
    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

