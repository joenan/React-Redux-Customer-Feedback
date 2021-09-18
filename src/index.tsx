import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducers from './redux/reducer/allReducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const contactStore = createStore(allReducers, composeWithDevTools());

ReactDOM.render(
  <Provider store={contactStore}>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
  </Provider>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
