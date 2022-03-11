import React from 'react';
import Header from './Header';

class Album extends React.Component {
  render() {
    return (
      <header>
        <Header />
        <section>
          Album
        </section>
      </header>
    );
  }
}

export default Album;
