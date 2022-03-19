import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

import Loading from './Loading';

class MusicCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      check: false,
      favorites: [],
    };
  }

  componentDidMount() {
    this.getMusics();
  }

  addFavorite = async () => {
    const { artista } = this.props;
    const { check } = this.state;
    console.log(typeof artista);

    this.setState({ loading: true });
    await addSong(artista);

    this.setState({
      loading: false,
      check: !check,
    });
  }

  getMusics = () => {
    getFavoriteSongs()
      .then((songs) => {
        this.setState({ favorites: songs },
          () => {
            this.savedFavorites();
          });
      });
  }

  savedFavorites = () => {
    const { artista: { trackId } } = this.props;
    const { favorites } = this.state;

    favorites.forEach((song) => {
      if (song.trackId === trackId) {
        this.setState({
          check: true,
        });
      }
    });
    // console.log(elemArtist.trackId);
  }

  render() {
    const {
      artista,
    } = this.props;

    const {
      check,
      loading,
    } = this.state;

    return (
      <>
        <span>{artista.trackName}</span>
        <div>
          <audio data-testid="audio-component" src={ artista.previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
          </audio>
        </div>

        <div>
          {loading ? <Loading /> : (
            <label htmlFor="trackFavorite">
              Favorita
              <input
                checked={ check }
                data-testid={ `checkbox-music-${artista.trackId}` }
                id="trackFavorite"
                name="trackFavorite"
                onChange={ this.addFavorite }
                type="checkbox"
              />
            </label>
          )}
          {/* {console.log(artista)} */}
        </div>

      </>

    );
  }
}

MusicCard.propTypes = {
  artista: PropTypes.shape({
    trackId: PropTypes.number.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
  }).isRequired,
};

export default MusicCard;
