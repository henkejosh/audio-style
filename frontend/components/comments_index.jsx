const React = require('react');
const CommentForm = require('./comment_form.jsx');
const CommentStore = require('../stores/comment_store.js');
const CommentActions = require('../actions/comment_actions.js');
const CommentIndexItem = require('./comment_index_item.jsx');

const CommentsIndex = React.createClass({
  getInitialState: function() {
    return { comments: CommentStore.all(parseInt(this.props.songID, 10)) };
  },

  componentDidMount: function() {
    this.commentListener = CommentStore.addListener(this._onChange);
    this.fetchComments();
  },

  _onChange: function() {
    this.setState({ comments: CommentStore.all(parseInt(this.props.songID, 10)) });
    // debugger;
  },

  fetchComments: function() {
    CommentActions.fetchSongComments(parseInt(this.props.songID, 10));
  },

  componentWillUnmount: function() {
    this.commentListener.remove();
  },

  render: function() {
    // debugger;
    return (
      <div>
        Howdy
        {Object.keys(this.state.comments).map( commentID => {
          return (
            <CommentIndexItem key={commentID}
              comment={this.state.comments[commentID] } />
          );
        })}
        <CommentForm songID={parseInt(this.props.songID, 10)} />
      </div>
    );
  }
});

module.exports = CommentsIndex;
