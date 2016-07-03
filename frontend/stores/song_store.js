"use strict";

const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');
const SongConstants = require('../constants/song_constants.js');

let _songs = {};

const SongStore = new Store(Dispatcher);

const _receiveSongs = function(songs) {
  songs.songsArr.forEach( song => {
    _songs[song.id] = song;
  });
};

SongStore.all = function() {
  return Object.assign({}, _songs);
};

SongStore.__onDispatch = payload => {
  switch(payload.actionType) {
    case SongConstants.GET_SONGS:
      _receiveSongs(payload.songs);
      SongStore.__emitChange();
      break;
  }
};

module.exports = SongStore;
