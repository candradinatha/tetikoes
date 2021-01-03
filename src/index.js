import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const loader = document.querySelector('.loader');
// const loadingBar = document.querySelector('.loading-bar');
const showLoader = () => {
  loader.classList.remove('loader--hide');
  // loadingBar.classList.remove('loader--hide')
} 
const hideLoader = () => {
  // loadingBar.classList.add('loader--hide')
  loader.classList.add('loader--hide');
}

ReactDOM.render(
  <React.StrictMode>
    <App
      hideLoader={hideLoader}
      showLoader={showLoader} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
