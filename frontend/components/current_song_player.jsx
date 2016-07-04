const React = require('react');
const CurrentSongStore = require('../stores/current_song_store.js');

const CurrentSongPlayer = React.createClass({
  getInitialState: function() {
    return { currentSong: CurrentSongStore.currentSong()};
  },

  componentDidMount: function() {
    CurrentSongStore.addListener(this.fetchCurrentSong);
  },

  fetchCurrentSong: function() {
    this.setState({currentSong: CurrentSongStore.currentSong()});
    const audio = document.getElementById('player');
    audio.load();
  },

  render: function() {
    return (
      <div>
        <div className="push">
          <audio id="player" controls="controls" autoPlay>
          <source src={ this.state.currentSong.spotify_preview }/>
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    );
  }
});

module.exports = CurrentSongPlayer;
