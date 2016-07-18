"use strict";

const Store = require('flux/utils').Store;
const AudioApiPlayerConstants = require('../constants/audio_api_player_constants.js');
const Dispatcher = require('../dispatcher/dispatcher.js');
const SessionConstants = require('../constants/session_constants.js');

let _playing = true;

const AudioApiPlayerStore = new Store(Dispatcher);

const playPause = function() {
  if(_playing === true) {
    _playing = false;
  } else {
    _playing = true;
  }
};

AudioApiPlayerStore.getPlayStatus = function() {
  return _playing;
};

AudioApiPlayerStore.newSongReceived = function() {
  _playing = true;
  // AudioApiPlayerStore.__emitChange();
};

const _turnPlayerOff = function() {
  _playing = false;
};

// AudioApiPlayerStore.resetPlaying = function() {
AudioApiPlayerStore.pausePlaying = function() {
  _playing = false;
};

const resetPlaying = function() {
  _playing = true;
};

AudioApiPlayerStore.__onDispatch = payload => {
  switch(payload.actionType) {
    case AudioApiPlayerConstants.PLAY_PAUSE:
      playPause();
      AudioApiPlayerStore.__emitChange();
      break;

    case AudioApiPlayerConstants.RESET_PLAYING:
      resetPlaying();
      AudioApiPlayerStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _turnPlayerOff();
      AudioApiPlayerStore.__emitChange();
      break;
  }
};

module.exports = AudioApiPlayerStore;
