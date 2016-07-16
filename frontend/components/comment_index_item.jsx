const React = require('react');

const CommentIndexItem = React.createClass({


  render: function() {
    return (
      <ul className="ComIndexItem">
        <li>Body: {this.props.comment.body}</li>
        <li>ID: {this.props.comment.id}</li>
        <li>song_ID: {this.props.comment.song_title}</li>
        <li>user_ID: {this.props.comment.user_email}</li>
      </ul>
    );
  },
});

module.exports = CommentIndexItem;
