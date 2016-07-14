"use strict";

const Store = require('flux/utils').Store;
const AudioApiPlayerConstants = require('../constants/audio_api_player_constants.js');
const Dispatcher = require('../dispatcher/dispatcher.js');

let _playing = false;

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

AudioApiPlayerStore.__onDispatch = payload => {
  switch(payload.actionType) {
    case AudioApiPlayerConstants.PLAY_PAUSE:
      playPause();
      AudioApiPlayerStore.__emitChange();
  }
};

module.exports = AudioApiPlayerStore;
