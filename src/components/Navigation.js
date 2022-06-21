import React from 'react'

import {useNavigate} from 'react-router-dom';

import '../css/Navigation.css'

function Navigation() {
  let navigate = useNavigate();
  const navigatetohome = () => {
    return navigate('/');
  }
  const navigatetomyorders = () => {
    return navigate('/myorders');
  }
  const navigatetocart = () => {
    return navigate('/cart')
  }
  return (
    <div className='navbar'>
      <div className='pagetitle'>
        <a className='title'>eCommerce Site</a>
        {/* <a> | Page</a> */}
      </div>
      <div className='pageroutes'>
        <a className='pages' onClick={navigatetohome}>Home |</a>
        <a className='pages' onClick={navigatetomyorders}> My Orders | </a>
        <a className='pages' onClick={navigatetocart}>Cart</a>
      </div>
    </div>
  )
}

export default Navigation;