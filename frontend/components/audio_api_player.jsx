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
    return (
      { playing: AudioApiPlayerStore.getPlayStatus(),
        timePlayed: this.calcElapsedTime() }
    );
  },

  calcElapsedTime: function() {
    if(this.audioElement) {
      return (this.audioElement.currentTime / this.audioElement.duration);
    } else {
      return 0;
    }
  },

  trackElapsedTime: function() {
    this.setState({ timePlayed: this.calcElapsedTime() });
    requestAnimationFrame(this.trackElapsedTime);
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

  createVisualizer: function() {
    var frequencyData = new Uint8Array(150);

    var svgHeight = '250';
    var svgWidth = '700';
    var barPadding = '1';

    const that = this;
    function createSvg(parent, height, width) {
      return d3.select(parent)
          .append('svg')
          .attr('height', height)
          .attr('width', width)
          .attr('id', `graph-${that.props.song.id}`);
    }

    var svg = createSvg(`#AudioGraph${that.props.song.id}`, svgHeight, svgWidth);

    svg.selectAll('rect')
      .data(frequencyData)
      .enter()
      .append('rect')
      .attr('x', function (d, i) {
        return i * (svgWidth / frequencyData.length);
      })
      .attr('width', svgWidth / frequencyData.length - barPadding);

    function renderChart() {
      requestAnimationFrame(renderChart);
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
          // return 'rgb(0, 0, ' + d + ')';
          // return `rgb(${KindOfBlue[d]})`;
          return KindOfBlue[d];
        });
    }
    renderChart();
  },

  componentDidMount: function() {
    this.playerStoreListener = AudioApiPlayerStore.addListener(this.updatePlayingStatus);
    this.createAudioNode();
    this.audio = document.getElementById('audioElement');
    this.checkForSongDetail();
    // this.calcCommentDuration();
    // this.updateCurrentComment();
  },


  // TESTING!!
  componentWillMount: function() {
    this.updateCurrentComment();
  },

  componentWillUnmount: function() {
    this.currSongListener.remove();
    AudioApiPlayerStore.resetPlaying();
    this.playerStoreListener.remove();
  },

  playPause: function() {
    if(this.state.playing === false) {
      this.audio.pause();
    } else if(this.state.playing === true) {
      this.audio.play();
    }
  },

  updatePlayingStatus: function() {
    this.setState({ playing: AudioApiPlayerStore.getPlayStatus() });
  },

  componentDidUpdate: function() {
    this.checkForSongDetail();
    this.playPause();
    this.updateCurrentComment();
  },

  handlePlay: function() {
    AudioApiPlayerActions.playPause();
  },

  componentWillReceiveProps: function() {
    this.setState({ playing: AudioApiPlayerStore.getPlayStatus() });
  },

  checkForSongDetail: function() {
    if(/songs\/\d/.test(this.props.path)) {
      if(!document.getElementById(`graph-${this.props.song.id}`)) {
        this.createVisualizer();
      }
    }
  },

  handleSongScroll: function(e) {
    e.preventDefault();
    const xCoord = e.pageX - e.target.offsetLeft;
    const lengthIntoSong = (xCoord / e.target.offsetWidth);
    this.audioElement.currentTime = this.audioElement.duration * (lengthIntoSong);
  },

  togglePlayButton: function() {
    if(this.state.playing === true) {
      return "Pause";
    } else {
      return "Play";
    }
  },

  // calcCommentDuration: function() {
  //   // this.commentDuration = Math.floor(100 /
  //   //     Object.keys(this.props.comments).length);
  //   // if (this.audioElement) {
  //   //
  //   //   this.commentDuration = this.audioElement.duration /
  //   // }
  // },

  updateCurrentComment: function() {
    if(!this.state.timePlayed > 0) {
      let firstComment = Math.min(...Object.keys(this.props.comments));
      // this.currentComment = this.props.comments[firstComment];
      this.currentCommentOrder = 1;
      this.currentComment = this.props.comments[this.currentCommentOrder];
      // return;
    } else {
      const commentTime = Math.floor(this.state.timePlayed *
        this.audioElement.duration);

      // console.log(this.props.song.title);
      // console.log(this.currentCommentOrder);
      // // So this.props.comments is not loading correctly on song switch;
      // console.log(this.props.comments[1]);
      if(this.props.comments[this.currentCommentOrder + 1] &&
        this.props.comments[this.currentCommentOrder + 1].time_into_song
        === commentTime) {
          this.currentCommentOrder += 1;
          this.currentComment = this.props.comments[this.currentCommentOrder];
      }
    }
    // return this.currentCommentOrder;
  },

  ensureCurrentCommentOrder: function() {
    if(this.currentCommentOrder) {
      return this.currentCommentOrder;
    }
  },

  toggleCurrentComment: function() {
    if(this.state.timePlayed) {
      return <CurrentComment comment={this.currentComment} />;
    }
  },

  outputCurrentSongTime: function() {
    if(this.audioElement) {
      return this.audioElement.currentTime;
    } else {
      return 0;
    }
  },

  render: function() {
    let button = this.togglePlayButton();
    // let currComm;
    let currComm = this.toggleCurrentComment();
    // if(this.state.timePlayed) {
    //   currComm = <CurrentComment comment={this.currentComment} />;
    // }

    return (
      <section className="audio-comments-bar">

        <div className="comment-bar">
          {currComm}

          <CommentBar songID={this.props.song.id}
            time={this.state.timePlayed}
            comments={this.props.comments}
            actualTime={this.outputCurrentSongTime()}
            order={this.ensureCurrentCommentOrder()} />

        </div>

        <div className="AudioPlayer">
          <button className="play" type="play"
            value="Play" onClick={this.handlePlay}>{button}</button>

          <audio id="audioElement" autoPlay
            src={this.props.song.song_url} >
          </audio>

          <progress className="rangeslider__fill"
            value={this.state.timePlayed}
            onClick={this.handleSongScroll}/>
        </div>
      </section>
    );
  }
});

module.exports = AudioApiPlayer;
