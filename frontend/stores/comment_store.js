"use strict";

const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');
const CommentConstants = require('../constants/comment_constants.js');
const CurrentSongConstants = require('../constants/current_song_constants.js');
const SessionConstants = require('../constants/session_constants.js');

let _comments = {};
let _songID = null;

const CommentStore = new Store(Dispatcher);

const _receiveComments = function(comments) {
  _comments = {};
  _songID = comments.songID;
  comments.commentsArr.forEach( comment => {
    _comments[comment.id] = comment;
  });
};

const _receiveCurrentSong = function(currentSong) {
  _comments = {};
  _songID = currentSong.id;
  currentSong.comments.forEach( comment => {
    _comments[comment.id] = comment;
  });
};

const _resetComments = function() {
  _comments = {};
  _songID = null;
};

const _receiveComment = function(comment) {
  _songID = comment.comment.song_id;
  _comments[comment.comment.id] = comment.comment;
};

const _firstSongComment = function(comment) {
  _comments = {};
  _songID = comment.comment.song_id;
  _comments[comment.comment.id] = comment.comment;
};
//
const _sortComments = function() {
  const ids = Object.keys(_comments);

  let sortedIDs = ids.sort(function(commA, commB) {
    return _comments[commA].time_into_song - _comments[commB].time_into_song;
  });

  let sortedComments = {};
  sortedIDs.forEach( (id, index) => {
    // sortedComments[index] = { id: _comments[id] };
    sortedComments[index] = _comments[id];
  });

  // _comments = sortedComments;
  return sortedComments;
};

// const _sortComments = function() {
//   const ids = Object.keys(_comments);
//
//   let sortedIDs = ids.sort(function(commA, commB) {
//     return _comments[commA].time_into_song - _comments[commB].time_into_song;
//   });
//
//   let sortedComments = {};
//   sortedIDs.forEach( (id, index) => {
//     let timeStart = _comments[id].time_into_song;
//     sortedComments[timeStart] = _comments[id];
//   });
//
//   return sortedComments;
// };

CommentStore.all = function(songID) {
  if(songID === _songID) {
    return _sortComments();
  } else {
    return {};
  }
};

CommentStore.__onDispatch = payload => {
  switch(payload.actionType) {
    case CommentConstants.FETCH_COMMENTS:
        _receiveComments(payload.comments);
        CommentStore.__emitChange();
      break;

    case CommentConstants.ADD_NEW_COMMENT:
      if(payload.comment.comment.song_id === _songID) {
        _receiveComment(payload.comment);
      } else {
        _firstSongComment(payload.comment);
      }
      CommentStore.__emitChange();
      break;

    case CommentConstants.RESET_COMMENTS:
      _resetComments();
      break;

    case CurrentSongConstants.RECEIVE_CURRENT_SONG:
      _receiveCurrentSong(payload.currentSong);
      CommentStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _resetComments();
      CommentStore.__emitChange();
      break;
  }
};

module.exports = CommentStore;
