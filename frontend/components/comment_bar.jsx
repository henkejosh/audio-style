const React = require('react');
const CommentForm = require('./comment_form.jsx');
const CommentStore = require('../stores/comment_store.js');
const CommentActions = require('../actions/comment_actions.js');
const CommentIndexItem = require('./comment_index_item.jsx');
const CommentsIndex = require('./comments_index.jsx');
const CurrentComment = require('./current_comment.jsx');

const CommentBar = React.createClass({
  getInitialState: function() {
    const comments = this.props.comments || {};
    return { comments: comments };
  },

  componentDidMount: function() {
    // this.commentListener = CommentStore.addListener(this._onChange);
    // this.fetchComments();
    this.setCurrentComment();
  },

  fetchComments: function() {
    CommentActions.fetchSongComments(parseInt(this.props.songID, 10));
  },

  componentWillUnmount: function() {
    this.commentListener.remove();
  },

  setCurrentComment: function() {
    const comments = this.props.comments;
    if(this.props.time > 0) {
      Object.keys(comments).forEach( orderID => {
        if(comments[orderID].time_into_song === this.props.time) {
          this.setState({ currentComment: comments[orderID]});
        }
      });
    } else if(this.props.time === 0) {
      this.setState({ currentComment: comments[0] });
    }
  },

  render: function() {
    let currComm;
    if(this.props.time) {
      currComm = <CurrentComment comment={this.state.currentComment} />;
    }

    return (
      <div className="comment-bar">

        <CommentForm songID={this.props.songID} time={this.props.time}/>

        <div className="existing-comments">
          {currComm}

          <CommentsIndex songID={this.props.songID}
            comments={this.props.comments}/>
        </div>

      </div>
    );
  }
});

module.exports = CommentBar;
