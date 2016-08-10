const React = require('react');
const SessionApiUtil = require('../util/session_api_util.js');
const SessionActions = require('../actions/session_actions.js');
const SessionStore = require('../stores/session_store.js');
const Modal = require('react-modal');
const Header = require('./header.jsx');
const Router = require('react-router').Router;
const hashHistory = require('react-router').hashHistory;
const SongIndex = require('./song_index.jsx');
const SongActions = require('../actions/song_actions.js');
const CurrentSongPlayer = require('./current_song_player.jsx');
const CurrentSongStore = require('../stores/current_song_store.js');
const CommentStore = require('../stores/comment_store.js');
const ReactPlayer = require('./react_player.jsx');
const AudioApiPlayer = require('./audio_api_player.jsx');
const AudioApiPlayerStore = require('../stores/audio_api_player_store.js');
const AudioApiPlayerActions = require('../actions/audio_api_player_actions.js');
// new stuff

const App = React.createClass({
  getInitialState: function() {
    const currSong = CurrentSongStore.currentSong();
    return {
      currentSong: currSong,
      comments: currSong.comments,
      // playing: AudioApiPlayerStore.getPlayStatus(),
      // timePlayed: this.calcElapsedTime(),
      playing: false,
      timePlayed: 0,
      commentsDisplayed: true
    };
  },

  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this.isUserLoggedIn);
    this.currentSongListener = CurrentSongStore.addListener(this.isCurrentSong);
    this.commentListener = CommentStore.addListener(this._onCommentChange);
    this.checkForCurrentSong();
    SongActions.getAllSongs();
  },

  _onCommentChange: function() {
    this.setState({ comments: CommentStore.all(this.state.currentSong.id) });
  },

  isCurrentSong: function() {
    AudioApiPlayerStore.newSongReceived();
    const currSong = CurrentSongStore.currentSong();
    this.setState({ currentSong: currSong, comments: currSong.comments });
  },

  isUserLoggedIn: function() {
    if(SessionStore.isUserLoggedIn()) {
      hashHistory.push(`/songs`);
    }
  },

  checkForCurrentSong: function() {
    if(this.state.currentSong.id && !this.state.comments) {
      this.setState({
        comments: this.state.currentSong.comments
      });
    }
  },

  componentWillMount: function() {
    Modal.setAppElement(document.getElementById("root"));
  },
// // // // // // // // // // // // // // // // // // // // //
  // CAPSTONE v2.0 changes here!!
  playSong: function() {
    this.audioElement.play();
  },

  pauseSong: function() {
    this.audioElement.pause();
  },

  createAudioNode: function() {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    this.audioElement = document.getElementById('audioElement');

    this.audioElement.crossOrigin = "anonymous";
    this.audioSrc = this.audioCtx.createMediaElementSource(this.audioElement);
    this.analyser = this.audioCtx.createAnalyser();
    this.analyser.smoothingTimeConstant = .9;
    this.audioSrc.connect(this.analyser);
    this.audioSrc.connect(this.audioCtx.destination);
    this.trackElapsedTime();
  },

  calcElapsedTime: function() {
    if(this.audioElement) {
      return (this.audioElement.currentTime / this.audioElement.duration);
    } else {
      return 0;
    }
  },

  trackElapsedTime: function() {
    this.setState({
      timePlayed: this.calcElapsedTime(),
      absTimeIntoSong: this.audioElement.currentTime });
    this.trackTimeID = requestAnimationFrame(this.trackElapsedTime);
  },

  handlePlaying(e) {
    e.preventDefault();
    if(this.state.playing === false ) {
      this.setState({ playing: true });
    } else if(this.state.playing) {
      this.setState({ playing: false });
    }

    this.playPause();
  },

  playPause: function() {
    if(this.state.playing === false) {
      this.pauseSong();
    } else if(this.state.playing === true) {
      this.playSong();
    }
  },
//// // // // // //// // // // // //// // // // // //// // // // // //// // // //
  render: function() {
    let currSong;

    if(this.state.currentSong.id) {
      currSong = <AudioApiPlayer
          song={this.state.currentSong}
          path={this.props.location.pathname}
          wholeState={this.state}
          comments={this.state.comments}
          handlePlaying={this.handlePlaying}
          createAudioNode={this.createAudioNode}
          audioElement={this.audioElement}
          />;
    }

    return (
      <div>
        <Header/>

        <div className="define-content-area">
          <div className="content-start">

          {this.props.children}
          {currSong}

          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
