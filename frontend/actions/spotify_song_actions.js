const Dispatcher = require('../dispatcher/dispatcher.js');
const SpotifyApiUtil = require('../util/spotify_api_util.js');
const SpotifySongConstants = require('../constants/spotify_song_constants.js');

const SpotifySongActions = {
  // getAllSongs: function() {
  //   SpotifyApiUtil.getAllSongs(this.receiveSongs);
  // },

  fetchZeppelinSongs: function() {
    SpotifyApiUtil.fetchZeppelinSongs(this.receiveSpotifySongs);
  },

  receiveSpotifySongs: function(songs) {
    Dispatcher.dispatch({
      actionType: SpotifySongConstants.GET_SPOTIFY_SONGS,
      songs: songs
    });
  },

  receiveSongs: function(songs) {
    Dispatcher.dispatch({
      actionType: SpotifySongConstants.GET_SONGS,
      songs: songs
    });
  },

  getSong: function(songID) {
    Dispatcher.dispatch({
      actionType: SpotifySongConstants.GET_SONG,
      songID: songID
    });
  },
};

module.exports = SpotifySongActions;
