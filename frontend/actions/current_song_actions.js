const Dispatcher = require('../dispatcher/dispatcher.js');
const CurrentSongConstants = require('../constants/current_song_constants.js');
const CurrentSongApiUtil = require('../util/current_song_api_util.js');

const CurrentSongActions = {
  selectCurrentSong: function(songID) {
    CurrentSongApiUtil.selectCurrentSong(songID, this.receiveCurrentSong);
  },

  receiveCurrentSong: function(song) {
    Dispatcher.dispatch({
      actionType: CurrentSongConstants.RECEIVE_CURRENT_SONG,
      currentSong: song
    });
  },

  clearCurrentSong: function(){
    Dispatcher.dispatch({
      actionType: CurrentSongConstants.CLEAR_CURRENT_SONG
    });
  }
};

module.exports = CurrentSongActions;
