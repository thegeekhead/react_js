import React from 'react'
import { useNavigate } from 'react-router';

import '../css/Cart.css'

function Cart() {
  let navigate = useNavigate();
  const navigatetocheckoutpage = () => {
    return navigate("/checkout");
  }
  return (
    <div className='cartdetails'>
      <div className='shippingaddress'>
        <span>Shipping Address</span>
        <div className='addressform'>
          <input className='form-control'
            placeholder='Street' />
          <input className='form-control'
            placeholder='City' />
          <input className='form-control'
            placeholder='State' />
          <input className='form-control'
            placeholder='Zip' />
          <input className='form-control'
            placeholder='Country' />
        </div>
        <div className='addressbtn'>
          <button className='btncart'>Save Address button</button>
          <button className='btncart'>Edit Address button</button>
        </div>
      </div>
      <div className='shoppingbag'>
        <span>Shopping Bag</span>
        <div className='selectedbooks addressform'>
          SELECTED BOOKS
        </div>
        <span>Payment Info</span>
        <div className='paymentinfo'>
          <a>Items Price</a> <a>$40.00</a> <br/>
          <a>Tax</a> <a>$7.50</a> <br/>
          <a>Shipping Charge</a> <a>$5.00</a> <br/>
          <hr />
          <a>Total</a> <a>$52.50</a>
        </div>
        <div className='paymentbtn'>
          <button onClick={navigatetocheckoutpage} className='btncart'>Checkout</button>
          <button className='btncart'>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Cart;