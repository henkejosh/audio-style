const React = require('react');

const AudioApiPlayer = React.createClass({
  componentDidMount: function() {
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var audioElement = document.getElementById('audioElement');
    audioElement.crossOrigin = "anonymous";
    var audioSrc = audioCtx.createMediaElementSource(audioElement);
    var analyser = audioCtx.createAnalyser();

    // Bind our analyser to the media element source.
    audioSrc.connect(analyser);
    audioSrc.connect(audioCtx.destination);

    // break in the instructions....

    var frequencyData = new Uint8Array(200);

    var svgHeight = '300';
    var svgWidth = '1000';
    var barPadding = '1';

    function createSvg(parent, height, width) {
      return d3.select(parent).append('svg').attr('height', height).attr('width', width);
    }

    var svg = createSvg('#AudioGraph', svgHeight, svgWidth);

// Create our initial D3 chart.
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

      // Copy frequency data to frequencyData array.
      analyser.getByteFrequencyData(frequencyData);

      // Update d3 chart with new data.
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

  render: function() {
    return (
      <div className="webAudioP">AudioPlayer:::: {this.props.song.title}

        <audio id="audioElement" controls="controls"
          src={this.props.song.song_url}>
        </audio>

      </div>
    );
  }
});

module.exports = AudioApiPlayer;
