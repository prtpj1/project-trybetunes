import React, { Component } from 'react';
import Header from './Header';

class ProfileEdit extends Component {
  render() {
    return (
      <header>
        <Header />
        <section data-testid="page-profile-edit">
          ProfileEdit
        </section>
      </header>
    );
  }
}

export default ProfileEdit;
