import React, {useState} from 'react'

import bookImg from "../assets/book.png"

import "../css/SingleOrder.css";

function SingleOrder() {
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
    <>
    {todos.map(todo => {
      return (<div key={todo.title} className='singleorder'>
      <div className='ordertopbar'>
        <span className='ordertime'>Order Placed: 14 November, 2019</span>
        <span className='orderstatus'>Status: Delivered</span>
      </div>
      <div className='orderdesc'>
        <div className='orderimg'>
          <img className='bookimg' src={bookImg} />
        </div>
        <div className='orderbrief'>
          <a className='booktitle'>{todo.title}</a> <br />
          <a className='bookauthor'>Author Name</a> <br />
          <a className='bookprice'>Book Price</a>
        </div>
      </div>
    </div>)
    })}
    </>
  )
}

export default SingleOrder;