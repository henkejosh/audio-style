"use strict";

const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');
const CurrentSongConstants = require('../constants/current_song_constants.js');
const SessionConstants = require('../constants/session_constants.js');

let _currentSong = {};

const CurrentSongStore = new Store(Dispatcher);

const _receiveCurrentSong = function(currSong) {
  _currentSong = currSong;
};

const _clearCurrentSong = function() {
  _currentSong = {};
};

CurrentSongStore.isCurrentSong = function() {
  return !!_currentSong.title;
};

CurrentSongStore.currentSong = function() {
  return Object.assign({}, _currentSong);
};

CurrentSongStore.__onDispatch = payload => {
  switch(payload.actionType) {
    case CurrentSongConstants.RECEIVE_CURRENT_SONG:
      _receiveCurrentSong(payload.currentSong);
      CurrentSongStore.__emitChange();
      break;
    case CurrentSongConstants.FETCH_CURRENT_SONG:
      return;
    case CurrentSongConstants.CLEAR_CURRENT_SONG:
      _clearCurrentSong();
      CurrentSongStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _clearCurrentSong();
      CurrentSongStore.__emitChange();
      break;
    }
};

module.exports = CurrentSongStore;
