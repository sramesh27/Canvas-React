import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();











// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// window.addEventListener('resize' , function(){
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//  });

// const mouse =  {
//    x : null,
//    y : null
// }

// canvas.addEventListener('click', function(event)){
//   mouse.x = event.x;
//   mouse.y = event.y;
// drawCircle()
// }

// function drawCircle(){
//   ctx.fillStyle= "red";
//   ctx.beginPath();
//   ctx.arc(mouse.x,mouse.y,50,0, Math.PI * 2);
//   ctx.fill();
// }
// drawCircle();

















