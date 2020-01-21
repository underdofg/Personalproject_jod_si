import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyD-eud8pf-Lz-0BCKo1cURKhbbHz0ysLKM",
  authDomain: "jod-si-e32f3.firebaseapp.com",
  databaseURL: "https://jod-si-e32f3.firebaseio.com",
  projectId: "jod-si-e32f3",
  storageBucket: "jod-si-e32f3.appspot.com",
  messagingSenderId: "478754223056",
  appId: "1:478754223056:web:e90f200b0960842d85ffd5"
}); 

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
