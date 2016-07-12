const React = require('react');
const CommentForm = require('./comment_form.jsx');

const CommentsIndex = React.createClass({
  render: function() {
    return (
      <div>
        Howdy
        <CommentForm />
      </div>
    );
  }
});

module.exports = CommentsIndex;
