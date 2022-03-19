import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => <Login { ...props } /> }
          />
          <Route
            exact
            path="/search"
            render={ (props) => <Search { ...props } /> }
          />
          <Route
            exact
            path="/album/:id"
            render={ (props) => <Album { ...props } /> }
          />
          <Route
            exact
            path="/favorites"
            render={ (props) => <Favorites { ...props } /> }
          />
          <Route
            exact
            path="/profile"
            render={ (props) => <Profile { ...props } /> }
          />
          <Route
            exact
            path="/profile/edit"
            render={ (props) => <ProfileEdit { ...props } /> }
          />
          <Route
            exact
            path="*"
            render={ (props) => <NotFound { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
