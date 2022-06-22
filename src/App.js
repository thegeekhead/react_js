import './App.css';
import React from 'react';
import Routing from './route/Routing';
import { store } from './Redux/Store';

import * as Actions from './Redux/Action.js'

import { createStore, bindActionCreators } from 'redux'
import { connect, Provider } from 'react-redux'


function App() {

  return (
    <div>
      <Provider store={store}>
        <Routing />
      </Provider>
    </div>
  );
}

export default App;