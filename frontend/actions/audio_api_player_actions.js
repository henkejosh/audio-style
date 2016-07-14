const AudioApiPlayerConstants = require('../constants/audio_api_player_constants.js');
const Dispatcher = require('../dispatcher/dispatcher.js');

const AudioApiPlayerActions = {
  playPause: function() {
    Dispatcher.dispatch({
      actionType: AudioApiPlayerConstants.PLAY_PAUSE
    });
  },

  resetPlaying: function() {
    Dispatcher.dispatch({
      actionType: AudioApiPlayerConstants.RESET_PLAYING
    });
  }
};

module.exports = AudioApiPlayerActions;
