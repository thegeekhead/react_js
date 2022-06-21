import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import bookImg from '../assets/book.png';

import '../css/BookThumbnail.css'

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

  const navigate = useNavigate();
  const navigatetoselectedbook = () => {
    return navigate("/selectedbook")
  }
  return (
    <>
      {todos.map(todo => {
        return(<div key={todo.title} className='bookthumbnail'>
          <div className='thumbnailimgdiv'>
            <img className='thumbnailimg' src={bookImg} />
          </div>
            <div className='abtbook'>
              <a className='thumbnailtitle'>{todo.title}</a> <br />
              <a className='thumbnaildesc'>Book Description</a>
              <button onClick={navigatetoselectedbook} className='buybtn'>Buy Button</button>
            </div>
          </div>)
      })}
    </>
  )
}

export default BookThumbnail;