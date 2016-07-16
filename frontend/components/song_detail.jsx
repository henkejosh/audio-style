const React = require('react');
const SongStore = require('../stores/song_store');
const CommentForm = require('./comment_form.jsx');
const SongActions = require('../actions/song_actions.js');
const CurrentSongActions = require('../actions/current_song_actions.js');
const AudioApiPlayer = require('./audio_api_player.jsx');
const CommentsIndex = require('./comments_index.jsx');
const CurrentSongStore = require('../stores/current_song_store.js');
const AudioApiPlayerActions = require('../actions/audio_api_player_actions.js');
const AudioApiPlayerStore = require('../stores/audio_api_player_store.js');

const SongDetail = React.createClass({
  getInitialState: function() {
    return { song: SongStore.getSong(this.props.params.songID) };
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
    if(CurrentSongStore.currentSong() && (this.state.song.id === CurrentSongStore.currentSong().id)) {
      AudioApiPlayerActions.playPause();
    } else {
      CurrentSongActions.selectCurrentSong(this.props.params.songID);

      AudioApiPlayerStore.pausePlaying();
      AudioApiPlayerActions.resetPlaying();
    }
  },

  playPause: function() {
    AudioApiPlayer.playPause();
  },

  componentWillUnmount: function() {
    this.songListener.remove();
  },

  render: function() {
    return (
      <figure className="song-detail-index">
        <span className="song-detail-item">
          <div className="songInfo">

            <div className="albumThumb">
              <a>
                <img className="play" onClick={this.handleSongPlay}
                  src="https://s3.amazonaws.com/f.cl.ly/items/2B380T1a0s181d370f3K/movie-player-play-button.png"/>
                <div className="overlay"></div>
              </a>

              <img className="albumPic"
                alt={this.state.song.album_name}
                src={this.state.song.image_url}
              />
            </div>

            <section className="song">
              <div className="song-data">

                  <ul className="song-info">
                    <li>{this.state.song.artist_name} - {this.state.song.title}</li>
                    <li className="album-name">{this.state.song.album_name}</li>
                  </ul>
              </div>
            </section>

          </div>
          <figure id={`AudioGraph${this.state.song.id}`}
            className='AudioGraph'/>

        </span>

      </figure>
    );
  }
});
// <div className="comment">
// <CommentsIndex songID={this.props.params.songID}/>
// </div>

module.exports = SongDetail;
