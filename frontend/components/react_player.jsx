const React = require('react');
const ReactPlayer = require('react-player');

const Player = React.createClass({
  render: function() {
    return (
      <ReactPlayer controls="true" playing height="27" 
        url="http://res.cloudinary.com/dg2yejdpt/video/upload/v1467741094/05_Flamenco_Sketches_sdcnnz.mp3">
      </ReactPlayer>
    );
  }
});


module.exports = Player;
