"use strict";

const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');
const CommentConstants = require('../constants/comment_constants.js');

let _comments = {};
let _songID = null;

const CommentStore = new Store(Dispatcher);

const _receiveComments = function(comments) {
  _songID = comments.songID;
  comments.commentsArr.forEach( comment => {
    _comments[comment.id] = comment;
  });
};

CommentStore.all = function(songID) {
  if(songID === _songID) {
    return Object.assign({}, _comments);
  }
};

CommentStore.__onDispatch = payload => {
  switch(payload.actionType) {
    case CommentConstants.FETCH_COMMENTS:
        _receiveComments(payload.comments);
        CommentStore.__emitChange();
      break;
  }
};

module.exports = CommentStore;
