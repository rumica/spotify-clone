import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  stores  from 'stores';
import { Provider } from 'react-redux'
import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stores}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


