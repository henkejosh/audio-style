const React = require('react');
const CurrentSongStore = require('../stores/current_song_store.js');
const AudioApiPlayerStore = require('../stores/audio_api_player_store.js');
const AudioApiPlayerActions = require('../actions/audio_api_player_actions.js');
const d3 = require('d3');
const ProgressBar = require('./slider.jsx');

const AudioApiPlayer = React.createClass({
  getInitialState: function() {
    return { playing: AudioApiPlayerStore.getPlayStatus(),
      timePlayed: this.calcElapsedTime() };
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
          return 'rgb(0, 0, ' + d + ')';
        });
    }
    renderChart();
  },

  componentDidMount: function() {
    this.playerStoreListener = AudioApiPlayerStore.addListener(this.updatePlayingStatus);
    this.createAudioNode();
    this.audio = document.getElementById('audioElement');
    this.checkForSongDetail();
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
  },

  handlePlay: function() {
    AudioApiPlayerActions.playPause();
  },

  fetchCurrentSong: function() {
    this.setState({currentSong: CurrentSongStore.currentSong()});
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

  render: function() {
    let button;
    if(this.state.playing === true) {
      button = "Pause";
    } else {
      button = "Play";
    }

    return (
      <div>
        <button type="play" value="Play" onClick={this.handlePlay}>{button}</button>
        <audio id="audioElement" autoPlay
          src={this.props.song.song_url} >
        </audio>
        <progress className="rangeslider__fill"
          value={this.state.timePlayed}
          onClick={this.handleSongScroll}/>
      </div>
    );
  }
});

module.exports = AudioApiPlayer;
