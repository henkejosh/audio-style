const React = require('react');
const CommentForm = require('./comment_form.jsx');
const CurrentSongStore = require('../stores/current_song_store.js');
const CurrentSongActions = require('../actions/current_song_actions');

const _wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor:'violet',
  progressColor: 'purple'
});

const WaveSurfer = React.createClass({
  componentDidMount: function() {

  },

  render: function() {
    return (
      <div id="waveform"></div>
    );
  }
});

module.exports = WaveSurfer;
