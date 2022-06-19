import React from 'react';

import Navigation from '../components/Navigation';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from '../components/Home';
import SelectedBook from '../components/SelectedBook';
import MyOrders from '../components/MyOrders';
import Cart from '../components/Cart';
import CheckoutPage from '../components/CheckoutPage';

function Routing() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/myorders' element={<MyOrders/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/selectedbook' element={<SelectedBook/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default Routing;