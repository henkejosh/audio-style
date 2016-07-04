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
  },

  render: function() {
    
    return (
      <div>
        <div className="push">
          <audio controls="controls">
          <source src="https://p.scdn.co/mp3-preview/605b1c1a5995a87eb64dab0264738f5143c64e2c"/>
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    );
  }
});

module.exports = CurrentSongPlayer;
