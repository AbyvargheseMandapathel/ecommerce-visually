import React from 'react';
import { BrowserRouter as Router, Routes, Route, useHistory } from 'react-router-dom';
import AppContext from './context/AppContext';
import { storeItems } from './items';
import Store from './components/Store';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import CheckoutForm from './components/CheckoutForm';
import GoogleSignIn from './components/Login';

function Home() {
  return (
    <Router>
      <AppContext.Provider value={storeItems}>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Store items={storeItems} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<GoogleSignIn />} />
            <Route path="/checkout" element={<CheckoutForm />} />
          </Routes>
        </CartProvider>
      </AppContext.Provider>
    </Router>
  );
}

export default Home;

