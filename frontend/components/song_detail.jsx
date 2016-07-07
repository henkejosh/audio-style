const React = require('react');
const CurrentSongStore = require('../stores/current_song_store');
const CurrentSongActions = require('../actions/current_song_actions');
const CommentForm = require('./comment_form.jsx');

const SongDetail = React.createClass({
  getInitialState: function() {
    // debugger;
    return { song: CurrentSongStore.currentSong()};
  },

  componentDidMount: function() {
    this.currentListener = CurrentSongStore.addListener(this.fetchCurrentSong);
    CurrentSongActions.selectCurrentSong(this.props.params.songID);
  },

  fetchCurrentSong: function() {
    this.setState({ song: CurrentSongStore.currentSong()});
  },

  componentWillUnmount: function() {
    this.currentListener.remove();
  },

  render: function() {
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

          <CommentForm />
        </section>
      </figure>
    );
  }
});

module.exports = SongDetail;
