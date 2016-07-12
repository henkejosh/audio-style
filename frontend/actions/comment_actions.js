const Dispatcher = require('../dispatcher/dispatcher.js');
const CommentApiUtil = require('../util/comment_api_util.js');
const CommentConstants = require('../constants/comment_constants.js');

const CommentActions = {
  fetchSongComments: function(songID) {
    CommentApiUtil.fetchSongComments(songID, this.receiveSongComments);
  },

  receiveSongComments: function(comments) {
    Dispatcher.dispatch({
      actionType: CommentConstants.FETCH_COMMENTS,
      comments: comments
    });
  },

  createSongComment: function(songID, comment) {
    CommentApiUtil.createSongComment(songID, comment, this.receiveSongComment);
  },

  receiveSongComment: function(comment) {
    Dispatcher.dispatch({
      actionType: CommentConstants.ADD_NEW_COMMENT,
      comment: comment
    });
  },

  resetComments: function() {
    Dispatcher.dispatch({
      actionType: CommentConstants.RESET_COMMENTS
    });
  }
};

module.exports = CommentActions;
