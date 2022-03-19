import React, { Component } from 'react';
import Header from './Header';

class Profile extends Component {
  render() {
    return (
      <header>
        <Header />
        <section data-testid="page-profile">
          Profile
        </section>
      </header>
    );
  }
}

export default Profile;
