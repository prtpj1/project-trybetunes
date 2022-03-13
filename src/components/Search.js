import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Header from './Header';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: '',
      disabled: true,
      inptSearch: '',
      loading: false,
      searchStored: [],
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, () => this.handleSearchBtn());
  }

  handleSearchBtn = () => {
    const { inptSearch } = this.state;
    const minSize = 1;

    const btnState = (inptSearch.length > minSize)
      ? this.setState({ disabled: false })
      : this.setState({ disabled: true });
    return btnState;
  }

  clearInput = () => {
    const { inptSearch } = this.state;
    this.setState({
      artist: inptSearch,
      inptSearch: '',
      loading: true,
    },
    async () => {
      const getAlbum = await searchAlbumsAPI(inptSearch);
      this.setState({
        loading: false,
        searchStored: getAlbum,
      });
    });
  }

  render() {
    const { artist, disabled, loading, inptSearch, searchStored } = this.state;
    return (
      <>
        <header>
          <Header />
          { loading === true ? <p>Carregando...</p> : (
            <section>
              <label htmlFor="inptSearch">
                <input
                  data-testid="search-artist-input"
                  id="inptSearch"
                  name="inptSearch"
                  onChange={ this.handleChange }
                  placeholder="Type artist name here..."
                  value={ inptSearch }
                />
              </label>
              <button
                data-testid="search-artist-button"
                disabled={ disabled }
                name="btn-search"
                onClick={ this.clearInput }
                type="button"
              >
                Pesquisar
              </button>
            </section>
          )}
        </header>
        <main>
          <section>
            {searchStored.length === 0
              ? <h1>Nenhum álbum foi encontrado</h1>
              : (
                <div>
                  <p>{`Resultado de álbuns de: ${artist}`}</p>
                  {searchStored.map((elemArtist) => (
                    <div key={ elemArtist.collectionId }>
                      <h3>{elemArtist.artistName}</h3>
                      <img
                        src={ elemArtist.artworkUrl100 }
                        alt={ elemArtist.artistName }
                      />
                      <p>
                        <Link
                          to={ `/album/${elemArtist.collectionId}` }
                          data-testid={ `link-to-album-${elemArtist.collectionId}` }
                        >
                          {elemArtist.collectionName}
                        </Link>
                      </p>
                    </div>
                  ))}
                </div>
              )}
          </section>
        </main>
      </>
    );
  }
}

export default Search;
