import React from 'react'

function Navigation() {
  return (
    <nav style={{ height: "fit-content", width: "100%", backgroundColor: "red" }}>
      <div>
        <a>eCommerce Site</a>
        <a> | Page</a>
      </div>
      <div style={{ float: 'right' }}>
        <a>Home | </a>
        <a> My Orders | </a>
        <a>Cart</a>
      </div>
    </nav>
  )
}

export default Navigation;