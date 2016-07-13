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
  },

  fetchComments: function() {
    CommentActions.fetchSongComments(parseInt(this.props.songID, 10));
  },

  componentWillUnmount: function() {
    this.commentListener.remove();
  },

  render: function() {
    return (
      <div>

        <CommentForm songID={parseInt(this.props.songID, 10)} />

        {Object.keys(this.state.comments).reverse().map( commentID => {
          return (
            <CommentIndexItem key={commentID}
              comment={this.state.comments[commentID] } />
          );
        })}
      </div>
    );
  }
});

module.exports = CommentsIndex;
