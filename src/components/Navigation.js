import React from 'react'

import {useNavigate} from 'react-router-dom';

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
    <div style={{ height: "fit-content", width: "100%", backgroundColor: "red", display: "flex"}}>
      <div style={{flex:'0.8'}}>
        <a>eCommerce Site</a>
        <a> | Page</a>
      </div>
      <div style={{flex:"0.2"}}>
        <a onClick={navigatetohome}>Home |</a>
        <a onClick={navigatetomyorders}> My Orders | </a>
        <a onClick={navigatetocart}>Cart</a>
      </div>
    </div>
  )
}

export default Navigation;