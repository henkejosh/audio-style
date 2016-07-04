const React = require('react');

const CurrentSongPlayer = React.createClass({
  render: function() {
    return (
      <div>
        <div className="push">
          <audio controls="controls">
            <source src="https://mdn.mozillademos.org/files/2587/AudioTest%20(1).ogg"/>
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    );
  }
});

module.exports = CurrentSongPlayer;
