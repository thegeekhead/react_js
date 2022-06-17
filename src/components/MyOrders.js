import React from 'react'

import bookImg from '../assets/book.png'

import './MyOrders.css'

function MyOrders() {
  return (
    <div className='SingleOrder'>
      <div className='OrderTopBar'>
        <span className='OrderTime'>Order Placed: 14 November, 2019</span>
        <span className='OrderStatus'>Status: Delivered</span>
      </div>
      <div className='OrderDesc'>
        <div className='OrderImg'>
          <img className='BookImg' src={bookImg}/>
        </div>
        <div className='OrderBrief'>
          <a className='BookTitle'>Book Title</a> <br/>
          <a className='BookAuthor'>Author Name</a> <br/>
          <a className='BookPrice'>Book Price</a>
        </div>
      </div>
    </div>
  )
}

export default MyOrders;