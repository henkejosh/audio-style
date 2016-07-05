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
      waveColor:'black',
      progressColor: 'grey',
      fillParent: true,
      barWidth: 1,
      height: 70,
      autoCenter: true
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

              <img src="http://f.cl.ly/items/1Q3U3s0J2m133f2u1V1x/play-button.png"
                onClick={this.handleSongPlay}
                className="play-button"/>

              <ul className="song-info">
                <li>{this.props.song.title}</li>
                <li>{this.props.song.artist_name}</li>
                <li>{this.props.song.album_name}</li>
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
            <li>Like</li>
            <li>Add to PL</li>
          </ul>
        </section>
      </figure>
    );
  }
});

module.exports = SongIndexItem;
