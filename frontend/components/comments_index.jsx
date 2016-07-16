const React = require('react');
const CommentForm = require('./comment_form.jsx');
const CommentStore = require('../stores/comment_store.js');
const CommentActions = require('../actions/comment_actions.js');
const CommentIndexItem = require('./comment_index_item.jsx');

const CommentsIndex = React.createClass({

  // <CommentForm songID={parseInt(this.props.songID, 10)} />
  render: function() {
    return (
      <div className="comments-index">


        {Object.keys(this.props.comments).reverse().map( commentID => {
          return (
            <CommentIndexItem key={commentID}
              comment={this.props.comments[commentID] } />
          );
        })}
      </div>
    );
  }
});

module.exports = CommentsIndex;
