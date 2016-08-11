"use strict";

const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');
const SpotifySongConstants = require('../constants/spotify_song_constants.js');

let _songs = {};

const SpotifySongStore = new Store(Dispatcher);

const _receiveSongs = function(songs) {
  if (Object.keys(songs).length === 0) {return {};}

  songs.songsArr.forEach( song => {
    _songs[song.id] = song;
  });
};

const _receiveSpotifySongs = function(songs) {
  if (Object.keys(songs).length === 0) {return {};}


  songs.tracks.items.forEach( song => {
    _songs[song.id] = song;
  });
};

SpotifySongStore.all = function() {
  return Object.assign({}, _songs);
};

SpotifySongStore.getSong = function(songID) {
  return Object.assign({}, _songs[songID]);
};

SpotifySongStore.__onDispatch = payload => {
  switch(payload.actionType) {
    case SpotifySongConstants.GET_SONGS:
      _receiveSongs(payload.songs);
      SpotifySongStore.__emitChange();
      break;
    case SpotifySongConstants.GET_SONG:
      SpotifySongStore.getSong(payload.songID);
      SpotifySongStore.__emitChange();
      break;
    case SpotifySongConstants.GET_SPOTIFY_SONGS:
      _receiveSpotifySongs(payload.songs);
      SpotifySongStore.__emitChange();
      break;
  }
};

module.exports = SpotifySongStore;
