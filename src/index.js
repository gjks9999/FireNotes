import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
const root = ReactDOM.createRoot(document.getElementById('root'));

axios.defaults.baseURL = "https://jk-fire-notes-default-rtdb.asia-southeast1.firebasedatabase.app";
// axios config we can also create seperate a file and export the same [ leela-45 ]

axios.interceptors.request.use((req) => {
  
  console.log("i am from app request interceptors");
  return req;

});

axios.interceptors.response.use((res) => {
  
  console.log("i am from app response interceptors ");
  return res.data;

})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
