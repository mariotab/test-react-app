import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { store } from './rootReducer'
import App from './App';

const aplication = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render( aplication, document.getElementById('root'))
