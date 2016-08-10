const React = require('react');
const CurrentSongStore = require('../stores/current_song_store.js');
const AudioApiPlayerStore = require('../stores/audio_api_player_store.js');
const AudioApiPlayerActions = require('../actions/audio_api_player_actions.js');
const d3 = require('d3');
const KindOfBlue = require('../constants/kind_of_blue_colors.js');
const CommentBar = require('./comment_bar.jsx');
const CurrentComment = require('./current_comment.jsx');

const AudioApiPlayer = React.createClass({
  getInitialState: function() {
    // return (
    //   { playing: AudioApiPlayerStore.getPlayStatus(),
    //     timePlayed: this.calcElapsedTime(),
    //     commentsDisplayed: true }
    // );
    return (
      { playing: this.props.playing,
        timePlayed: this.props.timePlayed,
        commentsDisplayed: true }
    );
  },

  // calcElapsedTime: function() {
  //   if(this.audioElement) {
  //     return (this.audioElement.currentTime / this.audioElement.duration);
  //   } else {
  //     return 0;
  //   }
  // },
  //
  // trackElapsedTime: function() {
  //   this.setState({ timePlayed: this.calcElapsedTime() });
  //   this.trackTimeID = requestAnimationFrame(this.trackElapsedTime);
  // },

  // createAudioNode: function() {
  //   this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  //
  //   this.audioElement = document.getElementById('audioElement');
  //
  //   this.audioElement.crossOrigin = "anonymous";
  //   this.audioSrc = this.audioCtx.createMediaElementSource(this.audioElement);
  //   this.analyser = this.audioCtx.createAnalyser();
  //   this.analyser.smoothingTimeConstant = .9;
  //   this.audioSrc.connect(this.analyser);
  //   this.audioSrc.connect(this.audioCtx.destination);
  //   this.trackElapsedTime();
  // },

  createVisualizer: function() {
    var frequencyData = new Uint8Array(150);

    var svgHeight = '250';
    var svgWidth = '600';
    var barPadding = '1';

    const that = this;
    function createSvg(parent, height, width) {
      return d3.select(parent)
          .append('svg')
          .attr('height', height)
          .attr('width', width)
          .attr('id', `graph-${that.props.song.id}`);
    }

    // var svg = createSvg(`#AudioGraph${that.props.song.id}`, svgHeight, svgWidth);
    var svg = createSvg(`#AudioGraph`, svgHeight, svgWidth);

    svg.selectAll('rect')
      .data(frequencyData)
      .enter()
      .append('rect')
      .attr('x', function (d, i) {
        return i * (svgWidth / frequencyData.length);
      })
      .attr('width', svgWidth / frequencyData.length - barPadding);

    function renderChart() {
      that.renderChartID = requestAnimationFrame(renderChart);
      that.analyser.getByteFrequencyData(frequencyData);

      svg.selectAll('rect')
        .data(frequencyData)
        .attr('y', function(d) {
          return svgHeight - d;
        })
        .attr('height', function(d) {
          return d;
        })
        .attr('fill', function(d) {
          return 'rgb(0, 0, ' + d + ')';
          // return 'rgb(0, 0, ' + d + ')';
          // return `rgb(${KindOfBlue[d]})`;
          // return KindOfBlue[d];
        });
    }
    renderChart();
  },

  componentDidMount: function() {

    this.props.createAudioNode();
    // this.playerStoreListener = AudioApiPlayerStore.addListener(this.updatePlayingStatus);
    // this.createAudioNode();
    // this.audio = document.getElementById('audioElement');
    // this.createVisualizer();
  },

  componentWillMount: function() {
    this.updateCurrentComment();
  },

  componentWillUnmount: function() {
    // cancelAnimationFrame(this.trackTimeID);
    // cancelAnimationFrame(this.renderChartID);
    // this.playerStoreListener.remove();
  },

  // playPause: function() {
  //   if(this.state.playing === false) {
  //     this.audio.pause();
  //   } else if(this.state.playing === true) {
  //     this.audio.play();
  //   }
  // },

  // updatePlayingStatus: function() {
  //   this.setState({ playing: AudioApiPlayerStore.getPlayStatus() });
  // },

  componentDidUpdate: function() {
    // this.checkForSongDetail();
    // this.playPause();
    // this.updateCurrentComment();
  },

  // handlePlay: function() {
  //   AudioApiPlayerActions.playPause();
  // },

  componentWillReceiveProps: function() {
    // this.setState({ playing: AudioApiPlayerStore.getPlayStatus() });
  },

  // checkForSongDetail: function() {
  //   if(/songs\/\d/.test(this.props.path)) {
  //     if(!document.getElementById(`graph-${this.props.song.id}`)) {
  //       this.createVisualizer();
  //     }
  //   }
  // },

  handleSongScroll: function(e) {
    e.preventDefault();
    const xCoord = e.pageX - e.target.offsetLeft;
    const lengthIntoSong = (xCoord / e.target.offsetWidth);
    this.props.audioElement.currentTime = this.props.audioElement.duration * (lengthIntoSong);
  },

  togglePlayButton: function() {
    if(this.props.wholeState.playing === true) {
      return "https://s3.amazonaws.com/f.cl.ly/items/0w0D2u2d051p0T3v3K2k/play-button%20(1).png";
    } else {
      return "https://s3.amazonaws.com/f.cl.ly/items/2c14210Y1O0d0q2z3B0U/rounded-pause-button.png";
    }
  },

  updateCurrentComment: function() {
    if(!this.props.wholeState.timePlayed > 0) {
      let firstComment = Math.min(...Object.keys(this.props.comments));
      this.currentCommentOrder = 1;
      this.currentComment = this.props.comments[this.currentCommentOrder];

    } else {

      const commentTime = Math.floor(this.props.wholeState.timePlayed *
        this.props.audioElement.duration);

      if(this.props.comments[this.currentCommentOrder + 1] &&
        this.props.comments[this.currentCommentOrder + 1].time_into_song
        === commentTime) {
          this.currentCommentOrder += 1;
          this.currentComment = this.props.comments[this.currentCommentOrder];
      }
    }
  },

  ensureCurrentCommentOrder: function() {
    this.updateCurrentComment();
    if(this.currentCommentOrder) {
      return this.currentCommentOrder;
    }
  },

  toggleCurrentComment: function() {
    if(this.props.wholeState.timePlayed) {
      return <CurrentComment comment={this.currentComment} />;
    }
  },

  // outputCurrentSongTime: function() {
  //   if(this.audioElement) {
  //     return this.audioElement.currentTime;
  //   } else {
  //     return 0;
  //   }
  // },

  toggleComments: function() {
    if(this.state.commentsDisplayed === true) {
      this.setState({ commentsDisplayed: false });
    } else {
      this.setState({ commentsDisplayed: true });
    }
  },

  createCommentBar: function() {
    if(this.state.commentsDisplayed === true ) {
      let currComm = this.toggleCurrentComment();
      return (
        <div>
          {currComm}
          <div>
            <div className="comment-bar">
              <CommentBar songID={this.props.song.id}
                comments={this.props.comments}
                timePlayed={this.props.wholeState.timePlayed}
                absTimeIntoSong={this.props.wholeState.absTimeIntoSong}
                order={this.ensureCurrentCommentOrder()} />

            </div>
          </div>
        </div>
      );
    }
  },

  render: function() {
    let playImageSrc = this.togglePlayButton();
    let commentBar = this.createCommentBar();

    return (
      <section className="audio-comments-bar">

          {commentBar}

          <div className="AudioPlayer">

            <ul className="artist-title-album">
              <li>{this.props.song.title}</li>
              <li>{this.props.song.artist_name}</li>
              <li className="album-title">{this.props.song.album_name}</li>
            </ul>

            <img src={playImageSrc}
              className="play" type="play" onClick={this.props.handlePlaying} />

            <audio id="audioElement" autoPlay
              src={this.props.song.song_url} >
            </audio>

            <progress className="rangeslider__fill"
              value={this.props.wholeState.timePlayed}
              onClick={this.handleSongScroll}/>

            <img className="comment-icon"
              src="https://s3.amazonaws.com/f.cl.ly/items/0N3K1O433d0Z1e173H2a/blank-squared-bubble.png"
              onClick={this.toggleComments} />

          </div>
      </section>
    );
  }
});

module.exports = AudioApiPlayer;
