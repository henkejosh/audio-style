const React = require('react');
const SongIndexItem = require('./song_index_item.jsx');
const SongStore = require('../stores/song_store.js');
const SongActions = require('../actions/song_actions');
const CurrentSongActions = require('../actions/current_song_actions');
const CurrentSongStore = require('../stores/current_song_store.js');
const hashHistory = require('react-router').hashHistory;
const AudioApiPlayerActions = require('../actions/audio_api_player_actions.js');

const NewSongItem = React.createClass({
  getInitialState: function() {
    return { shown: "none"};
  },

  handleSongPlay: function(e) {
    e.preventDefault();
    if(CurrentSongStore.currentSong() && (this.props.song.id === CurrentSongStore.currentSong().id)) {
      AudioApiPlayerActions.playPause();
    } else {
      CurrentSongActions.selectCurrentSong(this.props.song.id);
    }
  },

  goToSongDetail: function(e) {
    e.preventDefault();
    hashHistory.push(`songs/${this.props.song.id}`);
  },

  render: function() {
    return (
      <div className="newSongItem">

        <img src="https://s3.amazonaws.com/f.cl.ly/items/2B380T1a0s181d370f3K/movie-player-play-button.png"
          onClick={this.props.handlePlaying}
          className="play-button"/>

        <img className="final-item-image"
          src={this.props.song.album.images[1].url} />

        <ul>
          <li>{this.props.song.artists[0].name}</li>
          <li>{this.props.song.name}</li>
          <li>{this.props.song.album.name}</li>
        </ul>
      </div>
    );
  }
});

module.exports = NewSongItem;
