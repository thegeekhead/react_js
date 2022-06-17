import React, { useState } from 'react';
import bookImg from '../assets/book.png'

import './BookThumbnail.css'

function BookThumbnail() {
  const [todos, setTodos] = useState([
    {
      title: 'one',
      img: { bookImg }
    },
    {
      title: 'two',
      img: { bookImg }
    },
    {
      title: 'three',
      img: { bookImg }
    },
    {
      title: 'four',
      img: { bookImg }
    },
    {
      title: 'five',
      img: { bookImg }
    },
    {
      title: 'six',
      img: { bookImg }
    },
    {
      title: 'seven',
      img: { bookImg }
    },
    {
      title: 'eight',
      img: { bookImg }
    },
  ])
  return (
    <div className='wrapper'>
      {todos.map(todo => {
        return(<div className='BookThumbnail'>
          <div className='ThumbnailImgDiv'>
            <img className='ThumbnailImg' src={todo.img} />
          </div>
            <div className='AbtBook'>
              <a className='ThumbnailTitle'>{todo.title}</a> <br />
              <a className='ThumbnailDesc'>Book Description</a>
              <button className='BuyBtn'>Buy Button</button>
            </div>
          </div>)
      })}
    </div>
  )
}

export default BookThumbnail;