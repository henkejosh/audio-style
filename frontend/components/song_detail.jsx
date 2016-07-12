const React = require('react');
const SongStore = require('../stores/song_store');
const CommentForm = require('./comment_form.jsx');
const SongActions = require('../actions/song_actions.js');
const CurrentSongActions = require('../actions/current_song_actions.js');
const CommentsIndex = require('./comments_index.jsx');

const SongDetail = React.createClass({
  getInitialState: function() {
    return { song: SongStore.getSong(this.props.params.songID)};
  },

  componentDidMount: function() {
    this.songListener = SongStore.addListener(this.fetchPageSong);
    SongActions.getSong(this.props.params.songID);
  },

  fetchPageSong: function() {
    this.setState({ song: SongStore.getSong(this.props.params.songID)});
  },

  handleSongPlay: function(e) {
    e.preventDefault();
    CurrentSongActions.selectCurrentSong(this.props.params.songID);
    // this._wavesurfer.playPause();
  },

  componentWillUnmount: function() {
    this.songListener.remove();
  },

  render: function() {
    // debugger;
    return (
      <figure className="song-index-item">

        <img alt={this.state.song.album_name}
          src={this.state.song.image_url}/>

        <section className="song">

          <div className="song-item">
            <div className="play-song-info">

              <img src="http://f.cl.ly/items/2B380T1a0s181d370f3K/movie-player-play-button.png"
                onClick={this.handleSongPlay}
                className="play-button"/>

              <ul className="song-info">
                <li>{this.state.song.artist_name} - {this.state.song.title}</li>
                <li className="album-name">{this.state.song.album_name}</li>
              </ul>
            </div>
          </div>
        </section>

        <CommentsIndex songID={this.props.params.songID}/>

      </figure>
    );
  }
});

module.exports = SongDetail;
