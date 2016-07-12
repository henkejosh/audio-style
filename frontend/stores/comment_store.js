"use strict";

const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');
const CommentConstants = require('../constants/comment_constants.js');

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

CommentStore.all = function(songID) {
  if(songID === _songID) {
    return Object.assign({}, _comments);
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
  }
};

module.exports = CommentStore;
