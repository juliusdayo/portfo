//React
import React from 'react';
import ReactDOM from 'react-dom';
//Css
import './index.css';
import './App.css';

//components

import Navigation from './components/templates/Navigation.js';
import Intro from './components/intro/Intro.js';
import Message from './components/Message.js';

import reportWebVitals from './reportWebVitals';

let introMessage = "I'm A Web App Developer";
let introGreet = "Hi, I'm Julius";
let navItems = ["About","Skills","Contact"];


ReactDOM.render(
  
  
  <Navigation navList={navItems}/>
  ,document.getElementById('navigation'));
  
ReactDOM.render(
  <React.StrictMode>
  <div className="Main-Container">
    <Intro desc={introMessage} greet={introGreet} />
  </div>
    <Message/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
