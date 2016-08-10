const React = require('react');
const CommentForm = require('./comment_form.jsx');
const CommentStore = require('../stores/comment_store.js');
const CommentActions = require('../actions/comment_actions.js');
const CommentIndexItem = require('./comment_index_item.jsx');
const CommentsIndex = require('./comments_index.jsx');
const CurrentComment = require('./current_comment.jsx');

const CommentBar = React.createClass({
  // timePlayed={this.props.timePlayed}/>
  render: function() {
    return (
      <div className="new-comment-bar">
        <CommentForm songID={this.props.songID}
          absTimeIntoSong={this.props.absTimeIntoSong} />

        <div className="existing-comments">

          <CommentsIndex order={this.props.order}
            songID={this.props.songID}
            comments={this.props.comments}/>
        </div>

      </div>
    );
  }
});

module.exports = CommentBar;
