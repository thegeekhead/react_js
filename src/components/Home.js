import React, { useState } from 'react'

import BookThumbnail from "./BookThumbnail";

import '../css/Home.css'

function Home() {
  
  return (
    <div className='wrapper'>
      <BookThumbnail/>
    </div>
  )
}

export default Home;