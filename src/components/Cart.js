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
        <div className='carttitle'>Shipping Address</div>
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
        <div className='carttitle'>Shopping Bag</div>
        <div className='selectedbooks addressform'>
          SELECTED BOOKS
        </div>
        <span>Payment Info</span>
        <div className='paymentinfo'>
          <a className='amt-title'>Items Price</a> <a className='amt-title amt'>$40.00</a> <br/>
          <a className='amt-title'>Tax</a> <a className='amt-title amt'>$7.50</a> <br/>
          <a className='amt-title'>Shipping Charge</a> <a className='amt-title amt'>$5.00</a> <br/>
          <hr />
          <a className='amt-title'>Total</a> <a className='amt-title amt'>$52.50</a>
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