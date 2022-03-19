import React, { Component } from 'react';
import propTypes from 'prop-types';

import getMusics from '../services/musicsAPI';

import Header from './Header';
import Loading from './Loading';
import MusicCard from './MusicCard';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTracks: '',
      loading: false,
      musicPreview: [],
    };
  }

  componentDidMount() {
    this.musicList();
  }

  musicList = async () => {
    const { match: { params: { id } } } = this.props;
    const allMusics = await getMusics(id);
    // console.log(this.props);

    this.setState({
      musicPreview: allMusics,
      allTracks: allMusics[0],
    });
  }

  render() {
    const {
      allTracks,
      loading,
      musicPreview,
    } = this.state;

    return (
      <>
        <header>
          <Header />
        </header>
        { loading ? <Loading /> : (
          <>
            <section data-testid="page-album">
              {musicPreview.length > 0 && (
                <div>
                  <h1 data-testid="artist-name">{allTracks.artistName}</h1>
                  <h3 data-testid="album-name">{allTracks.collectionName}</h3>
                  <img
                    src={ allTracks.artworkUrl100 }
                    alt={ allTracks.artistName }
                  />
                </div>
              )}
            </section>
            <div>
              {musicPreview.map((elemArtist) => (
                <div key={ elemArtist.collectionViewUrl }>
                  {elemArtist.previewUrl !== undefined && (
                    <MusicCard
                      trackName={ elemArtist.trackName }
                      previewUrl={ elemArtist.previewUrl }
                      artista={ elemArtist }
                      musicPreview={ musicPreview }
                      trackId={ elemArtist.trackId }
                    />)}
                </div>
              ))}
            </div>

          </>

        )}
      </>
    );
  }
}

Album.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }),
  }).isRequired,
};

export default Album;
