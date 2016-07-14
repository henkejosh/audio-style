const React = require('react');
const CurrentSongStore = require('../stores/current_song_store.js');
const AudioApiPlayerStore = require('../stores/audio_api_player_store.js');
const AudioApiPlayerActions = require('../actions/audio_api_player_actions.js');
// const WAAClock = require('WAAClock');

const AudioApiPlayer = React.createClass({
  getInitialState: function() {
    return { playing: AudioApiPlayerStore.getPlayStatus() };
  },

  createAudioNode: function() {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    this.audioElement = document.getElementById('audioElement');

    this.audioElement.crossOrigin = "anonymous";
    this.audioSrc = this.audioCtx.createMediaElementSource(this.audioElement);
    this.analyser = this.audioCtx.createAnalyser();

    this.audioSrc.connect(this.analyser);
    this.audioSrc.connect(this.audioCtx.destination);
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

  // setupVisualizer: function() {
  //   var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  //
  //   var audioElement = document.getElementById('audioElement');
  //
  //   audioElement.crossOrigin = "anonymous";
  //   var audioSrc = audioCtx.createMediaElementSource(audioElement);
  //   var analyser = audioCtx.createAnalyser();
  //
  //   audioSrc.connect(analyser);
  //   audioSrc.connect(audioCtx.destination);
  //
  //   var frequencyData = new Uint8Array(150);
  //
  //   var svgHeight = '250';
  //   var svgWidth = '700';
  //   var barPadding = '1';
  //
  //   function createSvg(parent, height, width) {
  //     return d3.select(parent).append('svg').attr('height', height).attr('width', width);
  //   }
  //
  //   var svg = createSvg(`#AudioGraph${this.props.song.id}`, svgHeight, svgWidth);
  //
  //   svg.selectAll('rect')
  //     .data(frequencyData)
  //     .enter()
  //     .append('rect')
  //     .attr('x', function (d, i) {
  //       return i * (svgWidth / frequencyData.length);
  //     })
  //     .attr('width', svgWidth / frequencyData.length - barPadding);
  //
  //   function renderChart() {
  //     requestAnimationFrame(renderChart);
  //     analyser.getByteFrequencyData(frequencyData);
  //
  //     svg.selectAll('rect')
  //       .data(frequencyData)
  //       .attr('y', function(d) {
  //         return svgHeight - d;
  //       })
  //       .attr('height', function(d) {
  //         return d;
  //       })
  //       .attr('fill', function(d) {
  //         return 'rgb(0, 0, ' + d + ')';
  //       });
  //   }
  //   if(/songs\/\d/.test(this.props.path)) {
  //     renderChart();
  //   }
  // },

  componentDidMount: function() {
    this.playerStoreListener = AudioApiPlayerStore.addListener(this.updatePlayingStatus);
    // this.setupVisualizer();
    this.createAudioNode();
    this.audio = document.getElementById('audioElement');
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
    // test
    this.checkForSongDetail();
    //
    this.playPause();
  },

  componentWillUpdate: function() {
    // debugger;
    // this.checkForSongDetail();
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

  tempPause: function() {
    // set it to Timeout to make it faster (asyncrhonous processes
    // right before store launches?)
    this.state.playing = false;
  },

  checkForSongDetail: function() {
    if(/songs\/\d/.test(this.props.path)) {
      // this.setupVisualizer();
      if(!document.getElementById(`graph-${this.props.song.id}`)) {
        this.createVisualizer();
      }
    }
  },

  render: function() {
    let button;
    if(this.state.playing === true) {
      button = "Pause";
    } else {
      button = "Play";
    }
    // checkForSongDetail();
    return (
      <div>
        <button type="play" value="Play" onClick={this.handlePlay}>{button}</button>
        <audio id="audioElement" autoPlay
          src={this.props.song.song_url}>
        </audio>
      </div>
    );
  }
});

module.exports = AudioApiPlayer;
