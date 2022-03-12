import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Album from './components/Album';
import Favorites from './components/Favorites';
import Login from './components/Login';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import NotFound from './components/NotFound';
import Search from './components/Search';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div data-testid="page-login">
          <Route exact path="/" component={ Login } />
        </div>
        <div data-testid="page-search">
          <Route exact path="/search" component={ Search } />
        </div>
        <div data-testid="page-album">
          <Route exact path="/album/:id" component={ Album } />
        </div>
        <div data-testid="page-favorites">
          <Route exact path="/favorites" component={ Favorites } />
        </div>
        <div data-testid="page-profile">
          <Route exact path="/profile" component={ Profile } />
        </div>
        <div data-testid="page-profile-edit">
          <Route exact path="/profile/edit" component={ ProfileEdit } />
        </div>
        <div data-testid="page-not-found">
          <Route path="*" component={ NotFound } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
