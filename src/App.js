import './App.css';
import React from 'react';

import Navigation from './components/Navigation';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


import BookThumbnail from './components/BookThumbnail';

import Home from './components/Home'

import SelectedBook from './components/SelectedBook';

import MyOrders from './components/MyOrders';

import Cart from './components/Cart';

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Switch>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/myorders' exact element={<MyOrders/>}/>
          <Route path='/cart' element={<Cart/>} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;