import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { store } from '../Redux/Store';

import '../css/SelectedBook.css'

import bookImg from '../assets/book.png'
import { useNavigate } from 'react-router'

function SelectedBook() {
  let navigate = useNavigate();
  const navigatetocart = () => {
    return navigate("/cart");
  }
  const notify = () => {return toast("Added to cart.")};
  return (
    <div className='selectedbook'>
      <div className='selectedbookimg'>
        <img className='bookimg' src={bookImg} />
      </div>
      <div className='selectedbookdetails'>
        <a className='booktitle'>Book Title</a> <br />
        <a className='bookprice'>Book Price</a> <br />
        <a className='bookauthor'>Author Name</a> <br />
        <a className='bookpagecount'>Page Count</a> <br />
        <a className='bookisbn'>ISBN</a> <br />
        <div className='btn'>
          <button onClick={notify} className='btnaddtocart'>Add to cart</button>
          <button onClick={navigatetocart} className='btnbuynow'>Buy Now</button>
          <button onClick={() => {console.log(store.getState());}} className='btnbuynow'>Buy Now</button>
        </div>
        <p className='bookdesc'>
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
      <ToastContainer/>
    </div>
  )
}

export default SelectedBook;