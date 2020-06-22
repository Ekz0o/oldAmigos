import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Footer from './components/Footer/Footer';
import Friends from "./components/Friends/Friends";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="siteWrap">
            <Navbar />
            <div className="profile">
                <Route path="/Profile" render={ () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
                <Route path="/Dialogs" render={ () => <Dialogs store={props.store} />} />
                <Route path="/Friends" render={ () => <Friends />} />
                <Route path="/Music" render={ () => <Music />} />
                <Route path="/News" render={ () => <News />} />
                <Route path="/Settings" render={ () => <Settings />} />
            </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
