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

const NewSongIndex = React.createClass({
  getInitialState: function() {
    return {songs:  SongStore.all() };
  },

  _onChange: function() {
    this.setState({ songs: SongStore.all() });
  },

  componentDidMount: function() {
    this.songListener = SongStore.addListener(this._onChange);
    // SongActions.getAllSongs();
  },

  componentWillUnmount: function() {
    this.songListener.remove();
  },

  render: function() {
    const that = this;
    return (
      <div className="index-album-image" >

        <div className="album-and-visualizer" >
          <img src="https://res.cloudinary.com/dg2yejdpt/image/upload/v1467739480/a_-_Front_lscrcq.jpg" />

          <figure id='AudioGraph' className='AudioGraph'/>
        </div>

        <div className="song-table" >
          <ul className="song-table-columns">
            <li>ARTIST</li>
            <li>TITLE</li>
            <li>ALBUM</li>
          </ul>

          <ul className="songIndex">
            { Object.keys(that.state.songs).map( songID => {
              return (
                  <NewSongItem key={songID} song={that.state.songs[songID]} />
                );
            })}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = NewSongIndex;
