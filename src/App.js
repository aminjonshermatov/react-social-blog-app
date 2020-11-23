import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";

const App = ({ state, dispatch }) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => <Profile state={state.profilePage} dispatch={dispatch} />} />
        <Route path='/dialogs' render={() => <Dialogs  state={state.dialogsPage} dispatch={dispatch} />} />
      </div>
    </div>
  );
};

export default App;
