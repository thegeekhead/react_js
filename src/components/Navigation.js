import React from 'react'

import { Link } from "react-router-dom";

import {Switch} from 'react-router-dom';

import { Redirect } from 'react-router-dom';

function Navigation() {
  // let navigate = useNavigate();
  // const navigate = useNavigate();
  // const navigatetohome = () => {
  //   return navigate('/');
  // }
  const navigatetomyorders = () => {
    console.log("My oredrs");
    return <Redirect to="/myorders"/>;
  }
  return (
    <div style={{ height: "fit-content", width: "100%", backgroundColor: "red", display: "flex"}}>
      <div style={{flex:'0.8'}}>
        <a>eCommerce Site</a>
        <a> | Page</a>
      </div>
      <div style={{flex:"0.2"}}>
        {/* <a onClick={navigatetohome}>Home |</a> */}
        <a onClick={navigatetomyorders}> My Orders | </a>
        <a>Cart</a>
      </div>
    </div>
  )
}

export default Navigation;