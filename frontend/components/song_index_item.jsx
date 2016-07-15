const React = require('react');
const CurrentSongStore = require('../stores/current_song_store.js');
const CurrentSongActions = require('../actions/current_song_actions');
const hashHistory = require('react-router').hashHistory;
const AudioApiPlayerActions = require('../actions/audio_api_player_actions.js');

const SongIndexItem = React.createClass({
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
      <figure className="song-index-item">

        <img alt={this.props.song.album_name}
          src={this.props.song.image_url}
          onClick={this.goToSongDetail}/>

        <section className="song">

          <div className="song-item">
            <div className="play-song-info">

              <img src="https://s3.amazonaws.com/f.cl.ly/items/2B380T1a0s181d370f3K/movie-player-play-button.png"
                onClick={this.handleSongPlay}
                className="play-button"/>

              <ul className="song-info">
                <li>{this.props.song.artist_name} - {this.props.song.title}</li>
                <li className="album-name">{this.props.song.album_name}</li>
              </ul>

            </div>
            <figure id="waveform">
              <div id={`waveform${this.props.song.id}`}/>
            </figure>
          </div>

          <ul className="song-button-feats">
            <li><button>Like</button></li>
            <li><button>Add to Playlist</button></li>
          </ul>
        </section>
      </figure>
    );
  }
});

module.exports = SongIndexItem;
