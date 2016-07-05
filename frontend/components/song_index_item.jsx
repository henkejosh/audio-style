const React = require('react');
const CommentForm = require('./comment_form.jsx');
const CurrentSongStore = require('../stores/current_song_store.js');
const CurrentSongActions = require('../actions/current_song_actions');

const SongIndexItem = React.createClass({
  getInitialState: function() {
    return { shown: "none"};
  },

  handleCommentForm: function(event) {
    event.preventDefault();

    let displayAtt;
    if(this.state.shown === "none") {
      displayAtt = "block";
    } else {
      displayAtt = "none";
    }
    this.setState({ shown: "block"});
  },

  handleSongPlay: function(e) {
    e.preventDefault();
    CurrentSongActions.selectCurrentSong(this.props.song.id);
    this._wavesurfer.playPause();
  },

  componentDidMount: function() {
    this._wavesurfer = WaveSurfer.create({
      container: `#waveform${this.props.song.id}`,
      waveColor: '#8C8C8C',
      progressColor: 'grey',
      fillParent: true,
      barWidth: 1,
      height: 70,
      autoCenter: true,
      backend: 'MediaElement'
      // backend: 'Audio'
    });

    if(this.props.song.id) {
      this._wavesurfer.load(this.props.song.spotify_preview);
    }
  },

  render: function() {
    return (
      <figure className="song-index-item">

        <img alt={this.props.song.album_name}
          src={this.props.song.image_url}/>

        <section className="song">

          <div className="song-item">
            <div className="play-song-info">

              <img src="http://f.cl.ly/items/2B380T1a0s181d370f3K/movie-player-play-button.png"
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
            <li onClick={this.handleCommentForm}>
              <CommentForm displayProp={this.state.shown}/>
            </li>
            <li><button>Like</button></li>
            <li><button>Add to Playlist</button></li>
          </ul>
        </section>
      </figure>
    );
  }
});

module.exports = SongIndexItem;
