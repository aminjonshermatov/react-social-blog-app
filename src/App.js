import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";

/*
        <Route path='/profile' component={Profile} />
        <Route path='/dialogs' component={Dialogs} />
*/

const App = ({ state, addPost, updateNewPostText }) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => <Profile state={state.profilePage} addPost={addPost} updateNewPostText={updateNewPostText} />} />
        <Route path='/dialogs' render={() => <Dialogs  state={state.dialogsPage} />} />
      </div>
    </div>
  );
};

export default App;
