const React = require('react');
const NewSongItem = require('./new_song_item.jsx');
const SongStore = require('../stores/song_store.js');
const SongActions = require('../actions/song_actions');
const CommentForm = require('./comment_form.jsx');
const CurrentSongActions = require('../actions/current_song_actions.js');
const AudioApiPlayer = require('./audio_api_player.jsx');
const CommentsIndex = require('./comments_index.jsx');
const CurrentSongStore = require('../stores/current_song_store.js');
const AudioApiPlayerActions = require('../actions/audio_api_player_actions.js');
const AudioApiPlayerStore = require('../stores/audio_api_player_store.js');

const FinalSongIndexItem = React.createClass({
  render: function() {
    return (
      <figure className="final-song-index-item">
        <img className="final-item-image"
          src={this.props.song.album_name}
          onClick={this.props.handlePlaying} />
      </figure>
    );
  }
});

module.exports = FinalSongIndexItem;
