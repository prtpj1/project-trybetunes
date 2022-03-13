import React, { Component } from 'react';
import Header from './Header';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      inptSearch: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, () => this.handleSearch());
  }

  handleSearch = () => {
    const { inptSearch } = this.state;
    const minSize = 1;

    const btnState = (inptSearch.length > minSize)
      ? this.setState({ disabled: false })
      : this.setState({ disabled: true });
    return btnState;
  }

  render() {
    const { disabled, search } = this.state;
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <section>
            <label htmlFor="inptSearch">
              <input
                data-testid="search-artist-input"
                id="inptSearch"
                name="inptSearch"
                onChange={ this.handleChange }
                placeholder="Type artist name here..."
                value={ search }
              />
            </label>
            <button
              data-testid="search-artist-button"
              disabled={ disabled }
              name="btn-search"
              type="button"
            >
              Pesquisar
            </button>
          </section>
        </main>
      </>
    );
  }
}

export default Search;
