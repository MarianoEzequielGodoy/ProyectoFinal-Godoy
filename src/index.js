import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './Components/Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import AboutUs from './Components/About/AboutUs';
import Faq from './Components/FAQ/Faq';
import ProductDetail from './Components/ProductDetail/ProductDetail';

import { initializeApp } from "firebase/app";
import CartProvider from './Context/CartContext';

const firebaseConfig = {
  apiKey: "AIzaSyAbs_Q0jnQs2gExGW2WJv4BrKqEFXiXTyg",
  authDomain: "coderhouse-ecommerce-2b540.firebaseapp.com",
  projectId: "coderhouse-ecommerce-2b540",
  storageBucket: "coderhouse-ecommerce-2b540.appspot.com",
  messagingSenderId: "285742912290",
  appId: "1:285742912290:web:0e5338930fe850cc6acb7b"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/about" element ={<AboutUs />} />
      <Route exact path="/faq" element={<Faq />} />
      <Route exact path="/product/:id" element={<ProductDetail />} />
    </Routes>
    </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

