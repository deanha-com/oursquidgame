import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PlayerCounter from './PlayerCounter';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import Invite from './Invite';
import 'animate.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <PlayerCounter/>
    <Header/>
  </React.StrictMode>,
  document.getElementById('root')
);


ReactDOM.render(
  <React.StrictMode>
    <Invite title="You are invited!"/>
  </React.StrictMode>,
  document.getElementById('invite-card')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
