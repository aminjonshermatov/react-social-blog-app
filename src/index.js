import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state, { addPost, updateNewPostText, subscribe } from './redux/state';

const rerenderEntireTree = (state, addPost, updateNewPostText) => {
    ReactDOM.render(
      <BrowserRouter>
          <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
      </BrowserRouter>,
      document.getElementById('root')
    );
};

rerenderEntireTree(state, addPost, updateNewPostText);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
