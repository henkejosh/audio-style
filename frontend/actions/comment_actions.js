const Dispatcher = require('../dispatcher/dispatcher.js');
const CommentApiUtil = require('../util/comment_api_util.js');
const CommentConstants = require('../constants/comment_constants.js');

const CommentActions = {
  fetchSongComments: function(songID) {
    CommentApiUtil.fetchSongComments(songID, this.receiveSongComments);
  },

  receiveSongComments: function(songID, comments) {
    Dispatcher.dispatch({
      actionType: CommentConstants.FETCH_COMMENTS,
      comments: comments,
      songID: songID
    });
  },

  createSongComment: function(songID, comment) {
    CommentApiUtil.createSongComment(songID, comment, this.receiveSongComment);
  },

  receiveSongComment: function(songID, comment) {
    Dispatcher.dispatch({
      actionType: CommentConstants.ADD_NEW_COMMENT,
      comment: comment,
      songID: songID
    });
  }
};

module.exports = CommentActions;
