import React, { useState } from 'react'

import BookThumbnail from "./BookThumbnail";

import '../css/Home.css'
import SelectedBook from './SelectedBook';

function Home() {
  
  return (
    <div className='wrapper'>
      <BookThumbnail/>
    </div>
  )
}

export default Home;