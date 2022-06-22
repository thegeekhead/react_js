import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import bookImg from '../assets/book.png';
import { initialState } from '../Redux/Reducer';
import { store } from '../Redux/Store';

import { viewSelectedBook } from '../Redux/Action.js';

import * as Actions from '../Redux/Action.js'
import { createStore, bindActionCreators } from 'redux'
import { connect, Provider } from 'react-redux'

import '../css/BookThumbnail.css'

function BookThumbnailElement() {
  console.log(store.getState());
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

  const dispatch = store.dispatch();
  const navigate = useNavigate();
  const navigatetoselectedbook = () => {
    dispatch(viewSelectedBook({name:"PYTHON"}));
    console.log(store.getState());
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
function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
let BookThumbnail = connect(mapStateToProps, mapDispatchToProps)(BookThumbnailElement);

export default BookThumbnail;