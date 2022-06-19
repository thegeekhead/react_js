import React from 'react'

import '../css/SelectedBook.css'

import bookImg from '../assets/book.png'
import { useNavigate } from 'react-router'

function SelectedBook() {
  let navigate = useNavigate();
  const navigatetocart = () => {
    return navigate("/cart");
  }
  return (
    <div className='SelectedBook'>
      <div className='SelectedBookImg'>
        <img className='BookImg' src={bookImg} />
      </div>
      <div className='SelectedBookDetails'>
        <a className='BookTitle'>Book Title</a> <br />
        <a className='BookPrice'>Book Price</a> <br />
        <a className='BookAuthor'>Author Name</a> <br />
        <a className='BookPageCount'>Page Count</a> <br />
        <a className='BookISBN'>ISBN</a> <br />
        <div className='Btn'>
          <button className='BtnAddToCart'>Add to cart</button>
          <button onClick={navigatetocart} className='BtnBuyNow'>Buy Now</button>
        </div>
        <p className='BookDesc'>
          "Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit
          anim id est laborum."
        </p>
      </div>
    </div>
  )
}

export default SelectedBook;