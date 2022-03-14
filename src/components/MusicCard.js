import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addSong } from '../services/favoriteSongsAPI';

import Loading from './Loading';

class MusicCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      check: false,
    };
  }

  addFavorite = async () => {
    const { artista } = this.props;
    const { check } = this.state;

    this.setState({ loading: true });
    await addSong(artista);

    this.setState({
      loading: false,
      check: !check,
    });
  }

  render() {
    const {
      previewUrl,
      artista,
      trackName,
    } = this.props;

    const {
      loading,
      check,
    } = this.state;

    const { trackId } = artista;

    return (
      <>
        <span>{trackName}</span>
        <div>
          <audio data-testid="audio-component" src={ previewUrl } controls>
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
                data-testid={ `checkbox-music-${trackId}` }
                id="trackFavorite"
                name="trackFavorite"
                onChange={ this.addFavorite }
                type="checkbox"
              />
            </label>
          )}
        </div>
      </>

    );
  }
}

MusicCard.propTypes = {
  artista: PropTypes.string.isRequired,
  trackId: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
};

export default MusicCard;
