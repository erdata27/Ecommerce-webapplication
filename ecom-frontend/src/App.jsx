import React from 'react';
import './App.css'; // Global CSS styles
import Products from './components/products/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Routing components
import Home from './components/home/Home';
import Navbar from './components/shared/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast'; // For toast notifications
import Cart from './components/cart/Cart';
import LogIn from './components/auth/LogIn';
import PrivateRoute from './components/PrivateRoute'; // Route protection component
import Register from './components/auth/Register';
import Checkout from './components/checkout/Checkout';
import PaymentConfirmation from './components/checkout/PaymentConfirmation';

function App() {
  return (
    <React.Fragment>
      {/* Router wraps the app to enable client-side routing */}
      <Router>
        {/* Navbar is always visible on all pages */}
        <Navbar />
        
        {/* Define all the routes for the app */}
        <Routes>

          {/* Public routes accessible to all users */}
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />

          {/* Protected routes - user must be logged in to access */}
          <Route path='/' element={<PrivateRoute />}>
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/order-confirm' element={<PaymentConfirmation />} />
          </Route>

          {/* Public routes that redirect if user is already logged in */}
          <Route path='/' element={<PrivateRoute publicPage />}>
            <Route path='/login' element={<LogIn />} />
            <Route path='/register' element={<Register />} />
          </Route>
        </Routes>
      </Router>

      {/* Toast notification container positioned at bottom center */}
      <Toaster position='bottom-center' />
    </React.Fragment>
  );
}

export default App;
