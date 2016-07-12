const React = require('react');
const CommentForm = require('./comment_form.jsx');

const CommentsIndex = React.createClass({
  render: function() {
    return (
      <div>
        Howdy
        <CommentForm songID={this.props.songID} />
      </div>
    );
  }
});

module.exports = CommentsIndex;
