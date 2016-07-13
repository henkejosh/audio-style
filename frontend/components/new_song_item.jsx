const React = require('react');
const SongIndexItem = require('./song_index_item.jsx');
const SongStore = require('../stores/song_store.js');
const SongActions = require('../actions/song_actions');
const CurrentSongActions = require('../actions/current_song_actions');

const NewSongItem = React.createClass({
  handleSongPlay: function(e) {
    e.preventDefault();
    CurrentSongActions.selectCurrentSong(this.props.song.id);
    // this._wavesurfer.playPause();
  },

  render: function() {
    return (
      <div className="newSongItem">
        <a onClick={this.handleSongPlay}>
          <img src={this.props.song.image_url} />
        </a>

        <ul>
          <li>{this.props.song.artist_name}</li>
          <li>{this.props.song.title}</li>
          <li>{this.props.song.album_name}</li>
        </ul>
      </div>
    );
  }
});

module.exports = NewSongItem;
