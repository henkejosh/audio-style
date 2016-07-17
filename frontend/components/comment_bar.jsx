const React = require('react');
const CommentForm = require('./comment_form.jsx');
const CommentStore = require('../stores/comment_store.js');
const CommentActions = require('../actions/comment_actions.js');
const CommentIndexItem = require('./comment_index_item.jsx');
const CommentsIndex = require('./comments_index.jsx');
const CurrentComment = require('./current_comment.jsx');

const CommentBar = React.createClass({
  // getInitialState: function() {
  //   const comments = this.props.comments || {};
  //   return { comments: comments };
  // },

  // componentDidMount: function() {
  //   // this.setCurrentComment();
  // },

  componentWillUnmount: function() {
    this.commentListener.remove();
  },

  // componentWillReceiveProps: function() {
  //   // this.setCurrentComment();
  // },

  calcCommentDisplayDuration: function() {
    this.commentDuration = Math.floor(this.props.songLength / this.state.comments.length);

  },

  // setCurrentComment: function() {
  //   const comments = this.props.comments;
  //   if(this.props.time > 0) {
  //     Object.keys(comments).forEach( orderID => {
  //       if(comments[orderID].time_into_song / 100 === this.props.time) {
  //         this.setState({ currentComment: comments[orderID]});
  //       }
  //     });
  //   } else if(this.props.time === 0) {
  //     this.setState({ currentComment: comments[0] });
  //   }
  // },

  render: function() {
    // let currComm;
    // if(this.props.time) {
    //   currComm = <CurrentComment comment={this.state.currentComment} />;
    // }
    // {currComm}

    // <div className="comment-bar">
    return (
      <div className="new-comment-bar">
        <CommentForm songID={this.props.songID} time={this.props.time}
          actualTime={this.props.actualTime}/>

        <div className="existing-comments">

          <CommentsIndex songID={this.props.songID}
            comments={this.props.comments}/>
        </div>

      </div>
    );
  }
});

module.exports = CommentBar;
