const React = require('react');
const NewSongItem = require('./new_song_item.jsx');
const SongStore = require('../stores/song_store.js');
const SongActions = require('../actions/song_actions');

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
    return (
      <ul className="newSongIndex">
        { Object.keys(this.state.songs).map( songID => {
          return (
              <NewSongItem key={songID} song={this.state.songs[songID]} />
            );
        })}
      </ul>
    );
  }
});

module.exports = NewSongIndex;
