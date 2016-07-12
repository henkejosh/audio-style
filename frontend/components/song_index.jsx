const React = require('react');
const SongIndexItem = require('./song_index_item.jsx');
const SongStore = require('../stores/song_store.js');
const SongActions = require('../actions/song_actions');

const SongIndex = React.createClass({
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
      <ul className="songIndex">
        { Object.keys(that.state.songs).map( songID => {
          return (
              <SongIndexItem key={songID} song={that.state.songs[songID]} />
            );
        })}
      </ul>
    );
  }
});

module.exports = SongIndex;
