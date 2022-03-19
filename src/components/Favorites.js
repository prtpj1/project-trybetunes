import React, { Component } from 'react';
import Header from './Header';

class Favorites extends Component {
  render() {
    return (
      <header>
        <Header />
        <section data-testid="page-favorites">
          Favorites
        </section>
      </header>
    );
  }
}

export default Favorites;
