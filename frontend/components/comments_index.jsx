const React = require('react');
const CommentForm = require('./comment_form.jsx');
const CommentStore = require('../stores/comment_store.js');
const CommentActions = require('../actions/comment_actions.js');
const CommentIndexItem = require('./comment_index_item.jsx');

const CommentsIndex = React.createClass({
  setOrderDisplay: function(commentOrder) {
    let style;
    commentOrder = parseInt(commentOrder, 10);
    if (commentOrder < this.props.order) {
      return "passed";
    } else if(commentOrder === this.props.order) {
      return "current";
    } else {
      return "normal";
    }
  },

  render: function() {
    return (
      <div className="comments-index">

        {Object.keys(this.props.comments).map( commentOrder => {
          let order;
          if(this.props.order) {
            order = this.setOrderDisplay(commentOrder);
          }
          return (
            <CommentIndexItem key={this.props.comments[commentOrder].id}
              comment={this.props.comments[commentOrder]}
              styleType={order} />
          );
        })}
      </div>
    );
  }
});

module.exports = CommentsIndex;
