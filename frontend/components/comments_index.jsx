const React = require('react');
const CommentForm = require('./comment_form.jsx');
const CommentStore = require('../stores/comment_store.js');
const CommentActions = require('../actions/comment_actions.js');
const CommentIndexItem = require('./comment_index_item.jsx');

const CommentsIndex = React.createClass({

  render: function() {
    return (
      <div className="comments-index">

        {Object.keys(this.props.comments).map( commentOrder => {
          return (
            <CommentIndexItem key={this.props.comments[commentOrder].id}
              comment={this.props.comments[commentOrder] } />
          );
        })}
      </div>
    );
  }
});

module.exports = CommentsIndex;
